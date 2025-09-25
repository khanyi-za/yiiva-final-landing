import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import FeaturesSection from "@/components/FeaturesSection";
import FeatureCarousel from "@/components/FeatureCarousel";
import ContentSection from "@/components/ContentSection";
import PlatformHighlights from "@/components/PlatformHighlights";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#FAF9F6'}}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <FeaturesSection />

      {/* Feature Carousel */}
      <FeatureCarousel 
        words={["Redirects", "Fraud", "Commission", "Brainer"]}
        interval={1700}
        animationDuration={500}
      />

      {/* Content Section */}
      <ContentSection />

      {/* Platform Highlights */}
      <PlatformHighlights />

      {/* Footer */}
      <Footer />
    </div>
  );
}
