"use client";

// Centered intro + an auto-scrolling brand-video marquee, then positioning.
// Marquee + "So, What Is YIIVA?" temporarily removed — replacements TBD.
// const BRAND_CLIPS = [
//   "/images/card_videos/6.mp4",
//   "/images/hero_media/3.mp4",
//   "/images/card_videos/8.mp4",
// ];

export default function FeaturesSection() {
  return (
    <section className="pt-16 pb-0 bg-[var(--color-paper)]">
      <div className="w-[90%] mx-auto">
        {/* Centered intro — the section heading lives in VerticalsShowcase,
            left of the phone visual */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            YIIVA offers brands a new way to connect with customers, grow sales and manage everything from payment to delivery in one place.
          </p>
        </div>
      </div>

      {/* Brand-energy strip (marquee) + "So, What Is YIIVA?" positioning block
          removed for now — replacements TBD:

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

      */}
    </section>
  );
}
