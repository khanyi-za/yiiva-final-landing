"use client";
import { useSignupModal } from "./SignupModalProvider";

// Shoppers-view section. Placeholder copy to refine later.
const STEPS = [
  { n: "01", title: "Browse homegrown brands", body: "Explore a curated feed of South African makers and their latest drops." },
  { n: "02", title: "Follow what you love", body: "Save the brands and pieces that catch your eye and get notified when they restock." },
  { n: "03", title: "Buy, shipped to your door", body: "Check out securely in-app and we handle delivery nationwide." },
];

export default function HowDiscoveryWorks() {
  const { openSignup } = useSignupModal();
  return (
    <section className="bg-[var(--color-anchor)] py-16 lg:py-24" style={{ borderTopLeftRadius: "3rem", borderTopRightRadius: "3rem" }}>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold tracking-tight text-[var(--color-on-anchor)] mb-10 lg:mb-14 max-w-2xl">
          How discovery works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {STEPS.map((s) => (
            <div key={s.n} className="space-y-3 border-t border-[var(--color-on-anchor-60)]/25 pt-5">
              <span className="font-[family-name:var(--font-mono)] text-sm text-[var(--color-accent)]">{s.n}</span>
              <h3 className="font-[family-name:var(--font-display)] text-xl lg:text-2xl font-semibold text-[var(--color-on-anchor)]">
                {s.title}
              </h3>
              <p className="text-base lg:text-lg text-[var(--color-on-anchor-60)] leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 lg:mt-16">
          <button
            onClick={openSignup}
            className="px-8 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
          >
            Get early access
          </button>
        </div>
      </div>
    </section>
  );
}
