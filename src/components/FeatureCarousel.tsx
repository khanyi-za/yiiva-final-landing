"use client";
import { useEffect, useState, useRef } from 'react';

interface FeatureCarouselProps {
  words?: string[];
  interval?: number;
  animationDuration?: number;
}

export default function FeatureCarousel({
  words: propWords,
  interval = 1700,
  animationDuration = 500
}: FeatureCarouselProps = {}) {
  const defaultWords = ["No Delivery Friction", "No Friction From Discovery To Purchase", "No Confusing DM Orders", "No Fragmented WhatsApp Orders", "No Lost Leads", "No Extra Costs"];
  const words = propWords || defaultWords;

  const [scrollOffset, setScrollOffset] = useState(0);
  const scrollOffsetRef = useRef(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Height of each item - responsive
  const ITEM_HEIGHT = isMobile ? 50 : 84;
  // Gap between items - responsive (reduced on mobile)
  const ITEM_GAP = isMobile ? 8 : Math.round(84 * 0.18); // 8px mobile, ~15px desktop
  const ITEM_TOTAL_HEIGHT = ITEM_HEIGHT + ITEM_GAP;

  // Keep ref in sync with state
  useEffect(() => {
    scrollOffsetRef.current = scrollOffset;
  }, [scrollOffset]);

  useEffect(() => {
    let isAnimating = false;

    const startAnimation = () => {
      if (isAnimating) return;

      isAnimating = true;
      const startOffset = scrollOffsetRef.current;
      const targetOffset = startOffset + ITEM_TOTAL_HEIGHT;
      const startTime = Date.now();

      const animateStep = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / animationDuration, 1);
        const easeProgress = 0.5 - 0.5 * Math.cos(progress * Math.PI); // Smooth ease-in-out

        const newOffset = startOffset + (targetOffset - startOffset) * easeProgress;
        scrollOffsetRef.current = newOffset;
        setScrollOffset(newOffset);

        if (progress < 1) {
          requestAnimationFrame(animateStep);
        } else {
          isAnimating = false;
        }
      };

      requestAnimationFrame(animateStep);
    };

    const timer = setInterval(startAnimation, interval);

    // Reset to starting position every 20 seconds
    const resetTimer = setInterval(() => {
      scrollOffsetRef.current = 0;
      setScrollOffset(0);
    }, 20000);

    return () => {
      clearInterval(timer);
      clearInterval(resetTimer);
    };
  }, [interval, animationDuration, ITEM_TOTAL_HEIGHT]);

  // Calculate current middle word index for screen reader
  const currentWordIndex = Math.floor(scrollOffset / ITEM_TOTAL_HEIGHT) % words.length;
  const activeWordIndex = currentWordIndex;

  // Create a large array of repeating words for smooth infinite scroll
  const createInfiniteWords = (): Array<{word: string, key: string, position: number}> => {
    const repeats = 50; // Create many repetitions
    const infiniteWords: Array<{word: string, key: string, position: number}> = [];
    for (let i = 0; i < repeats; i++) {
      words.forEach((word, index) => {
        infiniteWords.push({
          word,
          key: `${word}-${i}-${index}`,
          position: i * words.length + index
        });
      });
    }
    return infiniteWords;
  };

  const infiniteWords = createInfiniteWords();

  return (
    <section className="py-6 lg:py-[2.48rem]">
      <div className="relative rounded-3xl overflow-hidden mx-auto border-[1.2px] border-white w-[95%]" style={{backgroundColor: '#030f02'}}>
        <div className="px-4 lg:px-8 py-4 lg:py-[2.7rem] mx-auto">
          <div className="flex items-center justify-start gap-4 lg:gap-8">
            {/* Fixed "No" text - stays on the left */}
            <div className="flex-shrink-0">
              <span className="text-3xl lg:text-7xl font-bold text-cyan-400 leading-none">
                No
              </span>
            </div>
            
            {/* Vertical carousel container - separate stack to the right */}
            <div 
              className="relative flex-1"
              style={{ 
                height: `${ITEM_HEIGHT * 3 + ITEM_GAP * 2}px`, // 3 items + 2 gaps between them
                maskImage: `linear-gradient(to bottom, 
                  transparent 0%, 
                  black 13%, 
                  black 87%, 
                  transparent 100%)`,
                WebkitMaskImage: `linear-gradient(to bottom, 
                  transparent 0%, 
                  black 13%, 
                  black 87%, 
                  transparent 100%)`,
              }}
              aria-live="polite"
              role="listbox"
              aria-label="Rotating text carousel"
            >
              {/* Single vertical column of carousel words */}
              <div 
                className="flex flex-col"
                style={{
                  transform: `translateY(-${scrollOffset - ITEM_TOTAL_HEIGHT}px)`, // Start with first word centered
                  gap: `${ITEM_GAP}px`
                }}
              >
                {infiniteWords.map((item) => (
                  <div
                    key={item.key}
                    className={`flex items-center justify-start`}
                    style={{
                      height: `${ITEM_HEIGHT}px`,
                    }}
                  >
                    <span
                      className="whitespace-nowrap leading-none text-xl lg:text-5xl font-bold text-gray-400 opacity-100"
                    >
                      {item.word}
                    </span>
                  </div>
                ))}
              </div>
              
              {/* Screen reader announcement for current active word */}
              <span className="sr-only">
                Current: {words[activeWordIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 