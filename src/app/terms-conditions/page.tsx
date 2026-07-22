import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions — YIIVA",
  description:
    "The terms and conditions that govern your use of YIIVA and the YIIVA platform.",
};

const LAST_UPDATED = "22 July 2026";

// Section list drives both the table of contents and the section anchors.
const SECTIONS = [
  { id: "introduction", title: "Introduction" },
  { id: "using-yiiva", title: "Using YIIVA" },
  { id: "registration", title: "Registration" },
  { id: "privacy-policy", title: "Privacy Policy" },
  { id: "liability", title: "Liability" },
  { id: "intellectual-property", title: "Intellectual Property Rights" },
  { id: "accessing-our-platform", title: "Accessing Our Platform" },
  { id: "updating-terms", title: "Updating of Terms & Conditions" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "viruses-hacking", title: "Viruses, Hacking & Other Offences" },
  { id: "electronic-communication", title: "Electronic Communication" },
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

// A numbered clause, e.g. 1.1, 4.10 — mirrors the decimal structure of the source layout.
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

export default function TermsConditionsPage() {
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
          Terms &amp; Conditions
        </h1>
        <p className="mt-5 text-lg text-[var(--color-ink-60)] leading-relaxed">
          Please read these terms and conditions carefully. They set out the
          rules for using YIIVA and form a binding agreement between you and
          YIIVA when you access or use the platform.
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
                <span className="font-[family-name:var(--font-mono)] text-[var(--color-ink-60)] tabular-nums">
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
        <div className="mt-6 divide-y divide-[var(--color-sage)]">
          <Section n={1} id="introduction" title="Introduction">
            <Clause n="1.1">
              These terms and conditions (&ldquo;Terms&rdquo;) govern your access
              to and use of the YIIVA mobile application, website and related
              services (together, the &ldquo;Platform&rdquo;), operated by
              [YIIVA legal entity name] ([registration number]) (&ldquo;YIIVA&rdquo;,
              &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;).
            </Clause>
            <Clause n="1.2">
              YIIVA is a mobile commerce platform that connects small, homegrown
              South African brands (&ldquo;Brands&rdquo;) with shoppers
              (&ldquo;Shoppers&rdquo;), and provides tools for listing products,
              taking payments, and arranging delivery.
            </Clause>
            <Clause n="1.3">
              By creating an account, accessing or using the Platform, you agree
              to be bound by these Terms. If you do not agree, you may not use the
              Platform.
            </Clause>
            <Clause n="1.4">
              These Terms should be read together with our Privacy Policy and any
              additional terms that apply to specific features or to Brands and
              Shoppers respectively.
            </Clause>
          </Section>

          <Section n={2} id="using-yiiva" title="Using YIIVA">
            <Clause n="2.1">
              You may use the Platform only for lawful purposes and in accordance
              with these Terms. You are responsible for ensuring that everyone who
              accesses the Platform through your account does so in line with
              these Terms.
            </Clause>
            <Clause n="2.2">
              Brands are responsible for the accuracy of their listings, including
              product descriptions, images, pricing, stock availability and
              variants, and for fulfilling orders they accept.
            </Clause>
            <Clause n="2.3">
              Shoppers are responsible for providing accurate delivery and payment
              information and for reviewing product details before placing an
              order.
            </Clause>
            <Clause n="2.4">
              Payments, commission, delivery and returns are handled in accordance
              with the arrangements made available on the Platform at the time of
              a transaction. Where YIIVA charges a commission on a sale, the
              applicable rate is shown to the Brand before a sale is completed.
            </Clause>
            <Clause n="2.5">
              You may not use the Platform to sell counterfeit, illegal, unsafe or
              prohibited goods, or to engage in any conduct that is fraudulent,
              misleading or harmful to other users.
            </Clause>
          </Section>

          <Section n={3} id="registration" title="Registration">
            <Clause n="3.1">
              To access certain features you must register for an account and
              provide accurate, current and complete information.
            </Clause>
            <Clause n="3.2">
              You are responsible for keeping your login details confidential and
              for all activity that takes place under your account. You must
              notify us immediately if you suspect any unauthorised use.
            </Clause>
            <Clause n="3.3">
              You must be at least 18 years old, or have the consent of a parent
              or legal guardian, to register an account.
            </Clause>
            <Clause n="3.4">
              We may suspend or close an account where we reasonably believe these
              Terms have been breached, or where required to protect the Platform
              or other users.
            </Clause>
          </Section>

          <Section n={4} id="privacy-policy" title="Privacy Policy">
            <Clause n="4.1">
              We process personal information in accordance with our Privacy
              Policy and applicable law, including the Protection of Personal
              Information Act, 2013 (POPIA).
            </Clause>
            <Clause n="4.2">
              By using the Platform you consent to the collection and processing
              of your personal information as described in the Privacy Policy,
              including for the purposes of operating the Platform, processing
              orders and arranging delivery.
            </Clause>
            <Clause n="4.3">
              We take reasonable technical and organisational measures to protect
              personal information, but no method of transmission or storage is
              completely secure.
            </Clause>
          </Section>

          <Section n={5} id="liability" title="Liability">
            <Clause n="5.1">
              The Platform is provided on an &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo; basis. To the extent permitted by law, YIIVA does
              not accept liability for any indirect, incidental or consequential
              loss arising from your use of, or inability to use, the Platform.
            </Clause>
            <Clause n="5.2">
              YIIVA facilitates transactions between Brands and Shoppers. A
              contract of sale for any product is concluded between the Brand and
              the Shopper. Nothing in these Terms limits any rights you may have
              under the Consumer Protection Act, 2008.
            </Clause>
            <Clause n="5.3">
              Nothing in these Terms excludes or limits liability that cannot be
              excluded or limited under applicable South African law.
            </Clause>
          </Section>

          <Section n={6} id="intellectual-property" title="Intellectual Property Rights">
            <Clause n="6.1">
              All intellectual property rights in the Platform, including its
              design, text, graphics, logos and software, are owned by or licensed
              to YIIVA and are protected by law.
            </Clause>
            <Clause n="6.2">
              Brands retain ownership of the content they upload but grant YIIVA a
              non-exclusive, royalty-free licence to host, display and promote that
              content for the purpose of operating and marketing the Platform.
            </Clause>
            <Clause n="6.3">
              You may not copy, reproduce, modify or distribute any part of the
              Platform except as expressly permitted by these Terms or with our
              prior written consent.
            </Clause>
          </Section>

          <Section n={7} id="accessing-our-platform" title="Accessing Our Platform">
            <Clause n="7.1">
              Access to the Platform is permitted on a temporary basis, and we may
              suspend, withdraw or change all or any part of the Platform without
              notice.
            </Clause>
            <Clause n="7.2">
              We do not guarantee that the Platform, or any content on it, will
              always be available or uninterrupted. We may restrict access to some
              parts, or the whole, of the Platform from time to time.
            </Clause>
            <Clause n="7.3">
              You are responsible for making all arrangements necessary to access
              the Platform, including a compatible device and internet connection.
            </Clause>
          </Section>

          <Section n={8} id="updating-terms" title="Updating of Terms & Conditions">
            <Clause n="8.1">
              We may revise these Terms at any time by updating this page. The
              version published on the Platform at the time you use it is the
              version that applies.
            </Clause>
            <Clause n="8.2">
              Where changes are material, we will take reasonable steps to notify
              you. Your continued use of the Platform after changes take effect
              constitutes acceptance of the updated Terms.
            </Clause>
          </Section>

          <Section n={9} id="disclaimer" title="Disclaimer">
            <Clause n="9.1">
              While we take reasonable care to keep information on the Platform
              accurate, we make no representations or warranties, express or
              implied, that the content is complete, accurate or up to date.
            </Clause>
            <Clause n="9.2">
              Any reliance you place on information on the Platform is at your own
              risk. Product information is provided by Brands and is their
              responsibility.
            </Clause>
          </Section>

          <Section n={10} id="viruses-hacking" title="Viruses, Hacking & Other Offences">
            <Clause n="10.1">
              You must not misuse the Platform by knowingly introducing viruses,
              trojans, worms or other material that is malicious or technologically
              harmful.
            </Clause>
            <Clause n="10.2">
              You must not attempt to gain unauthorised access to the Platform, the
              server on which it is stored, or any server, computer or database
              connected to it.
            </Clause>
            <Clause n="10.3">
              We will report any such breach to the relevant law enforcement
              authorities and co-operate with them, including by disclosing your
              identity. Any such breach will result in the immediate suspension of
              your right to use the Platform.
            </Clause>
          </Section>

          <Section n={11} id="electronic-communication" title="Electronic Communication">
            <Clause n="11.1">
              When you use the Platform or send communications to us electronically,
              you consent to receiving communications from us electronically, in
              accordance with the Electronic Communications and Transactions Act,
              2002.
            </Clause>
            <Clause n="11.2">
              You agree that all agreements, notices and other communications we
              provide to you electronically satisfy any legal requirement that such
              communications be in writing.
            </Clause>
          </Section>

          <Section n={12} id="contact-us" title="How To Contact Us">
            <Clause n="12.1">
              If you have any questions about these Terms or the Platform, please
              contact us:
            </Clause>
            <div className="ml-8 rounded-2xl border border-[var(--color-sage)] bg-[var(--color-paper-2)] p-5 text-[var(--color-ink)]">
              <p className="font-semibold">YIIVA</p>
              <p className="mt-1 text-[var(--color-ink-60)]">
                Email:{" "}
                <a
                  href="mailto:hello@yiiva.co.za"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  hello@yiiva.co.za
                </a>
              </p>
              <p className="mt-1 text-[var(--color-ink-60)]">
                Address: [registered business address]
              </p>
            </div>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
