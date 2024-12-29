import React from 'react';
import type { Post } from '../../../types/post';

interface ProductCardProps {
  post: Post;
  isActive: boolean;
  isImageLoaded: boolean;
  className?: string;
  imageClassName?: string;
}

export default function ProductCard({ 
  post, 
  isActive, 
  isImageLoaded,
  className = '', 
  imageClassName = '' 
}: ProductCardProps) {
  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      {/* Loading placeholder */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-emirald-900 animate-pulse" />
      )}

      <img
        src={post.image}
        alt={post.title}
        className={`w-full object-cover transition-opacity duration-300 ${imageClassName} ${
          isActive && isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}