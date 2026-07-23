"use client";

// New section. Copy encodes the confirmed positioning (small, niche, homegrown
// brands without visibility). Refine later.
export default function WhoItsFor() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-6 text-center space-y-6">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Who it&apos;s for
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-4xl lg:text-6xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.05]">
          Built for the brands<br className="hidden sm:block" /> nobody&apos;s found yet.
        </h2>
        <p className="text-lg lg:text-xl text-[var(--color-ink-60)] leading-relaxed max-w-2xl mx-auto">
          YIIVA is for small, niche, independent brands that don&apos;t yet have
          the visibility they deserve. If you make something worth discovering, we help the
          right people find it, and give you everything you need to sell once they do.
        </p>
      </div>
    </section>
  );
}
