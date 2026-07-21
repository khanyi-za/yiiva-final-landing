"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Audience = "brands" | "shoppers";

interface AudienceContextValue {
  audience: Audience;
  setAudience: (audience: Audience) => void;
}

const AudienceContext = createContext<AudienceContextValue | null>(null);

export function AudienceProvider({ children }: { children: ReactNode }) {
  const [audience, setAudience] = useState<Audience>("brands");
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
