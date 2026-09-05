"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Audience = "brands" | "shoppers";

// Real YIIVA brand accents: merchant/web = violet, buyer/mobile = azure.
const ACCENTS: Record<Audience, { accent: string; hover: string }> = {
  brands: { accent: "oklch(0.55 0.23 285)", hover: "oklch(0.47 0.21 285)" },
  shoppers: { accent: "oklch(0.60 0.15 235)", hover: "oklch(0.52 0.14 235)" },
};

interface AudienceContextValue {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("brands");

  // Shareable/testable deep link: ?audience=shoppers presets the toggle.
  // Applied post-mount (not as initial state) so SSR and hydration agree.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("audience");
    if (param === "shoppers" || param === "brands") setAudience(param);
  }, []);

  useEffect(() => {
    const { accent, hover } = ACCENTS[audience];
    const root = document.documentElement;
    root.style.setProperty("--color-accent", accent);
    root.style.setProperty("--color-accent-hover", hover);
  }, [audience]);

  return (
    <AudienceContext.Provider value={{ audience, setAudience }}>
      {children}
    </AudienceContext.Provider>
  );
}

export function useAudience() {
  const ctx = useContext(AudienceContext);
  if (!ctx) {
    throw new Error("useAudience must be used within an AudienceProvider");
  }
  return ctx;
}
