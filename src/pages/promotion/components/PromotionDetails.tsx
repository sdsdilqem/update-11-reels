import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { PromotionPlan } from '../types';
import DurationSelector from './DurationSelector';
import SecurityNotice from './SecurityNotice';
import PricingSummary from './PricingSummary';

interface PromotionDetailsProps {
  plan: PromotionPlan;
  duration: number;
  totalPrice: number;
  onDurationChange: (duration: number) => void;
  onPromote: () => void;
  onBack: () => void;
}

export default function PromotionDetails({
  plan,
  duration,
  totalPrice,
  onDurationChange,
  onPromote,
  onBack
}: PromotionDetailsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-3">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <h2 className="text-xl font-semibold">{plan.name} Plan</h2>
          <p className="text-sm text-gray-500">Reklam detallarını tamamlayın</p>
        </div>
      </div>

      {/* Selected Plan Summary */}
      <div className={`p-4 rounded-xl bg-${plan.color}-50 border border-${plan.color}-100`}>
        <div className="flex items-center space-x-3">
          <div className={`p-2 bg-${plan.color}-100 rounded-lg`}>
            <plan.icon className={`w-5 h-5 text-${plan.color}-500`} />
          </div>
          <div>
            <h3 className="font-medium">{plan.name}</h3>
            <p className="text-sm text-gray-600">₼{plan.price} / gün</p>
          </div>
        </div>
      </div>

      {/* Duration Selection */}
      <DurationSelector
        duration={duration}
        onDurationChange={onDurationChange}
      />

      {/* Security Notice */}
      <SecurityNotice />

      {/* Pricing Summary and Payment */}
      <div className="bg-white rounded-xl p-6 border border-gray-200">
        <PricingSummary
          plan={plan}
          duration={duration}
          totalPrice={totalPrice}
        />
        
        <button
          onClick={onPromote}
          className="w-full mt-6 bg-blue-500 text-white py-3 rounded-xl hover:bg-blue-600 transition-colors font-medium"
        >
          Ödənişi təsdiqlə
        </button>
      </div>
    </div>
  );
}