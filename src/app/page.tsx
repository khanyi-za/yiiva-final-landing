import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import FeatureCarousel from "@/components/FeatureCarousel";
import ContentSection from "@/components/ContentSection";
import PlatformHighlights from "@/components/PlatformHighlights";
import StickyFooterReveal from "@/components/StickyFooterReveal";

export default function Home() {
  return (
    <>
      {/* Navigation Bar - Outside StickyFooterReveal so it stays fixed */}
      <Navbar />

      <StickyFooterReveal>
        <div className="min-h-screen relative" style={{backgroundColor: '#FAF9F6'}}>
          {/* Dark Green Background - Covers Navbar + 98.5% of Hero */}
          <div
            className="absolute top-0 left-0 right-0 z-0"
            style={{
              backgroundColor: '#030f02',
              height: 'calc(80px + 98.5vh - 60px)', // navbar height + 98.5% of hero height
              borderBottomLeftRadius: '4rem',
              borderBottomRightRadius: '4rem',
              borderBottom: '4px solid #ffffff'
            }}
          ></div>

        {/* Hero Section */}
        <div className="relative z-10">
          <Hero />
        </div>

        {/* Features Section */}
        <FeaturesSection />

        {/* Feature Carousel */}
        <FeatureCarousel
          words={["Delivery Friction", "Friction From Discovery To Purchase", "Confusing DM Orders", "Fragmented WhatsApp Orders", "Lost Leads", "Extra Costs"]}
          interval={1700}
          animationDuration={500}
        />

        {/* Content Section */}
        <ContentSection />

        {/* Platform Highlights */}
        <PlatformHighlights />
      </div>
    </StickyFooterReveal>
    </>
  );
}
