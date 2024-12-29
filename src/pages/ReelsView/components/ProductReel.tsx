import React from 'react';
import { Heart, MessageCircle, Share2, ShoppingBag, ChevronDown } from 'lucide-react';
import type { Post } from '../../../types/post';

interface ProductReelProps {
  post: Post;
  isActive: boolean;
  isImageLoaded: boolean;
  isFirst?: boolean;
}

export default function ProductReel({ post, isActive, isImageLoaded, isFirst = false }: ProductReelProps) {
  return (
    <div className="h-full w-full relative bg-black">
      {/* Loading placeholder */}
      {!isImageLoaded && (
        <div className="absolute inset-0 bg-gray-900 animate-pulse" />
      )}

      {/* Product Image with fade animation */}
      <img
        src={post.image}
        alt={post.title}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          isActive && isImageLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/60" />

      {/* Scroll Indicator - Only shown for first reel */}
      {isFirst && isActive && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="flex flex-col items-center animate-bounce-slow text-white/90 bg-black/20 px-6 py-3 rounded-full backdrop-blur-sm">
            <ChevronDown className="w-8 h-8 mb-1" strokeWidth={2.5} />
            <span className="text-base font-medium">Aşağı sürüşdür</span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4">
        {/* User Info */}
        <div className="flex items-center space-x-3 mb-4">
          <img
            src={post.avatar}
            alt={post.username}
            className="w-10 h-10 rounded-full border-2 border-white"
          />
          <div>
            <h3 className="text-white font-semibold">{post.username}</h3>
            <p className="text-white/80 text-sm">Satıcı</p>
          </div>
        </div>

        {/* Product Info */}
        <div className="mb-4">
          <h2 className="text-white text-xl font-bold mb-2">{post.title}</h2>
          <p className="text-white/90 text-2xl font-bold">₼{post.price}</p>
        </div>
      </div>

      {/* Action Buttons Dashboard */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2">
        <div className="bg-black/10 backdrop-blur-[2px] rounded-2xl p-3 space-y-6">
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">{post.likes}</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">{post.comments}</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <Share2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">Paylaş</span>
          </button>
          
          <button className="group flex flex-col items-center">
            <div className="p-2 bg-white/10 rounded-xl group-hover:bg-white/20 transition-colors">
              <ShoppingBag className="w-5 h-5 text-white" />
            </div>
            <span className="text-white text-xs mt-1">Al</span>
          </button>
        </div>
      </div>
    </div>
  );
}