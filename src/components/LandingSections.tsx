"use client";
import { useAudience } from "./AudienceContext";
import Hero from "./Hero";
import FeaturesSection from "./FeaturesSection";
import FeatureCarousel from "./FeatureCarousel";
import ContentSection from "./ContentSection";
import WhoItsFor from "./WhoItsFor";
import FeatureDeepDives from "./FeatureDeepDives";
import PreLaunchTrust from "./PreLaunchTrust";
import WhyShopYiiva from "./WhyShopYiiva";
import HowDiscoveryWorks from "./HowDiscoveryWorks";
import VideoFeature from "./VideoFeature";

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
          <FeatureDeepDives />
          <ContentSection />
          <WhoItsFor />
          <PreLaunchTrust />
        </>
      ) : (
        <>
          <VideoFeature
            side="left"
            eyebrow="Discover"
            heading="Find brands you won't see anywhere else"
            body="Streetwear, skincare, art and more — discover niche South African brands and one-of-a-kind pieces, all in one app."
            video="/images/hero_media/6.mp4"
          />
          <VideoFeature
            side="right"
            eyebrow="Support local"
            heading="Every order backs a homegrown maker"
            body="Shop with purpose — your purchases go straight to small South African brands and the people behind them."
            video="/images/hero_media/1.mp4"
          />
          <WhyShopYiiva />
          <VideoFeature
            side="left"
            eyebrow="Shop"
            heading="Shop straight from the content you love"
            body="Every post is a storefront. See something you like in a video — tap, discover the brand behind it, and buy it shipped to your door."
            video="/images/hero_media/7.mp4"
          />
          <VideoFeature
            side="right"
            eyebrow="Delivery"
            heading="Shipped to your door, nationwide"
            body="Secure checkout in-app and reliable delivery across South Africa — we handle the rest so your order just arrives."
            video="/images/hero_media/10.mp4"
          />
          <HowDiscoveryWorks />
        </>
      )}
    </div>
  );
}
