import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import BottomSheet from '../../common/BottomSheet';
import { BRANDS, MODELS } from '../constants';
import type { Brand } from '../types';

interface BrandModelSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBrand: string | null;
  onSelect: (brand: string) => void;
}

export default function BrandModelSheet({
  isOpen,
  onClose,
  selectedBrand,
  onSelect
}: BrandModelSheetProps) {
  const [showModels, setShowModels] = useState(false);
  const [selectedModel, setSelectedModel] = useState<string | null>(null);
  const [currentBrand, setCurrentBrand] = useState<Brand | null>(null);

  const handleBrandSelect = (brand: Brand) => {
    setSelectedModel(null);
    setCurrentBrand(brand);
    setShowModels(true);
  };

  const handleModelSelect = (model: string) => {
    if (!currentBrand) return;
    setSelectedModel(model);
    onSelect(`${currentBrand} ${model}`);
    onClose();
  };

  const handleClose = () => {
    setShowModels(false);
    setCurrentBrand(null);
    setSelectedModel(null);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">
            {showModels ? currentBrand : 'Marka seçin'}
          </h2>
          {showModels && (
            <button
              onClick={() => setShowModels(false)}
              className="text-sm text-red-500"
            >
              Təmizlə
            </button>
          )}
        </div>

        <div className="space-y-2">
          {!showModels ? (
            // Brand List
            BRANDS.map((brand) => (
              <button
                key={brand}
                onClick={() => handleBrandSelect(brand)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-gray-700">{brand}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ))
          ) : currentBrand ? (
            // Model List for Selected Brand
            MODELS[currentBrand].map((model) => (
              <button
                key={model}
                onClick={() => handleModelSelect(model)}
                className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              >
                <span className="text-gray-700">{model}</span>
                {selectedModel === model && (
                  <Check className="w-5 h-5 text-emerald-500" />
                )}
              </button>
            ))
          ) : null}
        </div>
      </div>
    </BottomSheet>
  );
}