"use client";
import { MERCHANT_SIGNUP_URL } from "@/lib/links";

// Brands closing CTA band.
export default function BrandsCTA() {
  return (
    <section className="bg-[var(--color-paper)] pt-8">
      <div
        className="bg-[var(--color-anchor)] px-6 py-20 lg:py-28"
        style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]">
            For brands
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold tracking-tight text-[var(--color-on-anchor)] leading-[1.05]">
            Turn your brand into a business.
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-on-anchor-60)] leading-relaxed max-w-xl mx-auto">
            Set up your store in minutes and start reaching customers across South
            Africa &mdash; with payments, delivery and customer care handled for you.
          </p>
          <div className="pt-2">
            <a
              href={MERCHANT_SIGNUP_URL}
              className="inline-block px-8 py-3 bg-[var(--color-paper)] text-[var(--color-anchor)] rounded-full font-medium hover:bg-[var(--color-on-anchor-60)] transition-colors"
            >
              Start selling
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
