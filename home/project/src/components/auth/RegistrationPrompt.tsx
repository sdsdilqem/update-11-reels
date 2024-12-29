import React, { useState } from 'react';
import { Star, Award, Gift } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

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
          <div className="w-12 h-1.5 bg-gray-300 rounded-full"/>
        </div>

        <div className="px-4 pb-8">
          {/* Progress Section */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Qeydiyyat statusu:</span>
              <span className="text-sm font-medium text-amber-500">25% tamamlandı</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full w-1/4 bg-gradient-to-r from-red-500 via-amber-500 to-green-500 animate-pulse"
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="bg-blue-50 rounded-xl p-4 mb-6">
            <h3 className="font-medium text-blue-900 mb-3">
              Hesabınızı yaradaraq 500 xal qazanın
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-blue-700">
                <div className="p-1.5 bg-blue-100 rounded-lg">
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm">Endirimlerdən yararlanan</span>
              </div>
              <div className="flex items-center space-x-3 text-purple-700">
                <div className="p-1.5 bg-purple-100 rounded-lg">
                  <Award className="w-4 h-4" />
                </div>
                <span className="text-sm">Reytinq qazanın</span>
              </div>
              <div className="flex items-center space-x-3 text-pink-700">
                <div className="p-1.5 bg-pink-100 rounded-lg">
                  <Gift className="w-4 h-4" />
                </div>
                <span className="text-sm">Hədiyyə əldə edin</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsVisible(false)}
              className="px-6 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-colors text-sm"
            >
              Bağla
            </button>
            <button
              onClick={handleRegisterClick}
              className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors text-sm font-medium"
            >
              Qeydiyyat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}