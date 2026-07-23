"use client";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import Footer from "./Footer";

interface RevealFooterProps {
  children: React.ReactNode;
}

export default function StickyFooterReveal({ children }: RevealFooterProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [contentTransform, setContentTransform] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);

  // Only switch behaviour after mount so the first render matches the server
  // (avoids a hydration mismatch when reduced-motion changes the tree).
  useEffect(() => setMounted(true), []);
  const staticFooter = mounted && reduce;

  // Measure the real footer height (updates on resize / content reflow) so the
  // reveal translate matches it exactly — no seam or gap.
  useEffect(() => {
    if (staticFooter) return;
    const el = footerRef.current;
    if (!el) return;
    const measure = () => setFooterHeight(el.offsetHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [staticFooter]);

  useEffect(() => {
    if (staticFooter || footerHeight === 0) return;

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

  // Reduced motion: no scroll-hijack — footer sits in normal flow below content.
  if (staticFooter) {
    return (
      <>
        {children}
        <Footer />
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
