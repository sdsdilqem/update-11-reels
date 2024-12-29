import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { categories } from '../components/categories/constants';
import PostGrid from '../components/PostGrid';
import { mockSubcategoryProducts } from '../data/mockSubcategoryProducts';
import FilterSheet from '../components/filters/FilterSheet';
import PriceRangeSheet from '../components/filters/PriceRangeSheet';
import SortingSheet from '../components/filters/SortingSheet';

interface FilterState {
  brand: string | null;
  condition: string | null;
  hasDelivery: boolean;
}

const initialFilters: FilterState = {
  brand: null,
  condition: null,
  hasDelivery: false
};

export default function CategoryPage() {
  const { name } = useParams();
  const [selectedSort, setSelectedSort] = useState('newest');
  const [isSortingOpen, setIsSortingOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isPriceRangeOpen, setIsPriceRangeOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>(initialFilters);
  const [priceRange, setPriceRange] = useState({ min: 0, max: Infinity });
  
  const parentCategory = categories.find(c => 
    c.subcategories.some(sub => 
      sub.name.toLowerCase() === decodeURIComponent(name || '').toLowerCase()
    )
  );
  
  const subcategory = parentCategory?.subcategories.find(
    sub => sub.name.toLowerCase() === decodeURIComponent(name || '').toLowerCase()
  );
  
  const products = subcategory ? mockSubcategoryProducts[subcategory.name] || [] : [];

  const handleSortChange = (value: string) => {
    setSelectedSort(value);
    setIsSortingOpen(false);
  };

  const handlePriceRangeApply = (min: number, max: number) => {
    setPriceRange({ min, max });
    setIsPriceRangeOpen(false);
  };

  const handleFiltersChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  if (!parentCategory || !subcategory) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Kateqoriya tapılmadı</h1>
        <Link to="/" className="text-emerald-500 hover:text-emerald-600 mt-4 inline-block">
          Ana səhifəyə qayıt
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="font-semibold">{subcategory.name}</h1>
              <p className="text-sm text-gray-500">{parentCategory.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="py-3 flex items-center space-x-3">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm">Filter</span>
            </button>

            <button
              onClick={() => setIsPriceRangeOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
            >
              <span className="text-sm font-medium">₼</span>
              <span className="text-sm">Qiymət</span>
            </button>

            <button
              onClick={() => setIsSortingOpen(true)}
              className="flex items-center space-x-2 px-4 py-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors ml-auto"
            >
              <span className="text-sm">Sıralama</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <PostGrid posts={products} />
      </div>

      {/* Filter Sheets */}
      <FilterSheet
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={handleFiltersChange}
      />

      <SortingSheet
        isOpen={isSortingOpen}
        onClose={() => setIsSortingOpen(false)}
        selectedSort={selectedSort}
        onSelect={handleSortChange}
      />

      <PriceRangeSheet
        isOpen={isPriceRangeOpen}
        onClose={() => setIsPriceRangeOpen(false)}
        minPrice={priceRange.min}
        maxPrice={priceRange.max === Infinity ? 0 : priceRange.max}
        onApply={handlePriceRangeApply}
      />
    </div>
  );
}