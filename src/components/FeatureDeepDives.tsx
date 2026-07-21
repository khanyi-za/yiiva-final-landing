"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Alternating image/text deep-dives (stitch-style), one real screenshot each.
// Copy reuses the original site's product copy.
const DIVES = [
  {
    heading: "One dashboard for every order",
    body: "Track, manage and fulfil every order in one simple dashboard. See what's selling, who's buying and what's trending — right where you run your store.",
    image: "/dashboard_2.png",
    alt: "Yiiva seller dashboard",
    ratio: "landscape" as const,
  },
  {
    heading: "A storefront that feels like your brand",
    body: "Your content tells your brand's story — we provide the audience. Sell effortlessly on our mobile platform while we handle payments, delivery and customer care.",
    image: "/shop.png",
    alt: "Yiiva mobile storefront",
    ratio: "phone" as const,
  },
];

function Pedestal({ image, alt, ratio }: { image: string; alt: string; ratio: "landscape" | "phone" }) {
  return (
    <div className="rounded-[var(--radius-lg)] bg-[var(--color-paper-2)] border border-[var(--color-sage)] p-6 lg:p-10 flex items-center justify-center overflow-hidden">
      {ratio === "landscape" ? (
        <Image src={image} alt={alt} width={800} height={500} className="w-full h-auto rounded-xl shadow-lg" />
      ) : (
        <Image src={image} alt={alt} width={194} height={417} className="h-auto w-[180px] lg:w-[200px] rounded-2xl shadow-lg" />
      )}
    </div>
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className={imageFirst ? "lg:order-1" : "lg:order-2"}>
                <Pedestal image={d.image} alt={d.alt} ratio={d.ratio} />
              </div>
              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
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
