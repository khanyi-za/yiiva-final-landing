"use client";
import MerchantLink from "./MerchantLink";

// Brands closing CTA — stitch-style gradient card (accent fading to white).
export default function BrandsCTA() {
  return (
    <section className="bg-[var(--color-paper)] py-12 lg:py-20">
      <div
        className="w-[90%] mx-auto rounded-[2.5rem] px-6 py-16 lg:py-24 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-accent) 0%, color-mix(in oklch, var(--color-accent) 48%, white) 34%, color-mix(in oklch, var(--color-accent) 12%, white) 64%, white 96%)",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/75">
            For brands
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Turn your brand into a business.
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink)]/75 leading-relaxed max-w-xl mx-auto">
            Set up your store in minutes and start reaching new customers, with
            payments, delivery and customer care handled for you.
          </p>
          <div className="pt-2">
            <MerchantLink
              intent="signup"
              className="inline-block px-8 py-3 bg-[var(--color-anchor)] text-white rounded-full font-medium hover:bg-[var(--color-ink)] transition-colors"
            >
              Start selling
            </MerchantLink>
          </div>
        </div>
      </div>
    </section>
  );
}
