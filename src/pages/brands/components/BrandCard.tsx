import React from 'react';
import { Link } from 'react-router-dom';
import { Package, Users } from 'lucide-react';
import type { Brand } from '../../../types/brand';

interface BrandCardProps {
  brand: Brand;
}

export default function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link 
      to={`/brands/${brand.id}`}
      className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
    >
      <div className="relative h-32">
        <img 
          src={brand.coverImage} 
          alt={brand.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute -bottom-8 left-4">
          <div className="w-16 h-16 rounded-xl overflow-hidden border-4 border-white bg-white">
            <img 
              src={brand.logo} 
              alt={brand.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <div className="p-4 pt-12">
        <h3 className="font-bold text-lg mb-1">{brand.name}</h3>
        <p className="text-sm text-gray-500 mb-4">{brand.description}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-600">
            <Package className="w-4 h-4 mr-1" />
            <span>{brand.productCount} məhsul</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-1" />
            <span>{brand.followers.toLocaleString()} izləyici</span>
          </div>
        </div>
      </div>
    </Link>
  );
}