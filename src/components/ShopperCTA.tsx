"use client";
import AppStoreButtons from "./AppStoreButtons";

// Shoppers closing CTA — stitch-style gradient card (accent fading to white).
export default function ShopperCTA() {
  return (
    <section id="get-the-app" className="bg-[var(--color-paper)] py-12 lg:py-20">
      <div
        className="w-[90%] mx-auto rounded-[2.5rem] px-6 py-16 lg:py-24 text-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, var(--color-accent) 0%, color-mix(in oklch, var(--color-accent) 48%, white) 34%, color-mix(in oklch, var(--color-accent) 12%, white) 64%, white 96%)",
        }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-white/75">
            For shoppers
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            Shop the undiscovered, on YIIVA.
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink)]/75 leading-relaxed max-w-xl mx-auto">
            Discover and buy from the best independent brands.
            Download the app and start shopping.
          </p>
          <div className="pt-2 flex justify-center">
            <AppStoreButtons variant="dark-text" />
          </div>
        </div>
      </div>
    </section>
  );
}
