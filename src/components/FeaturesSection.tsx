"use client";

// Centered intro + the three original brand videos, placed cleanly (no cards,
// no overlays) with captions below. Copy is the original site's verbatim.
const FEATURES = [
  {
    title: "Order Management",
    body: "Track, manage, and fulfill every order in one simple dashboard.",
    video: "/images/card_videos/6.mp4",
    offset: "lg:mt-0",
  },
  {
    title: "Delivery & Shipping",
    body: "Fast, reliable nationwide delivery. We handle logistics so you don't have to.",
    video: "/images/card_videos/7.mp4",
    offset: "lg:mt-12",
  },
  {
    title: "Sales trends & insights",
    body: "See what's selling, who's buying, and what's trending, right in your dashboard.",
    video: "/images/card_videos/8.mp4",
    offset: "lg:mt-0",
  },
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

        {/* Three brand videos, clean + captioned (subtle stagger) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((f) => (
            <div key={f.title} className={`flex flex-col ${f.offset}`}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5]">
                <video autoPlay muted loop playsInline className="w-full h-full object-cover">
                  <source src={f.video} type="video/mp4" />
                </video>
              </div>
              <div className="mt-5 text-center px-2">
                <h3 className="font-[family-name:var(--font-display)] text-lg lg:text-xl font-semibold text-[var(--color-ink)]">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--color-ink-60)] leading-relaxed">
                  {f.body}
                </p>
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
          <p className="text-xl lg:text-2xl text-[var(--color-ink)] leading-relaxed font-medium">
            YIIVA is where a brand becomes a business: a mobile commerce platform built for South Africa&apos;s creative economy. Think of it as Superbalist, but purpose-built for homegrown South African brands.
          </p>
        </div>
      </div>
    </section>
  );
}
