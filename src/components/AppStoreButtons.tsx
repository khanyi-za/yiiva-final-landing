"use client";

// Custom app-store buttons (no official badge assets bundled).
// TODO: replace the placeholder hrefs with the real store listing URLs.
const APP_STORE_URL = "#"; // TODO: App Store link
const PLAY_STORE_URL = "#"; // TODO: Google Play link

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 2.98-.84.94-2.2 1.66-3.32 1.57-.14-1.1.44-2.28 1.1-3.02.76-.86 2.12-1.5 3.16-1.53.02.01.02.01.18 0z" />
      <path d="M20.5 17.2c-.55 1.27-.81 1.84-1.52 2.96-.99 1.57-2.39 3.52-4.12 3.53-1.54.01-1.94-1-4.03-.99-2.09.01-2.53 1.01-4.07.99-1.73-.02-3.05-1.78-4.04-3.35C-.6 16.9-.85 11.7 1.2 8.98 2.22 7.62 3.83 6.76 5.56 6.74c1.63-.02 3.17 1.06 4.03 1.06.86 0 2.71-1.31 4.57-1.12.78.03 2.96.31 4.36 2.37-.11.07-2.6 1.52-2.57 4.54.03 3.6 3.16 4.8 3.2 4.81z" />
    </svg>
  );
}
function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M3.6 2.3c-.3.2-.5.6-.5 1.1v17.2c0 .5.2.9.5 1.1l.1.1L13 12.6v-.2L3.7 2.2l-.1.1zM16.5 15.9l-3.1-3.1v-.2l3.1-3.1.1.1 3.7 2.1c1.1.6 1.1 1.6 0 2.2l-3.7 2zM13.4 12.4l3-3L4.1 2.2c-.3-.2-.6-.2-.8-.1l10.1 10.3zM13.4 12.6L3.3 22.9c.2.1.5.1.8-.1l12.3-7.2-3-3z" />
    </svg>
  );
}

export default function AppStoreButtons({
  variant = "dark-text",
  className = "",
}: {
  // "dark-text" = dark button on light surfaces; "light-text" = light button on dark bands
  variant?: "dark-text" | "light-text";
  className?: string;
}) {
  const style =
    variant === "light-text"
      ? "bg-[var(--color-paper)] text-[var(--color-anchor)] hover:bg-[var(--color-on-anchor-60)]"
      : "bg-[var(--color-ink)] text-white hover:bg-[var(--color-accent-hover)]";
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={APP_STORE_URL} aria-label="Download on the App Store" className={`inline-flex items-center gap-3 rounded-xl px-5 py-2.5 transition-colors ${style}`}>
        <AppleIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-70">Download on the</span>
          <span className="block text-base font-semibold -mt-0.5 font-[family-name:var(--font-display)]">App Store</span>
        </span>
      </a>
      <a href={PLAY_STORE_URL} aria-label="Get it on Google Play" className={`inline-flex items-center gap-3 rounded-xl px-5 py-2.5 transition-colors ${style}`}>
        <PlayIcon />
        <span className="text-left leading-tight">
          <span className="block text-[10px] opacity-70">Get it on</span>
          <span className="block text-base font-semibold -mt-0.5 font-[family-name:var(--font-display)]">Google Play</span>
        </span>
      </a>
    </div>
  );
}
