"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useSignupModal } from "./SignupModalProvider";

export default function PlatformHighlights() {
  const { openSignup } = useSignupModal();
  return (
    <section
      data-platform-highlights
      className="bg-[var(--color-anchor)]"
      style={{
        borderTopLeftRadius: '3rem',
        borderTopRightRadius: '3rem'
      }}>
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-8 lg:py-16">
        {/* Heading */}
        <motion.div
          className="text-[var(--color-on-anchor)] text-center mb-6 lg:mb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="font-[family-name:var(--font-display)] font-medium text-3xl lg:text-6xl mb-4 lg:mb-6 tracking-tight">The one platform converting your brands content into sales.</h2>
        </motion.div>

        {/* Main Content */}
        <div className="text-[var(--color-on-anchor)] space-y-8 lg:space-y-16">
          {/* Sell text section */}
          <motion.div
            className="text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="font-[family-name:var(--font-display)] font-normal text-xl lg:text-4xl leading-relaxed">
              <span className="text-[var(--color-on-anchor)]">Your content tells your brand&apos;s story, we provide the audience. </span>
              <span className="text-[var(--color-on-anchor-60)]">Reach customers with ease. </span>
              <span className="text-[var(--color-on-anchor-60)]">Sell effortlessly on our mobile platform, while we handle the rest.</span>
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
            <div className="flex md:flex md:flex-row gap-3 mx-auto overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none scrollbar-hide justify-center items-center">
              {/* Card 1 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 snap-center" style={{width: '194px', height: '417px', minHeight: '417px', maxHeight: '417px'}}>
                <Image
                  src="/shop.png"
                  alt="Shop showcase"
                  fill
                  sizes="194px"
                  className="object-cover"
                  style={{objectFit: 'cover', objectPosition: 'center'}}
                />
              </div>

              {/* Card 2 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 snap-center" style={{width: '194px', height: '417px', minHeight: '417px', maxHeight: '417px'}}>
                <Image
                  src="/product.png"
                  alt="Product showcase"
                  fill
                  sizes="194px"
                  className="object-cover"
                  style={{objectFit: 'cover', objectPosition: 'center'}}
                />
              </div>

              {/* Card 3 */}
              <div className="relative rounded-2xl overflow-hidden flex-shrink-0 snap-center" style={{width: '223px', height: '417px', minHeight: '417px', maxHeight: '417px'}}>
                <Image
                  src="/track.png"
                  alt="Track showcase"
                  fill
                  sizes="223px"
                  className="object-cover"
                  style={{objectFit: 'cover', objectPosition: 'left center'}}
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
            <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold mb-6 lg:mb-8 leading-tight tracking-tight">
              Post your products, automate your sales, and scale with ease
            </h3>
            <p className="text-base lg:text-2xl text-[var(--color-on-anchor-60)] leading-relaxed mb-6 lg:mb-8 max-w-4xl mx-auto">
              YIIVA connects every part of your business: from AI-powered product tagging to payments, delivery, and customer care. One platform that automates your sales so you can focus on growing your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-8 lg:mb-12">
              <button
                onClick={openSignup}
                className="px-6 lg:px-8 py-3 lg:py-4 bg-[var(--color-accent)] text-white rounded-full text-base lg:text-lg font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
              >
                Customer Mobile App
              </button>
              <button
                onClick={openSignup}
                className="px-6 lg:px-8 py-3 lg:py-4 border border-[var(--color-on-anchor-60)]/40 text-[var(--color-on-anchor)] rounded-full text-base lg:text-lg font-medium hover:border-[var(--color-on-anchor)] transition-colors"
              >
                Dashboard
              </button>
            </div>

            {/* Dashboard Image */}
            <div className="max-w-4xl mx-auto">
              <Image
                src="/dashboard_2.png"
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