"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FeatureCarouselProps {
  words?: string[];
  interval?: number;
  animationDuration?: number;
}

export default function FeatureCarousel({
  words: propWords,
  interval = 2000,
}: FeatureCarouselProps = {}) {
  const words = propWords || [
    "Delivery Friction",
    "Friction From Discovery To Purchase",
    "Confusing DM Orders",
    "Fragmented WhatsApp Orders",
    "Lost Leads",
    "Extra Costs",
  ];

  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((x) => (x + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  const y = "0.5em";

  return (
    <section className="py-6 lg:py-10">
      <div className="relative mx-auto w-[90%] rounded-3xl bg-[var(--color-anchor)] overflow-hidden px-6 py-12 lg:py-20 text-center">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.25em] text-[color-mix(in_oklch,var(--color-accent)_60%,white)]">
          No more
        </span>
        <div className="relative mt-4 min-h-[6rem] lg:min-h-[8rem]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[i]}
              initial={{ y, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-0.5em", opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 flex items-center justify-center text-center px-2 font-[family-name:var(--font-display)] font-extrabold text-3xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight text-[var(--color-on-anchor)] [overflow-wrap:anywhere]"
            >
              {words[i]}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="sr-only" aria-live="polite">
          No {words[i]}
        </span>
      </div>
    </section>
  );
}
