import React from 'react';
import { Eye, Heart, Shield } from 'lucide-react';
import type { Product } from '../../types/product';
import { formatCurrency } from '../../utils/format';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex space-x-2">
          {product.verificationStatus === 'VERIFIED' && (
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
              <Shield className="w-3 h-3 mr-1" />
              Verified
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.title}</h3>
        <p className="text-2xl font-bold text-blue-600 mb-2">
          {formatCurrency(product.price)}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {product.viewCount}
          </span>
          <span className="flex items-center">
            <Heart className="w-4 h-4 mr-1" />
            {product.interestedUsers.length}
          </span>
          <span className={`px-2 py-1 rounded-full text-xs ${
            product.status === 'AVAILABLE' ? 'bg-green-100 text-green-800' :
            product.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
            'bg-red-100 text-red-800'
          }`}>
            {product.status}
          </span>
        </div>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}