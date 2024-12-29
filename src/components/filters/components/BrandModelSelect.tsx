import React, { useState } from 'react';
import { Car, ChevronRight } from 'lucide-react';
import FilterSection from './FilterSection';
import BrandModelSheet from './BrandModelSheet';

interface BrandModelSelectProps {
  selectedBrand: string | null;
  onBrandSelect: (brand: string) => void;
}

export default function BrandModelSelect({ selectedBrand, onBrandSelect }: BrandModelSelectProps) {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <>
      <FilterSection title="Marka və model" icon={Car}>
        <button
          onClick={() => setIsSheetOpen(true)}
          className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
        >
          <span className="text-gray-700">
            {selectedBrand || 'Marka/Model seçin'}
          </span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </FilterSection>

      <BrandModelSheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        selectedBrand={selectedBrand}
        onSelect={onBrandSelect}
      />
    </>
  );
}