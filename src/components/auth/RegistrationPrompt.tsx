import React, { useState } from 'react';
import { Sparkles, Coins } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import FeatureGrid from './registration/FeatureGrid';

export default function RegistrationPrompt() {
  const [isVisible, setIsVisible] = useState(true);
  const { setShowAuthSheet } = useAuth();

  if (!isVisible) return null;

  const handleRegisterClick = () => {
    setShowAuthSheet({ isOpen: true, defaultTab: 'register' });
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Content */}
      <div className="relative bg-white rounded-t-2xl shadow-xl animate-slide-up">
        <div className="flex justify-center pt-2 pb-3">
          <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
        </div>

        <div className="px-4 pb-8">
          {/* Header with Points */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-emerald-500 rounded-xl">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Xoş gəlmisiniz!</h3>
              </div>
              <div className="flex items-center space-x-2">
                <Coins className="w-5 h-5 text-amber-500" />
                <span className="text-sm font-medium">
                  <span className="text-amber-500">Xalınız:</span> 250
                </span>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <FeatureGrid />

          {/* Action Buttons */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={() => setIsVisible(false)}
              className="px-6 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm"
            >
              Bağla
            </button>
            <button
              onClick={handleRegisterClick}
              className="px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Qeydiyyat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
