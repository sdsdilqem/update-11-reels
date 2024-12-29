import React from 'react';
import { Smartphone, Cpu, Camera, Battery } from 'lucide-react';
import type { StaticProduct } from '../../../types/product';

interface ProductSpecsProps {
  specs: StaticProduct['specs'];
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  const specItems = [
    { icon: Smartphone, label: 'Display', value: specs.display },
    { icon: Cpu, label: 'Chip', value: specs.chip },
    { icon: Camera, label: 'Camera', value: specs.camera },
    { icon: Battery, label: 'Battery', value: specs.battery }
  ];

  return (
    <div className="grid grid-cols-2 gap-4">
      {specItems.map((item) => (
        <div key={item.label} className="bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <item.icon className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-500">{item.label}</span>
          </div>
          <p className="font-medium text-sm">{item.value}</p>
        </div>
      ))}
    </div>
  );
}