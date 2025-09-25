import Image from "next/image";

export default function PlatformHighlights() {
  return (
    <section style={{
      backgroundColor: '#030f02',
      borderTopLeftRadius: '3rem',
      borderTopRightRadius: '3rem'
    }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-white text-center mb-16">
          <h2 className="text-6xl mb-6" style={{fontFamily: 'Roboto Thin, sans-serif', fontWeight: 100}}>The one commerce platform behind it all</h2>
        </div>

        {/* Main Content */}
        <div className="text-white space-y-16">
          {/* Sell text section */}
          <div className="text-left max-w-4xl">
            <h3 className="text-3xl lg:text-4xl leading-relaxed" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 300}}>
              <span className="text-white">Sell online and in person. </span>
              <span className="text-gray-400">Sell locally and globally. </span>
              <span className="text-gray-400">Sell direct and wholesale. </span>
              <span className="text-gray-400">Sell on desktop and mobile.</span>
            </h3>
          </div>

          {/* Product showcase grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Glossier card */}
            <div className="relative bg-white rounded-2xl overflow-hidden h-64">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-pink-50">
                <div className="flex items-center justify-center h-full">
                  <h4 className="text-6xl font-bold text-pink-300" style={{fontFamily: 'Georgia, serif'}}>
                    Glossier
                  </h4>
                </div>
              </div>
            </div>

            {/* Teal book/magazine card */}
            <div className="relative bg-teal-400 rounded-2xl overflow-hidden h-64">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <h4 className="text-2xl font-bold mb-2">Make</h4>
                  <h4 className="text-2xl font-bold mb-2">People</h4>
                  <h4 className="text-2xl font-bold">Care</h4>
                  <p className="text-sm mt-4 opacity-80">The Art of Marketing</p>
                </div>
              </div>
            </div>

            {/* Vacation sunscreen card */}
            <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl overflow-hidden h-64">
              <div className="flex items-center justify-center h-full">
                <div className="text-center text-white">
                  <h4 className="text-4xl font-bold mb-2" style={{fontFamily: 'cursive'}}>Vacation</h4>
                  <p className="text-sm">The World's Best-Smelling</p>
                  <p className="text-sm">Sunscreen</p>
                </div>
              </div>
            </div>
          </div>

          {/* Crops section */}
          <div className="text-center max-w-5xl mx-auto">
            <h3 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Easily source, trade, and contract crops
            </h3>
            <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
              Meet your sourcing targets and requirements effortlessly—whether through contracting, trading, or BBBEE sourcing. Secure the stock you need, when you need it, with reliable and consistent delivery.
            </p>
            <p className="text-base text-gray-400 leading-relaxed mb-12 max-w-3xl mx-auto">
              Acquire new customers and keep them coming back for more with integrated marketing tools and insightful analytics. Do it all right from your pocket with the full-featured Shopify mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <button className="px-8 py-4 bg-green-500 text-white rounded-full text-lg font-medium hover:bg-green-600 transition-colors">
                Trader app
              </button>
              <button className="px-8 py-4 bg-green-500 text-white rounded-full text-lg font-medium hover:bg-green-600 transition-colors">
                Dashboard
              </button>
            </div>
            
            {/* Dashboard Image */}
            <div className="max-w-4xl mx-auto">
              <Image
                src="/dashboard.png"
                alt="Dashboard interface"
                width={800}
                height={500}
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}