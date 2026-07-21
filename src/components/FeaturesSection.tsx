"use client";

export default function FeaturesSection() {
  return (
    <section className="pt-16 pb-0 bg-[var(--color-paper)]">
      {/* Horizontal line across full width */}
      <div className="w-full border-t border-[var(--color-sage)] mb-12"></div>

      <div className="max-w-8xl mx-auto space-y-12 px-4 lg:px-8">
        {/* Centered Title */}
        <div className="flex justify-center lg:justify-start lg:pl-20">
          <h2 className="font-[family-name:var(--font-display)] text-2xl lg:text-5xl font-bold text-[var(--color-ink)] leading-tight tracking-tight px-6">
            The Mobile Commerce Platform <br className="lg:hidden" />Built For S.A. Brands
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-6 lg:gap-12 items-start">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-4 space-y-6 lg:space-y-8 px-2 lg:px-0">
            <div className="space-y-4 lg:space-y-6">
              <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed break-words">
                From streetwear to skincare, YIIVA helps South African brands sell smarter with AI-powered discovery and reach to audience, seamless payments, and fast nationwide delivery.
              </p>
              <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed break-words">
                We believe brands should focus more on growing and creating, not handling orders and deliveries.
              </p>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-[4%] lg:px-0">
              {/* Card 1 with description */}
              <div>
                <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                     style={{height: '423px', border: '1px solid #636363', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'}}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 165, 0, 0.4)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/images/card_videos/6.mp4" type="video/mp4" />
                  </video>
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-black/78 via-black/39 to-black/98"></div>
                  {/* Title at top */}
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                      Order Management
                    </h3>
                  </div>
                  {/* Description at bottom */}
                  <div className="relative z-10 pb-4">
                    <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                      Track, manage, and fulfill every order in one simple dashboard.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 with description */}
              <div>
                <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                     style={{height: '423px', border: '1px solid #636363', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'}}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 165, 0, 0.4)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/images/card_videos/7.mp4" type="video/mp4" />
                  </video>
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-black/78 via-black/39 to-black/98"></div>
                  {/* Title at top */}
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                      Delivery & Shipping
                    </h3>
                  </div>
                  {/* Description at bottom */}
                  <div className="relative z-10 pb-4">
                    <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                      Fast, reliable nationwide delivery. We handle logistics so you don&apos;t have to.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 with description */}
              <div>
                <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-between transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden"
                     style={{height: '423px', border: '1px solid #636363', boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)'}}
                     onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 15px 35px rgba(255, 165, 0, 0.4)'}
                     onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)'}>
                  {/* Video Background */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source src="/images/card_videos/8.mp4" type="video/mp4" />
                  </video>
                  {/* Gradient Overlay */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-gradient-to-b from-black/78 via-black/39 to-black/98"></div>
                  {/* Title at top */}
                  <div className="relative z-10 pt-4">
                    <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                      Real-time leads & sales trends
                    </h3>
                  </div>
                  {/* Description at bottom */}
                  <div className="relative z-10 pb-4">
                    <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                      See what&apos;s selling, who&apos;s buying, and what&apos;s trending all in real time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal line across full width */}
      <div className="w-full border-t border-[var(--color-sage)] mt-12"></div>

      {/* Spacer to extend vertical distance by additional 20% */}
      <div className="h-12"></div>

      {/* How It Works text and description - positioned at bottom edge with no margin/padding */}
      <div className="px-8 space-y-4">
        <div className="max-w-8xl mx-auto flex justify-center lg:justify-start lg:pl-20">
          <h3 className="font-[family-name:var(--font-display)] text-4xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight px-6 py-3">
            So, What Is YIIVA?
          </h3>
        </div>

        {/* Paragraph text */}
        <div className="max-w-8xl mx-auto flex justify-center lg:justify-start lg:pl-20">
          <p className="text-xl lg:text-2xl text-[var(--color-ink)] px-6 leading-relaxed font-medium">
            A mobile app online retailer that bridges the connection between Brand and customer. Think of YIIVA as Superbalist, but for homegrown South African Brands.
          </p>
        </div>
      </div>
    </section>
  );
} 