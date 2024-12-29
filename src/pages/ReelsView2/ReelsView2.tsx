import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import MasonryReel from './components/MasonryReel';
import { samplePosts } from '../../data/samplePosts';
import { useSwipe } from '../../hooks/useSwipe';
import { useImagePreloader } from '../../utils/imageLoader';

// Group posts into sets of 6
const groupedPosts = samplePosts.reduce((acc, post, index) => {
  const groupIndex = Math.floor(index / 6);
  if (!acc[groupIndex]) {
    acc[groupIndex] = [];
  }
  acc[groupIndex].push(post);
  return acc;
}, [] as typeof samplePosts[]);

export default function ReelsView2() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = samplePosts.map(post => post.image);
  const { isLoading, loadedImages } = useImagePreloader(imageUrls);

  const { onTouchStart, onTouchMove, onTouchEnd } = useSwipe({
    onSwipeUp: () => {
      if (currentIndex < groupedPosts.length - 1) {
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

  React.useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
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
        {groupedPosts.map((posts, index) => (
          <div
            key={index}
            className={`
              absolute inset-0 w-full h-full transition-transform duration-300
              ${Math.abs(index - currentIndex) <= 1 ? 'visible' : 'invisible'}
            `}
            style={{ 
              transform: `translateY(${(index - currentIndex) * 100}%)`,
              zIndex: index === currentIndex ? 1 : 0
            }}
          >
            <MasonryReel 
              posts={posts} 
              isActive={index === currentIndex}
              loadedImages={loadedImages}
              isFirst={index === 0}
            />
          </div>
        ))}
      </div>
    </div>
  );
}