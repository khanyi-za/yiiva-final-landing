"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

// Shopper scrollytelling feature section (Stitch-style). Two columns on
// desktop: the LEFT image is pinned (sticky) while the RIGHT text blocks
// scroll; when a text block crosses the middle of the viewport its paired
// image replaces the pinned one (slide + fade, like the inspo recording).
// On mobile the pinning collapses to a simple image-above-text stack.

const FEATURES = [
  {
    eyebrow: "Discover",
    heading: "Shop From South African Premium Brands",
    body: "Shop from different brands and pay once. Backed by the curated feed, new arrivals, trending brands, search, and the brand directory.",
    cta: "Shop On The App",
    image: "/Image_1.png",
    alt: "Browsing premium South African brands in the YIIVA app",
    // Per-image sizing inside the shared sticky frame — the cutouts differ in
    // bulk, so each gets its own footprint (2 and 3 render smaller).
    frame: { width: "100%", height: "100%" },
  },
  {
    eyebrow: "Be The 1st To Know",
    heading: "Get Notifications For New Collections & Items",
    body: "Subscribe to brands you love, wishlist items, and chat directly with the brand.",
    cta: "Create Account",
    image: "/image_2.png",
    alt: "Brand subscriptions and notifications in the YIIVA app",
    frame: { width: "80%", height: "68%" },
  },
  {
    eyebrow: "Checkout",
    heading: "Payments and Delivery.",
    body: "Easy, secure checkout — pay how you already pay: card, Instant EFT, SnapScan. Track your courier delivery with live tracking in the app.",
    cta: "Sign Up",
    image: "/image_3.png",
    alt: "Secure checkout and live delivery tracking in the YIIVA app",
    frame: { width: "60.4%", height: "65.5%" },
  },
];

const CTA_HREF = "#get-the-app";
const EASE = [0.16, 1, 0.3, 1] as const;

function FeatureText({
  feature,
  className = "",
}: {
  feature: (typeof FEATURES)[number];
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();
  return (
    <motion.div
      className={`space-y-4 ${className}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-18% 0px -18% 0px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
        {feature.eyebrow}
      </span>
      <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
        {feature.heading}
      </h3>
      <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed max-w-md">
        {feature.body}
      </p>
      <div className="pt-2">
        <a
          href={CTA_HREF}
          className="inline-block px-8 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full font-medium transition-colors"
        >
          {feature.cta}
        </a>
      </div>
    </motion.div>
  );
}

export default function FeatureSection() {
  const [active, setActive] = useState(0);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReducedMotion = useReducedMotion();

  // A text block becomes active when it occupies the middle band of the
  // viewport — free scrolling, no snapping (matches the inspo).
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = blockRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index !== -1) setActive(index);
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    blockRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[var(--color-paper)] pb-4 lg:pb-6">
      {/* ── Desktop: pinned image + scrolling text ── */}
      <div className="hidden lg:grid w-[90%] max-w-6xl mx-auto grid-cols-2 gap-16">
        {/* Left column — sticky image slot */}
        <div>
          <div className="sticky top-0 h-screen flex items-center">
            <div className="relative w-full aspect-[4/5]">
              {FEATURES.map((f, i) => {
                const isActive = i === active;
                const direction = i < active ? -1 : 1; // exited up vs waiting below
                return (
                  <motion.div
                    key={f.image}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={
                      prefersReducedMotion
                        ? { opacity: isActive ? 1 : 0 }
                        : {
                            opacity: isActive ? 1 : 0,
                            y: isActive ? 0 : direction * 72,
                            scale: isActive ? 1 : 0.96,
                          }
                    }
                    transition={
                      isActive
                        ? { duration: 0.65, ease: EASE, delay: 0.08 }
                        : { duration: 0.45, ease: EASE }
                    }
                    style={{
                      pointerEvents: isActive ? "auto" : "none",
                      willChange: "transform, opacity",
                    }}
                  >
                    <div className="relative" style={f.frame}>
                      <Image
                        src={f.image}
                        alt={f.alt}
                        fill
                        sizes="(min-width: 1024px) 45vw, 90vw"
                        className="object-contain"
                        priority={i === 0}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right column — one tall block per feature */}
        <div>
          {FEATURES.map((f, i) => (
            <div
              key={f.heading}
              ref={(el) => {
                blockRefs.current[i] = el;
              }}
              // First and last blocks are shorter so the section hugs its
              // neighbours instead of parking half-viewports of dead space;
              // middle blocks stay full-height to pace the scrollytelling.
              // Inline style: arbitrary-value classes have been dropped by the
              // CSS compiler in this project before.
              className="flex items-center"
              style={{
                minHeight:
                  i === 0 ? "70vh" : i === FEATURES.length - 1 ? "75vh" : "100vh",
              }}
            >
              <FeatureText feature={f} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Mobile: plain stacked blocks, no pinning ── */}
      <div className="lg:hidden w-[90%] mx-auto space-y-16">
        {FEATURES.map((f) => (
          <div key={f.heading} className="space-y-6">
            <div className="relative w-full aspect-[4/5] flex items-center justify-center">
              <div className="relative" style={f.frame}>
                <Image
                  src={f.image}
                  alt={f.alt}
                  fill
                  sizes="90vw"
                  className="object-contain"
                />
              </div>
            </div>
            <FeatureText feature={f} />
          </div>
        ))}
      </div>
    </section>
  );
}
