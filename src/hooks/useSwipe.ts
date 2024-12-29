import { useState, useRef, TouchEvent } from 'react';

interface SwipeHandlers {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  threshold?: number;
}

export function useSwipe({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50
}: SwipeHandlers) {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);
  const [isSwiping, setIsSwiping] = useState(false);

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
    setIsSwiping(true);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isSwiping) return;
    
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };

    // Prevent default only if we're swiping vertically
    if (touchStart.current && Math.abs(touchEnd.current.y - touchStart.current.y) > 10) {
      e.preventDefault();
    }
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const isHorizontal = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontal) {
      if (Math.abs(distanceX) > threshold) {
        if (distanceX > 0 && onSwipeLeft) {
          onSwipeLeft();
        }
        if (distanceX < 0 && onSwipeRight) {
          onSwipeRight();
        }
      }
    } else {
      if (Math.abs(distanceY) > threshold) {
        if (distanceY > 0 && onSwipeUp) {
          onSwipeUp();
        }
        if (distanceY < 0 && onSwipeDown) {
          onSwipeDown();
        }
      }
    }

    touchStart.current = null;
    touchEnd.current = null;
    setIsSwiping(false);
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    isSwiping
  };
}