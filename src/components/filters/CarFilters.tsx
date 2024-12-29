import React, { useState } from 'react';
import { ChevronDown, SlidersHorizontal } from 'lucide-react';
import CarBrandsSheet from './CarBrandsSheet';
import SortingSheet from './SortingSheet';

export default function CarFilters() {
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState<string>('Ən yenilər');

  return (
    <>
      <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm mb-4">
        <button
          onClick={() => setIsBrandsOpen(true)}
          className="flex items-center space-x-2 text-sm"
        >
          <span className="text-gray-600">
            {selectedBrand || 'Marka və model'}
          </span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </button>

        <button
          onClick={() => setIsSortingOpen(true)}
          className="flex items-center space-x-2 text-sm"
        >
          <span className="text-gray-600">{selectedSort}</span>
          <SlidersHorizontal className="w-4 h-4 text-gray-400" />
        </button>
      </div>

      <CarBrandsSheet
        isOpen={isBrandsOpen}
        onClose={() => setIsBrandsOpen(false)}
        selectedBrand={selectedBrand}
        onSelect={setSelectedBrand}
      />

      <SortingSheet
        isOpen={isSortingOpen}
        onClose={() => setIsSortingOpen(false)}
        selectedSort={selectedSort}
        onSelect={setSelectedSort}
      />
    </>
  );
}