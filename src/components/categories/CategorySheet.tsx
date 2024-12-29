import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';
import type { Category } from '../../types/category';

interface CategorySheetProps {
  isOpen: boolean;
  onClose: () => void;
  category: Category | null;
}

const getCategoryDescription = (categoryName: string): string => {
  const descriptions: Record<string, string> = {
    'Nəqliyyat': 'Avtomobil alqı-satqısı və nəqliyyat vasitələri',
    'Daşınmaz əmlak': 'Mənzil, ev və əmlak elanları',
    'Elektronika': 'Kompüter və elektronik avadanlıqlar',
    'Geyim': 'Geyim və aksesuar elanları',
    'Ev və bağ': 'Ev əşyaları və bağ ləvazimatları',
    'Aksesuar və qurğular': 'Smartfon və mobil cihazlar'
  };
  return descriptions[categoryName] || '';
};

export default function CategorySheet({ isOpen, onClose, category }: CategorySheetProps) {
  const navigate = useNavigate();
  
  if (!category) return null;

  const handleSubcategoryClick = (subcategoryName: string) => {
    navigate(`/category/${subcategoryName.toLowerCase()}`);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center">
            {<category.icon className="w-6 h-6 text-gray-600" />}
          </div>
          <div>
            <h3 className="text-lg font-semibold">{category.name}</h3>
            <p className="text-sm text-gray-500">
              {getCategoryDescription(category.name)}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full">
          <Tag className="w-4 h-4 text-blue-500" />
          <span className="text-sm text-emerald-600 font-medium whitespace-nowrap">Endirimli</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {category.subcategories.map((sub) => (
          <button
            key={sub.id}
            className="flex items-center space-x-3 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => handleSubcategoryClick(sub.name)}
          >
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
              {<sub.icon className="w-5 h-5 text-gray-600" />}
            </div>
            <div className="flex-1 text-left">
              <span className="text-sm font-medium text-gray-700">{sub.name}</span>
            </div>
          </button>
        ))}
      </div>
    </BottomSheet>
  );
}