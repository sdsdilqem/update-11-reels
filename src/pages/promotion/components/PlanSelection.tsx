import React from 'react';
import type { PromotionPlan } from '../types';
import { promotionPlans } from '../constants';
import PlanCard from './PlanCard';

interface PlanSelectionProps {
  onPlanSelect: (plan: PromotionPlan) => void;
}

export default function PlanSelection({ onPlanSelect }: PlanSelectionProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Məhsulunuzu reklamlandırın</h2>
        <p className="text-gray-600">
          Daha çox alıcıya çatmaq üçün məhsulunuzu reklamlandırın və satışlarınızı artırın.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {promotionPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={false}
            onSelect={onPlanSelect}
          />
        ))}
      </div>
    </div>
  );
}