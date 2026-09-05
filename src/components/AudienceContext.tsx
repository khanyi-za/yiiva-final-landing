"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";

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
  const [audience, setAudienceState] = useState<Audience>("brands");

  // Switching audience swaps the entire page content, so it should read as a
  // fresh page: jump to the very top (hero + navbar), never mid-scroll into
  // whatever section happened to be at the old scroll offset.
  const setAudience = useCallback((next: Audience) => {
    setAudienceState((prev) => {
      if (prev !== next) window.scrollTo({ top: 0, behavior: "instant" });
      return next;
    });
  }, []);

  // Shareable/testable deep link: ?audience=shoppers presets the toggle.
  // Applied post-mount (not as initial state) so SSR and hydration agree.
  // Uses the raw setter — a deep-linked load is already at the top.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("audience");
    if (param === "shoppers" || param === "brands") setAudienceState(param);
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
