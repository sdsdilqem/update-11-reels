import React from 'react';
import { Check } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';

interface SortingSheetProps {
  isOpen: boolean;
  onClose: () => void;
  selectedSort: string;
  onSelect: (sort: string) => void;
}

const sortOptions = [
  'Ən yenilər',
  'Qiymət: Ucuzdan bahaya',
  'Qiymət: Bahadan ucuza',
  'Məsafə: Yaxından uzağa'
];

export default function SortingSheet({
  isOpen,
  onClose,
  selectedSort,
  onSelect
}: SortingSheetProps) {
  const handleSelect = (sort: string) => {
    onSelect(sort);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <h2 className="text-xl font-semibold mb-4">Sıralama</h2>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <button
              key={option}
              className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-xl transition-colors"
              onClick={() => handleSelect(option)}
            >
              <span className="text-gray-700">{option}</span>
              {selectedSort === option && (
                <Check className="w-5 h-5 text-emerald-500" />
              )}
            </button>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}