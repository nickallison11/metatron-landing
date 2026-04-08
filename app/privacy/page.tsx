import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy & Cookie Policy — metatron",
  description:
    "How metatron uses cookies and handles privacy on https://metatron.id.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed]">
      <header className="border-b border-[var(--border)] bg-[rgba(10,10,15,0.85)] backdrop-blur-md">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="shrink-0">
            <Image
              src="/metatron-logo.png"
              alt="metatron"
              width={180}
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
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Privacy &amp; Cookie Policy
        </h1>

        <p className="mt-8 leading-relaxed text-[var(--text-muted)]">
          This policy describes how we use cookies and similar technologies on{" "}
          <a
            href="https://metatron.id"
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            https://metatron.id
          </a>{" "}
          and how you can control them. For broader terms governing use of the
          site, see our{" "}
          <Link
            href="/terms"
            className="text-[var(--accent)] underline-offset-2 hover:underline"
          >
            Terms and Conditions
          </Link>
          .
        </p>

        <section className="mt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Cookie Policy
          </h2>

          <h3 className="mt-8 text-lg font-semibold text-[var(--text)]">
            Use of cookies
          </h3>
          <p className="mt-3 leading-relaxed text-[var(--text-muted)]">
            Cookies are small files that a site or its service provider transfers
            to your computer&apos;s hard drive through your web browser (if you
            allow) that enables the sites or service providers&apos; systems to
            recognize your browser and capture and remember certain information.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            We use cookies to improve how our website performs and ensure that it
            functions correctly, grants access to restricted content, and also to
            understand and save your preferences for future visits.
          </p>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            Cookies which are set by us can be restricted or blocked through your
            browser settings. Doing so may impact on the functionality of our
            website. If you do not restrict or block any cookies, you agree to
            accept the use of all cookies.
          </p>

          <p className="mt-8 font-medium text-[var(--text)]">
            We use the following types of cookies:
          </p>

          <ul className="mt-6 list-disc space-y-8 pl-6 text-[var(--text-muted)]">
            <li>
              <strong className="text-[var(--text)]">
                Strictly necessary cookies (analytics)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies are essential to enable you to browse around our
                websites and use their features. Without these cookies, services
                like logging in to secure sections of our website and restricting
                access based on who logged in cannot be provided.
              </p>
            </li>
            <li>
              <strong className="text-[var(--text)]">
                Performance cookies (performance)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies collect analytical information about how you use and
                move around our website – for instance, which pages you go to
                most. This data may be used to help optimize your browsing
                experience and make it easier for you to navigate or monitor if
                the website is starting to degrade in performance. These cookies
                don&apos;t collect information that identifies you. All
                information these cookies collect is aggregated and therefore
                anonymous.
              </p>
            </li>
            <li>
              <strong className="text-[var(--text)]">
                Functionality cookies (functional and advertisement)
              </strong>
              <p className="mt-2 leading-relaxed">
                These cookies allow our websites to remember choices you make
                while browsing. For instance, we may store your geographic
                location in a cookie to track which region visitors are coming
                from and what their interest is. The information these cookies
                collect will not personally identify you, and they cannot track
                your browsing activity on third party websites.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12 border-t border-[var(--border)] pt-12">
          <h2 className="text-xl font-semibold text-[var(--text)] sm:text-2xl">
            Contact
          </h2>
          <p className="mt-4 leading-relaxed text-[var(--text-muted)]">
            For questions about this policy or your data, contact us at{" "}
            <a
              href="mailto:contact@metatron.id"
              className="text-[var(--accent)] underline-offset-2 hover:underline"
            >
              contact@metatron.id
            </a>
            .
          </p>
        </section>
      </article>
    </div>
  );
}
