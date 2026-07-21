"use client";
import { useAudience, type Audience } from "./AudienceContext";

const OPTIONS: { value: Audience; label: string }[] = [
  { value: "brands", label: "For Brands" },
  { value: "shoppers", label: "For Shoppers" },
];

export default function AudienceToggle() {
  const { audience, setAudience } = useAudience();

  return (
    <div
      role="tablist"
      aria-label="Choose audience"
      className="inline-flex items-center gap-1 rounded-full border border-[var(--color-on-anchor-60)]/30 p-1 font-[family-name:var(--font-mono)] text-xs"
    >
      {OPTIONS.map((opt) => {
        const active = audience === opt.value;
        return (
          <button
            key={opt.value}
            role="tab"
            aria-selected={active}
            onClick={() => setAudience(opt.value)}
            className={`relative rounded-full px-4 py-1.5 font-medium tracking-wide transition-colors duration-200 ${
              active
                ? "bg-[var(--color-paper)] text-[var(--color-anchor)]"
                : "text-[var(--color-on-anchor-60)] hover:text-[var(--color-on-anchor)]"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
