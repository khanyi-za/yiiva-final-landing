import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, source } = body; // source can be 'hero', 'footer', or 'navbar'

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Instantiate Resend lazily so a missing key doesn't crash the route at import
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please try again later.' },
        { status: 500 }
      );
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Send notification email to admin
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: process.env.RESEND_TO_EMAIL!,
      subject: 'New Waitlist Signup - YIIVA',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(to right, #065f46, #047857);
                color: white;
                padding: 20px;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #f9fafb;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
              }
              .label {
                font-weight: bold;
                color: #065f46;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #374151;
                font-size: 16px;
              }
              .badge {
                display: inline-block;
                padding: 4px 12px;
                background: #fef3c7;
                color: #92400e;
                border-radius: 12px;
                font-size: 12px;
                font-weight: bold;
                text-transform: uppercase;
              }
              .footer {
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #d1d5db;
                font-size: 12px;
                color: #6b7280;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2 style="margin: 0;">🎉 New Waitlist Signup</h2>
                <p style="margin: 5px 0 0 0;">YIIVA Landing Page</p>
              </div>
              <div class="content">
                <div class="field">
                  <span class="label">Email Address:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="field">
                  <span class="label">Signup Source:</span>
                  <span class="badge">${source || 'unknown'}</span>
                </div>
                <div class="field">
                  <span class="label">Timestamp:</span>
                  <span class="value">${new Date().toLocaleString()}</span>
                </div>
                <div class="footer">
                  <p>This user has joined your waitlist and is expecting access to the YIIVA demo.</p>
                  <p><strong>Action Required:</strong> Add this email to your waitlist database and send them a welcome email.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    // Optionally send confirmation email to user
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: email,
      subject: 'Welcome to YIIVA Waitlist!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(to right, #065f46, #047857);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 8px 8px 0 0;
              }
              .content {
                background: #ffffff;
                padding: 40px 30px;
                border-radius: 0 0 8px 8px;
                border: 1px solid #e5e7eb;
                border-top: none;
              }
              .logo {
                font-size: 32px;
                font-weight: bold;
                margin-bottom: 10px;
              }
              h1 {
                color: #065f46;
                margin-bottom: 20px;
              }
              .highlight {
                background: #d1fae5;
                padding: 20px;
                border-radius: 8px;
                margin: 20px 0;
                border-left: 4px solid #10b981;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e5e7eb;
                font-size: 14px;
                color: #6b7280;
                text-align: center;
              }
              .button {
                display: inline-block;
                padding: 12px 24px;
                background: #065f46;
                color: white;
                text-decoration: none;
                border-radius: 6px;
                margin: 20px 0;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">YIIVA</div>
                <p style="margin: 0; font-size: 18px;">Where your brand becomes a business</p>
              </div>
              <div class="content">
                <h1>Thank You for Joining Our Waitlist! 🎉</h1>
                <p>Hi there,</p>
                <p>We're excited to have you on board! You've successfully joined the YIIVA waitlist.</p>

                <div class="highlight">
                  <strong>What's Next?</strong>
                  <p style="margin: 10px 0 0 0;">We'll be in touch soon with:</p>
                  <ul style="margin: 10px 0;">
                    <li>Early access to the YIIVA app demo</li>
                    <li>Exclusive updates about our launch</li>
                    <li>Tips on how to grow your brand with YIIVA</li>
                  </ul>
                </div>

                <p>In the meantime, feel free to reach out if you have any questions.</p>

                <p style="margin-top: 30px;">
                  Best regards,<br>
                  <strong>The YIIVA Team</strong>
                </p>

                <div class="footer">
                  <p>© 2025 YIIVA. All rights reserved.</p>
                  <p style="margin-top: 10px; font-size: 12px;">
                    You received this email because you signed up for the YIIVA waitlist.
                  </p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Failed to join waitlist. Please try again.' },
      { status: 500 }
    );
  }
}
