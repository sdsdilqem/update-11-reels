import { useState, useCallback } from 'react';

export function useReelsNavigation(totalItems: number) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex, totalItems]);

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  return {
    currentIndex,
    goToNext,
    goToPrevious,
    isFirst: currentIndex === 0,
    isLast: currentIndex === totalItems - 1
  };
}