"use client";

/* Brand carousel — shopper view, between the hero and the feature section.
 * Infinite logo marquee of the platform's brands (assets exported from the
 * demo catalogue into /public/brand-logos). Logos render as ink silhouettes
 * (brightness(0)) so light/white marks stay visible on the paper background
 * and the wall reads as one system. Plain <img>: mixed intrinsic sizes,
 * height-capped by CSS, no next/image layout needed. */

const LOGOS = [
  "5thavefashion",
  "aliverti",
  "artclubandfriends",
  "balloeyewear",
  "breazies",
  "burnt",
  "embedded",
  "fieldsstore",
  "freedomofmovement",
  "freestylesa",
  "hannahlavery",
  "klothandkin",
  "koikoi",
  "kokonova",
  "madebyfade",
  "netterose",
  "pichulik",
  "praiaeyewear",
  "sakanya",
  "saksak",
  "sittingpretty",
  "sobroke",
  "stiebeuel",
  "suhu",
  "tolthema",
  "weareamani",
  "wearegods",
  "wildthingsco",
];

function LogoTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
      className="flex shrink-0 items-center gap-10 pr-10"
    >
      {LOGOS.map((slug) => (
        // Uniform fixed box per logo (inline styles — the arbitrary-value
        // Tailwind class was dropped by the compiler, letting 8:1 wordmarks
        // render unbounded). object-contain centers each mark inside.
        <div
          key={slug}
          className="flex items-center justify-center shrink-0"
          style={{ height: 22, width: 96 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/brand-logos/${slug}.png`}
            alt={ariaHidden ? "" : `${slug} logo`}
            className="opacity-60 [filter:brightness(0)]"
            style={{
              maxHeight: "100%",
              maxWidth: "100%",
              width: "auto",
              height: "auto",
              objectFit: "contain",
            }}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

export default function BrandCarousel() {
  return (
    <section className="bg-[var(--color-paper)] pt-12 lg:pt-16 pb-4 lg:pb-6 overflow-hidden">
      <style>{`
        @keyframes brand-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .brand-marquee {
          animation: brand-marquee 55s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee { animation: none; }
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center space-y-3 mb-10 px-6">
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
          Brands
        </span>
        <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.08]">
          50+ Premium Wear Brands
        </h2>
      </div>

      {/* Edge-faded infinite marquee: two identical tracks, shifted -50%. */}
      <div className="[mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]">
        <div className="brand-marquee flex w-max">
          <LogoTrack />
          <LogoTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
