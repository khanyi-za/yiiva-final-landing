"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Footer from "./Footer";

interface RevealFooterProps {
  children: React.ReactNode;
}

// A fixed element can never show more than one viewport of itself, so if the
// footer is taller than the viewport the reveal can't complete and we fall
// back to a normal-flow footer. On phones the stacked footer (~875px) is
// always taller than the screen, so they take the static path (measured
// 2026-09-13: 63–327px of the footer was unreachable before this). Desktop
// keeps the reveal — the footer's own top padding already clears the navbar,
// so no extra allowance is subtracted here.

export default function StickyFooterReveal({ children }: RevealFooterProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [contentTransform, setContentTransform] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  // Only switch behaviour after mount so the first render matches the server
  // (avoids a hydration mismatch when reduced-motion changes the tree).
  useEffect(() => setMounted(true), []);

  // Measure the real footer height and the viewport (both update on resize /
  // content reflow) so the reveal translate matches exactly — no seam or gap —
  // and so we know whether the reveal can physically complete.
  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const measure = () => {
      setFooterHeight(el.offsetHeight);
      // Mobile browsers grow innerHeight as the URL bar collapses; deciding on
      // the smallest height seen keeps the mode stable instead of flipping
      // between reveal and static mid-scroll.
      setViewportHeight((prev) => (prev > 0 ? Math.min(prev, window.innerHeight) : window.innerHeight));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [mounted]);

  const fitsViewport =
    footerHeight > 0 && viewportHeight > 0 && footerHeight <= viewportHeight;
  const staticFooter = mounted && (!!reduce || !fitsViewport);

  useEffect(() => {
    if (staticFooter || footerHeight === 0) {
      setContentTransform(0);
      return;
    }

    const update = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;

      // Start revealing over the last 30% of the scroll.
      const startReveal = 0.7;
      if (progress > startReveal) {
        const revealProgress = (progress - startReveal) / (1 - startReveal);
        setContentTransform(-footerHeight * revealProgress);
      } else {
        setContentTransform(0);
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, [staticFooter, footerHeight]);

  // Static: no scroll-hijack — footer sits in normal flow below content.
  // Taken for reduced-motion users and whenever the footer can't fit under
  // the viewport (all phones, short desktop windows).
  if (staticFooter) {
    return (
      <>
        {children}
        <div ref={footerRef}>
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      {/* Fixed footer behind content (lower z-index), measured via footerRef */}
      <div ref={footerRef} className="fixed bottom-0 left-0 right-0" style={{ zIndex: 1 }}>
        <Footer />
      </div>

      {/* Main content that slides up to reveal the footer */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          transform: `translateY(${contentTransform}px)`,
          transition: contentTransform === 0 ? "transform 0.1s ease-out" : "none",
        }}
      >
        {children}
      </div>
    </>
  );
}
