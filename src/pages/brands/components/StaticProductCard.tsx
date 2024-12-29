import React from 'react';
import { Link } from 'react-router-dom';
import type { StaticProduct } from '../../../types/product';

interface StaticProductCardProps {
  product: StaticProduct;
  brandId: string;
}

export default function StaticProductCard({ product, brandId }: StaticProductCardProps) {
  return (
    <Link 
      to={`/brands/${brandId}/products/${product.id}`}
      className="block bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all group"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {product.storage.map((size) => (
            <span 
              key={size}
              className="px-3 py-1 bg-gray-50 rounded-full text-xs font-medium text-gray-600"
            >
              {size}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}