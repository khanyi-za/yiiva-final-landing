"use client";
import { useSignupModal } from "./SignupModalProvider";

// Final CTA / founding-brands band (stitch-style dark closer).
// Honest pre-launch framing — no fabricated metrics or logos.
export default function PreLaunchTrust() {
  const { openSignup } = useSignupModal();
  return (
    <section className="bg-[var(--color-paper)] pt-8">
      <div
        className="bg-[var(--color-anchor)] px-6 py-20 lg:py-28"
        style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}
      >
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]">
            Founding brands
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-6xl font-bold tracking-tight text-[var(--color-on-anchor)] leading-[1.05]">
            Join the first wave of homegrown brands on Yiiva.
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-on-anchor-60)] leading-relaxed max-w-xl mx-auto">
            We&apos;re still pre-launch and onboarding a limited group of founding brands.
            Add your name to the waitlist for early access to the app demo &mdash; and help
            shape what we build.
          </p>
          <div className="pt-2">
            <button
              onClick={openSignup}
              className="px-8 py-3 bg-[var(--color-paper)] text-[var(--color-anchor)] rounded-full font-medium hover:bg-[var(--color-on-anchor-60)] transition-colors"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
