import Navbar from "@/components/Navbar";
import StickyFooterReveal from "@/components/StickyFooterReveal";
import LandingSections from "@/components/LandingSections";
import { AudienceProvider } from "@/components/AudienceContext";
import { SignupModalProvider } from "@/components/SignupModalProvider";

export default function Home() {
  return (
    <AudienceProvider>
      <SignupModalProvider>
        {/* Navigation Bar - Outside StickyFooterReveal so it stays fixed */}
        <Navbar />

        <StickyFooterReveal>
          <LandingSections />
        </StickyFooterReveal>
      </SignupModalProvider>
    </AudienceProvider>
  );
}
