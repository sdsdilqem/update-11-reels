import React, { useState } from 'react';
import BottomSheet from '../common/BottomSheet';

interface PriceRangeSheetProps {
  isOpen: boolean;
  onClose: () => void;
  minPrice: number;
  maxPrice: number;
  onApply: (min: number, max: number) => void;
}

export default function PriceRangeSheet({
  isOpen,
  onClose,
  minPrice,
  maxPrice,
  onApply
}: PriceRangeSheetProps) {
  const [min, setMin] = useState(minPrice.toString());
  const [max, setMax] = useState(maxPrice.toString());

  const handleApply = () => {
    onApply(Number(min) || 0, Number(max) || Infinity);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <h2 className="text-xl font-semibold mb-6">Qiymət aralığı</h2>

        <div className="flex items-center space-x-4 mb-6">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Minimum</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500 font-medium">₼</span>
              <input
                type="number"
                value={min}
                onChange={(e) => setMin(e.target.value)}
                className="w-full pl-8 pr-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="0"
              />
            </div>
          </div>
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">Maximum</label>
            <div className="relative">
              <span className="absolute left-3 top-2.5 text-gray-500 font-medium">₼</span>
              <input
                type="number"
                value={max}
                onChange={(e) => setMax(e.target.value)}
                className="w-full pl-8 pr-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-100"
                placeholder="∞"
              />
            </div>
          </div>
        </div>

        <button
          onClick={handleApply}
          className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Tətbiq et
        </button>
      </div>
    </BottomSheet>
  );
}