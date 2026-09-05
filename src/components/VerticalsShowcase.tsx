"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

/* Hallmark · pre-emit critique: P4 H4 E4 S5 R4 V4 */
// The four verticals (discovery, payments, delivery, customer care) as a
// scroll-pinned conveyor of real product states over a hand-held phone
// (stitch.money-style reference). The section pins to the viewport; scroll
// scrubs one full chip set over the phone; when the last chip has passed,
// the section releases. Chips are UI truth — events that exist in the
// product — never invented metrics.

type ChipIcon = "bell" | "heart" | "chat" | "check" | "truck";

const CHIPS: { tag: string; text: string; icon: ChipIcon }[] = [
  { tag: "Discovery", text: "New subscriber", icon: "bell" },
  { tag: "Discovery", text: "Added to wishlist", icon: "heart" },
  { tag: "Customer care", text: "“Hi! Is the medium still in stock?”", icon: "chat" },
  { tag: "Customer care", text: "Reply sent", icon: "chat" },
  { tag: "Payments", text: "Payment received — Card", icon: "check" },
  { tag: "Delivery", text: "Out for delivery — The Courier Guy", icon: "truck" },
  { tag: "Delivery", text: "Delivered", icon: "check" },
  { tag: "Payments", text: "Paid out to your bank", icon: "check" },
];

function Icon({ name }: { name: ChipIcon }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "w-4 h-4",
    "aria-hidden": true,
  };
  switch (name) {
    case "bell":
      return (
        <svg {...common}>
          <path d="M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "check":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "truck":
      return (
        <svg {...common}>
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      );
  }
}

function Chip({ tag, text, icon }: { tag: string; text: string; icon: ChipIcon }) {
  return (
    <div className="pb-8">
      <div className="flex items-center gap-3 rounded-2xl border border-[var(--color-ink)]/10 bg-[color-mix(in_oklch,var(--color-paper)_82%,transparent)] backdrop-blur-md px-4 py-3 shadow-lg shadow-black/5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color-mix(in_oklch,var(--color-accent)_12%,transparent)] text-[var(--color-accent)]">
          <Icon name={icon} />
        </span>
        <span className="min-w-0">
          <span className="block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-ink-60)]">
            {tag}
          </span>
          <span className="block text-sm font-medium text-[var(--color-ink)] leading-snug">
            {text}
          </span>
        </span>
      </div>
    </div>
  );
}

export default function VerticalsShowcase() {
  // Pinned scroll-scrub: the outer section is taller than the viewport by the
  // conveyor's total travel; the inner panel is sticky for that distance, so
  // the page appears locked while scroll drives the chips. Travel runs from
  // "first chip just below the phone" to "last chip fully past the top", so
  // the pin releases exactly when the sequence completes. Mount-gated and
  // skipped for reduced motion (static, unpinned fallback).
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const staticMode = mounted && !!reduce;

  const wrapperRef = useRef<HTMLElement>(null);
  const maskRef = useRef<HTMLDivElement>(null); // the image box = chip window
  const colRef = useRef<HTMLDivElement>(null); // the chip column
  const [maskH, setMaskH] = useState(0);
  const [colH, setColH] = useState(0);

  useEffect(() => {
    const update = () => {
      setMaskH(maskRef.current?.offsetHeight ?? 0);
      setColH(colRef.current?.offsetHeight ?? 0);
    };
    update();
    const ro = new ResizeObserver(update);
    if (maskRef.current) ro.observe(maskRef.current);
    if (colRef.current) ro.observe(colRef.current);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 25,
    mass: 0.4,
  });
  // Start: column top sits at the window's bottom edge (nothing visible).
  // End: column bottom has cleared the window's top edge (everything passed).
  const travel = maskH + colH;
  const conveyorRange = useTransform(smooth, [0, 1], [maskH, -colH]);
  const conveyorY = !staticMode && travel > 0 ? conveyorRange : 0;

  // Colour moment (reference frames 1→2): white while the section approaches,
  // vibrant accent blooming in as the pin engages and the first chips rise.
  const glowRange = useTransform(smooth, [0.02, 0.15], [0, 1]);
  const glowOpacity = staticMode ? 1 : glowRange;

  return (
    <section
      ref={wrapperRef}
      className="relative bg-[var(--color-paper)]"
      style={{ height: staticMode ? "auto" : `calc(100dvh + ${travel || 1500}px)` }}
    >
      <div
        className={
          staticMode
            ? "relative py-14 lg:py-20 overflow-hidden"
            : "sticky top-0 h-dvh overflow-hidden flex items-center"
        }
      >
        {/* Panel-wide colour field — scroll-driven, floods behind the visual
            once the lock engages (reference frame 2) */}
        <motion.div
          aria-hidden
          className="absolute inset-0 z-0"
          style={{
            opacity: glowOpacity,
            background:
              "radial-gradient(90% 80% at 68% 48%, color-mix(in oklch, var(--color-lime) 55%, transparent), color-mix(in oklch, var(--color-lime) 12%, transparent) 70%, transparent 92%)",
          }}
        />

        <motion.div
          className="relative z-10 w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Heading — left of the visual (reference layout) */}
          <div>
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
              What YIIVA offers?
            </span>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
              Everything your brand needs to sell more.
            </h2>
            <div className="mt-7">
              <a
                href="#how-it-works"
                className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[var(--color-paper)] border border-[var(--color-ink)]/10 shadow-sm text-sm font-medium text-[var(--color-ink)] transition-colors hover:border-[var(--color-ink)]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2"
              >
                See how it works
                <span
                  aria-hidden
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Visual — hand-held phone cutout (transparent PNG) + the chip
              window. During the pin the wrist sits on the viewport's bottom
              edge (column stretches the panel height, image aligned to end). */}
          <div
            className={`relative flex justify-center ${
              staticMode ? "items-end" : "items-end lg:h-dvh"
            }`}
          >
            {/* Width also caps against viewport height (aspect 735/846 ≈ .869)
                so the image top clears the floating navbar while pinned */}
            <div
              ref={maskRef}
              className="relative w-[320px] sm:w-[min(500px,calc((100dvh-140px)*0.869))] lg:w-[min(620px,calc((100dvh-140px)*0.869))]"
            >
              {/* Hot core of the glow, tight behind the cutout — same
                  scroll-driven opacity as the panel field */}
              <motion.div
                aria-hidden
                className="absolute -inset-x-20 -inset-y-10 z-0"
                style={{
                  opacity: glowOpacity,
                  background:
                    "radial-gradient(62% 58% at 50% 42%, color-mix(in oklch, var(--color-lime) 65%, transparent), transparent 72%)",
                }}
              />

              <Image
                src="/feature-hand-new.png"
                alt="A shopper browsing a product page on their phone"
                width={940}
                height={1091}
                className="relative z-10 w-full h-auto [filter:drop-shadow(0_24px_48px_rgba(0,0,0,0.18))]"
              />

              {/* Chip window — decorative; the copy carries the content.
                  Anchored over the phone (~30% into the cropped image). */}
              <div
                aria-hidden
                className="absolute inset-y-0 left-0 translate-x-0 sm:left-[30%] sm:-translate-x-1/2 z-20 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,#000_10%,#000_90%,transparent)]"
              >
                <motion.div
                  ref={colRef}
                  style={{ y: conveyorY }}
                  className="flex flex-col w-[240px] sm:w-[280px] lg:w-[300px]"
                >
                  {CHIPS.map((c, i) => (
                    <Chip key={i} {...c} />
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
