import React from 'react';
import { ChevronDown } from 'lucide-react';
import type { Post } from '../../../types/post';

interface MasonryReelProps {
  posts: Post[];
  isActive: boolean;
  loadedImages: Set<string>;
  isFirst?: boolean;
}

export default function MasonryReel({ posts, isActive, loadedImages, isFirst = false }: MasonryReelProps) {
  return (
    <div className="h-full w-full relative bg-gray-50 p-4">
      {/* Scroll Indicator - Only shown for first reel */}
      {isFirst && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="flex flex-col items-center animate-bounce-slow text-gray-900/90 bg-white/80 px-6 py-3 rounded-full backdrop-blur-sm shadow-sm">
            <ChevronDown className="w-8 h-8 mb-1" strokeWidth={2.5} />
            <span className="text-base font-medium">Aşağı sürüşdür</span>
          </div>
        </div>
      )}

      <div className="grid grid-cols-2 gap-3 h-full">
        {/* Left Column - Two Large Images */}
        <div className="h-full flex flex-col gap-3">
          {posts.slice(0, 2).map((post) => (
            <div 
              key={post.id} 
              className="relative rounded-3xl overflow-hidden flex-1"
            >
              {/* Loading placeholder */}
              {!loadedImages.has(post.image) && (
                <div className="absolute inset-0 bg-emirald-200 animate-pulse" />
              )}
              <img 
                src={post.image} 
                alt={post.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isActive && loadedImages.has(post.image) ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Right Column - Grid */}
        <div className="h-full grid grid-rows-3 gap-3">
          {posts.slice(2, 5).map((post) => (
            <div 
              key={post.id} 
              className="relative rounded-3xl overflow-hidden"
            >
              {/* Loading placeholder */}
              {!loadedImages.has(post.image) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              <img
                src={post.image}
                alt={post.title}
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  isActive && loadedImages.has(post.image) ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}