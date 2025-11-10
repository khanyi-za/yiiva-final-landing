"use client";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] px-4 lg:px-6 py-8 lg:py-12 overflow-hidden pt-[calc(80px+2rem)] lg:pt-[calc(80px+3rem)]">
      <div className="max-w-7xl mx-auto relative h-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Column - Content + Video Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-8">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl lg:text-5xl text-white leading-tight" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 900}}>
                  Grow Your Brand,<br />
                  Sell On YIIVA
                </h1>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-md">
                  Reach more customers! YIIVA helps creative brands get discovered and sell effortlessly. Automate your operations, with built-in payments, delivery, and customer care so you can focus on creating, not managing.
                </p>
              </div>

              {/* Email Signup */}
              <div className="space-y-3 lg:space-y-4">
                <p className="text-gray-700 font-medium text-sm lg:text-base">
                  Sign up with your email to get product demo & join the waitlist
                </p>
                {/* Horizontal row layout for all screen sizes */}
                <div className="flex flex-row gap-3 lg:gap-4 max-w-lg">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-4 lg:px-6 py-2.5 lg:py-3 border-2 border-gray-300 rounded-full focus:border-black focus:outline-none transition-colors text-sm lg:text-base"
                  />
                  <button className="px-6 lg:px-8 py-2.5 lg:py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-50 transition-colors text-sm lg:text-base whitespace-nowrap">
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Feature Point */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">
                  Monetize your content, drive sales
                </span>
              </div>
            </div>

            {/* Left Column 3-Video Grid - Hidden on Mobile, Visible on Large Screens */}
            <div className="hidden lg:flex gap-4 mt-8 justify-end">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/3.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/4.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative w-32 h-28 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/5.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: 6-Video Masonry Grid (2 columns × 3 rows) - Visible only on Mobile */}
          <div className="col-span-12 lg:hidden">
            <div className="grid grid-cols-2 gap-3 mt-6">
              {/* Row 1 */}
              <div className="relative h-56 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/7.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/11.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Row 2 */}
              <div className="relative h-48 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/3.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/6.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Row 3 */}
              <div className="relative h-52 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/9.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Large Screen: 11-Video Masonry Grid - Hidden on Mobile, Visible on Large Screens */}
          <div className="hidden lg:block col-span-12 lg:col-span-6 relative">
            <div className="absolute inset-0 grid grid-cols-3 gap-4 h-full">
              {/* Column 1 - Left */}
              <div className="flex flex-col gap-4 justify-end">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/10.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Column 2 - Middle */}
              <div className="flex flex-col gap-4 justify-center">
                <div className="relative h-56 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/7.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/8.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Column 3 - Right */}
              <div className="flex flex-col gap-4 justify-start">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/6.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/11.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/9.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 