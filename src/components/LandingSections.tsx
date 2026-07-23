"use client";
import { useAudience } from "./AudienceContext";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import FeatureCarousel from "./FeatureCarousel";
import ContentSection from "./ContentSection";
import WhoItsFor from "./WhoItsFor";
import FeatureDeepDives from "./FeatureDeepDives";
import BrandsCTA from "./BrandsCTA";
import HowDiscoveryWorks from "./HowDiscoveryWorks";
import VideoFeature from "./VideoFeature";
import PhoneFeature from "./PhoneFeature";
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
          <FeatureCarousel
            words={[
              "Confusing DM orders",
              "Fragmented WhatsApp sales",
              "Delivery headaches",
              "Chasing payments",
              "Lost leads",
              "Hidden costs",
            ]}
            interval={1700}
            animationDuration={500}
          />
          <FeatureDeepDives />
          <ContentSection />
          <WhoItsFor />
          <BrandsCTA />
        </>
      ) : (
        <>
          <VideoFeature
            side="left"
            eyebrow="Discover"
            heading="Find brands you won't see anywhere else"
            body="Streetwear, skincare, art and more. Discover niche South African brands and one-of-a-kind pieces, all in one app."
            video="/images/hero_media/6.mp4"
          />
          <CategoryTiles />
          <VideoFeature
            side="right"
            eyebrow="Support local"
            heading="Every order backs a homegrown maker"
            body="Shop with purpose. Your purchases go straight to small South African brands and the people behind them."
            video="/images/hero_media/1.mp4"
          />
          <AppShowcase />
          <VideoFeature
            side="left"
            eyebrow="Shoppable reels"
            heading="Shop straight from the content you love"
            body="Every post is a storefront. Watch a reel, tap what catches your eye, and buy it shipped to your door. Like and save the pieces you're not ready to check out yet."
            video="/images/hero_media/7.mp4"
          />
          <PhoneFeature
            side="right"
            eyebrow="Every piece has a story"
            heading="See the detail behind every piece"
            body="Tap through to the full story, from limited-run art with a certificate of authenticity to one-of-a-kind fashion, with the details that matter."
            image="/app-product.png"
            alt="YIIVA app product page: a limited-run art piece"
          />
          <VideoFeature
            side="left"
            eyebrow="Delivery"
            heading="Shipped to your door, nationwide"
            body="Secure checkout in-app and reliable delivery across South Africa. We handle the rest so your order just arrives."
            video="/images/hero_media/10.mp4"
          />
          <HowDiscoveryWorks />
          <ShopperFAQ />
          <ShopperCTA />
        </>
      )}
    </div>
  );
}
