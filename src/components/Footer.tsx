"use client";
import { useState } from "react";
import ContactModal from "./ContactModal";
import MerchantLink from "./MerchantLink";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setShowSuccess(false);

    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source: "footer" }),
    })
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Failed to subscribe");
        }
        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail("");
        setTimeout(() => setShowSuccess(false), 5000);
      })
      .catch((error) => {
        console.error("Footer signup error:", error);
        setIsSubmitting(false);
        setError("Couldn't subscribe. Please try again.");
      });
  };

  return (
    // Phone layout is deliberately compact so the footer fits under a phone
    // viewport and the StickyFooterReveal slide-up can complete (was 875px on a
    // 375px phone — taller than any phone screen; now ~510px). md+ is unchanged.
    <footer className="pt-20 md:pt-28 lg:pt-32 pb-6 md:pb-8 px-6 bg-[var(--color-paper)]">
      <div className="max-w-7xl mx-auto">
        {/* Intent columns: Sell · Shop · Stay in the loop.
            Phones: Sell and Shop share a row, newsletter spans below. */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-7 md:gap-10 lg:gap-16">
          {/* Sell on YIIVA */}
          <nav aria-label="For brands" className="space-y-4">
            <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
              Sell on YIIVA
            </h4>
            <ul className="space-y-2.5">
              <li>
                <MerchantLink intent="signup" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  Start selling
                </MerchantLink>
              </li>
              <li>
                <MerchantLink intent="login" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  Merchant log in
                </MerchantLink>
              </li>
            </ul>
          </nav>

          {/* Shop on YIIVA */}
          <nav aria-label="For shoppers" className="space-y-4">
            <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
              Shop on YIIVA
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#the-app" className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors">
                  Get the app
                </a>
              </li>
              <li>
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-[var(--color-ink)] hover:text-[var(--color-accent)] transition-colors"
                >
                  Contact us
                </button>
              </li>
            </ul>
          </nav>

          {/* Stay in the loop */}
          <div className="col-span-2 md:col-span-1 space-y-3 md:space-y-4">
            <h4 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-ink-60)]">
              Stay in the loop
            </h4>
            <p className="hidden md:block text-[var(--color-ink-60)] text-sm">
              New brands and drops, straight to your inbox.
            </p>
            {/* Phones: input + round arrow button in one row. md+: stacked as before. */}
            <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-2 md:block md:space-y-3">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError("");
                }}
                placeholder="Enter your email address"
                aria-label="Email address"
                className={`flex-1 min-w-0 md:w-full px-4 py-3 rounded-full border bg-[var(--color-paper-2)] transition-all duration-200 text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 ${
                  error
                    ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                    : "border-[var(--color-sage)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
                } focus:outline-none`}
                disabled={isSubmitting}
              />
              {error && (
                <p className="basis-full order-last md:order-none text-red-500 text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {error}
                </p>
              )}
              {showSuccess && (
                <p className="basis-full order-last md:order-none text-[var(--color-ink)] text-sm flex items-center gap-1 font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  You&apos;re subscribed!
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label="Subscribe"
                className="shrink-0 w-12 h-12 md:w-full md:h-auto md:px-6 md:py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <span className="hidden md:inline">{isSubmitting ? "Subscribing…" : "Subscribe"}</span>
                <svg className="w-5 h-5 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
            <p className="text-[var(--color-ink-60)] text-xs">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Oversized wordmark signature */}
        <div className="mt-8 md:mt-16 lg:mt-24" aria-hidden="true">
          <span className="block select-none font-[family-name:var(--font-display)] font-extrabold tracking-tight leading-[0.8] text-[var(--color-ink)] text-[18vw] lg:text-[15vw]">
            YIIVA
          </span>
        </div>

        {/* Baseline */}
        <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-[var(--color-sage)] flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left text-[var(--color-ink-60)] text-xs space-y-1">
            <p className="md:hidden">© 2026 YIIVA · Khaziimla Technology (Pty) Ltd</p>
            <p className="hidden md:block">© 2026 YIIVA. All rights reserved.</p>
            <p className="hidden md:block">YIIVA is a product of Khaziimla Technology (Pty) Ltd.</p>
          </div>
          <div className="flex flex-col items-center sm:items-end gap-4">
            <div className="flex items-center gap-4 text-sm text-[var(--color-ink-60)]">
              <a href="/privacy-policy" className="hover:text-[var(--color-ink)] transition-colors">Privacy</a>
              <a href="/terms-conditions" className="hover:text-[var(--color-ink)] transition-colors">Terms</a>
              <a href="/returns-refunds" className="hover:text-[var(--color-ink)] transition-colors">Returns</a>
              <button onClick={() => setIsContactModalOpen(true)} className="hover:text-[var(--color-ink)] transition-colors">Contact</button>
            </div>
            {/* Social links — commented out until the YIIVA social accounts exist
                (2026-09-13). Restore this block and swap the # hrefs for the real URLs.

            <div className="flex gap-3">
              <a href="#" aria-label="YIIVA on Facebook" className="w-10 h-10 bg-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-paper)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="YIIVA on X" className="w-10 h-10 bg-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-paper)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" aria-label="YIIVA on Instagram" className="w-10 h-10 bg-[var(--color-ink)] rounded-lg flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                <svg className="w-5 h-5 text-[var(--color-paper)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            */}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </footer>
  );
}
