import React, { useState } from 'react';
import { ImagePlus, X, Check } from 'lucide-react';

interface ImageUploadProps {
  initialImages: string[];
  onNext: (data: { images: string[] }) => void;
}

export default function ImageUpload({ initialImages, onNext }: ImageUploadProps) {
  const [images, setImages] = useState<string[]>(initialImages);
  const maxImages = 8;

  const handleImageUpload = () => {
    // Simulate image upload - in real app, implement actual upload
    const mockImage = `https://images.unsplash.com/photo-${Math.random()}`;
    if (images.length < maxImages) {
      setImages([...images, mockImage]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleNext = () => {
    if (images.length > 0) {
      onNext({ images });
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-emerald-50 rounded-xl p-4 flex items-start space-x-3 mb-6">
        <div className="p-2 bg-emerald-100 rounded-lg">
          <Check className="w-5 h-5 text-emerald-600" />
        </div>
        <div>
          <h3 className="font-medium text-emerald-900">Avtomatik kateqoriya</h3>
          <p className="text-sm text-emerald-700 mt-0.5">
            Sistem məhsulunuzun kateqoriyasını avtomatik təyin edəcək
          </p>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-4 gap-2">
        {[...Array(maxImages)].map((_, index) => (
          <div
            key={index}
            className="aspect-square relative rounded-xl overflow-hidden"
          >
            {index < images.length ? (
              <div className="relative group">
                <img
                  src={images[index]}
                  alt={`Upload ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute top-1 right-1 p-1 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>
            ) : (
              <button
                onClick={handleImageUpload}
                disabled={images.length >= maxImages}
                className={`w-full h-full flex items-center justify-center border-2 border-dashed rounded-xl transition-colors
                  ${index === images.length
                    ? 'border-emerald-500 bg-emerald-50 hover:bg-emerald-100'
                    : 'border-gray-200 bg-gray-50'
                  }`}
              >
                <ImagePlus className={`w-6 h-6 ${index === images.length ? 'text-emerald-500' : 'text-gray-400'}`} />
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Helper Text */}
      <p className="text-sm text-gray-500 text-center">
        {images.length === 0
          ? 'Məhsulun şəkillərini əlavə edin'
          : `${images.length} şəkil seçildi · ${maxImages - images.length} şəkil əlavə edə bilərsiniz`}
      </p>

      {/* Action Button */}
      <button
        onClick={handleNext}
        disabled={images.length === 0}
        className={`w-full py-3 rounded-xl font-medium transition-colors
          ${images.length > 0
            ? 'bg-emerald-500 text-white hover:bg-emerald-600'
            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
          }`}
      >
        Növbəti
      </button>
    </div>
  );
}