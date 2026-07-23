"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

// Alternating image/text deep-dives (stitch-style), one real screenshot each.
// Copy reuses the original site's product copy.
const DIVES = [
  {
    heading: "Run your whole store from one dashboard",
    body: "Products, orders, collections and earnings: everything you need to run your brand, in one place.",
    image: "/yiiva-dashboard.png",
    alt: "YIIVA merchant dashboard overview",
  },
  {
    heading: "Your whole catalogue, organised",
    body: "Add products, set variants and stock, and keep your storefront up to date, with images, prices and collections in one view.",
    image: "/merchant-products.png",
    alt: "Product catalogue in the YIIVA merchant dashboard",
  },
  {
    heading: "Manage every order, start to finish",
    body: "Follow each order from payment to delivery (confirmed, dispatched, delivered), with returns handled in the same place.",
    image: "/merchant-orders.png",
    alt: "Order management in the YIIVA merchant dashboard",
  },
  {
    heading: "See what you earn, and get paid out",
    body: "A clear statement per order: sales and your payout. Shipping is on us, never your margin.",
    image: "/merchant-earnings.png",
    alt: "Earnings and payouts in the YIIVA merchant dashboard",
  },
];

function Dive({ dive, imageFirst }: { dive: (typeof DIVES)[number]; imageFirst: boolean }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Gentle parallax drift on the screenshot as the row passes through the viewport.
  const drift = useTransform(scrollYProgress, [0, 1], [56, -56]);
  const y = reduce ? 0 : drift;
  const enterX = reduce ? 0 : imageFirst ? -48 : 48;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
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
          <Image
            src={dive.image}
            alt={dive.alt}
            width={1440}
            height={910}
            className="w-full h-auto rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-black/10"
          />
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
        <motion.h3
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]"
        >
          {dive.heading}
        </motion.h3>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-5 text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed max-w-md"
        >
          {dive.body}
        </motion.p>
      </motion.div>
    </div>
  );
}

export default function FeatureDeepDives() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16 lg:space-y-28">
        {DIVES.map((d, i) => (
          <Dive key={d.heading} dive={d} imageFirst={i % 2 === 0} />
        ))}
      </div>
    </section>
  );
}
