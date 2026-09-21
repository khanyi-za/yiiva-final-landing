# CLAUDE.md — yiiva-final-landing

Marketing landing page for **YIIVA** (yiiva.co.za) — a mobile-first commerce
marketplace for South Africa's creative brands, product of Khaziimla
Technology (Pty) Ltd.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Framer Motion 12 ·
Resend (contact + waitlist API routes). Deployed on Vercel. `npm run dev`
runs on port **3002** (pinned via `-p 3002` in package.json; avoids nuwa on 3000).
Always verify changes with `npm run build` — it also wipes `.next`, so
restart the dev server after building.

## Sister repos (same parent folder `deploy_yiiva/`)

- **nuwa** — NestJS + Prisma backend API (Railway). Read `nuwa/STATUS.md` for platform state.
- **athena** — Next.js merchant dashboard/admin = `merchant.yiiva.co.za`. "Start selling" CTAs deep-link to `/register` there (root `/` is just a login redirect; `?intent=sell` is NOT implemented).
- **maya** — Expo buyer app. **Not in app stores yet** (target October 2026) — the store buttons open a lead modal; set `APP_STORE_URL`/`PLAY_STORE_URL` in `AppStoreButtons.tsx` on listing.
- Central external links live in `src/lib/links.ts`, including the `MERCHANT_ONBOARDING_OPEN` gate flag.

## Pre-launch lead gates (2026-09)

Neither audience can transact yet (app unlisted; brands wait on Paystack
live-mode), so every conversion point captures a lead instead of linking out:
- `LeadModal.tsx` — shared modal (name, optional brand + store website/Instagram,
  email, honeypot) → `POST /api/waitlist` → Resend: internal notification with a
  per-source subject ("App launch lead: …" / "Brand lead: … (Start selling|Log in)")
  + on-brand confirmation to the lead. Footer newsletter form uses the same route.
- `AppStoreButtons.tsx` (3 placements) → modal until the two URL constants are set.
- `MerchantLink.tsx` wraps ALL merchant entry points (hero ×2, navbar, BrandsCTA,
  footer ×2) → modal until `MERCHANT_ONBOARDING_OPEN = true`. Never add a raw
  `<a href={MERCHANT_*_URL}>` — route it through `MerchantLink`.
- Footer social icons are commented out (no accounts yet).

## Investor brief

`public/invest-2eab56.html` — static, unlinked, `noindex`; the slug is the only
access control. Figures + sources in `docs/market-figures.md`. Sign-off lists
Khanyi + co-founder Brendon Dlamini. Letterhead date is hardcoded — bump on resend.

## Page architecture

Single page (`src/app/page.tsx`) with a **Brands / Shoppers audience toggle**
(`AudienceContext` — swaps `--color-accent` at runtime: violet
`oklch(0.55 0.23 285)` for brands / azure `oklch(0.60 0.15 235)` for
shoppers) and `LandingSections` branching the whole body per audience.
`StickyFooterReveal` wraps content; legal pages at `/privacy-policy` and
`/terms-conditions`.

**Brands track:** Hero (tilting dashboard) → intro paragraph
(`FeaturesSection`) → `VerticalsShowcase` (scroll-PINNED section: heading
left + hand-held-phone cutout right, truth-chip conveyor scrubbed by scroll,
lime `--color-lime` bloom when the pin engages, releases when all 8 chips
pass) → `FeatureDeepDives` (dashboard screenshots, `id="how-it-works"`) →
`BrandsCTA`. `ContentSection` ("It's easy to start selling") is commented out.

**Shoppers track:** dark full-viewport Hero (brand film at native
1064:1684 aspect, left-anchored, fading into the dark band via nested CSS
masks; uppercase headline right) → `BrandCarousel` (28 demo-brand logos)
→ `FeatureSection` (Stitch-style scrollytelling: sticky image swaps as text
blocks cross mid-viewport) → `CategoryTiles` → `AppShowcase` →
`HowDiscoveryWorks` → `ShopperFAQ` → `ShopperCTA` (`id="get-the-app"`).

**Footer:** `StickyFooterReveal` slides the page up over a fixed footer on all
devices. The phone layout is deliberately compact (~505px) so the reveal can
complete; a static normal-flow fallback kicks in only if the footer is taller
than the viewport. Keep phone footer additions minimal or the reveal breaks.

## Design system

Hallmark-managed (`.claude/skills/hallmark`, stamp in `globals.css`):
macrostructure Showcase, theme "Homegrown". Fonts: Bricolage Grotesque
(display) / Inter (body) / JetBrains Mono (labels/eyebrows). Tokens in
`globals.css :root` (paper/ink/accent/anchor/sage/on-anchor + `--color-lime`
for the VerticalsShowcase bloom). All colors via `var(--color-*)` — never
inline hex. Gotchas: the un-layered `img { height:auto }` rule in globals
beats Tailwind height utilities (size images by explicit width); Tailwind
opacity modifiers don't work on var() colors — use `color-mix(in oklch, …)`;
when mixing accent with dark colors use **oklab** (oklch hue-wheel detours
through green).

## Copy rules (owner decisions — binding)

1. **"independent" is banned** page-wide.
2. **No "brand becomes a business" framing** — the promise is amplification, not transformation.
3. SA positioning is allowed on-page ("home to South African brands you love").
4. Merchant CTA is **"Start selling"** everywhere.
5. Honesty: no invented metrics/testimonials; no AI-tagging claims (doesn't exist); no commission-rate mention; payments = Paystack (card, Instant EFT/Ozow, SnapScan — NO Apple Pay, NO PayFast); app is NOT downloadable yet; demo brands (FIELDS, Sakanya, SUHU…) are pitch data, not signed merchants.
6. Vocabulary: "brand" (not store/merchant) in UI copy; buyers "Subscribe" to brands; buyers "purchase" / merchants "order".

## The four merchant verticals (basis of VerticalsShowcase)

Discovery · Payments · Delivery · Customer care — "a new sales channel with
payments, delivery and customer care handled for you". Shopper mirror
(agreed 2026-08-27, for the future shopper feature section): Discovery ·
One cart, many brands · Easy secure checkout · Delivered & tracked · Close
to the brand (subscribe/wishlist/chat). Plus the Shopify-import hook for
brands ("21,000+ SA Shopify stores").

## Media assets

- `public/shopper_hero.mp4` — 21MB CRF-18 film-tuned transcode of the owner's master (`YIIVA landing site inspo/shopper_hero.mov`, 84MB — keep OUT of public/). Poster: `shopper_hero_poster.jpg`. Panels `hero-panel-left/right.jpg` are frame-grabs (16s / 31s).
- `public/feature-hand-new.png` — hand-holding-phone cutout showing the maya merchant dashboard (replaced the Stitch-sourced `feature-hand.png` in the 2026-09-01 rebuild). Originals in `YIIVA landing site inspo/`.
- `src/app/icon.png` + `apple-icon.png` — favicon = white wordmark on the dark navbar colour (rounded tile / square).
- `YIIVA landing site inspo/` — owner's reference screenshots (Stitch-style).

## Verification workflow

Playwright is installed in the session scratchpad (not the repo):
`npm i playwright@1.49.1 && npx playwright install chromium`. Pattern:
`npm run dev` in background → headless Chromium screenshots at 1440×900,
375×812 and 360×640 (+ 375×548 for the footer) → check desktop + mobile +
reduced motion → `npm run build` last → restart dev server. Use
`?audience=shoppers` for the shopper view. Stub `/api/waitlist` with
`page.route` when exercising the lead modals so no email is sent.
