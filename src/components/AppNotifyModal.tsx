"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

// "Notify me when the app is live" — opened by the app-store buttons while the
// app is not yet listed (2026-09-13). Captures name + email as a launch lead
// via /api/waitlist (source "app-store-button", platform ios|android). When the
// store listings exist, AppStoreButtons switches back to real links and this
// modal can be retired.

export type StorePlatform = "ios" | "android";

interface AppNotifyModalProps {
  isOpen: boolean;
  platform: StorePlatform | null;
  onClose: () => void;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function AppNotifyModal({ isOpen, platform, onClose }: AppNotifyModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — stays empty for real users
  const [errors, setErrors] = useState<{ name?: string; email?: string; form?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const reset = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setErrors({});
    setIsSubmitting(false);
    setSubmitted(false);
  };

  const handleClose = useCallback(() => {
    reset();
    onClose();
  }, [onClose]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (name.trim().length < 2) next.name = "Please enter your name";
    if (!EMAIL_RE.test(email)) next.email = "Please enter a valid email address";
    setErrors(next);
    if (next.name || next.email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          website,
          source: "app-store-button",
          platform,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "Failed to sign up");
      setSubmitted(true);
    } catch {
      setErrors({ form: "Couldn't sign you up. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Escape closes; Tab is trapped; body scroll locks while open.
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }
      if (e.key === "Tab" && modalRef.current) {
        const focusables = Array.from(
          modalRef.current.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), input:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null);
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, handleClose]);

  // Autofocus the name field once the enter animation has mounted the form.
  useEffect(() => {
    if (!isOpen || submitted) return;
    const t = setTimeout(() => {
      modalRef.current?.querySelector<HTMLInputElement>('input[name="name"]')?.focus();
    }, 60);
    return () => clearTimeout(t);
  }, [isOpen, submitted]);

  if (!mounted) return null;

  const storeName = platform === "ios" ? "the App Store" : platform === "android" ? "Google Play" : "the app stores";

  const inputClass = (invalid: boolean) =>
    `w-full px-4 py-3 rounded-xl border bg-[var(--color-paper-2)] text-[var(--color-ink)] placeholder:text-[var(--color-ink)]/40 transition-all duration-200 focus:outline-none ${
      invalid
        ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
        : "border-[var(--color-sage)] focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20"
    }`;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999]"
            onClick={handleClose}
          />
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="app-notify-title"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="bg-[var(--color-paper)] rounded-3xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-[var(--color-anchor)] px-7 py-6 relative">
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                  aria-label="Close"
                >
                  <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.2em] text-[var(--color-on-anchor-60)]">
                  Coming soon
                </span>
                <h2
                  id="app-notify-title"
                  className="mt-2 font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-[var(--color-on-anchor)] leading-tight"
                >
                  YIIVA isn&apos;t on {storeName} yet.
                </h2>
                <p className="text-[var(--color-on-anchor-60)] mt-2">
                  We&apos;re launching on iOS and Android shortly. Leave your details and we&apos;ll
                  email you the day it goes live.
                </p>
              </div>

              {submitted ? (
                <div className="px-7 py-12 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent)]/10">
                    <svg className="h-7 w-7 text-[var(--color-accent)]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-[family-name:var(--font-display)] text-2xl font-bold text-[var(--color-ink)]">
                    You&apos;re on the list
                  </h3>
                  <p className="mt-2 text-[var(--color-ink-60)] max-w-xs mx-auto">
                    Thanks, {name.trim().split(" ")[0]}. We&apos;ll email{" "}
                    <span className="font-medium text-[var(--color-ink)]">{email}</span> as soon as
                    the app is live.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-8 px-6 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5" noValidate>
                  <input
                    type="text"
                    name="website"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <div>
                    <label htmlFor="app-notify-name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Name
                    </label>
                    <input
                      id="app-notify-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                      }}
                      placeholder="Your name"
                      className={inputClass(!!errors.name)}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="app-notify-email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                      Email
                    </label>
                    <input
                      id="app-notify-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      inputMode="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((er) => ({ ...er, email: undefined }));
                      }}
                      placeholder="you@example.com"
                      className={inputClass(!!errors.email)}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  {errors.form && <p className="text-red-500 text-sm">{errors.form}</p>}
                  <div className="pt-1">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-[var(--color-accent)] text-white rounded-full font-medium hover:bg-[var(--color-accent-hover)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending…" : "Notify me"}
                    </button>
                    <p className="mt-3 text-center text-xs text-[var(--color-ink-60)]">
                      One email when we launch. No newsletters unless you ask.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
}
