"use client";
import { useAudience } from "./AudienceContext";
import AppStoreButtons from "./AppStoreButtons";
import { MERCHANT_SIGNUP_URL, MERCHANT_LOGIN_URL } from "@/lib/links";

const HERO_COPY = {
  brands: {
    heading: "Grow your brand, sell on YIIVA",
    paragraph:
      "Reach more customers! YIIVA helps creative brands get discovered and sell effortlessly. Automate your operations, with built-in payments, delivery, and customer care so you can focus on creating, not managing.",
    ctaNote: "Set up your store and start selling on YIIVA today.",
    featurePoint: "Monetize your content, drive sales",
  },
  shoppers: {
    heading: "Discover homegrown SA brands",
    paragraph:
      "Find the niche South African brands you won't see anywhere else: streetwear, skincare, art and more, shipped nationwide. Shop local, discover something new.",
    appNote: "Free to download, available on iOS & Android.",
    featurePoint: "Support local, discover the undiscovered",
  },
} as const;

export default function Hero() {
  const { audience } = useAudience();
  const copy = HERO_COPY[audience];

  return (
    <section className="hero-backdrop relative px-6 pt-[calc(80px+3.5rem)] pb-14 lg:pt-[calc(80px+6rem)] lg:pb-20 text-center">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6 lg:gap-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--color-ink)] leading-[1.03] tracking-tight [overflow-wrap:anywhere]">
          {copy.heading}
        </h1>
        <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed max-w-xl">
          {copy.paragraph}
        </p>

        {/* Primary CTA — Brands: start selling on the dashboard · Shoppers: get the app */}
        {audience === "brands" ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-[var(--color-ink)] font-medium text-sm">
              {HERO_COPY.brands.ctaNote}
            </p>
            <div className="flex items-center gap-5">
              <a
                href={MERCHANT_SIGNUP_URL}
                className="px-8 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full font-medium transition-colors"
              >
                Start selling
              </a>
              <a
                href={MERCHANT_LOGIN_URL}
                className="text-sm font-medium text-[var(--color-ink-60)] hover:text-[var(--color-ink)] transition-colors"
              >
                Log in
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <AppStoreButtons />
            <span className="text-sm text-[var(--color-ink-60)]">{HERO_COPY.shoppers.appNote}</span>
          </div>
        )}

        {/* Feature Point */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full"></div>
          <span className="text-[var(--color-ink-60)] font-medium text-sm lg:text-base">
            {copy.featurePoint}
          </span>
        </div>
      </div>
    </section>
  );
}
