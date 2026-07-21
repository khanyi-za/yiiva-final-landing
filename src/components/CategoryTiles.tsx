"use client";

// Shoppers "what you'll find" — category pills (not boxed cards). Placeholder
// categories; refine later.
const CATEGORIES = [
  "Streetwear",
  "Skincare",
  "Art & prints",
  "Homeware",
  "Beauty",
  "Accessories",
  "Jewellery",
  "Footwear",
];

export default function CategoryTiles() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
          Explore
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
          What you&apos;ll find
        </h2>
        <p className="mt-4 text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
          Homegrown South African brands across the things you actually shop for.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((c) => (
            <li
              key={c}
              className="rounded-full border border-[var(--color-sage)] px-5 py-2.5 font-[family-name:var(--font-display)] text-base lg:text-lg font-medium text-[var(--color-ink)]"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
