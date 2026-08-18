"use client";
import { MotionConfig } from "framer-motion";

// Centralizes reduced-motion handling: framer automatically reduces transform/
// layout animations for visitors with prefers-reduced-motion, so individual
// components don't need to branch their initial values (which caused SSR
// hydration mismatches).
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
