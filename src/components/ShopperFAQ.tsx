"use client";

// Pre-launch shopper FAQ. Native <details> accordion (accessible, no JS).
// Copy is honest pre-launch framing; refine later.
const FAQS = [
  {
    q: "Is YIIVA free to use?",
    a: "Yes, browsing and buying on YIIVA is free. You only pay for the items you order.",
  },
  {
    q: "How do I start shopping?",
    a: "Download the YIIVA app on iOS or Android, browse independent brands, and check out securely in-app.",
  },
  {
    q: "How does delivery work?",
    a: "Orders are delivered to your door, arranged for you through the app.",
  },
  {
    q: "What kind of brands are on YIIVA?",
    a: "Small, independent brands: streetwear, skincare, art and more.",
  },
];

export default function ShopperFAQ() {
  return (
    <section className="bg-[var(--color-paper)] py-12 lg:py-20">
      <div className="w-[90%] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] text-center mb-10">
          Good to know
        </h2>
        <div className="border-t border-[var(--color-sage)]">
          {FAQS.map((f) => (
            <details key={f.q} className="group border-b border-[var(--color-sage)] py-5">
              <summary className="flex items-center justify-between cursor-pointer list-none [&::-webkit-details-marker]:hidden font-[family-name:var(--font-display)] text-lg lg:text-xl font-semibold text-[var(--color-ink)]">
                {f.q}
                <span className="ml-4 shrink-0 text-2xl leading-none text-[var(--color-ink-60)] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-base text-[var(--color-ink-60)] leading-relaxed">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
