import React from 'react';
import { Check } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';
import BrandModelSelect from './components/BrandModelSelect';
import ConditionSelect from './components/ConditionSelect';
import DeliveryToggle from './components/DeliveryToggle';

interface FilterState {
  brand: string | null;
  condition: string | null;
  hasDelivery: boolean;
}

interface FilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
}

export default function FilterSheet({
  isOpen,
  onClose,
  filters,
  onFiltersChange
}: FilterSheetProps) {
  const handleApply = () => {
    onClose();
  };

  const handleClear = () => {
    onFiltersChange({
      brand: null,
      condition: null,
      hasDelivery: false
    });
  };

  const hasActiveFilters = filters.brand || filters.condition || filters.hasDelivery;

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Filter</h2>
          {hasActiveFilters && (
            <button
              onClick={handleClear}
              className="text-sm text-red-500"
            >
              Təmizlə
            </button>
          )}
        </div>

        <div className="space-y-6">
          <BrandModelSelect
            selectedBrand={filters.brand}
            onBrandSelect={(brand) => onFiltersChange({ ...filters, brand })}
          />

          <ConditionSelect
            condition={filters.condition}
            onConditionChange={(condition) => onFiltersChange({ ...filters, condition })}
          />

          <DeliveryToggle
            hasDelivery={filters.hasDelivery}
            onDeliveryChange={(hasDelivery) => onFiltersChange({ ...filters, hasDelivery })}
          />
        </div>

        <button
          onClick={handleApply}
          className="w-full mt-6 bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition-colors font-medium"
        >
          Tətbiq et
        </button>
      </div>
    </BottomSheet>
  );
}