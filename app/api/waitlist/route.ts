import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

const FILE = "/tmp/waitlist.json";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const startup_name =
      typeof body.startup_name === "string" ? body.startup_name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";

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
      timestamp: new Date().toISOString(),
    });

    await fs.writeFile(FILE, JSON.stringify(entries, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
