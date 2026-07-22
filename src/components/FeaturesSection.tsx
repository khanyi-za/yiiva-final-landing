"use client";

// Centered intro + a brand-energy strip (three homegrown-brand videos, no
// operational labels) that illustrates who Yiiva is built for. Copy verbatim.
const BRAND_CLIPS = [
  { video: "/images/card_videos/6.mp4", offset: "lg:mt-0" },
  { video: "/images/hero_media/3.mp4", offset: "lg:mt-12" },
  { video: "/images/card_videos/8.mp4", offset: "lg:mt-0" },
];

export default function FeaturesSection() {
  return (
    <section className="pt-16 pb-0 bg-[var(--color-paper)]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Centered title + intro */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] leading-tight tracking-tight">
            The Mobile Commerce Platform Built For S.A. Brands
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            From streetwear to skincare, YIIVA helps South African brands sell smarter: get discovered by the right customers, take seamless payments, and ship fast nationwide.
          </p>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            We believe brands should focus more on growing and creating, not handling orders and deliveries.
          </p>
        </div>

        {/* Brand-energy strip — the kind of homegrown brands Yiiva is built for */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {BRAND_CLIPS.map((c) => (
            <div key={c.video} className={c.offset}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={c.video} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Positioning line (centered) */}
      <div className="px-6 pt-20 pb-2">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
            So, What Is YIIVA?
          </h3>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            YIIVA is where a brand becomes a business. Think of it as Superbalist, but purpose-built for homegrown South African brands.
          </p>
        </div>
      </div>
    </section>
  );
}
