import React from 'react';
import { categories } from './constants';

export default function SearchCategories() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {categories.map((category) => (
        <button
          key={category.name}
          className="flex flex-col items-center space-y-2 p-3 hover:bg-gray-50 rounded-xl transition-colors"
        >
          <div className="w-10 h-10 flex items-center justify-center bg-gray-50 rounded-xl">
            {<category.icon className="w-5 h-5 text-gray-600" />}
          </div>
          <span className="text-xs text-gray-600">{category.name}</span>
        </button>
      ))}
    </div>
  );
}