"use client";

// Shoppers-view section. Placeholder copy to refine later.
const REASONS = [
  {
    title: "Discover the undiscovered",
    body: "Find niche South African brands and one-of-a-kind pieces you won't see on the big marketplaces.",
  },
  {
    title: "Support homegrown",
    body: "Every order backs a small local maker — streetwear, skincare, art and more, straight from the source.",
  },
  {
    title: "Shipped nationwide",
    body: "Secure checkout and reliable delivery across South Africa, all handled inside one app.",
  },
];

export default function WhyShopYiiva() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="w-full border-t border-[var(--color-sage)] mb-12"></div>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-10 lg:mb-14 max-w-2xl">
          Why shop <span className="text-[var(--color-accent)]">Yiiva</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {REASONS.map((r, i) => (
            <div key={r.title} className="space-y-3">
              <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-semibold text-[var(--color-ink)]">
                {r.title}
              </h3>
              <p className="text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
