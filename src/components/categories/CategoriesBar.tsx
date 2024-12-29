import React, { useState } from 'react';
import CategorySheet from './CategorySheet';
import { categories } from './constants';
import type { Category } from '../../types/category';

export default function CategoriesBar() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleCategoryClick = (category: Category) => {
    if (category.id === 8) { // "All Categories" button
      // Handle "All Categories" click - you can navigate to a full category list page
      return;
    }
    setSelectedCategory(category);
    setIsSheetOpen(true);
  };

  return (
    <>
      <div className="bg-white shadow-sm mb-4">
        <div className="p-4">
          <div className="grid grid-cols-4 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category)}
                className={`
                  flex flex-col items-center p-3 rounded-xl transition-all
                  ${category.id === 8 ? 'bg-gray-50' : 'hover:bg-gray-50'}
                `}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.color} bg-opacity-10`}>
                  <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                </div>
                <span className="text-xs font-medium mt-2 text-center leading-tight">
                  {category.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <CategorySheet
        isOpen={isSheetOpen}
        onClose={() => setIsSheetOpen(false)}
        category={selectedCategory}
      />
    </>
  );
}