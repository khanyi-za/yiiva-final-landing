import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — YIIVA",
  description:
    "How Khaziimla Technology (Pty) Ltd, operator of the YIIVA app, collects, uses and protects your personal information.",
};

const LAST_UPDATED = "22 July 2026";

// Section list drives both the table of contents and the section anchors.
const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Your Information" },
  { id: "how-we-share", title: "How We Share Your Information" },
  { id: "payments", title: "Payments" },
  { id: "cookies-analytics", title: "Cookies & Analytics" },
  { id: "data-security", title: "Data Security" },
  { id: "data-retention", title: "Data Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "childrens-privacy", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact-us", title: "How To Contact Us" },
];

function Section({
  n,
  id,
  title,
  children,
}: {
  n: number;
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 pt-10">
      <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-ink)]">
        <span className="text-[var(--color-accent)]">{n}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-[var(--color-ink-60)] leading-relaxed [&_p]:text-[15px] lg:[&_p]:text-base">
        {children}
      </div>
    </section>
  );
}

// A numbered clause, e.g. 1.1, 4.10 — mirrors the decimal structure of the terms page.
function Clause({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="flex gap-3">
      <span className="shrink-0 font-[family-name:var(--font-mono)] text-sm text-[var(--color-ink)]/70 tabular-nums">
        {n}
      </span>
      <span>{children}</span>
    </p>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      {/* Minimal header */}
      <header className="border-b border-[var(--color-sage)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="YIIVA home" className="flex items-center">
            <Image
              src="/logos/ICON_BLACK.png"
              alt="YIIVA"
              width={128}
              height={37}
              className="h-[26px] w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-sm text-[var(--color-ink-60)] hover:text-[var(--color-ink)] transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-14 lg:py-20">
        {/* Title block */}
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
          Legal
        </span>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.05]">
          Privacy Policy
        </h1>
        <p className="mt-5 text-lg text-[var(--color-ink-60)] leading-relaxed">
          This policy explains how we collect, use and protect your personal
          information when you use YIIVA. Please read it carefully.
        </p>
        <p className="mt-3 font-[family-name:var(--font-mono)] text-sm text-[var(--color-ink-60)]">
          Last updated: {LAST_UPDATED}
        </p>

        {/* Table of contents */}
        <nav
          aria-label="Table of contents"
          className="mt-10 rounded-2xl border border-[var(--color-sage)] bg-[var(--color-paper-2)] p-6"
        >
          <h2 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
            Contents
          </h2>
          <ol className="mt-4 grid sm:grid-cols-2 gap-x-8 gap-y-2">
            {SECTIONS.map((s, i) => (
              <li key={s.id} className="flex gap-3 text-[15px]">
                <span className="w-7 shrink-0 text-right font-[family-name:var(--font-mono)] text-[var(--color-ink-60)] tabular-nums">
                  {i + 1}.
                </span>
                <a
                  href={`#${s.id}`}
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="mt-6">
          <Section n={1} id="introduction" title="Introduction">
            <Clause n="1.1">
              This Privacy Policy explains how Khaziimla Technology (Pty) Ltd
              (registration number 2026/314534/07) (&ldquo;Khaziimla&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;), the
              operator of the YIIVA app (&ldquo;YIIVA&rdquo; or the
              &ldquo;Platform&rdquo;), collects, uses and protects your personal
              information.
            </Clause>
            <Clause n="1.2">
              We are committed to processing personal information in accordance
              with the Protection of Personal Information Act, 2013 (POPIA) and
              other applicable South African law.
            </Clause>
            <Clause n="1.3">
              This Policy should be read together with our Terms &amp;
              Conditions. By using the Platform, you acknowledge that you have
              read and understood this Policy.
            </Clause>
          </Section>

          <Section n={2} id="information-we-collect" title="Information We Collect">
            <Clause n="2.1">
              <strong className="font-semibold text-[var(--color-ink)]">
                Account information
              </strong>{" "}
              &mdash; your name, email address, phone number, password and, for
              Brands, the business details you provide when registering.
            </Clause>
            <Clause n="2.2">
              <strong className="font-semibold text-[var(--color-ink)]">
                Transaction information
              </strong>{" "}
              &mdash; orders, payment status, delivery addresses and order
              history.
            </Clause>
            <Clause n="2.3">
              <strong className="font-semibold text-[var(--color-ink)]">
                Content
              </strong>{" "}
              &mdash; product listings, images and messages you submit through
              the Platform.
            </Clause>
            <Clause n="2.4">
              <strong className="font-semibold text-[var(--color-ink)]">
                Technical information
              </strong>{" "}
              &mdash; device type, app version, IP address and usage data
              collected automatically when you use the Platform.
            </Clause>
          </Section>

          <Section n={3} id="how-we-use" title="How We Use Your Information">
            <Clause n="3.1">
              To create and manage your account and to provide the Platform.
            </Clause>
            <Clause n="3.2">
              To process orders, payments, delivery and returns.
            </Clause>
            <Clause n="3.3">
              To communicate with you about your account, orders and support
              requests.
            </Clause>
            <Clause n="3.4">
              To improve and secure the Platform, and to detect and prevent fraud
              or misuse.
            </Clause>
            <Clause n="3.5">
              Where you have consented, to send you marketing about new brands,
              products and features. You can opt out at any time.
            </Clause>
          </Section>

          <Section n={4} id="how-we-share" title="How We Share Your Information">
            <Clause n="4.1">
              With Brands and Shoppers as needed to complete a transaction &mdash;
              for example, a Shopper&rsquo;s delivery details are shared with the
              relevant Brand and courier to fulfil an order.
            </Clause>
            <Clause n="4.2">
              With service providers who help us operate the Platform (such as
              payment processors, delivery partners, hosting and analytics
              providers), subject to appropriate confidentiality and
              data-protection obligations.
            </Clause>
            <Clause n="4.3">
              Where required by law, or where necessary to protect our rights,
              our users or the public.
            </Clause>
            <Clause n="4.4">We do not sell your personal information.</Clause>
          </Section>

          <Section n={5} id="payments" title="Payments">
            <Clause n="5.1">
              Payments are processed by third-party payment providers. We do not
              store full payment card details on our systems.
            </Clause>
            <Clause n="5.2">
              Your use of a payment provider may be subject to that
              provider&rsquo;s own terms and privacy policy.
            </Clause>
          </Section>

          <Section n={6} id="cookies-analytics" title="Cookies & Analytics">
            <Clause n="6.1">
              We use cookies and similar technologies on our website to remember
              your preferences and to understand how the Platform is used.
            </Clause>
            <Clause n="6.2">
              You can control cookies through your browser settings, though some
              features may not function properly if you disable them.
            </Clause>
          </Section>

          <Section n={7} id="data-security" title="Data Security">
            <Clause n="7.1">
              We take reasonable technical and organisational measures to protect
              personal information against loss, and unauthorised access or
              disclosure.
            </Clause>
            <Clause n="7.2">
              No method of transmission or storage is completely secure, and we
              cannot guarantee absolute security.
            </Clause>
          </Section>

          <Section n={8} id="data-retention" title="Data Retention">
            <Clause n="8.1">
              We keep personal information only for as long as necessary for the
              purposes set out in this Policy, or as required by law &mdash; for
              example, to meet tax and accounting obligations.
            </Clause>
          </Section>

          <Section n={9} id="your-rights" title="Your Rights">
            <Clause n="9.1">
              Under POPIA you have the right to access the personal information we
              hold about you, to request that it be corrected or deleted, and to
              object to certain processing.
            </Clause>
            <Clause n="9.2">
              Where our processing is based on consent, you may withdraw that
              consent at any time.
            </Clause>
            <Clause n="9.3">
              To exercise these rights, contact us using the details below. You
              also have the right to lodge a complaint with the Information
              Regulator (South Africa).
            </Clause>
          </Section>

          <Section n={10} id="childrens-privacy" title="Children's Privacy">
            <Clause n="10.1">
              The Platform is not intended for children under 18. We do not
              knowingly collect personal information from children without the
              consent of a parent or legal guardian.
            </Clause>
          </Section>

          <Section n={11} id="changes" title="Changes to This Policy">
            <Clause n="11.1">
              We may update this Policy from time to time. The version published
              on the Platform is the current version. Where changes are material,
              we will take reasonable steps to notify you.
            </Clause>
          </Section>

          <Section n={12} id="contact-us" title="How To Contact Us">
            <Clause n="12.1">
              If you have any questions about this Policy or about how we handle
              your personal information, please contact us:
            </Clause>
            <div className="ml-8 rounded-2xl border border-[var(--color-sage)] bg-[var(--color-paper-2)] p-5 text-[var(--color-ink)]">
              <p className="font-semibold">Khaziimla Technology (Pty) Ltd</p>
              <p className="mt-0.5 text-sm text-[var(--color-ink-60)]">
                Operator of the YIIVA app · Registration number 2026/314534/07
              </p>
              <p className="mt-2 text-[var(--color-ink-60)]">
                Email:{" "}
                <a
                  href="mailto:hello@yiiva.co.za"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  hello@yiiva.co.za
                </a>
              </p>
              <p className="mt-1 text-[var(--color-ink-60)]">
                Address: 12 Spring Road, Oaklands, Johannesburg, Gauteng, 2192
              </p>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
