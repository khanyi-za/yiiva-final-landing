# STATUS.md — yiiva-final-landing

Reverse-chronological session log. Newest first. See CLAUDE.md for the
durable project guide.

---

## 2026-08-27 — Shopper hero settled; feature-section verticals agreed

**▶ NEXT (agreed direction, not yet built):**
1. **Shopper feature section** — replace/augment the lean shopper track with
   a section built on the 5 shopper verticals: Discovery · One cart, many
   brands · Easy secure checkout · Delivered & tracked · Close to the brand.
   Idea on the table: mirror the brands VerticalsShowcase truth-chip language
   from the buyer's side (merchant "Payment received" ↔ shopper "Order
   confirmed") for narrative symmetry.
2. **Brands feature section refresh** — 5 value props agreed (new sales
   channel / one dashboard / payments straight to your bank / delivery
   door-to-door / customer relationships without admin) + the Shopify-import
   hook as a possible standalone strip.
3. Outstanding cleanups: "independent" still in 6 places on the shopper
   track (Discover VideoFeature body, CategoryTiles, HowDiscoveryWorks step 1,
   2 FAQ answers, ShopperCTA); FAQ still says "Download the app" as if live;
   `AppStoreButtons` hrefs are `#`; footer social links are `#`;
   `BrandsCTA` heading "Turn your brand into a business." violates the
   banned framing; waitlist confirmation email template is off-brand
   (green, © 2025, "brand becomes a business").
4. **Nothing is committed** — the whole redesign sits uncommitted on `main`
   (predates these sessions too). Commit/branch early next session.
5. `feature-hand.png` rights + screen-content swap before launch.

**Shopper hero (iterated to final):** dark full-viewport band
(azure-tinted radial in oklab over anchor), the brand film at **native
1064:1684 aspect**, left-anchored (6% margin), `lg:h-[74vh]`, fading into
the background on all edges via nested masks; mobile = film top, fading
down into copy. Uppercase headline "SHOP FROM YOUR FAVOURITE BRAND AND
DISCOVER MORE" (azure span), subline, white store buttons + "Coming soon".
Discarded on the way (don't resurrect without asking): wide banner w/
scooped plate, blurred-echo stage, 3-card fan deck, arch portal + spinning
badge.

**Video pipeline:** master `.mov` (84MB) moved out of `public/`; shipped
`shopper_hero.mp4` = CRF 18 + `-tune film` (grain-preserving), 30fps, muted,
faststart, 21MB. Poster + 2 panel frame-grabs extracted via ffmpeg.

## 2026-08-26 — Shopper track pruned; hero rebuilt from Stitch reference

- Removed shopper sections: "Support makers" VideoFeature, shoppable-reels
  VideoFeature, product-detail PhoneFeature, delivery VideoFeature.
- Built the Stitch-style hero (banner + scooped headline plate + fillets),
  then iterated through sizes/crops before pivoting away from cover-cropping
  the portrait film entirely (see 08-27 final).
- Footer top padding pt-28/lg:pt-32 so column headers clear the navbar on
  full sticky reveal.

## 2026-08-24 — Brands VerticalsShowcase completed (pinned scroll-jack)

- Section pins for exactly the conveyor's travel (measured via
  ResizeObserver: image height + chip column height; wrapper =
  100dvh + travel; sticky inner panel). Scroll scrubs 8 truth-chips
  (Discovery/Payments/Delivery/Customer care ×2 each) over the hand-held
  phone cutout; spring-smoothed; releases when the last chip clears.
- White → **lime** (`--color-lime`, oklch(0.88 0.22 125)) colour field
  blooms with the pin (scroll-driven opacity), hot core behind the phone.
- Heading "Everything your brand needs to sell more." left of visual with
  "WHAT YIIVA OFFERS?" eyebrow + "See how it works →" pill
  (smooth-scrolls to `#how-it-works` on FeatureDeepDives). Intro paragraph
  stayed centered in FeaturesSection. ContentSection commented out.
- `feature-hand.png`: baked-in checkerboard "transparency" removed
  programmatically (border flood-fill + pattern-detected holes, screen
  protected, watermark corner cleared, 1px feather), auto-cropped to
  alpha bbox (735×846). Phone sits ~30% into the crop — conveyor anchored
  there. Fixed pre-existing framer-motion v12 easing-tuple type errors in
  Hero + HowDiscoveryWorks (`as const`) that broke `next build`.

## 2026-08-23 — Context + hero copy groundwork

- Full read of nuwa/athena/maya + this repo (see CLAUDE.md distillation).
- Uncommitted content-pass (pre-existing): new metadata, hero copy for both
  audiences, "Coming soon to iOS & Android", marquee/WhoItsFor/FeatureCarousel
  removed, navbar "Start selling".
