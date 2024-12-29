import React from 'react';
import { Search } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';
import SearchTags from './SearchTags';
import SearchCategories from './SearchCategories';
import { trendingTags } from './constants';

interface SearchSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchSheet({ isOpen, onClose }: SearchSheetProps) {
  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-2 pb-8 pt-2">
        {/* Search Input */}
        <div className="flex items-center space-x-2 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Axtarış..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
              readOnly
              onClick={(e) => {
                const input = e.target as HTMLInputElement;
                input.readOnly = false;
              }}
            />
          </div>
          <button className="p-2.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Trending Tags */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Trend Axtarışlar</h3>
          <SearchTags tags={trendingTags} />
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">Kateqoriyalar</h3>
          <SearchCategories />
        </div>
      </div>
    </BottomSheet>
  );
}