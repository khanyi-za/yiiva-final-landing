"use client";

// Capability grid — the calm, no-media beat. Mono line icons + short copy
// derived from the original product copy.
const CAPABILITIES = [
  {
    title: "Order management",
    body: "Track, manage and fulfil every order — and see what's selling, in real time.",
    icon: (
      <>
        <rect x="4" y="3" width="16" height="18" rx="2" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </>
    ),
  },
  {
    title: "Delivery & shipping",
    body: "Fast, reliable nationwide delivery. We handle logistics so you don't have to.",
    icon: (
      <>
        <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
        <circle cx="7" cy="18" r="1.6" />
        <circle cx="17.5" cy="18" r="1.6" />
      </>
    ),
  },
  {
    title: "AI discovery",
    body: "AI-powered product tagging helps the right shoppers discover your brand.",
    icon: (
      <>
        <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6z" />
        <path d="M18 15l.7 1.8L20.5 17l-1.8.7L18 19.5l-.7-1.8L15.5 17l1.8-.2z" />
      </>
    ),
  },
  {
    title: "Payments & customer care",
    body: "Built-in payments and customer care, handled — so you can focus on creating.",
    icon: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 9h18M7 15h4" />
      </>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="pt-16 pb-0 bg-[var(--color-paper)]">
      {/* Horizontal line across full width */}
      <div className="w-full border-t border-[var(--color-sage)] mb-12"></div>

      <div className="max-w-6xl mx-auto px-6 space-y-12">
        {/* Title + intro */}
        <div className="max-w-3xl space-y-5">
          <h2 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] leading-tight tracking-tight">
            The Mobile Commerce Platform Built For S.A. Brands
          </h2>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            From streetwear to skincare, YIIVA helps South African brands sell smarter with AI-powered discovery and reach to audience, seamless payments, and fast nationwide delivery.
          </p>
          <p className="text-base lg:text-xl text-[var(--color-ink-60)] leading-relaxed">
            We believe brands should focus more on growing and creating, not handling orders and deliveries.
          </p>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              className="rounded-[var(--radius-md)] border border-[var(--color-sage)] bg-[var(--color-paper-2)] p-6 flex flex-col gap-3"
            >
              <svg
                className="w-7 h-7 text-[var(--color-ink)]"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {c.icon}
              </svg>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[var(--color-ink)]">
                {c.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-60)] leading-relaxed">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal line across full width */}
      <div className="w-full border-t border-[var(--color-sage)] mt-16"></div>

      {/* Positioning line */}
      <div className="px-6 pt-12 space-y-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="font-[family-name:var(--font-display)] text-3xl lg:text-5xl font-bold text-[var(--color-ink)] tracking-tight">
            So, What Is YIIVA?
          </h3>
        </div>
        <div className="max-w-6xl mx-auto">
          <p className="text-xl lg:text-2xl text-[var(--color-ink)] leading-relaxed font-medium max-w-3xl">
            A mobile app online retailer that bridges the connection between Brand and customer. Think of YIIVA as Superbalist, but for homegrown South African Brands.
          </p>
        </div>
      </div>
    </section>
  );
}
