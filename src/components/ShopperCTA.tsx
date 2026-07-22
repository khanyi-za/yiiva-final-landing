"use client";
import AppStoreButtons from "./AppStoreButtons";

// Shoppers closing CTA band — get the app.
export default function ShopperCTA() {
  return (
    <section className="bg-[var(--color-paper)] pt-8">
      <div
        className="bg-[var(--color-anchor)] px-6 py-20 lg:py-28"
        style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]">
            For shoppers
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold tracking-tight text-[var(--color-on-anchor)] leading-[1.05]">
            Shop homegrown, on YIIVA.
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-on-anchor-60)] leading-relaxed max-w-xl mx-auto">
            Discover and buy from South Africa&apos;s best homegrown brands.
            Download the app and start shopping.
          </p>
          <div className="pt-2 flex justify-center">
            <AppStoreButtons variant="light-text" />
          </div>
        </div>
      </div>
    </section>
  );
}
