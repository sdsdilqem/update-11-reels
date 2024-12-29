import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, Heart, MessageCircle, Phone, 
  ShoppingBag, Package, ShieldCheck, Bookmark, 
  Sparkles, Circle 
} from 'lucide-react';
import ContactSheet from '../components/ContactSheet';
import CommentsSheet from '../components/CommentsSheet';
import OrderSheet from '../components/order/OrderSheet';
import { samplePosts } from '../data/samplePosts';
import { sampleComments } from '../data/sampleComments';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isCommentsOpen, setIsCommentsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  const product = samplePosts.find(post => post.id === Number(id));
  
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Məhsul tapılmadı</h1>
        <Link to="/" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
          Ana səhifəyə qayıt
        </Link>
      </div>
    );
  }

  const images = [
    product.image,
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80'
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handlePromoteClick = () => {
    navigate(`/product/${id}/promote`);
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 lg:pb-0 lg:py-8">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b">
        <div className="px-4 flex items-center justify-between h-14">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Geri</span>
          </Link>
          <button 
            onClick={handlePromoteClick}
            className="text-sm text-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-1"
          >
            <Sparkles className="w-4 h-4" />
            <span>Reklam et</span>
          </button>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        {/* Left Column */}
        <div>
          {/* Desktop Back Button */}
          <div className="hidden lg:flex lg:items-center lg:justify-between lg:mb-4">
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Geri</span>
            </Link>
            <button 
              onClick={handlePromoteClick}
              className="text-sm text-blue-500 hover:text-blue-600 transition-colors flex items-center space-x-1"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reklam et!</span>
            </button>
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <div className="aspect-square overflow-hidden lg:rounded-2xl">
              <img 
                src={images[currentImageIndex]} 
                alt={product.title} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg rotate-180"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Image Indicators */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column - Content Section */}
        <div className="px-4 lg:px-0">
          {/* Social Actions */}
          <div className="flex items-center justify-between py-3 border-b lg:pt-0">
            <div className="flex items-center space-x-6">
              <button className="flex items-center space-x-1">
                <Heart className="w-6 h-6" />
                <span className="text-sm">{product.likes}</span>
              </button>
              <button 
                className="flex items-center space-x-1"
                onClick={() => setIsCommentsOpen(true)}
              >
                <MessageCircle className="w-6 h-6" />
                <span className="text-sm">{product.comments} şərh</span>
              </button>
            </div>
          </div>

          {/* Product Info */}
          <div className="py-4">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">{product.title}</h1>
            <div className="text-2xl lg:text-3xl font-bold text-blue-500 mb-4">₼{product.price}</div>
            
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
                  <ShieldCheck className="w-4 h-4 text-blue-500" />
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

            {/* Action Buttons */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-3 lg:relative lg:bottom-auto lg:left-auto lg:right-auto lg:bg-transparent lg:border-t-0 lg:px-0 lg:py-0 lg:mt-6">
              <div className="flex space-x-3 max-w-2xl mx-auto">
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="flex-1 px-4 py-3 border border-gray-200 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Əlaqə</span>
                </button>
                <button
                  onClick={() => setIsOrderOpen(true)}
                  className="flex-1 px-4 py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Sifariş et</span>
                </button>
                <button
                  onClick={() => setIsBookmarked(!isBookmarked)}
                  className={`px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors ${
                    isBookmarked ? 'text-blue-500' : 'text-gray-700'
                  }`}
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sheets */}
      <ContactSheet
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        username={product.username}
        avatar={product.avatar}
      />

      <OrderSheet
        isOpen={isOrderOpen}
        onClose={() => setIsOrderOpen(false)}
        productTitle={product.title}
        productPrice={product.price}
      />

      <CommentsSheet
        isOpen={isCommentsOpen}
        onClose={() => setIsCommentsOpen(false)}
        comments={sampleComments}
      />
    </div>
  );
}