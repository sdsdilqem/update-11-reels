import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles } from 'lucide-react';
import { samplePosts } from '../../data/samplePosts';
import ProductGallery from './components/ProductGallery';
import ProductInfo from './components/ProductInfo';
import ProductActions from './components/ProductActions';
import { useProductDetails } from './hooks/useProductDetails';

export default function ProductDetailsPage() {
  const { id } = useParams();
  const product = samplePosts.find(post => post.id === Number(id));
  const {
    isContactOpen,
    isOrderOpen,
    isCommentsOpen,
    handleContactClick,
    handleOrderClick,
    handleCommentsClick,
    handlePromoteClick,
    handleCloseSheets
  } = useProductDetails();
  
  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Məhsul tapılmadı</h1>
        <Link to="/" className="text-emerald-500 hover:text-emerald-600 mt-4 inline-block">
          Ana səhifəyə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto pb-20 lg:pb-0 lg:py-8">
      {/* Mobile Header */}
      <div className="lg:hidden sticky top-16 z-30 bg-white border-b">
        <div className="px-4 flex items-center justify-between h-14">
          <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-5 h-5" />
            <span>Geri</span>
          </Link>
          <button 
            onClick={handlePromoteClick}
            className="text-sm text-emerald-500 hover:text-emerald-600 transition-colors flex items-center space-x-1"
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
            <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span>Geri</span>
            </Link>
            <button 
              onClick={handlePromoteClick}
              className="text-sm text-emerald-500 hover:text-emerald-600 transition-colors flex items-center space-x-1"
            >
              <Sparkles className="w-4 h-4" />
              <span>Reklam et</span>
            </button>
          </div>

          <ProductGallery product={product} />
        </div>

        {/* Right Column */}
        <div className="px-4 lg:px-0">
          <ProductInfo 
            product={product}
            onCommentsClick={handleCommentsClick}
          />
          <ProductActions
            product={product}
            onContactClick={handleContactClick}
            onOrderClick={handleOrderClick}
            isContactOpen={isContactOpen}
            isOrderOpen={isOrderOpen}
            isCommentsOpen={isCommentsOpen}
            onCloseSheets={handleCloseSheets}
          />
        </div>
      </div>
    </div>
  );
}