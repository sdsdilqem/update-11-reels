import React from 'react';
import type { PromotionPlan } from '../types';

interface PricingSummaryProps {
  plan: PromotionPlan;
  duration: number;
  totalPrice: number;
}

export default function PricingSummary({ plan, duration, totalPrice }: PricingSummaryProps) {
  return (
    <div className="space-y-3 mb-4">
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Plan:</span>
        <span className="font-medium">{plan.name}</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Müddət:</span>
        <span className="font-medium">{duration} gün</span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Günlük qiymət:</span>
        <span className="font-medium">₼{plan.price.toFixed(2)}</span>
      </div>
      <div className="pt-3 border-t flex justify-between font-medium">
        <span>Cəmi:</span>
        <span className="text-blue-600">₼{totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
}