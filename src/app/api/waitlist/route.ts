import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Waitlist / launch-lead capture. Two callers:
//   - Footer "Stay in the loop" form           → source "footer"   (email only)
//   - LeadModal via AppStoreButtons             → source "app-store-button" (name + email + platform)
//   - LeadModal via MerchantLink                → source "brand-signup" | "brand-login" (name + brand + email)
// Both send an internal notification to RESEND_TO_EMAIL and a confirmation to the
// subscriber. Copy branches on source so app leads get launch-specific wording.

// Basic in-memory rate limiter (per server instance): max 5 requests / 10 min per IP.
const RATE_LIMIT = 5;
const WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const PLATFORM_LABEL: Record<string, string> = {
  ios: 'iOS (App Store)',
  android: 'Android (Google Play)',
};

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { email, source, name, brand, platform, website } = body as {
      email?: string;
      source?: string;
      name?: string;
      brand?: string;
      platform?: string;
      website?: string;
    };

    // Honeypot: bots fill the hidden "website" field. Pretend success, send nothing.
    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    const isAppLead = source === 'app-store-button';
    const isBrandLead = source === 'brand-signup' || source === 'brand-login';
    const cleanName = typeof name === 'string' ? name.trim().slice(0, 120) : '';
    const cleanBrand = typeof brand === 'string' ? brand.trim().slice(0, 120) : '';
    if ((isAppLead || isBrandLead) && cleanName.length < 2) {
      return NextResponse.json({ error: 'Name is required' }, { status: 400 });
    }
    if (isBrandLead && cleanBrand.length < 2) {
      return NextResponse.json({ error: 'Brand name is required' }, { status: 400 });
    }
    const platformLabel = (platform && PLATFORM_LABEL[platform]) || 'not specified';
    const brandIntent = source === 'brand-signup' ? 'Start selling' : 'Log in';

    // Instantiate Resend lazily so a missing key doesn't crash the route at import
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = escapeHtml(cleanName);
    const safeBrand = escapeHtml(cleanBrand);
    const safeEmail = escapeHtml(email);

    // ── Internal notification ────────────────────────────────────────────────
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      replyTo: email,
      subject: isBrandLead
        ? `Brand lead: ${cleanName} — ${cleanBrand} (${brandIntent})`
        : isAppLead
          ? `App launch lead: ${cleanName} (${platformLabel})`
          : 'New newsletter signup - YIIVA',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #16130f; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
              .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
              .field { margin-bottom: 20px; }
              .label { font-weight: bold; color: #6d28d9; display: block; margin-bottom: 5px; }
              .value { color: #374151; font-size: 16px; }
              .badge { display: inline-block; padding: 4px 12px; background: #ede9fe; color: #4c1d95; border-radius: 12px; font-size: 12px; font-weight: bold; text-transform: uppercase; }
              .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #d1d5db; font-size: 12px; color: #6b7280; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">${isBrandLead ? 'New brand lead' : isAppLead ? 'New app launch lead' : 'New newsletter signup'}</h2>
                <p style="margin: 5px 0 0 0;">YIIVA landing page</p>
              </div>
              <div class="content">
                ${cleanName ? `<div class="field"><span class="label">Name:</span><span class="value">${safeName}</span></div>` : ''}
                ${isBrandLead ? `<div class="field"><span class="label">Brand:</span><span class="value">${safeBrand}</span></div>` : ''}
                <div class="field"><span class="label">Email:</span><span class="value">${safeEmail}</span></div>
                ${isAppLead ? `<div class="field"><span class="label">Store tapped:</span><span class="value">${platformLabel}</span></div>` : ''}
                ${isBrandLead ? `<div class="field"><span class="label">Button tapped:</span><span class="value">${brandIntent}</span></div>` : ''}
                <div class="field"><span class="label">Source:</span><span class="badge">${escapeHtml(source || 'unknown')}</span></div>
                <div class="field"><span class="label">Timestamp:</span><span class="value">${new Date().toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' })} (SAST)</span></div>
                <div class="footer">
                  ${
                    isBrandLead
                      ? '<p>A brand tapped a merchant button and asked to be told when onboarding opens. Follow up personally — this is a sales lead.</p>'
                      : isAppLead
                        ? '<p>This person tapped an app-store button and asked to be told when the app is live. Add them to the launch list.</p>'
                        : '<p>This person subscribed from the footer form.</p>'
                  }
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // ── Confirmation to the subscriber ───────────────────────────────────────
    const greeting = cleanName ? `Hi ${escapeHtml(cleanName.split(' ')[0])},` : 'Hi there,';
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: isBrandLead
        ? `You're on the list to sell on YIIVA${cleanBrand ? ` — ${cleanBrand}` : ''}`
        : isAppLead
          ? "You're on the list for the YIIVA app"
          : "You're subscribed to YIIVA",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #16130f; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
              .logo { font-size: 28px; font-weight: bold; letter-spacing: 0.12em; }
              .content { background: #ffffff; padding: 36px 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none; }
              h1 { color: #16130f; font-size: 22px; margin: 0 0 16px; }
              .highlight { background: #f3efFA; padding: 18px 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #6d28d9; }
              .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280; text-align: center; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">YIIVA</div>
                <p style="margin: 6px 0 0; font-size: 15px; opacity: 0.8;">Home to South African brands you love</p>
              </div>
              <div class="content">
                ${
                  isBrandLead
                    ? `
                <h1>You're on the list</h1>
                <p>${greeting}</p>
                <p>Thanks for your interest in selling ${safeBrand ? `<strong>${safeBrand}</strong> ` : ''}on YIIVA. We're completing payment activation with our provider before the first brands go live, and you'll get one email from us the day brand onboarding opens, with a link to set up your store.</p>
                <div class="highlight">
                  <strong>What YIIVA gives your brand</strong>
                  <p style="margin: 8px 0 0;">A new sales channel to reach customers beyond your existing base, with payments, delivery and customer care handled for you. Already on Shopify? Your catalogue imports in minutes.</p>
                </div>
                <p>If you'd like to talk before then, just reply to this email.</p>`
                    : isAppLead
                      ? `
                <h1>You're on the list</h1>
                <p>${greeting}</p>
                <p>Thanks for your interest in the YIIVA app. We're launching on iOS and Android shortly, and you'll get one email from us the day it's live on ${platformLabel === 'not specified' ? 'the app stores' : platformLabel.replace(/ \(.*\)/, '')}.</p>
                <div class="highlight">
                  <strong>What's coming</strong>
                  <p style="margin: 8px 0 0;">One app for premium South African brands: subscribe to the labels you love, fill one cart across many brands, pay once, and track delivery to your door.</p>
                </div>
                <p>Until then, there's nothing you need to do.</p>`
                      : `
                <h1>You're subscribed</h1>
                <p>${greeting}</p>
                <p>Thanks for signing up. We'll send you new brands and drops on YIIVA, and let you know when the app is live on iOS and Android.</p>
                <div class="highlight">
                  <strong>What to expect</strong>
                  <p style="margin: 8px 0 0;">Occasional emails only. Unsubscribe any time by replying to one of them.</p>
                </div>`
                }
                <p style="margin-top: 28px;">The YIIVA team</p>
                <div class="footer">
                  <p>© 2026 YIIVA · a product of Khaziimla Technology (Pty) Ltd</p>
                  <p style="margin-top: 8px; font-size: 12px;">You received this email because you signed up at yiiva.co.za.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}
