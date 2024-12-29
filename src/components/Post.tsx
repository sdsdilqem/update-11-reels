import React, { useState } from 'react';
import { Heart, MessageCircle, HeartHandshake, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import type { Post as PostType } from '../types/post';

type PostProps = PostType;

export default function Post({
  id,
  image,
  title,
  price,
  username,
  avatar,
  likes,
  comments,
  isSponsored,
}: PostProps) {
  const navigate = useNavigate();

  const handlePostClick = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest('button') || target.tagName.toLowerCase() === 'button') {
      return;
    }
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={`
        bg-white rounded-xl shadow-sm overflow-hidden cursor-pointer 
        transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md
        ${isSponsored ? 'ring-2 ring-emerald-500/20' : ''}
      `}
      onClick={handlePostClick}
    >
      {/* Image Container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full aspect-square object-cover"
          loading="lazy"
        />

        {/* Price Tag - New Design
        <div className="absolute bottom-2 left-1">
          <div className="flex items-center">
            <div className="px-1.5 py-1 bg-white/50 backdrop-blur-none shadow-lg rounded-lg">
              <span className="font-[500] text-green-600">
                {price.toLocaleString()}₼
              </span>
            </div>
          </div>
        </div>
 */}
        {/* Sponsored Badge */}
        {isSponsored && (
          <div className="absolute top-3 left-3 bg-black/30 backdrop-blur-[2px] p-1.5 rounded-lg">
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3">
        <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm">
          {title}
        </h3>

        <div className="flex items-center space-x-3">
          <button className="group flex items-center space-x-1">
            <HeartHandshake className="w-5 h-5 text-gray-400 group-hover:text-red-500 transition-colors" />
            <span className="text-xs text-gray-500">{likes}</span>
          </button>
          <button className="group flex items-center space-x-1">
            <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-emerald-500 transition-colors" />
            <span className="text-xs text-gray-500">{comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
}