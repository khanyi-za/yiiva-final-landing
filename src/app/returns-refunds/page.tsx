import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Returns & Refunds — YIIVA",
  description:
    "YIIVA's returns and refunds policy: 30-day returns on delivered orders, cancellations before dispatch, and refunds to your original payment method.",
};

const LAST_UPDATED = "4 September 2026";

// Section list drives both the table of contents and the section anchors.
const SECTIONS = [
  { id: "overview", title: "Overview" },
  { id: "cancellations", title: "Cancelling an Order" },
  { id: "return-window", title: "Return Window & Eligibility" },
  { id: "how-to-return", title: "How To Request a Return" },
  { id: "return-process", title: "What Happens Next" },
  { id: "refunds", title: "Refunds" },
  { id: "disputes", title: "Disputes & Platform Support" },
  { id: "statutory-rights", title: "Your Statutory Rights" },
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

export default function ReturnsRefundsPage() {
  return (
    <div className="bg-[var(--color-paper)] min-h-screen">
      {/* Minimal header */}
      <header className="border-b border-[var(--color-sage)]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" aria-label="YIIVA home" className="flex items-center">
            <Image
              src="/logos/wordmark-black.png"
              alt="YIIVA"
              width={579}
              height={164}
              className="w-[68px] h-auto"
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
          Returns &amp; Refunds
        </h1>
        <p className="mt-5 text-lg text-[var(--color-ink-60)] leading-relaxed">
          Shopping with new brands should feel safe. This policy explains how
          cancellations, returns and refunds work on YIIVA — in plain language.
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
          <Section n={1} id="overview" title="Overview">
            <Clause n="1.1">
              This policy applies to purchases made on the YIIVA platform,
              operated by Khaziimla Technology (Pty) Ltd (registration number
              2026/314534/07). YIIVA is a marketplace: your order is fulfilled
              by the brand you buy from, and this policy sets the platform-wide
              baseline every brand on YIIVA honours.
            </Clause>
            <Clause n="1.2">
              In short: you can cancel an order before it is dispatched, return
              a delivered order within 30 days, and refunds go back to your
              original payment method.
            </Clause>
          </Section>

          <Section n={2} id="cancellations" title="Cancelling an Order">
            <Clause n="2.1">
              You can cancel an order in the app at any time before the brand
              hands it to the courier. Open your order and choose
              &ldquo;Cancel&rdquo; — if the option is shown, the order is still
              cancellable.
            </Clause>
            <Clause n="2.2">
              Cancelled orders that were already paid are refunded in full —
              including delivery — to your original payment method.
            </Clause>
            <Clause n="2.3">
              Once an order is with the courier it can no longer be cancelled,
              but you can still return it after delivery under section 3.
            </Clause>
          </Section>

          <Section n={3} id="return-window" title="Return Window & Eligibility">
            <Clause n="3.1">
              You may request a return for up to <strong>30 days after
              delivery</strong>. The window is measured from the day the courier
              confirms delivery of your parcel.
            </Clause>
            <Clause n="3.2">
              To be eligible, items should be unused and in their original
              condition and packaging, with any tags attached. Items that are
              faulty, damaged in transit, or not what you ordered are always
              eligible.
            </Clause>
            <Clause n="3.3">
              Individual brands may offer more generous terms on their own
              products, but never less than this 30-day baseline.
            </Clause>
          </Section>

          <Section n={4} id="how-to-return" title="How To Request a Return">
            <Clause n="4.1">
              In the app, open the order under &ldquo;My purchases&rdquo;,
              choose &ldquo;Request a return&rdquo;, select a reason and add any
              details or photos that help the brand understand the problem.
            </Clause>
            <Clause n="4.2">
              You&rsquo;ll see the status of your request on the order screen
              from the moment you submit it.
            </Clause>
          </Section>

          <Section n={5} id="return-process" title="What Happens Next">
            <Clause n="5.1">
              The brand reviews your request and either approves it or declines
              it with a reason. Most requests are answered within a few business
              days.
            </Clause>
            <Clause n="5.2">
              If approved, you send the item back as arranged with the brand.
              Once the brand confirms the parcel has arrived and checked out,
              your refund is processed.
            </Clause>
            <Clause n="5.3">
              If a brand declines a request you believe is legitimate, contact
              YIIVA support (section 7) — we review it independently.
            </Clause>
          </Section>

          <Section n={6} id="refunds" title="Refunds">
            <Clause n="6.1">
              Refunds are processed through Paystack, our payment provider, to
              the payment method you paid with. We do not refund to a different
              card or account.
            </Clause>
            <Clause n="6.2">
              Once processed on our side, the refund typically reflects within a
              few business days, depending on your bank.
            </Clause>
            <Clause n="6.3">
              Refunds can be full or partial (for example, when only one item
              from a larger order is returned).
            </Clause>
          </Section>

          <Section n={7} id="disputes" title="Disputes & Platform Support">
            <Clause n="7.1">
              Every order on YIIVA has built-in messaging with the brand — most
              issues are resolved fastest there.
            </Clause>
            <Clause n="7.2">
              If a problem isn&rsquo;t resolved, YIIVA support steps in. We can
              review the full order record — payment, courier tracking and
              delivery confirmation — and where a refund is due, we can process
              it directly, without needing the brand&rsquo;s cooperation.
            </Clause>
          </Section>

          <Section n={8} id="statutory-rights" title="Your Statutory Rights">
            <Clause n="8.1">
              Nothing in this policy limits your rights under South African
              consumer protection law, including the Consumer Protection Act 68
              of 2008. Where the law gives you greater rights than this policy —
              for example in respect of defective goods — those rights apply.
            </Clause>
          </Section>

          <Section n={9} id="contact-us" title="How To Contact Us">
            <Clause n="9.1">
              Email us at{" "}
              <a
                href="mailto:support@yiiva.co.za"
                className="text-[var(--color-accent)] hover:underline"
              >
                support@yiiva.co.za
              </a>{" "}
              with your order number and we&rsquo;ll take it from there.
            </Clause>
          </Section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
