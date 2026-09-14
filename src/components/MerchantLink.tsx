"use client";
import { useState } from "react";
import LeadModal from "./LeadModal";
import { MERCHANT_SIGNUP_URL, MERCHANT_LOGIN_URL, MERCHANT_ONBOARDING_OPEN } from "@/lib/links";

// Every merchant entry point on the page (navbar, hero, closing CTA, footer)
// renders through this. While MERCHANT_ONBOARDING_OPEN is false (waiting on the
// payment provider's go-live, 2026-09-14) the links become buttons that open a
// lead modal instead of sending people to a dashboard they can't yet trade on.
// Flip the flag in src/lib/links.ts and every link reverts to a real <a>.

type Intent = "signup" | "login";

const COPY: Record<Intent, { title: string; description: string }> = {
  signup: {
    title: "Brand onboarding opens shortly.",
    description:
      "We're completing payment activation with our provider before the first brands go live. Leave your details and we'll email you the day sign-ups open.",
  },
  login: {
    title: "Brand accounts open shortly.",
    description:
      "We're completing payment activation with our provider before the first brands go live. Leave your details and we'll email you the day you can log in and set up your store.",
  },
};

export default function MerchantLink({
  intent,
  className,
  children,
}: {
  intent: Intent;
  className?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const href = intent === "signup" ? MERCHANT_SIGNUP_URL : MERCHANT_LOGIN_URL;

  if (MERCHANT_ONBOARDING_OPEN) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  const copy = COPY[intent];
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`cursor-pointer ${className ?? ""}`}>
        {children}
      </button>
      <LeadModal
        isOpen={open}
        onClose={() => setOpen(false)}
        eyebrow="Coming soon"
        title={copy.title}
        description={copy.description}
        askBrand
        source={intent === "signup" ? "brand-signup" : "brand-login"}
        submitLabel="Keep me posted"
        footnote="One email when onboarding opens. No newsletters unless you ask."
        successTitle="You're on the list"
        successBody={(first, email) => (
          <>
            Thanks, {first}. We&apos;ll email{" "}
            <span className="font-medium text-[var(--color-ink)]">{email}</span> the day brand
            onboarding opens.
          </>
        )}
      />
    </>
  );
}
