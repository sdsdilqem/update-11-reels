import React from 'react';
import { Truck } from 'lucide-react';
import FilterSection from './FilterSection';
import ToggleButton from './ToggleButton';

interface DeliveryToggleProps {
  hasDelivery: boolean;
  onDeliveryChange: (hasDelivery: boolean) => void;
}

export default function DeliveryToggle({ hasDelivery, onDeliveryChange }: DeliveryToggleProps) {
  return (
    <FilterSection title="Çatdırılma" icon={Truck}>
      <div className="flex space-x-2">
        <ToggleButton
          selected={hasDelivery}
          label="Var"
          onClick={() => onDeliveryChange(true)}
        />
        <ToggleButton
          selected={!hasDelivery}
          label="Yoxdur"
          onClick={() => onDeliveryChange(false)}
        />
      </div>
    </FilterSection>
  );
}