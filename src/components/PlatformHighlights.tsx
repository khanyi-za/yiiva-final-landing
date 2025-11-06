"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PlatformHighlights() {
  return (
    <section
      data-platform-highlights
      style={{
        backgroundColor: '#030f02',
        borderTopLeftRadius: '3rem',
        borderTopRightRadius: '3rem'
      }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-16">
        {/* Heading */}
        <motion.div
          className="text-white text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl lg:text-6xl mb-4 lg:mb-6" style={{fontFamily: 'Roboto Thin, sans-serif', fontWeight: 100}}>The one platform converting your brands content into sales.</h2>
        </motion.div>

        {/* Main Content */}
        <div className="text-white space-y-8 lg:space-y-16">
          {/* Sell text section */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl lg:text-4xl leading-relaxed" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 300}}>
              <span className="text-white">Your content tells your brand's story, we provide the audience. </span>
              <span className="text-gray-400">Reach customers with ease. </span>
              <span className="text-gray-400">Sell effortlessly on our mobile platform, while we handle the rest.</span>
            </h3>
          </motion.div>

          {/* Product showcase grid */}
          <motion.div
            className="mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Mobile: Horizontal scroll, Desktop: Grid */}
            <div className="flex md:grid md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-hide">
              {/* Card 1 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 w-64 md:w-auto snap-center">
                <Image
                  src="/YIIVA 12.png"
                  alt="Platform showcase"
                  width={294}
                  height={633}
                  className="w-full h-auto"
                />
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 w-64 md:w-auto snap-center">
                <Image
                  src="/YIIVA 12.png"
                  alt="Platform showcase"
                  width={294}
                  height={633}
                  className="w-full h-auto"
                />
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 w-64 md:w-auto snap-center">
                <Image
                  src="/YIIVA 12.png"
                  alt="Platform showcase"
                  width={294}
                  height={633}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Crops section */}
          <motion.div
            className="text-center max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-3xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
              Easily source, trade, and contract crops
            </h3>
            <p className="text-base lg:text-2xl text-gray-300 leading-relaxed mb-6 lg:mb-8 max-w-4xl mx-auto">
              Meet your sourcing targets and requirements effortlessly—whether through contracting, trading, or BBBEE sourcing. Secure the stock you need, when you need it, with reliable and consistent delivery.
            </p>
            <p className="text-sm lg:text-base text-gray-400 leading-relaxed mb-8 lg:mb-12 max-w-3xl mx-auto">
              Acquire new customers and keep them coming back for more with integrated marketing tools and insightful analytics. Do it all right from your pocket with the full-featured Shopify mobile app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8 lg:mb-12">
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-green-500 text-white rounded-full text-base lg:text-lg font-medium hover:bg-green-600 transition-colors">
                Trader app
              </button>
              <button className="px-6 lg:px-8 py-3 lg:py-4 bg-green-500 text-white rounded-full text-base lg:text-lg font-medium hover:bg-green-600 transition-colors">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}