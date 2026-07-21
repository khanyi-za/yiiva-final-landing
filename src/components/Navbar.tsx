"use client";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";
import SignUpModal from "./SignUpModal";
import AudienceToggle from "./AudienceToggle";

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-4 bg-[var(--color-anchor)]">
        <div className="flex items-center shrink-0">
          <Image
            src="/logos/ICON_WHITE.png"
            alt="Yiiva Logo"
            width={128}
            height={37}
            style={{ width: 'auto', height: 'auto', maxHeight: '40px' }}
            priority
          />
        </div>

        {/* Audience toggle — centered on wider screens */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
          <AudienceToggle />
        </div>

        <div className="flex items-center gap-3 sm:gap-5 shrink-0">
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="hidden sm:inline text-[var(--color-on-anchor)] font-medium hover:text-white transition-colors"
          >
            Contact
          </button>
          <button
            onClick={() => setIsSignUpModalOpen(true)}
            className="px-5 py-2 text-white rounded-full font-medium bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            SignUp
          </button>
        </div>
      </nav>

      {/* Audience toggle — below the bar on small screens */}
      <div className="fixed top-[68px] left-0 right-0 z-40 flex justify-center md:hidden bg-[var(--color-anchor)] pb-3">
        <AudienceToggle />
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      {/* SignUp Modal */}
      <SignUpModal
        isOpen={isSignUpModalOpen}
        onClose={() => setIsSignUpModalOpen(false)}
      />
    </>
  );
} 