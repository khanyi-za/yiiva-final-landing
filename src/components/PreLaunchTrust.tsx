"use client";
import { useSignupModal } from "./SignupModalProvider";

// New section. Honest pre-launch framing — no fabricated metrics or logos.
// Copy is placeholder; refine (and confirm launch window) later.
export default function PreLaunchTrust() {
  const { openSignup } = useSignupModal();
  return (
    <section className="bg-[var(--color-paper)] py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-sage)] bg-[var(--color-paper-2)] px-8 py-12 lg:px-14 lg:py-16 text-center space-y-6">
          <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Founding brands
          </span>
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-ink)] leading-[1.1]">
            Join the first wave of homegrown brands on Yiiva.
          </h2>
          <p className="text-base lg:text-lg text-[var(--color-ink-60)] leading-relaxed max-w-xl mx-auto">
            We&apos;re still pre-launch and onboarding a limited group of founding brands.
            Add your name to the waitlist for early access to the app demo &mdash; and help
            shape what we build.
          </p>
          <div className="pt-2">
            <button
              onClick={openSignup}
              className="px-8 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
            >
              Join the waitlist
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
