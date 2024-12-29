import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { PostFormData } from '../../../types/post';
import ProductForm from './ProductForm';

interface ProductDetailsProps {
  initialData: PostFormData;
  onBack: () => void;
  onSubmit: (data: PostFormData) => void;
}

export default function ProductDetails({ initialData, onBack, onSubmit }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <button 
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-medium">Məhsul məlumatları</h2>
      </div>

      <ProductForm
        initialData={initialData}
        submitLabel="Paylaş"
        onSubmit={onSubmit}
      />
    </div>
  );
}