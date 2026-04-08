"use client";

import Image from "next/image";
import { useState } from "react";

const PLATFORM = "https://platform.metatron.id";
const SIGNUP_FOUNDER = `${PLATFORM}/auth/signup?role=founder`;
const TELEGRAM_KEVIN = "https://t.me/Kevinmetatron_bot";
const METATRON_DAO = "https://metatrondao.io";
const LINKEDIN_URL = "https://www.linkedin.com/company/metatrondao/";
const DISCORD_URL = "https://discord.gg/metatron";
const X_URL = "https://x.com/metatrondao";
export default function Home() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistStartup, setWaitlistStartup] = useState("");
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistStatus, setWaitlistStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    setWaitlistStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: waitlistName,
          startup_name: waitlistStartup,
          email: waitlistEmail,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setWaitlistStatus("success");
      setWaitlistName("");
      setWaitlistStartup("");
      setWaitlistEmail("");
    } catch {
      setWaitlistStatus("error");
    }
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#" className="shrink-0">
            <Image
              src="/metatron-logo.png"
              alt="metatron"
              width={180}
              height={42}
              className="h-[42px] w-auto"
              unoptimized
            />
          </a>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-muted)] sm:gap-6">
            <a
              href="#kevin"
              className="transition hover:text-[var(--text)]"
            >
              Kevin
            </a>
            <a
              href="#pricing"
              className="transition hover:text-[var(--text)]"
            >
              Pricing
            </a>
            <a
              href="#token"
              className="transition hover:text-[var(--text)]"
            >
              Token
            </a>
            <a
              href="#ecosystem"
              className="transition hover:text-[var(--text)]"
            >
              Ecosystem
            </a>
            <a
              href={PLATFORM}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
            >
              Launch app
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pb-24 pt-28 text-center sm:px-6">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-90"
            style={{
              background:
                "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(108,92,231,0.18), transparent 55%)",
            }}
          />
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-card)] px-4 py-2 text-sm text-[var(--text-muted)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent)]" />
            </span>
            AI Agent Network — Now live on Solana
          </div>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[var(--text)] sm:text-5xl md:text-6xl">
            The intelligence layer connecting founders and investors globally
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)] sm:text-xl">
            metatron is an AI agent network for founder-investor matchmaking in
            emerging markets. We are democratising access to startup investment
            across Africa and other underserved regions.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={SIGNUP_FOUNDER}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[200px] justify-center rounded-lg bg-[var(--accent)] px-8 py-3 font-medium text-white transition hover:bg-[var(--accent-hover)]"
            >
              Get started free
            </a>
            <a
              href={TELEGRAM_KEVIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-w-[200px] justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-8 py-3 font-medium text-[var(--text)] transition hover:border-[var(--accent)]/40"
            >
              Talk to Kevin on Telegram
            </a>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Matching",
                body: "Kevin, our AI agent, learns what founders need and matches them with the right investors — no cold emails, no gatekeepers.",
              },
              {
                icon: "🌍",
                title: "Emerging Markets First",
                body: "Built for Africa, Latin America, and Asia. The markets with the highest growth potential and the least access to capital.",
              },
              {
                icon: "🔗",
                title: "On-Chain Identity",
                body: "Every member gets a verifiable on-chain identity. Your track record, reputation, and connections — owned by you, not a platform.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6"
              >
                <div className="text-2xl">{card.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--text)]">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Kevin */}
        <section
          id="kevin"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
        >
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className="rounded-[var(--radius)] border border-[var(--border)] bg-[#0d0d14] p-5 font-mono text-sm leading-relaxed shadow-lg"
              style={{ fontFamily: "var(--font-jetbrains-mono), monospace" }}
            >
              <div className="mb-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <p className="text-[var(--text)]">
                <span className="text-[var(--accent-teal)]">you →</span>{" "}
                I&apos;m building a fintech in Lagos and looking for pre-seed
                investors who understand African markets.
              </p>
              <p className="mt-4 text-[var(--text)]">
                <span className="text-[var(--accent)]">kevin →</span> I&apos;ve
                found 3 investors with active Africa fintech mandates. Two have
                invested in Lagos-based startups before. I&apos;ll set up warm
                intros — would you like to review their profiles first?
              </p>
              <p className="mt-4 text-[var(--text)]">
                <span className="text-[var(--accent-teal)]">you →</span> Yes,
                show me.
              </p>
              <p className="mt-4 text-[var(--text)]">
                <span className="text-[var(--accent)]">kevin →</span> Sending
                profiles now. I&apos;ll also notify them you&apos;re interested
                so they can review your startup submission.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
                Meet Kevin
              </h2>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                Kevin is metatron&apos;s AI agent. He lives on Telegram and the
                web, learns about you, and makes introductions between founders
                and investors that actually make sense.
              </p>
              <p className="mt-4 text-[var(--text-muted)] leading-relaxed">
                No pitch decks lost in inboxes. No awkward networking events.
                Just intelligent, contextual matchmaking powered by your real
                data.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={TELEGRAM_KEVIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
                >
                  💬 Telegram
                </a>
                <a
                  href={PLATFORM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] bg-[var(--bg-card)] px-5 py-2.5 text-sm font-medium text-[var(--text)] transition hover:border-[var(--accent)]/40"
                >
                  🌐 Platform
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Start free. Upgrade when you&apos;re ready.
            </p>
            <div className="mt-8 inline-flex rounded-lg border border-[var(--border)] bg-[var(--bg-card)] p-1">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-md px-5 py-2 text-sm font-medium transition ${
                  billing === "monthly"
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`rounded-md px-5 py-2 text-sm font-medium transition ${
                  billing === "annual"
                    ? "bg-[var(--accent)] text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {/* Free */}
            <div className="flex flex-col rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-6">
              <h3 className="text-lg font-semibold text-[var(--text)]">Free</h3>
              <p className="mt-4 text-3xl font-bold text-[var(--text)]">$0</p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
                <li>· Kevin AI chat (20 messages/day)</li>
                <li>· Kevin on Telegram</li>
                <li>· Kevin on WhatsApp</li>
                <li>· Founder profile</li>
                <li>· Cloud deck link</li>
                <li>· 1 investor match/week</li>
              </ul>
              <a
                href={SIGNUP_FOUNDER}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex justify-center rounded-lg bg-[var(--accent)] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)]"
              >
                Get started free
              </a>
            </div>

            {/* Founder Basic */}
            <div className="relative flex flex-col rounded-[var(--radius)] border-2 border-[var(--accent)] bg-[var(--bg-card)] p-6 shadow-[0_0_40px_rgba(108,92,231,0.15)]">
              <span className="absolute right-4 top-4 rounded-full border border-[var(--border)] bg-[#1a1a24] px-2.5 py-0.5 text-xs text-[var(--text-muted)]">
                Coming soon
              </span>
              <h3 className="text-lg font-semibold text-[var(--text)]">
                Founder Basic
              </h3>
              {billing === "monthly" ? (
                <p className="mt-4 text-3xl font-bold text-[var(--text)]">
                  $19.99
                  <span className="text-base font-normal text-[var(--text-muted)]">
                    {" "}
                    /mo
                  </span>
                </p>
              ) : (
                <p className="mt-4 text-3xl font-bold text-[var(--text)]">
                  $199
                  <span className="text-base font-normal text-[var(--text-muted)]">
                    {" "}
                    /yr
                  </span>
                </p>
              )}
              <p className="mt-1 text-xs text-[var(--text-muted)]">
                {billing === "monthly" ? "per month" : "per year (est.)"}
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
                <li>· Everything in Free</li>
                <li>· Kevin AI chat (200 messages/day)</li>
                <li>· Call recording + AI analysis</li>
                <li>· 10 investor matches/week</li>
                <li>· Permanent IPFS deck storage</li>
                <li>· Kevin extracts pitch data from deck</li>
              </ul>
              <button
                type="button"
                disabled
                className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-[var(--border)] bg-[#1a1a24] px-4 py-2.5 text-sm font-medium text-[var(--text-muted)]"
              >
                Coming soon
              </button>
            </div>

            {/* Founder Pro */}
            <div className="relative flex flex-col rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)]/80 p-6 opacity-75">
              <span className="absolute right-4 top-4 rounded-full border border-[var(--border)] bg-[#1a1a24] px-2.5 py-0.5 text-xs text-[var(--text-muted)]">
                Coming soon
              </span>
              <h3 className="text-lg font-semibold text-[var(--text)]">
                Founder Pro
              </h3>
              <p className="mt-4 text-sm text-[var(--text-muted)]">
                Pricing at launch
              </p>
              <ul className="mt-6 flex-1 space-y-2 text-sm text-[var(--text-muted)]">
                <li>· Everything in Basic</li>
                <li>· Unlimited Kevin messages</li>
                <li>· Unlimited investor matches</li>
                <li>· Private encrypted IPFS deck</li>
                <li>· Angel Score</li>
                <li>· Virtual Data Room (VDR)</li>
                <li>· Custom AI backend</li>
                <li>· Custom subdomain (startup.metatron.id)</li>
                <li>· Embeddable widget</li>
              </ul>
              <button
                type="button"
                disabled
                className="mt-8 inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-[var(--border)] bg-[#1a1a24] px-4 py-2.5 text-sm font-medium text-[var(--text-muted)]"
              >
                Coming soon
              </button>
            </div>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[var(--text-muted)]">
            Features and pricing for Basic and Pro plans may change at time of
            launch.
          </p>

          {/* Waitlist */}
          <div className="mx-auto mt-16 max-w-lg rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-8 text-center">
            <h3 className="text-xl font-semibold text-[var(--text)]">
              Be first to access Founder Pro
            </h3>
            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Founder Pro is coming soon. Join the waitlist and we&apos;ll notify
              you when it launches.
            </p>
            {waitlistStatus === "success" ? (
              <p className="mt-6 text-[var(--accent-teal)]">
                You&apos;re on the list! We&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="mt-6 space-y-4">
                <input
                  type="text"
                  required
                  placeholder="Full name"
                  value={waitlistName}
                  onChange={(e) => setWaitlistName(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border)] bg-[#0d0d14] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                />
                <input
                  type="text"
                  required
                  placeholder="Startup name"
                  value={waitlistStartup}
                  onChange={(e) => setWaitlistStartup(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border)] bg-[#0d0d14] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  className="w-full rounded-lg border border-[var(--border)] bg-[#0d0d14] px-4 py-3 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={waitlistStatus === "loading"}
                  className="w-full rounded-lg bg-[var(--accent)] px-4 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] disabled:opacity-60"
                >
                  {waitlistStatus === "loading"
                    ? "Joining…"
                    : "Join waitlist →"}
                </button>
                {waitlistStatus === "error" && (
                  <p className="text-sm text-red-400">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            )}
          </div>
        </section>

        {/* MTN Token */}
        <section
          id="token"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
        >
          <div className="mx-auto max-w-[600px] rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] px-6 py-10 text-center sm:px-8">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              MTN Token
            </h2>
            <p className="mt-3 text-[var(--text-muted)] leading-relaxed">
              The utility token powering access, incentives, and governance
              across the metatron network. Minted on Solana.
            </p>
            <span className="mt-6 inline-block rounded-full border border-[var(--border)] bg-[#1a1a24] px-3 py-1 text-xs text-[var(--text-muted)]">
              Coming soon
            </span>
            <p className="mt-5 text-sm leading-relaxed text-[var(--text-muted)]">
              MTN token functionality including staking, governance, and access
              tiers is currently in development.
            </p>
            <a
              href={METATRON_DAO}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-1 font-medium text-[var(--accent)] transition hover:text-[var(--accent-hover)]"
            >
              Learn more at metatrondao.io →
            </a>
          </div>
        </section>

        {/* Ecosystem */}
        <section
          id="ecosystem"
          className="mx-auto max-w-6xl scroll-mt-24 px-4 py-20 sm:px-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
              Ecosystem
            </h2>
            <p className="mt-3 text-[var(--text-muted)]">
              Where metatron lives.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: "🚀",
                label: "Platform",
                href: PLATFORM,
              },
              {
                icon: "💬",
                label: "Telegram",
                href: TELEGRAM_KEVIN,
              },
              {
                icon: "🎮",
                label: "Discord",
                href: "https://discord.gg/metatron",
              },
              {
                icon: "✖",
                label: "X / Twitter",
                href: "https://x.com/metatrondao",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-[var(--radius)] border border-[var(--border)] bg-[var(--bg-card)] p-5 transition hover:border-[var(--accent)]/40"
              >
                {item.label === "Platform" ? (
                  // eslint-disable-next-line @next/next/no-img-element -- explicit <img> for favicon asset per design
                  <img
                    src="/favicon-icon.png"
                    alt=""
                    width={40}
                    height={40}
                    className="h-10 w-10 shrink-0 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{item.icon}</span>
                )}
                <span className="font-medium text-[var(--text)]">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--border)] py-12">
        <div className="mx-auto max-w-6xl px-4 text-center text-sm text-[var(--text-muted)] sm:px-6">
          <p>
            © 2026 metatron (Pty) Ltd · Cape Town, South Africa
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href="/terms" className="hover:text-[var(--text)]">
              Terms
            </a>
            <span className="text-[var(--border)]">·</span>
            <a href="/privacy" className="hover:text-[var(--text)]">
              Privacy
            </a>
            <span className="text-[var(--border)]">·</span>
            <span className="inline-flex items-center gap-3">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  aria-hidden
                >
                  <path
                    fill="#0A66C2"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
              <a
                href={TELEGRAM_KEVIN}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  aria-hidden
                >
                  <path
                    fill="#26A5E4"
                    d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
                  />
                </svg>
              </a>
              <a
                href={X_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="inline-flex h-5 w-5 items-center justify-center rounded-sm bg-white opacity-90 transition-opacity hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={14}
                  height={14}
                  aria-hidden
                >
                  <path
                    fill="#000000"
                    d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                  />
                </svg>
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="opacity-90 transition-opacity hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  aria-hidden
                >
                  <path
                    fill="#5865F2"
                    d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                  />
                </svg>
              </a>
            </span>
            <span className="text-[var(--border)]">·</span>
            <a
              href="mailto:contact@metatron.id"
              className="hover:text-[var(--text)]"
            >
              contact@metatron.id
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
