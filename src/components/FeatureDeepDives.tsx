"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Alternating image/text deep-dives (stitch-style), one real screenshot each.
// Copy reuses the original site's product copy.
const DIVES = [
  {
    heading: "Run your whole store from one dashboard",
    body: "Products, orders, collections and earnings — everything you need to run your brand, in one place.",
    image: "/yiiva-dashboard.png",
    alt: "Yiiva merchant dashboard overview",
  },
  {
    heading: "Your whole catalogue, organised",
    body: "Add products, set variants and stock, and keep your storefront up to date — with images, prices and collections in one view.",
    image: "/merchant-products.png",
    alt: "Product catalogue in the Yiiva merchant dashboard",
  },
  {
    heading: "Manage every order, start to finish",
    body: "Follow each order from payment to delivery — confirmed, dispatched, delivered — with returns handled in the same place.",
    image: "/merchant-orders.png",
    alt: "Order management in the Yiiva merchant dashboard",
  },
  {
    heading: "See what you earn, and get paid out",
    body: "A clear statement per order — sales, YIIVA's 5.5% commission, and your payout. Shipping is on us, never your margin.",
    image: "/merchant-earnings.png",
    alt: "Earnings and payouts in the Yiiva merchant dashboard",
  },
];

function Pedestal({ image, alt }: { image: string; alt: string }) {
  return (
    <Image
      src={image}
      alt={alt}
      width={1440}
      height={910}
      className="w-full h-auto rounded-2xl ring-1 ring-black/5 shadow-2xl shadow-black/10"
    />
  );
}

export default function FeatureDeepDives() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6 space-y-16 lg:space-y-28">
        {DIVES.map((d, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <motion.div
              key={d.heading}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={`lg:col-span-7 ${imageFirst ? "lg:order-1" : "lg:order-2"}`}>
                <Pedestal image={d.image} alt={d.alt} />
              </div>
              <div className={`lg:col-span-5 ${imageFirst ? "lg:order-2" : "lg:order-1"}`}>
                <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
                  {d.heading}
                </h3>
                <p className="mt-5 text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed max-w-md">
                  {d.body}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
