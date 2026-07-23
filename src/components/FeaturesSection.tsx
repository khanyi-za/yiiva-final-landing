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

        {/* Brand-energy strip — horizontal swipe carousel on mobile, 3-up grid on sm+ */}
        <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scrollbar-hide sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible lg:gap-8">
          {BRAND_CLIPS.map((c) => (
            <div key={c.video} className={`w-[72%] shrink-0 snap-center sm:w-auto sm:shrink ${c.offset}`}>
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
