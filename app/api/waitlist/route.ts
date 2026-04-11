import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const FILE = "/tmp/waitlist.json";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const startup_name =
      typeof body.startup_name === "string" ? body.startup_name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const tier = typeof body.tier === "string" ? body.tier.trim() : "Basic / Pro";

    if (!name || !startup_name || !email) {
      return NextResponse.json(
        { error: "name, startup_name, and email are required" },
        { status: 400 }
      );
    }

    let entries: unknown[] = [];
    try {
      const existing = await fs.readFile(FILE, "utf-8");
      entries = JSON.parse(existing) as unknown[];
      if (!Array.isArray(entries)) entries = [];
    } catch {
      entries = [];
    }

    entries.push({
      name,
      startup_name,
      email,
      tier,
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(FILE, JSON.stringify(entries, null, 2), "utf-8");

    const apiKey = process.env.RESEND_API_KEY;
    if (apiKey) {
      try {
        const resend = new Resend(apiKey);
        await resend.emails.send({
          from: "metatron <kevin@metatron.id>",
          to: email,
          subject: `You're on the waitlist — metatron Founder ${tier}`,
          html: `
        <div style="background:#0a0a0f;color:#e8e8ed;font-family:'DM Sans',Arial,sans-serif;padding:40px;max-width:560px;margin:0 auto;border-radius:12px;">
          <img src="https://metatron.id/metatron-logo.png" alt="metatron" height="42" style="margin-bottom:32px;" />
          <h1 style="font-size:22px;font-weight:600;margin-bottom:16px;">You're on the list, ${name}.</h1>
          <p style="color:#8888a0;font-size:15px;line-height:1.6;margin-bottom:16px;">
            Thanks for your interest in <strong style="color:#e8e8ed;">metatron Founder ${tier}</strong>. We've received your request for <strong style="color:#e8e8ed;">${startup_name}</strong>.
          </p>
          <p style="color:#8888a0;font-size:15px;line-height:1.6;margin-bottom:32px;">
            We're onboarding founders in batches. You'll hear from us soon with next steps — keep an eye on this inbox.
          </p>
          <p style="color:#8888a0;font-size:15px;line-height:1.6;">
            In the meantime, you can explore the platform or chat with Kevin on
            <a href="https://t.me/metatron_id_bot" style="color:#6c5ce7;text-decoration:none;">Telegram</a>.
          </p>
          <hr style="border:none;border-top:1px solid rgba(255,255,255,0.06);margin:32px 0;" />
          <p style="color:#8888a0;font-size:13px;">metatron — Eliminating information asymmetry between founders and capital, globally.</p>
        </div>
      `,
        });

        await resend.emails.send({
          from: "metatron <kevin@metatron.id>",
          to: "contact@metatron.id",
          subject: `New waitlist signup — ${tier}: ${startup_name}`,
          html: `
        <div style="font-family:Arial,sans-serif;padding:24px;max-width:480px;">
          <h2>New waitlist signup</h2>
          <table style="border-collapse:collapse;width:100%;">
            <tr><td style="padding:8px 0;color:#666;">Tier</td><td style="padding:8px 0;font-weight:600;">${tier}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Name</td><td style="padding:8px 0;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Startup</td><td style="padding:8px 0;">${startup_name}</td></tr>
            <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#666;">Time</td><td style="padding:8px 0;">${new Date().toUTCString()}</td></tr>
          </table>
        </div>
      `,
        });
      } catch (emailErr) {
        console.error("Resend email error:", emailErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
