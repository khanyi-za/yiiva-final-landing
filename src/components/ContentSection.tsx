"use client";
import Image from "next/image";

export default function ContentSection() {
  return (
    <section className="py-16" style={{backgroundColor: '#FAF9F6'}}>
      {/* Horizontal line across full width */}
      <div className="w-full border-t border-gray-300 mb-12"></div>

      <div className="max-w-7xl mx-auto px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-light text-black">
            It&apos;s easy to start selling
          </h2>
        </div>

        <div className="grid grid-cols-12 gap-8 items-center">
          {/* Left side - Images */}
          <div className="col-span-12 lg:col-span-5">
            <div className="relative flex gap-4 items-start">
              {/* First image */}
              <div className="relative rounded-2xl overflow-hidden" style={{width: '220px', height: '315px'}}>
                <Image
                  src="/images/1.jpg"
                  alt="Product setup"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
              {/* Second image - offset down */}
              <div className="relative rounded-2xl overflow-hidden mt-12" style={{width: '220px', height: '315px'}}>
                <Image
                  src="/images/2.jpg"
                  alt="Store customization"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Steps */}
          <div className="col-span-12 lg:col-span-7 space-y-8">
            {/* Step 01 */}
            <div className="flex items-center gap-6 pb-4 border-b border-gray-700">
              <span className="text-2xl font-bold text-green-500">01</span>
              <h3 className="text-2xl lg:text-3xl font-light text-black">
                Add your first product
              </h3>
            </div>

            {/* Step 02 */}
            <div className="flex items-center gap-6 pb-4 border-b border-gray-700">
              <span className="text-2xl font-bold text-green-500">02</span>
              <h3 className="text-2xl lg:text-3xl font-light text-black">
                Customize your store
              </h3>
            </div>

            {/* Step 03 */}
            <div className="flex items-center gap-6 pb-4 border-b border-gray-700">
              <span className="text-2xl font-bold text-green-500">03</span>
              <h3 className="text-2xl lg:text-3xl font-light text-black">
                Set up payments
              </h3>
            </div>

            {/* Button */}
            <div className="flex justify-end pt-4">
              <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
                Join waitinglist for first access
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 