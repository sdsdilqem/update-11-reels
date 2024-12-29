import React from 'react';

interface ToggleButtonProps {
  selected: boolean;
  label: string;
  onClick: () => void;
}

export default function ToggleButton({ selected, label, onClick }: ToggleButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-xl text-sm font-medium transition-all
        ${selected 
          ? 'bg-emerald-50 text-emerald-600 ring-2 ring-emerald-100'
          : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
        }
      `}
    >
      {label}
    </button>
  );
}