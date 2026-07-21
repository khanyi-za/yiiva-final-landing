"use client";
import { useAudience } from "./AudienceContext";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import FeatureCarousel from "./FeatureCarousel";
import ContentSection from "./ContentSection";
import WhoItsFor from "./WhoItsFor";
import PlatformHighlights from "./PlatformHighlights";
import WhyShopYiiva from "./WhyShopYiiva";
import HowDiscoveryWorks from "./HowDiscoveryWorks";

export default function LandingSections() {
  const { audience } = useAudience();

  return (
    <div className="min-h-screen relative bg-[var(--color-paper)]">
      {/* Hero (branches copy internally by audience) */}
      <div className="relative z-10">
        <Hero />
      </div>

      {audience === "brands" ? (
        <>
          <FeaturesSection />
          <FeatureCarousel
            words={[
              "Delivery Friction",
              "Friction From Discovery To Purchase",
              "Confusing DM Orders",
              "Fragmented WhatsApp Orders",
              "Lost Leads",
              "Extra Costs",
            ]}
            interval={1700}
            animationDuration={500}
          />
          <ContentSection />
          <WhoItsFor />
          <PlatformHighlights />
        </>
      ) : (
        <>
          <WhyShopYiiva />
          <HowDiscoveryWorks />
        </>
      )}
    </div>
  );
}
