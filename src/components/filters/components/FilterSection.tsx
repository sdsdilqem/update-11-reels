import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FilterSectionProps {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
}

export default function FilterSection({ title, icon: Icon, children }: FilterSectionProps) {
  return (
    <div className="mb-6 last:mb-0">
      <div className="flex items-center space-x-2 mb-3">
        <div className="p-2 bg-gray-50 rounded-lg">
          <Icon className="w-4 h-4 text-gray-600" />
        </div>
        <h3 className="font-medium text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
}