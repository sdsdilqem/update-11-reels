import React from 'react';
import { Check } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';

interface CarBrandsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBrand: string | null;
  onSelect: (brand: string) => void;
}

const carBrands = [
  'Mercedes-Benz',
  'BMW',
  'Audi',
  'Toyota',
  'Lexus',
  'Porsche',
  'Volkswagen',
  'Honda',
  'Hyundai',
  'Kia'
];

export default function CarBrandsSheet({
  isOpen,
  onClose,
  selectedBrand,
  onSelect
}: CarBrandsSheetProps) {
  const handleSelect = (brand: string) => {
    onSelect(brand);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <h2 className="text-xl font-semibold mb-4">Marka və model</h2>
        <div className="space-y-2">
          {carBrands.map((brand) => (
            <button
              key={brand}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => handleSelect(brand)}
            >
              <span className="text-gray-700">{brand}</span>
              {selectedBrand === brand && (
                <Check className="w-5 h-5 text-blue-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}