"use client";
import Image from "next/image";

// Shoppers "what you'll find" — real category photos with the label overlaid.
// Uniform framing (hairline border + consistent gradient), static (no hover),
// since categories aren't browsable pre-launch.
const CATEGORIES = [
  { name: "Streetwear", image: "/categories/hoodies.jpg" },
  { name: "Dresses", image: "/categories/dresses.jpg" },
  { name: "Art & prints", image: "/categories/art.jpg" },
  { name: "Footwear", image: "/categories/footwear.jpg" },
  { name: "Bags", image: "/categories/bags.jpg" },
  { name: "T-Shirts", image: "/categories/tees.jpg" },
];

export default function CategoryTiles() {
  return (
    <section className="bg-[var(--color-paper)] py-16 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
            Explore
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
            What you&apos;ll find
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            Homegrown South African brands across the things you actually shop for.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {CATEGORIES.map((c) => (
            <div
              key={c.name}
              className="relative aspect-[4/5] rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-sage)]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                sizes="(max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <span className="absolute left-4 bottom-4 font-[family-name:var(--font-display)] text-lg lg:text-xl font-semibold text-white drop-shadow-sm">
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
