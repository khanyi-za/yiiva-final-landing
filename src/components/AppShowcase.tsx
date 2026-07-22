"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Dark band showing the real shopping app screenshots as phones.
// All phones render in a uniform fixed-ratio frame (object-cover, top-aligned)
// so they're the same size regardless of source dimensions.
const SHOTS = [
  { src: "/app-explore.png", label: "Browse" },
  { src: "/app-brand.png", label: "Discover brands" },
  { src: "/app-track.png", label: "Track" },
];

export default function AppShowcase() {
  return (
    <section className="bg-[var(--color-paper)] py-8">
      <div
        className="bg-[var(--color-anchor)] px-6 py-16 lg:py-24"
        style={{ borderRadius: "3rem" }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]">
            The app
          </span>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-on-anchor)] leading-[1.08]">
            Browse, discover and buy — all in one app
          </h2>
          <div className="mt-12 flex justify-center items-start gap-4 lg:gap-8">
            {SHOTS.map((s) => (
              <motion.div
                key={s.label}
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="relative w-[110px] sm:w-[150px] lg:w-[200px] aspect-[67/148] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={s.src}
                    alt={`Yiiva app — ${s.label}`}
                    fill
                    sizes="200px"
                    className="object-cover object-top"
                  />
                </div>
                <span className="mt-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] text-[var(--color-on-anchor-60)]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
