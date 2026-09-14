"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useAudience } from "./AudienceContext";
import AppStoreButtons from "./AppStoreButtons";
import MerchantLink from "./MerchantLink";

const HERO_COPY = {
  brands: {
    eyebrow: "For brands",
    headingA: "Sell more. Reach further.",
    headingB: "Grow bigger.",
    paragraph:
      "YIIVA gives your brand a new sales channel to reach new customers beyond your existing base, with payments, delivery and customer care handled for you.",
  },
  shoppers: {
    headingA: "Shop from your favourite brand",
    headingB: "and discover more",
    paragraph:
      "YIIVA is home to South African brands you love, and the ones you haven't discovered.",
    appNote: "Coming soon to iOS & Android.",
  },
} as const;

export default function Hero() {
  const { audience } = useAudience();

  // Scroll-linked tilt on the brands visual: starts leaning back, flattens as
  // it scrolls toward viewport center. Mount-gated (and skipped for reduced
  // motion) so SSR/first render stays static — same pattern as FeatureDeepDives.
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const visualRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "center center"],
  });
  const tiltRange = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const rotateX = mounted && !reduce ? tiltRange : 0;

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
  };
  const visual = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: 0.3 },
    },
  };

  /* ------------------------------------------------------------------ */
  /* Shoppers — dark band, fanned lookbook deck on the left (live film   */
  /* as the front card, scene stills fanned behind), copy on the right.  */
  /* ------------------------------------------------------------------ */
  if (audience === "shoppers") {
    const copy = HERO_COPY.shoppers;
    return (
      <section
        className="relative min-h-dvh flex items-center pt-24 lg:pt-28 pb-14 lg:pb-16 overflow-hidden"
        style={{
          background:
            "radial-gradient(110% 65% at 50% -12%, color-mix(in oklab, var(--color-accent) 32%, var(--color-anchor)), transparent 68%), var(--color-anchor)",
        }}
      >
        {/* The film as atmosphere — full-bleed on the left, dissolving into
            the dark band toward the right and at the top/bottom edges.
            Nested masks: outer div fades horizontally, video fades
            vertically — the two multiply. On mobile the film fills the top
            of the band and fades downward instead. */}
        <motion.div
          aria-hidden
          className="absolute top-0 inset-x-0 h-[56vh] [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] lg:inset-x-auto lg:top-1/2 lg:-translate-y-1/2 lg:left-[6%] lg:h-[74vh] lg:w-auto lg:aspect-[1064/1684] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_12%,black_86%,transparent_100%)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          {mounted && reduce ? (
            <Image
              src="/shopper_hero_poster.jpg"
              alt=""
              fill
              priority
              className="object-cover lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_16%,black_84%,transparent_100%)]"
            />
          ) : (
            <video
              className="absolute inset-0 w-full h-full object-cover lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_88%,transparent_100%)]"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/shopper_hero_poster.jpg"
              aria-label="Film of South African creative brands and their makers"
            >
              <source src="/shopper_hero.mp4" type="video/mp4" />
            </video>
          )}
        </motion.div>

        <motion.div
          key="shoppers-hero"
          className="relative z-10 w-[90%] max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-center flex-1 pt-[42vh] lg:pt-0"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Left column — empty stage; the film shows through behind it */}
          <div className="relative order-1 hidden lg:block lg:h-[60vh]" />

          {/* Copy — right */}
          <div className="order-2 text-center lg:text-left flex flex-col items-center lg:items-start gap-6">
            <motion.span
              variants={item}
              className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]"
            >
              For shoppers
            </motion.span>
            <motion.h1
              variants={item}
              className="font-[family-name:var(--font-display)] uppercase font-extrabold tracking-tight text-[var(--color-on-anchor)] leading-[1.04] text-3xl sm:text-4xl lg:text-5xl [overflow-wrap:anywhere]"
            >
              {copy.headingA}{" "}
              <span className="text-[color-mix(in_oklch,var(--color-accent)_80%,white)]">
                {copy.headingB}
              </span>
            </motion.h1>
            <motion.p
              variants={item}
              className="text-base lg:text-xl text-[var(--color-on-anchor-60)] leading-relaxed max-w-md"
            >
              {copy.paragraph}
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col items-center lg:items-start gap-3"
            >
              <AppStoreButtons variant="light-text" />
              <span className="text-sm text-[var(--color-on-anchor-60)]">
                {copy.appNote}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>
    );
  }

  /* ------------------------------------------------------------------ */
  /* Brands — centered copy over the tilting dashboard visual            */
  /* ------------------------------------------------------------------ */
  const copy = HERO_COPY.brands;
  return (
    <section className="hero-backdrop relative px-6 pt-[calc(80px+3rem)] pb-16 lg:pt-[calc(80px+5rem)] lg:pb-24 text-center overflow-hidden">
      <motion.div
        key="brands-copy"
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

        {/* Primary CTA — start selling on the dashboard */}
        <motion.div variants={item} className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-5">
            <MerchantLink
              intent="signup"
              className="px-8 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full font-medium transition-colors"
            >
              Start selling
            </MerchantLink>
            <MerchantLink
              intent="login"
              className="text-sm font-medium text-[var(--color-ink-60)] hover:text-[var(--color-ink)] transition-colors"
            >
              Log in
            </MerchantLink>
          </div>
        </motion.div>
      </motion.div>

      {/* Product visual — oversized crop, tilted back in perspective, flattening
          on scroll; the bottom dissolves into the page instead of ending. */}
      <motion.div
        key="brands-visual"
        ref={visualRef}
        className="hero-visual relative z-10 mt-12 lg:mt-16 -mb-10 lg:-mb-16"
        variants={visual}
        initial="hidden"
        animate="show"
      >
        <div className="max-w-5xl mx-auto" style={{ perspective: "1200px" }}>
          <motion.div
            className="relative overflow-hidden rounded-t-2xl ring-1 ring-black/10 aspect-[1440/700]"
            style={{
              rotateX,
              transformOrigin: "center top",
              maskImage:
                "linear-gradient(to bottom, black 62%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 62%, transparent 100%)",
            }}
          >
            <Image
              src="/brand_hero.png"
              alt="The YIIVA merchant dashboard"
              width={3010}
              height={1554}
              priority
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
