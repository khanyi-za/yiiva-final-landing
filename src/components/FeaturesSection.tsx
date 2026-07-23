"use client";

// Centered intro + an auto-scrolling brand-video marquee, then positioning.
const BRAND_CLIPS = [
  "/images/card_videos/6.mp4",
  "/images/hero_media/3.mp4",
  "/images/card_videos/8.mp4",
];

export default function FeaturesSection() {
  return (
    <section className="pt-16 pb-0 bg-[var(--color-paper)]">
      <div className="w-[90%] mx-auto">
        {/* Centered title + intro */}
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] leading-tight tracking-tight">
            The Mobile Commerce Platform Built For Independent Brands
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            From streetwear to skincare, YIIVA helps independent brands sell smarter: get discovered by the right customers, take seamless payments, and ship fast.
          </p>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            We believe brands should focus more on growing and creating, not handling orders and deliveries.
          </p>
        </div>
      </div>

      {/* Brand-energy strip — seamless auto-scrolling marquee (full-bleed) */}
      <div className="mt-12 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_6%,#000_94%,transparent)]">
        <div
          className="yiiva-marquee flex w-max gap-4 lg:gap-6"
          style={{ animationDuration: "32s" }}
        >
          {[...BRAND_CLIPS, ...BRAND_CLIPS].map((src, i) => (
            <div key={i} className="w-[200px] sm:w-[240px] shrink-0" aria-hidden={i >= BRAND_CLIPS.length}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Positioning line (centered) */}
      <div className="px-6 pt-14 pb-2">
        <div className="max-w-3xl mx-auto text-center space-y-5">
          <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
            So, What Is YIIVA?
          </h3>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            YIIVA is where an independent brand becomes a business: the place to get discovered, sell, and reach more customers.
          </p>
        </div>
      </div>
    </section>
  );
}
