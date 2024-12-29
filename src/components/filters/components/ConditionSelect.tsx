import React from 'react';
import { Tag } from 'lucide-react';
import FilterSection from './FilterSection';
import ToggleButton from './ToggleButton';

interface ConditionSelectProps {
  condition: string | null;
  onConditionChange: (condition: string) => void;
}

export default function ConditionSelect({ condition, onConditionChange }: ConditionSelectProps) {
  return (
    <FilterSection title="Vəziyyəti" icon={Tag}>
      <div className="flex space-x-2">
        <ToggleButton
          selected={condition === 'new'}
          label="Yeni"
          onClick={() => onConditionChange('new')}
        />
        <ToggleButton
          selected={condition === 'used'}
          label="İşlənmiş"
          onClick={() => onConditionChange('used')}
        />
      </div>
    </FilterSection>
  );
}