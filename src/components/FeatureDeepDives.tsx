"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Alternating image/text deep-dives (stitch-style), one real screenshot each.
// Copy reuses the original site's product copy.
const DIVES = [
  {
    eyebrow: "Already on Shopify?",
    heading: "Integrate Seamlessly with Shopify or WooCommerce.",
    body: "Bring your catalogue into Yiiva in minutes and keep your inventory up to date automatically. Spend less time managing products and more time connecting with customers who are ready to buy.",
    image: "/shopify-brand-assets/01-logo/png/logo-color-white-bg.png",
    alt: "Shopify logo",
    // Transparent brand marks, not a screenshot — rendered without the card
    // frame, side by side.
    logo: true,
    logos: [
      {
        src: "/shopify-brand-assets/01-logo/png/logo-color-white-bg.png",
        alt: "Shopify logo",
        width: 1000,
        height: 286,
        maxWidth: 280,
      },
      {
        src: "/woocommerce.png",
        alt: "WooCommerce logo",
        width: 1200,
        height: 250,
        maxWidth: 320,
      },
    ],
  },
  {
    eyebrow: "Handle Business Operations",
    heading: "Your whole operation in one dashboard.",
    body: "Products, stock, collections, sales, returns, team and earnings, in one place. AI-driven demand insight, built from real shopper behaviour, turns your sales metrics and search analytics into smart reports that reveal what customers want.",
    image: "/brand_hero.png",
    alt: "The YIIVA merchant web dashboard",
    baseSize: { width: 3010, height: 1554 },
    baseScale: 1,
    overlayImage: "/feature-nohand.png",
    overlayAlt: "The merchant dashboard in the YIIVA app",
    overlaySize: { width: 477, height: 944 },
    overlaySide: "right" as const,
    overlayWidth: "24%",
  },
  {
    eyebrow: "Sales",
    heading: "Payment and Delivery Handled For you",
    body: "Customers pay by card, Instant EFT, or SnapScan through secure checkout; your share settles directly to your own bank account. The courier is booked automatically the moment an order is paid — waybill generated, parcel collected from you, tracked to the buyer's door, with returns flowing through the same system.",
    image: "/delivery_2.png",
    alt: "Couriers loading parcels for delivery",
    baseSize: { width: 1274, height: 1228 },
    baseScale: 0.73,
    // Track-purchase phone overlaid on the left of the courier photo.
    overlayImage: "/delivery_1.png",
    overlayAlt: "Live delivery tracking in the YIIVA app",
    overlaySize: { width: 518, height: 1084 },
    overlaySide: "left" as const,
    overlayWidth: "46.5%",
  },
  {
    eyebrow: "Customer Care",
    heading: "Customer Relationships, Without The Admin.",
    body: "Customers subscribe to your brand, wishlist your pieces, and message you in one chat inbox; order notifications go out automatically at every step. You keep the direct relationship with your customers.",
    image: "/customer_care.png",
    alt: "A shopper asking a brand about sizing in YIIVA chat",
    // Transparent photo cutout — rendered without the screenshot card frame.
    cutout: true,
  },
];

function Dive({ dive, imageFirst }: { dive: (typeof DIVES)[number]; imageFirst: boolean }) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Gentle parallax drift on the screenshot as the row passes through the viewport.
  // Mount-gated (and skipped for reduced motion) so SSR/first render stays static.
  const drift = useTransform(scrollYProgress, [0, 1], [56, -56]);
  const y = mounted && !reduce ? drift : 0;
  // Constant entry offset; MotionConfig reduces the animation for reduced-motion users.
  const enterX = imageFirst ? -48 : 48;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-center"
    >
      {/* Screenshot — directional entry + parallax drift */}
      <motion.div
        className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
        initial={{ opacity: 0, x: enterX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div style={{ y }}>
          {"logos" in dive && dive.logos ? (
            // Transparent brand marks: centered on the paper, no card chrome.
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-14 py-16 lg:py-24">
              {dive.logos.map((logo) => (
                <Image
                  key={logo.src}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto"
                  style={{ maxWidth: logo.maxWidth, width: "100%" }}
                />
              ))}
            </div>
          ) : "overlayImage" in dive && dive.overlayImage ? (
            // Layered pair: framed base photo + transparent phone cutout
            // floating over its left side.
            // Layered pair: framed base + transparent cutout floating over one
            // side. Per-dive fields drive the geometry.
            <div
              className="relative mx-auto"
              style={{ width: `${(dive.baseScale ?? 1) * 100}%` }}
            >
              <Image
                src={dive.image}
                alt={dive.alt}
                width={dive.baseSize.width}
                height={dive.baseSize.height}
                className="w-full h-auto rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-black/10"
              />
              <Image
                src={dive.overlayImage}
                alt={dive.overlayAlt ?? ""}
                width={dive.overlaySize.width}
                height={dive.overlaySize.height}
                className="absolute h-auto"
                style={{
                  width: dive.overlayWidth,
                  ...(dive.overlaySide === "right"
                    ? { right: "-5%" }
                    : { left: "-6.8%" }),
                  top: "50%",
                  transform: "translateY(-50%)",
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.28))",
                }}
              />
            </div>
          ) : "cutout" in dive && dive.cutout ? (
            // Transparent photo cutout: floats on the paper, alpha-following shadow.
            <div className="flex items-center justify-center">
              <Image
                src={dive.image}
                alt={dive.alt}
                width={790}
                height={1079}
                className="h-auto"
                style={{
                  width: "100%",
                  maxWidth: 440,
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.18))",
                }}
              />
            </div>
          ) : (
            <Image
              src={dive.image}
              alt={dive.alt}
              width={1440}
              height={910}
              className="w-full h-auto rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-black/10"
            />
          )}
        </motion.div>
      </motion.div>

      {/* Copy — staggered fade-up */}
      <motion.div
        className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        transition={{ staggerChildren: 0.08 }}
      >
        <motion.span
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="block font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]"
        >
          {dive.eyebrow}
        </motion.span>
        <motion.h3
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-3 font-[family-name:var(--font-display)] text-2xl lg:text-3xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.12]"
        >
          {dive.heading}
        </motion.h3>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-4 text-sm lg:text-base text-[var(--color-ink-60)] leading-relaxed max-w-md"
        >
          {dive.body}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function FeatureDeepDives() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[var(--color-paper)] py-12 lg:py-20">
      <div className="w-[90%] mx-auto space-y-12 lg:space-y-20">
        {DIVES.map((d, i) => (
          <Dive key={d.heading} dive={d} imageFirst={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
