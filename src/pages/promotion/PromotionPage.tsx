import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import PlanSelection from './components/PlanSelection';
import PromotionDetails from './components/PromotionDetails';
import { usePromotion } from './hooks/usePromotion';

export default function PromotionPage() {
  const { id } = useParams();
  const {
    selectedPlan,
    duration,
    totalPrice,
    handlePlanSelect,
    handleDurationChange,
    handlePromote
  } = usePromotion(id);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-3xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link 
              to={`/product/${id}`} 
              className="p-2 -ml-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Reklam et</h1>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-6">
        {!selectedPlan ? (
          <PlanSelection onPlanSelect={handlePlanSelect} />
        ) : (
          <PromotionDetails
            plan={selectedPlan}
            duration={duration}
            totalPrice={totalPrice}
            onDurationChange={handleDurationChange}
            onPromote={handlePromote}
            onBack={() => handlePlanSelect(null)}
          />
        )}
      </div>
    </div>
  );
}