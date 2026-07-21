"use client";
import { useState } from "react";
import { useAudience } from "./AudienceContext";

// Per-audience hero copy. Brands copy is preserved from the original site.
// Shoppers copy is a placeholder to refine later.
const HERO_COPY = {
  brands: {
    heading: "Grow your brand, sell on YIIVA",
    paragraph:
      "Reach more customers! YIIVA helps creative brands get discovered and sell effortlessly. Automate your operations, with built-in payments, delivery, and customer care so you can focus on creating, not managing.",
    formLabel: "Sign up with your email to access the app demo & join the waitlist",
    featurePoint: "Monetize your content, drive sales",
    source: "hero",
  },
  shoppers: {
    // TODO: refine shopper copy
    heading: "Discover homegrown SA brands",
    paragraph:
      "Find the niche South African brands you won't see anywhere else — streetwear, skincare, art and more, shipped nationwide. Shop local, discover something new.",
    formLabel: "Sign up with your email to get early access to the YIIVA app",
    featurePoint: "Support local, discover the undiscovered",
    source: "hero-shopper",
  },
} as const;

export default function Hero() {
  const { audience } = useAudience();
  const copy = HERO_COPY[audience];

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, source: copy.source }),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || "Failed to join waitlist");
        }

        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail("");

        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error("Hero signup error:", error);
        setIsSubmitting(false);
        setError("Failed to join waitlist. Please try again.");
      });
  };

  return (
    <section className="hero-backdrop relative px-6 pt-[calc(80px+3.5rem)] pb-14 lg:pt-[calc(80px+6rem)] lg:pb-20 text-center">
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-6 lg:gap-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[var(--color-ink)] leading-[1.03] tracking-tight [overflow-wrap:anywhere]">
          {copy.heading}
        </h1>
        <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed max-w-xl">
          {copy.paragraph}
        </p>

        {/* Waitlist capture */}
        <div className="w-full max-w-md space-y-3">
          <p className="text-[var(--color-ink)] font-medium text-sm">
            {copy.formLabel}
          </p>
          <form onSubmit={handleSubmit} className="flex flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (error) setError("");
              }}
              placeholder="Enter your email address"
              className={`flex-1 min-w-0 px-5 py-3 border-2 rounded-full bg-transparent focus:outline-none transition-colors text-sm lg:text-base text-[var(--color-ink)] placeholder:text-[var(--color-ink-60)] ${
                error
                  ? "border-red-500"
                  : "border-[var(--color-ink)]/20 focus:border-[var(--color-ink)]"
              }`}
              disabled={isSubmitting}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 lg:px-8 py-3 bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white rounded-full font-medium transition-colors text-sm lg:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm flex items-center justify-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </p>
          )}

          {showSuccess && (
            <div className="bg-[var(--color-paper-2)] border-2 border-[var(--color-ink)] rounded-xl p-4 flex items-start gap-3 text-left">
              <svg className="w-5 h-5 text-[var(--color-ink)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <div>
                <p className="text-[var(--color-ink)] font-semibold text-sm lg:text-base">Thank you for signing up!</p>
                <p className="text-[var(--color-ink-60)] text-xs lg:text-sm mt-1">We&apos;ll get back to you soon with access to the demo.</p>
              </div>
            </div>
          )}
        </div>

        {/* Feature Point */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 bg-[var(--color-accent)] rounded-full"></div>
          <span className="text-[var(--color-ink-60)] font-medium text-sm lg:text-base">
            {copy.featurePoint}
          </span>
        </div>
      </div>
    </section>
  );
}
