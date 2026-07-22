"use client";
import { useEffect, useState } from 'react';
import Footer from './Footer';

interface RevealFooterProps {
  children: React.ReactNode;
}

export default function StickyFooterReveal({ children }: RevealFooterProps) {
  const [contentTransform, setContentTransform] = useState(0);
  const [footerHeight, setFooterHeight] = useState(450);

  // Update footer height based on screen size
  useEffect(() => {
    const updateFooterHeight = () => {
      // Mobile gets taller footer due to stacked layout
      if (window.innerWidth < 1024) {
        setFooterHeight(1000); // Mobile: stacked columns + oversized wordmark + extra top padding
      } else {
        setFooterHeight(700); // Desktop: 3-column layout + oversized wordmark
      }
    };

    updateFooterHeight();
    window.addEventListener('resize', updateFooterHeight);
    return () => window.removeEventListener('resize', updateFooterHeight);
  }, []);

  useEffect(() => {
    const updateScrollEffect = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Calculate how much we can scroll
      const maxScroll = documentHeight - windowHeight;
      
      // Calculate scroll progress (0 to 1)
      const progress = Math.min(scrollTop / maxScroll, 1);
      
      // Calculate how much to move the main content up
      // Start revealing when 70% scrolled
      const startReveal = 0.7;
      
      if (progress > startReveal) {
        // Calculate reveal progress (0 to 1) for the reveal portion
        const revealProgress = (progress - startReveal) / (1 - startReveal);
        
        // Move content up by the footer height
        const translateY = -footerHeight * revealProgress;
        setContentTransform(translateY);
      } else {
        // Reset position when not in reveal zone
        setContentTransform(0);
      }
    };

    // Throttle scroll events for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollEffect();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initialize on mount
    updateScrollEffect();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [footerHeight]);

  return (
    <>
      {/* Fixed footer behind content (lower z-index) */}
      <div
        className="fixed bottom-0 left-0 right-0"
        style={{ zIndex: 1 }}
      >
        <Footer />
      </div>

      {/* Main content that slides up to reveal footer */}
      <div
        className="relative"
        style={{
          zIndex: 10,
          transform: `translateY(${contentTransform}px)`,
          transition: contentTransform === 0 ? 'transform 0.1s ease-out' : 'none'
        }}
      >
        {children}
      </div>

    </>
  );
}