import React, { useRef, useEffect, ReactNode } from 'react';
import { useSwipe } from '../../hooks/useSwipe';

interface ScrollContainerProps {
  children: ReactNode;
  className?: string;
  onScrollEnd?: () => void;
}

export default function ScrollContainer({ children, className = '', onScrollEnd }: ScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const momentumRef = useRef<number>(0);
  const velocityRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const lastXRef = useRef<number>(0);
  const isScrollingRef = useRef(false);

  const { onTouchStart, onTouchMove, onTouchEnd, isSwiping, touchXRef } = useSwipe({
    threshold: 30
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        requestAnimationFrame(checkScrollEnd);
      }
    };

    const checkScrollEnd = () => {
      const container = containerRef.current;
      if (!container) return;

      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        onScrollEnd?.();
      }
      isScrollingRef.current = false;
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [onScrollEnd]);

  useEffect(() => {
    if (isSwiping && containerRef.current) {
      const now = Date.now();
      const dt = now - lastTimeRef.current;
      const dx = touchXRef.current - lastXRef.current;
      
      velocityRef.current = Math.abs(dx / dt);
      momentumRef.current = dx * velocityRef.current;
      
      lastTimeRef.current = now;
      lastXRef.current = touchXRef.current;
    }
  }, [isSwiping, touchXRef]);

  return (
    <div
      ref={containerRef}
      className={`overflow-x-auto scrollbar-hide overscroll-x-contain ${className}`}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {children}
    </div>
  );
}