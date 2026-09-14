// Central external links.
// Merchant dashboard domain (athena) = merchant.yiiva.co.za — the documented
// MERCHANT_APP_URL_BASE from the app's API contracts. Confirm with the team.
export const MERCHANT_SIGNUP_URL = "https://merchant.yiiva.co.za/register";
export const MERCHANT_LOGIN_URL = "https://merchant.yiiva.co.za/login";

// PRE-LAUNCH GATE (2026-09-14): brands can't trade until the payment provider
// activates live payments, so every "Start selling" / "Log in" on the landing
// page opens a lead modal instead of linking to the dashboard (see
// components/MerchantLink.tsx). Flip to true on go-live.
export const MERCHANT_ONBOARDING_OPEN = false;
