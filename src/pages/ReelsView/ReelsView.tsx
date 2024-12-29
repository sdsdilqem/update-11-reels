import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoReel from './components/VideoReel';
import ProductReel from './components/ProductReel';
import { useSwipe } from '../../hooks/useSwipe';
import { useImagePreloader } from '../../utils/imageLoader';
import { sampleReels } from '../../data/sampleReels';

export default function ReelsView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = sampleReels
    .filter(reel => reel.type === 'image')
    .map(reel => reel.url);
  const { isLoading, loadedImages } = useImagePreloader(imageUrls);

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeUp: () => {
      if (currentIndex < sampleReels.length - 1) {
        setCurrentIndex(prev => prev + 1);
      }
    },
    onSwipeDown: () => {
      if (currentIndex > 0) {
        setCurrentIndex(prev => prev - 1);
      }
    },
    threshold: 50
  });

  // Prevent body scroll
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black">
      {/* Back Button */}
      <Link 
        to="/"
        className="fixed top-4 left-4 z-50 p-2 bg-black/20 rounded-full backdrop-blur-sm"
        onTouchStart={(e) => e.stopPropagation()}
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </Link>

      {/* Reels Container */}
      <div 
        className="h-full w-full touch-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {sampleReels.map((reel, index) => (
          <div
            key={reel.id}
            className={`
              absolute inset-0 w-full h-full transition-transform duration-300
              ${Math.abs(index - currentIndex) <= 1 ? 'visible' : 'invisible'}
            `}
            style={{ 
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            {reel.type === 'video' ? (
              <VideoReel
                reel={reel}
                isActive={index === currentIndex}
                isFirst={index === 0}
                onVideoEnd={() => {
                  if (currentIndex < sampleReels.length - 1) {
                    setCurrentIndex(prev => prev + 1);
                  }
                }}
              />
            ) : (
              <ProductReel
                post={reel.product}
                isActive={index === currentIndex}
                isImageLoaded={loadedImages.has(reel.url)}
                isFirst={index === 0}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}