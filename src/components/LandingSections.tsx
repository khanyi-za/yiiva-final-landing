"use client";
import { useAudience } from "./AudienceContext";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import VerticalsShowcase from "./VerticalsShowcase";
// import ContentSection from "./ContentSection"; // "It's easy to start selling" — removed for now
// import WhoItsFor from "./WhoItsFor"; // removed — copy retired ("independent", pre-launch framing)
import FeatureDeepDives from "./FeatureDeepDives";
import BrandsCTA from "./BrandsCTA";
import HowDiscoveryWorks from "./HowDiscoveryWorks";
// import VideoFeature from "./VideoFeature"; // replaced by FeatureSection (scrollytelling)
import FeatureSection from "./FeatureSection";
import BrandCarousel from "./BrandCarousel";
// import PhoneFeature from "./PhoneFeature"; // product-detail feature — removed for now
import CategoryTiles from "./CategoryTiles";
import AppShowcase from "./AppShowcase";
import ShopperFAQ from "./ShopperFAQ";
import ShopperCTA from "./ShopperCTA";

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
          <VerticalsShowcase />
          <FeatureDeepDives />
          {/* <ContentSection /> */}
          <BrandsCTA />
        </>
      ) : (
        <>
          <BrandCarousel />
          <FeatureSection />
          <CategoryTiles />
          <AppShowcase />
          <HowDiscoveryWorks />
          <ShopperFAQ />
          <ShopperCTA />
        </>
      )}
    </div>
  );
}
