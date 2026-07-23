"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useAudience } from "./AudienceContext";
import AppStoreButtons from "./AppStoreButtons";
import { MERCHANT_SIGNUP_URL, MERCHANT_LOGIN_URL } from "@/lib/links";

const HERO_COPY = {
  brands: {
    eyebrow: "For brands",
    headingA: "Grow your brand,",
    headingB: "sell on YIIVA",
    paragraph:
      "YIIVA helps creative brands get discovered and sell effortlessly. Automate your operations, with built-in payments, delivery, and customer care so you can focus on creating, not managing.",
  },
  shoppers: {
    eyebrow: "For shoppers",
    headingA: "Discover",
    headingB: "homegrown SA brands",
    paragraph:
      "Find the niche South African brands you won't see anywhere else: streetwear, skincare, art and more, shipped nationwide. Shop local, discover something new.",
    appNote: "Free to download, available on iOS & Android.",
  },
} as const;

const PHONES = [
  { src: "/app-product.png", alt: "YIIVA app — a limited-run art piece" },
  { src: "/app-brand.png", alt: "YIIVA app — a brand's storefront" },
];

export default function Hero() {
  const { audience } = useAudience();
  const copy = HERO_COPY[audience];

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };
  const visual = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
    },
  };

  return (
    <section className="hero-backdrop relative px-6 pt-[calc(80px+3rem)] pb-16 lg:pt-[calc(80px+5rem)] lg:pb-24 text-center overflow-hidden">
      <motion.div
        key={`${audience}-copy`}
        className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={item}
          className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]"
        >
          {copy.eyebrow}
        </motion.span>
        <motion.h1
          variants={item}
          className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--color-ink)] leading-[1.03] tracking-tight [overflow-wrap:anywhere]"
        >
          {copy.headingA} <span className="text-[var(--color-accent)]">{copy.headingB}</span>
        </motion.h1>
        <motion.p
          variants={item}
          className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed max-w-xl"
        >
          {copy.paragraph}
        </motion.p>

        {/* Primary CTA — Brands: start selling on the dashboard · Shoppers: get the app */}
        {audience === "brands" ? (
          <motion.div variants={item} className="flex flex-col items-center gap-4">
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
          </motion.div>
        ) : (
          <motion.div variants={item} className="flex flex-col items-center gap-4">
            <AppStoreButtons />
            <span className="text-sm text-[var(--color-ink-60)]">{HERO_COPY.shoppers.appNote}</span>
          </motion.div>
        )}
      </motion.div>

      {/* Product visual — audience-aware, rises in on load */}
      <motion.div
        key={`${audience}-visual`}
        className="relative z-10 mt-12 lg:mt-16"
        variants={visual}
        initial="hidden"
        animate="show"
      >
        {audience === "brands" ? (
          <div className="max-w-4xl mx-auto">
            <Image
              src="/yiiva-dashboard.png"
              alt="The YIIVA merchant dashboard"
              width={1440}
              height={910}
              priority
              className="w-full h-auto rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-black/15"
            />
          </div>
        ) : (
          <div className="flex justify-center items-end gap-4 sm:gap-6">
            {PHONES.map((p, i) => (
              <div
                key={p.src}
                className={`relative w-[40vw] max-w-[180px] aspect-[67/148] rounded-2xl overflow-hidden shadow-2xl shadow-black/15 ${
                  i === 1 ? "mb-6 lg:mb-10" : ""
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="180px"
                  priority={i === 0}
                  className="object-cover object-top"
                />
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}
