"use client";
import { motion } from "framer-motion";

// One big brand video + text, alternating left/right (stitch.me-style).
// Used sparingly — one video per section.
interface VideoFeatureProps {
  eyebrow?: string;
  heading: string;
  body: string;
  video: string;
  side?: "left" | "right";
}

export default function VideoFeature({ eyebrow, heading, body, video, side = "left" }: VideoFeatureProps) {
  const imageFirst = side === "left";
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <motion.div
        className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
          <div className="rounded-[var(--radius-lg)] overflow-hidden aspect-[4/5] w-full max-w-md mx-auto border border-[var(--color-ink)]/10">
            <video autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src={video} type="video/mp4" />
            </video>
          </div>
        </div>
        <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
          {eyebrow && (
            <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
              {eyebrow}
            </span>
          )}
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
            {heading}
          </h2>
          <p className="mt-5 text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed max-w-md">
            {body}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
