"use client";

const STEPS = [
  { n: "01", title: "Browse homegrown brands", body: "Explore a curated feed of South African makers and their latest drops." },
  { n: "02", title: "Subscribe to what you love", body: "Subscribe to the brands you love and wishlist the pieces that catch your eye." },
  { n: "03", title: "Buy, shipped to your door", body: "Check out securely in-app and we handle delivery nationwide." },
];

export default function HowDiscoveryWorks() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] mb-10 lg:mb-14 max-w-2xl">
          How discovery works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s) => (
            <div key={s.n} className="space-y-3 border-t border-[var(--color-sage)] pt-5">
              <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">{s.n}</span>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-semibold text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
