"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Dark band showing the real shopping app screenshots as phones.
const SHOTS = [
  { src: "/shop.png", label: "Browse", offset: "lg:mt-8" },
  { src: "/product.png", label: "Discover", offset: "lg:mt-0" },
  { src: "/track.png", label: "Track", offset: "lg:mt-8" },
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
          <div className="mt-12 flex justify-center items-end gap-4 lg:gap-8">
            {SHOTS.map((s) => (
              <motion.div
                key={s.label}
                className={`flex flex-col items-center ${s.offset}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src={s.src}
                  alt={`Yiiva app — ${s.label}`}
                  width={194}
                  height={417}
                  className="w-[100px] sm:w-[140px] lg:w-[190px] h-auto rounded-2xl shadow-2xl"
                />
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
