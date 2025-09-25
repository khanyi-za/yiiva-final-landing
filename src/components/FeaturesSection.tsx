"use client";

export default function FeaturesSection() {
  return (
    <section className="px-8 py-16" style={{backgroundColor: '#FAF9F6'}}>
      <div className="max-w-8xl mx-auto space-y-12">
        {/* Centered Title */}
        <div className="text-center">
          <h2 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
            Where your brand becomes a business.
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Create content that inspires.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 font-medium">
                Sign up with your email to get a free demo
              </p>
              <button className="flex items-center gap-3 px-8 py-3 border-2 border-orange-500 text-black rounded-full font-medium hover:bg-orange-50 transition-colors mt-[0.6rem]">
                Sign Up
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="col-span-12 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-center space-y-4 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden" 
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
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                    Sign up with
                  </h3>
                  <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                    Create content that inspires. page when looking at its layout
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-center space-y-4 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden" 
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
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                    Sign up with
                  </h3>
                  <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                    Create content that inspires. page when looking at its layout
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl p-8 mx-2 flex flex-col justify-center space-y-4 transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden" 
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
                {/* Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-xl font-semibold text-white text-center drop-shadow-lg">
                    Sign up with
                  </h3>
                  <p className="text-base text-white leading-relaxed text-center drop-shadow-lg">
                    Create content that inspires. page when looking at its layout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 