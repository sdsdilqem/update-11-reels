import { useState } from 'react';
import type { PromotionPlan } from '../types';

export function usePromotion(productId: string | undefined) {
  const [selectedPlan, setSelectedPlan] = useState<PromotionPlan | null>(null);
  const [duration, setDuration] = useState(7);

  const handlePlanSelect = (plan: PromotionPlan | null) => {
    setSelectedPlan(plan);
    if (plan) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDurationChange = (days: number) => {
    setDuration(days);
  };

  const totalPrice = selectedPlan ? selectedPlan.price * duration : 0;

  const handlePromote = async () => {
    if (!selectedPlan || !productId) return;

    try {
      // TODO: Implement actual promotion API call
      console.log('Promoting product:', {
        productId,
        planId: selectedPlan.id,
        duration,
        totalPrice
      });
      
      // Show success message or redirect
    } catch (error) {
      console.error('Promotion failed:', error);
      // Handle error
    }
  };

  return {
    selectedPlan,
    duration,
    totalPrice,
    handlePlanSelect,
    handleDurationChange,
    handlePromote
  };
}