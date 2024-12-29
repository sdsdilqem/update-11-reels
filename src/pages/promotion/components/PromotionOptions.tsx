import React from 'react';
import { Sparkles, Rocket, Crown } from 'lucide-react';
import { PromotionPlan } from '../types';
import DurationSelector from './DurationSelector';
import PlanCard from './PlanCard';
import { promotionPlans } from '../constants';

interface PromotionOptionsProps {
  selectedPlan: PromotionPlan | null;
  duration: number;
  onPlanSelect: (plan: PromotionPlan) => void;
  onDurationChange: (duration: number) => void;
}

export default function PromotionOptions({
  selectedPlan,
  duration,
  onPlanSelect,
  onDurationChange
}: PromotionOptionsProps) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {promotionPlans.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            isSelected={selectedPlan?.id === plan.id}
            onSelect={onPlanSelect}
          />
        ))}
      </div>

      {selectedPlan && (
        <DurationSelector
          duration={duration}
          onDurationChange={onDurationChange}
        />
      )}
    </div>
  );
}