import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(totalSteps)].map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index + 1 <= currentStep ? 'bg-emerald-500' : 'bg-gray-200'
          }`}
        />
      ))}
    </div>
  );
}