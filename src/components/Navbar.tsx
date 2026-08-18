"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import ContactModal from "./ContactModal";
import AudienceToggle from "./AudienceToggle";
import { useAudience } from "./AudienceContext";
import { MERCHANT_SIGNUP_URL } from "@/lib/links";

export default function Navbar() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { audience } = useAudience();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 lg:px-6 lg:pt-4">
        <nav
          className={`w-full max-w-5xl flex items-center gap-2 rounded-full border border-white/10 px-3 sm:px-4 py-2 transition-all duration-300 ${
            scrolled
              ? "bg-[var(--color-anchor)]/70 backdrop-blur-2xl shadow-lg shadow-black/25"
              : "bg-[var(--color-anchor)]"
          }`}
        >
          <div className="flex items-center shrink-0 pl-1">
            <Image
              src="/logos/wordmark-white.png"
              alt="YIIVA"
              width={579}
              height={249}
              className="w-[36px] sm:w-14 h-auto"
              priority
            />
          </div>

          <div className="flex-1 flex justify-center">
            <AudienceToggle />
          </div>

          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="hidden md:inline px-2 text-sm text-[var(--color-on-anchor)] font-medium hover:text-white transition-colors"
            >
              Contact
            </button>
            {audience === "brands" ? (
              <a
                href={MERCHANT_SIGNUP_URL}
                className="px-3 sm:px-5 py-2 rounded-full text-sm font-medium bg-[var(--color-paper)] text-[var(--color-anchor)] hover:bg-[var(--color-on-anchor-60)] transition-colors whitespace-nowrap"
              >
                Sign Up
              </a>
            ) : (
              <a
                href="#the-app"
                className="px-3 sm:px-5 py-2 rounded-full text-sm font-medium bg-[var(--color-paper)] text-[var(--color-anchor)] hover:bg-[var(--color-on-anchor-60)] transition-colors whitespace-nowrap"
              >
                <span className="sm:hidden">Get app</span>
                <span className="hidden sm:inline">Get the app</span>
              </a>
            )}
          </div>
        </nav>
      </div>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </>
  );
}
