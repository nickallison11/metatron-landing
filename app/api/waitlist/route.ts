import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://platform.metatron.id";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const upstream = await fetch(`${BACKEND_URL}/waitlist`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...body,
        user_agent: req.headers.get("user-agent") ?? undefined,
        referrer: req.headers.get("referer") ?? undefined,
      }),
    });
    const text = await upstream.text();
    return new NextResponse(text, {
      status: upstream.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Waitlist forward error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
