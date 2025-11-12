"use client";
import { useState } from "react";

export default function Hero() {
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

    // Reset states
    setError("");
    setShowSuccess(false);

    // Validate email
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Call API
    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, source: 'hero' }),
    })
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to join waitlist');
        }

        // Success - Show success message
        setIsSubmitting(false);
        setShowSuccess(true);
        setEmail("");

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Hero signup error:', error);
        setIsSubmitting(false);
        setError('Failed to join waitlist. Please try again.');
      });
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] px-4 lg:px-6 py-8 lg:py-12 overflow-hidden pt-[calc(80px+2rem)] lg:pt-[calc(80px+3rem)]">
      <div className="max-w-7xl mx-auto relative h-full">
        <div className="grid grid-cols-12 gap-6 lg:gap-8 h-full">
          {/* Left Column - Content + Video Grid */}
          <div className="col-span-12 lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-8">
            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4 lg:space-y-6">
                <h1 className="text-3xl lg:text-5xl text-white leading-tight" style={{fontFamily: 'Roboto, sans-serif', fontWeight: 900}}>
                  Grow Your Brand,<br />
                  Sell On YIIVA
                </h1>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed max-w-md">
                  Reach more customers! YIIVA helps creative brands get discovered and sell effortlessly. Automate your operations, with built-in payments, delivery, and customer care so you can focus on creating, not managing.
                </p>
              </div>

              {/* Email Signup */}
              <div className="space-y-3 lg:space-y-4">
                <p className="text-white font-medium text-sm lg:text-base">
                  Sign up with your email to access the app demo & join the waitlist
                </p>
                {/* Horizontal row layout for all screen sizes */}
                <form onSubmit={handleSubmit} className="flex flex-row gap-3 lg:gap-4 max-w-lg">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError("");
                    }}
                    placeholder="Enter your email address"
                    className={`flex-1 px-4 lg:px-6 py-2.5 lg:py-3 border-2 rounded-full focus:outline-none transition-colors text-sm lg:text-base text-white placeholder:text-gray-400 ${
                      error ? "border-red-500" : "border-white focus:border-white"
                    }`}
                    disabled={isSubmitting}
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 lg:px-8 py-2.5 lg:py-3 bg-white border-2 border-orange-500 text-orange-500 rounded-full font-medium hover:bg-orange-50 transition-colors text-sm lg:text-base whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        <span className="hidden sm:inline">Joining...</span>
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </button>
                </form>

                {/* Error Message */}
                {error && (
                  <p className="text-red-400 text-sm flex items-center gap-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {error}
                  </p>
                )}

                {/* Success Message */}
                {showSuccess && (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-4 flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <p className="text-green-800 font-semibold text-sm lg:text-base">Thank you for signing up!</p>
                      <p className="text-green-700 text-xs lg:text-sm mt-1">We&apos;ll get back to you soon with access to the demo.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Feature Point */}
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-gray-700 font-medium text-sm lg:text-base">
                  Monetize your content, drive sales
                </span>
              </div>
            </div>

            {/* Left Column 3-Video Grid - Hidden on Mobile, Visible on Large Screens */}
            <div className="hidden lg:flex gap-4 mt-8 justify-end">
              <div className="relative w-48 h-64 rounded-2xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/3.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex flex-col gap-4">
                <div className="relative w-32 h-32 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/4.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative w-32 h-28 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/5.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile: 6-Video Masonry Grid (2 columns × 3 rows) - Visible only on Mobile */}
          <div className="col-span-12 lg:hidden">
            <div className="grid grid-cols-2 gap-3 mt-6">
              {/* Row 1 */}
              <div className="relative h-56 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/7.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/11.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Row 2 */}
              <div className="relative h-48 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/3.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-40 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/6.mp4" type="video/mp4" />
                </video>
              </div>

              {/* Row 3 */}
              <div className="relative h-52 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="relative h-44 rounded-xl overflow-hidden border border-white">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(60%)' }}
                >
                  <source src="/images/hero_media/9.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>

          {/* Large Screen: 11-Video Masonry Grid - Hidden on Mobile, Visible on Large Screens */}
          <div className="hidden lg:block col-span-12 lg:col-span-6 relative">
            <div className="absolute inset-0 grid grid-cols-3 gap-4 h-full">
              {/* Column 1 - Left */}
              <div className="flex flex-col gap-4 justify-end">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/10.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/2.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Column 2 - Middle */}
              <div className="flex flex-col gap-4 justify-center">
                <div className="relative h-56 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/7.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/8.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/1.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>

              {/* Column 3 - Right */}
              <div className="flex flex-col gap-4 justify-start">
                <div className="relative h-64 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/6.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/11.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="relative h-40 rounded-2xl overflow-hidden border border-white">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ filter: 'grayscale(60%)' }}
                  >
                    <source src="/images/hero_media/9.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 