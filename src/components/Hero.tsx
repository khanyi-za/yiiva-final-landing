"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] px-6 py-12 overflow-hidden" style={{backgroundColor: '#FAF9F6'}}>
      {/* Secondary Background - 75% height */}
      <div 
        className="absolute bottom-0 left-0 right-0 -z-10"
        style={{
          backgroundColor: '#030f02',
          height: '75%'
        }}
      ></div>
      
      <div className="max-w-7xl mx-auto relative h-full">
        <div className="grid grid-cols-12 gap-8 h-full">
          {/* Left Column - Content + 2-Image Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between space-y-8">
            {/* Text Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl text-black leading-tight" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 900}}>
                  Grow Your Brand, Sell with Ease on YIIVA
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                  Transform your social media content into shoppable catalogs, manage orders, and enjoy fast delivery with YIIVA's local power.
                </p>
              </div>

              {/* Email Signup */}
              <div className="space-y-4">
                <p className="text-gray-700 font-medium">
                  Sign up with your email to get a free demo
                </p>
                <div className="flex gap-4 max-w-lg">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-full focus:border-black focus:outline-none transition-colors"
                  />
                  <button className="px-8 py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-50 transition-colors">
                    Sign Up
                  </button>
                </div>
              </div>

              {/* Feature Point */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium">
                  Monetize your content, drive sales
                </span>
              </div>
            </div>

            {/* Left Column 3-Image Grid */}
            <div className="flex gap-4 mt-8 justify-end">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden">
                <Image
                  src="/images/hero_media/1.jpg"
                  alt="Fashion content"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero_media/4.jpg"
                    alt="Fashion content"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-32 h-28 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero_media/5.jpg"
                    alt="Fashion content"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 7-Image Masonry Grid */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="absolute inset-0 grid grid-cols-3 gap-4 h-full">
              {/* Column 1 - Left */}
              <div className="flex flex-col gap-4 justify-end">
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/hero_media/2.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero_media/6.jpg"
                    alt="Fashion content"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 2 - Middle */}
              <div className="flex flex-col gap-4 justify-center">
                <div className="relative h-56 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/hero_media/7.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/hero_media/8.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero_media/3.png"
                    alt="Fashion content"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Column 3 - Right */}
              <div className="flex flex-col gap-4 justify-start">
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/hero_media/10.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/images/hero_media/11.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/hero_media/9.jpg"
                    alt="Fashion content"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 