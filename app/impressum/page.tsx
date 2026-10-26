import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — metatron",
  description: "Impressum and legal notice for metatron.id (metatron AI Labs, Austria).",
};

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 sm:grid-cols-[220px_1fr] sm:gap-6">
      <dt className="font-medium text-[var(--text)]">{label}</dt>
      <dd className="text-[var(--text-muted)]">{children}</dd>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed]">
      <header className="border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/metatron-logo.png"
              alt="metatron"
              width={37}
              height={42}
              className="h-[42px] w-auto"
              unoptimized
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--text-muted)] transition hover:text-[var(--text)]"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Impressum</h1>
        <p className="mt-2 text-[var(--text-muted)]">
          Offenlegung gemäß § 5 ECG, § 14 UGB und § 25 MedienG · Legal notice
        </p>

        <dl className="mt-10 space-y-5">
          <Row label="Medieninhaber und Diensteanbieter">
            Andrew Nicholas Allison
            <br />
            Einzelunternehmer, handelnd unter der Bezeichnung „metatron AI Labs“
          </Row>
          <Row label="Anschrift">
            Obermayrstraße 5/4
            <br />
            4240 Freistadt
            <br />
            Österreich
          </Row>
          <Row label="Kontakt">
            E-Mail:{" "}
            <a href="mailto:contact@metatron.id" className="text-[var(--text)] hover:underline">
              contact@metatron.id
            </a>
          </Row>
          <Row label="Unternehmensgegenstand">
            Entwicklung und Betrieb der Software-Plattform metatron mit dem KI-Assistenten
            Kevin, der Gründerinnen und Gründer mit Investorinnen und Investoren vernetzt;
            Vertrieb von Software-Abonnements (Software as a Service).
          </Row>
          <Row label="Grundlegende Richtung">
            Information über die Plattform metatron, den KI-Assistenten Kevin und die
            angebotenen Abonnements.
          </Row>
        </dl>

        <section className="mt-14">
          <h2 className="text-xl font-semibold text-[var(--text)]">Legal notice (English)</h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            metatron.id is operated by Andrew Nicholas Allison, a sole trader in Austria
            trading as metatron AI Labs, Obermayrstraße 5/4, 4240 Freistadt, Austria.
            Contact: contact@metatron.id. Business: developing and operating the metatron software
            platform and its AI assistant Kevin, and selling software subscriptions.
          </p>
        </section>
      </article>
    </div>
  );
}
