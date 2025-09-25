export default function ContentSection() {
  return (
    <section className="px-8 py-[1.86rem]" style={{backgroundColor: '#FAF9F6'}}>
      <div className="max-w-8xl mx-auto">
        <div className="grid grid-cols-12 gap-8">
          {/* Left empty space */}
          <div className="col-span-12 lg:col-span-5"></div>
          
          {/* Right content */}
          <div className="col-span-12 lg:col-span-7 flex justify-center">
            <div className="w-3/5 space-y-6">
              {/* Top text */}
              <div className="text-left">
                <p className="text-lg text-gray-700 font-medium">
                  Sign up with your email to get a free demo
                </p>
              </div>
              
              {/* Main content block */}
              <div className="space-y-[1.125rem]">
                <p className="text-[1.22rem] lg:text-[1.46rem] text-black leading-relaxed font-mono text-left">
                  We craft compelling marketing strategies to promote events effectively, ensuring they reach the right audience and maximize engagement.
                </p>
                
                {/* Sign up button */}
                <div className="flex justify-end">
                  <button className="flex items-center gap-[0.62rem] px-[1.86rem] py-[0.62rem] border-2 border-orange-500 text-orange-500 rounded-full text-[0.7rem] font-medium hover:bg-orange-50 transition-colors">
                    Sign Up
                    <svg className="w-[0.775rem] h-[0.775rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 