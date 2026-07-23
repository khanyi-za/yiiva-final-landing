"use client";
import { motion } from "framer-motion";

const STEPS = [
  { n: "01", title: "Browse homegrown brands", body: "Explore a curated feed of South African makers and their latest drops." },
  { n: "02", title: "Subscribe to what you love", body: "Subscribe to the brands you love and wishlist the pieces that catch your eye." },
  { n: "03", title: "Buy, shipped to your door", body: "Check out securely in-app and we handle delivery nationwide." },
];

export default function HowDiscoveryWorks() {
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
          Getting started
        </span>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)]">
          How discovery works
        </h2>

        <motion.div
          className="relative mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Connecting line (md+), drawn left-to-right on scroll, behind the badges */}
          <motion.div
            aria-hidden
            className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-px bg-[var(--color-sage)] origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.35 }}
            viewport={{ once: true, amount: 0.3 }}
          />

          {STEPS.map((s) => (
            <motion.div key={s.n} variants={item} className="relative flex flex-col items-center text-center">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-accent)] bg-[var(--color-paper)] font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">
                {s.n}
              </div>
              <h3 className="mt-6 font-[family-name:var(--font-display)] text-xl lg:text-2xl font-semibold text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-2 text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed max-w-xs">
                {s.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
