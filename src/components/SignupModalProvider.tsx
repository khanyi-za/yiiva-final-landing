"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import SignUpModal from "./SignUpModal";

interface SignupModalContextValue {
  openSignup: () => void;
}

const SignupModalContext = createContext<SignupModalContextValue | null>(null);

export function SignupModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SignupModalContext.Provider value={{ openSignup: () => setIsOpen(true) }}>
      {children}
      <SignUpModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </SignupModalContext.Provider>
  );
}

export function useSignupModal() {
  const ctx = useContext(SignupModalContext);
  if (!ctx) {
    throw new Error("useSignupModal must be used within a SignupModalProvider");
  }
  return ctx;
}
