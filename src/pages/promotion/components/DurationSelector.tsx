import React from 'react';
import { Clock } from 'lucide-react';

interface DurationSelectorProps {
  duration: number;
  onDurationChange: (duration: number) => void;
}

const durations = [
  { days: 3, label: '3 gün' },
  { days: 7, label: '7 gün' },
  { days: 14, label: '14 gün' },
  { days: 30, label: '30 gün' }
];

export default function DurationSelector({ duration, onDurationChange }: DurationSelectorProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
          <Clock className="w-5 h-5 text-blue-500" />
        </div>
        <div>
          <h3 className="font-medium">Reklam müddəti</h3>
          <p className="text-sm text-gray-500">Reklamınızın göstəriləcəyi müddəti seçin</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {durations.map((option) => (
          <button
            key={option.days}
            onClick={() => onDurationChange(option.days)}
            className={`
              py-3 px-4 rounded-xl border-2 transition-all
              ${duration === option.days
                ? 'border-blue-500 bg-blue-50 text-blue-700 ring-4 ring-blue-100'
                : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }
            `}
          >
            <span className="block text-lg font-semibold mb-0.5">{option.days}</span>
            <span className="block text-sm text-gray-500">gün</span>
          </button>
        ))}
      </div>
    </div>
  );
}