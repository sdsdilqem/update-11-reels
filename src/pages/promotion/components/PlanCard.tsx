import React from 'react';
import { Check } from 'lucide-react';
import type { PromotionPlan } from '../types';

interface PlanCardProps {
  plan: PromotionPlan;
  isSelected: boolean;
  onSelect: (plan: PromotionPlan) => void;
}

export default function PlanCard({ plan, isSelected, onSelect }: PlanCardProps) {
  const baseColor = plan.color.split('-')[1];
  
  return (
    <button
      onClick={() => onSelect(plan)}
      className={`
        relative p-6 rounded-2xl border-2 transition-all text-left w-full group
        ${isSelected
          ? `border-${plan.color}-500 bg-${plan.color}-50 ring-4 ring-${plan.color}-100`
          : 'border-gray-200 hover:border-gray-300 hover:bg-white'
        }
      `}
    >
      {/* Icon */}
      <div className={`
        w-12 h-12 rounded-xl bg-${plan.color}-100 
        flex items-center justify-center mb-4
        transition-transform group-hover:scale-110
      `}>
        <plan.icon className={`w-6 h-6 text-${plan.color}-500`} />
      </div>

      {/* Content */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{plan.name}</h3>
          {isSelected && (
            <Check className={`w-5 h-5 text-${plan.color}-500`} />
          )}
        </div>
        <p className={`text-2xl font-bold mb-4 text-${plan.color}-500`}>
          ₼{plan.price}
          <span className="text-sm font-normal text-gray-500 ml-1">/ gün</span>
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <Check className={`w-4 h-4 mr-2 mt-0.5 text-${plan.color}-500 flex-shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Selected Indicator */}
      {isSelected && (
        <div className={`absolute -top-px -left-px -right-px h-1 bg-${plan.color}-500 rounded-t-xl`} />
      )}
    </button>
  );
}