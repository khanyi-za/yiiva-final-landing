import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import FeatureCarousel from "@/components/FeatureCarousel";
import ContentSection from "@/components/ContentSection";
import PlatformHighlights from "@/components/PlatformHighlights";
import StickyFooterReveal from "@/components/StickyFooterReveal";
import { AudienceProvider } from "@/components/AudienceContext";

export default function Home() {
  return (
    <AudienceProvider>
      {/* Navigation Bar - Outside StickyFooterReveal so it stays fixed */}
      <Navbar />

      <StickyFooterReveal>
        <div className="min-h-screen relative bg-[var(--color-paper)]">
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
    </AudienceProvider>
  );
}
