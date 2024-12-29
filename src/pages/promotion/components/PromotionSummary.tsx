import React from 'react';
import { Shield } from 'lucide-react';
import type { PromotionPlan } from '../types';
import PricingSummary from './PricingSummary';
import SecurityNotice from './SecurityNotice';

interface PromotionSummaryProps {
  plan: PromotionPlan | null;
  duration: number;
  totalPrice: number;
  onPromote: () => void;
}

export default function PromotionSummary({
  plan,
  duration,
  totalPrice,
  onPromote
}: PromotionSummaryProps) {
  if (!plan) return null;

  return (
    <div className="mt-8 bg-white rounded-xl p-4 border border-gray-200">
      <h3 className="font-medium mb-4">Ödəniş məlumatları</h3>
      
      <PricingSummary
        plan={plan}
        duration={duration}
        totalPrice={totalPrice}
      />

      <SecurityNotice />

      <button
        onClick={onPromote}
        className="w-full bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors"
      >
        Ödənişi təsdiqlə
      </button>
    </div>
  );
}