import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MessageCircle, ShieldCheck, ShoppingBag, Package, Circle } from 'lucide-react';
import type { Post } from '../../../types/post';

interface ProductInfoProps {
  product: Post;
  onCommentsClick: () => void;
}

export default function ProductInfo({ product, onCommentsClick }: ProductInfoProps) {
  return (
    <>
      {/* Social Actions */}
      <div className="flex items-center justify-between py-3 border-b lg:pt-0">
        <div className="flex items-center space-x-6">
          <button className="flex items-center space-x-1">
            <Heart className="w-6 h-6" />
            <span className="text-sm">{product.likes}</span>
          </button>
          <button 
            className="flex items-center space-x-1"
            onClick={onCommentsClick}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm">{product.comments} şərh</span>
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="py-4">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">{product.title}</h1>
        <div className="text-2xl lg:text-3xl font-bold text-emerald-500 mb-4">{product.price} ₼</div>
        
        {/* Seller Info */}
        <div className="flex items-center space-x-3 py-4 border-t border-b">
          <Link to={`/seller/${product.username}`}>
            <div className="relative">
              <img
                src={product.avatar}
                alt={product.username}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="absolute -right-1 -bottom-1">
                <Circle className="w-4 h-4 text-green-500 fill-green-500" />
              </div>
            </div>
          </Link>
          <div className="flex-1">
            <Link to={`/seller/${product.username}`} className="flex items-center space-x-2">
              <h3 className="font-medium">{product.username}</h3>
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
            </Link>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
              <span className="flex items-center">
                <ShoppingBag className="w-4 h-4 mr-1" />
                <span>12 satış</span>
              </span>
              <span className="flex items-center">
                <Package className="w-4 h-4 mr-1" />
                <span>3 elan</span>
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="py-4">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}