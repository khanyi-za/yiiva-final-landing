import Navbar from "@/components/Navbar";
import StickyFooterReveal from "@/components/StickyFooterReveal";
import LandingSections from "@/components/LandingSections";
import { AudienceProvider } from "@/components/AudienceContext";

export default function Home() {
  return (
    <AudienceProvider>
      {/* Navigation Bar - Outside StickyFooterReveal so it stays fixed */}
      <Navbar />

      <StickyFooterReveal>
        <LandingSections />
      </StickyFooterReveal>
    </AudienceProvider>
  );
}
