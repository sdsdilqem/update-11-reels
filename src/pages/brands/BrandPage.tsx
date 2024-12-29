import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Users, UserPlus, Bell } from 'lucide-react';
import { brands } from '../../data/brands';
import { appleProducts } from '../../data/staticProducts';
import StaticProductCard from './components/StaticProductCard';

export default function BrandPage() {
  const { id } = useParams();
  const brand = brands.find(b => b.id === id);
  const [isFollowing, setIsFollowing] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(false);

  if (!brand) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Marka tapılmadı</h1>
        <Link to="/brands" className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
          Bütün markalar
        </Link>
      </div>
    );
  }

  // Get brand specific products
  const brandProducts = brand.id === 'apple' ? appleProducts : [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/brands" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <h1 className="font-semibold">{brand.name}</h1>
            </div>
            <button
              onClick={() => setHasNotifications(!hasNotifications)}
              className="p-2 hover:bg-gray-50 rounded-full relative"
            >
              <Bell className="w-5 h-5" />
              {hasNotifications && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Brand Cover & Info */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto">
          {/* Cover Image */}
          <div className="relative h-48 lg:h-64">
            <img 
              src={brand.coverImage}
              alt={brand.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Brand Info */}
          <div className="px-4 -mt-20 relative">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start lg:items-center flex-col lg:flex-row">
                <div className="w-24 h-24 rounded-xl overflow-hidden border-4 border-white shadow-sm mb-4 lg:mb-0 lg:mr-6">
                  <img 
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="flex-1">
                  <h1 className="text-2xl font-bold mb-2">{brand.name}</h1>
                  <p className="text-gray-600 mb-4">{brand.description}</p>
                  
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-gray-600">
                      <Package className="w-5 h-5 mr-1" />
                      <span>{brand.productCount} məhsul</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users className="w-5 h-5 mr-1" />
                      <span>{brand.followers.toLocaleString()} izləyici</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 lg:mt-0 w-full lg:w-auto">
                  <button
                    onClick={() => setIsFollowing(!isFollowing)}
                    className={`w-full lg:w-auto px-6 py-2 rounded-xl font-medium flex items-center justify-center space-x-2 ${
                      isFollowing
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    <UserPlus className="w-5 h-5" />
                    <span>{isFollowing ? 'İzləyirsən' : 'İzlə'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Products Grid */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold mb-6">Məhsullar</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brandProducts.map(product => (
            <StaticProductCard 
              key={product.id} 
              product={product} 
              brandId={brand.id} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}