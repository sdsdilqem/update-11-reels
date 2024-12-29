import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { appleProducts } from '../../data/staticProducts';
import ProductSpecs from './components/ProductSpecs';

export default function StaticProductPage() {
  const { brandId, productId } = useParams();
  const product = appleProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Məhsul tapılmadı</h1>
        <Link to={`/brands/${brandId}`} className="text-blue-500 hover:text-blue-600 mt-4 inline-block">
          Markaya qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to={`/brands/${brandId}`} className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">{product.title}</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="bg-white rounded-2xl p-8">
            <img 
              src={product.image}
              alt={product.title}
              className="w-full aspect-square object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-gray-600">{product.description}</p>
            </div>

            {/* Specs */}
            <ProductSpecs specs={product.specs} />

            {/* Storage Options */}
            <div>
              <h3 className="font-medium mb-3">Yaddaş</h3>
              <div className="flex flex-wrap gap-2">
                {product.storage.map((size) => (
                  <div 
                    key={size}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium"
                  >
                    {size}
                  </div>
                ))}
              </div>
            </div>

            {/* Color Options */}
            <div>
              <h3 className="font-medium mb-3">Rənglər</h3>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <div 
                    key={color}
                    className="px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium"
                  >
                    {color}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}