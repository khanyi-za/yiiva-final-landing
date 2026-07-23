"use client";
import Image from "next/image";

// Shoppers "what you'll find" — bento layout: one large featured tile + a 2x2
// of the rest. Static (categories aren't browsable pre-launch).
const FEATURED = { name: "Streetwear", image: "/categories/hoodies.jpg" };
const REST = [
  { name: "Dresses", image: "/categories/dresses.jpg" },
  { name: "Footwear", image: "/categories/footwear.jpg" },
  { name: "Bags", image: "/categories/bags.jpg" },
  { name: "T-Shirts", image: "/categories/tees.jpg" },
];

function Tile({
  name,
  image,
  className,
  big,
}: {
  name: string;
  image: string;
  className?: string;
  big?: boolean;
}) {
  return (
    <div className={`relative rounded-[var(--radius-md)] overflow-hidden border border-[var(--color-sage)] ${className ?? ""}`}>
      <Image src={image} alt={name} fill sizes={big ? "(max-width:1024px) 100vw, 50vw" : "(max-width:1024px) 50vw, 25vw"} className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className={`absolute left-4 bottom-4 font-[family-name:var(--font-display)] font-semibold text-white drop-shadow-sm ${big ? "text-xl lg:text-3xl" : "text-lg lg:text-xl"}`}>
        {name}
      </span>
    </div>
  );
}

export default function CategoryTiles() {
  return (
    <section className="bg-[var(--color-paper)] py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
            Explore
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
            What you&apos;ll find
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            Independent brands across the things you actually shop for.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <Tile
            {...FEATURED}
            big
            className="col-span-2 lg:row-span-2 aspect-[4/5] lg:aspect-auto"
          />
          {REST.map((c) => (
            <Tile key={c.name} {...c} className="aspect-square" />
          ))}
        </div>
      </div>
    </section>
  );
}
