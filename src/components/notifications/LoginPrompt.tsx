import React from 'react';
import { MessageCircle, Bell, Tag } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function LoginPrompt() {
  const { setShowAuthSheet } = useAuth();

  const handleAuthClick = (isRegister: boolean) => {
    setShowAuthSheet({ isOpen: true, defaultTab: isRegister ? 'register' : 'login' });
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 rounded-xl p-6 shadow-sm border border-blue-100 mx-2">
      <div className="relative w-16 h-16 mx-auto mb-4">
        <div className="absolute inset-0 bg-emerald-100 rounded-full animate-ping opacity-75" />
        <div className="relative bg-white rounded-full p-4 shadow-sm">
          <Bell className="w-8 h-8 text-emerald-500" />
        </div>
      </div>
      
      <h3 className="text-lg font-medium text-gray-900 text-center mb-2">
        Bildirişlərinizi görün
      </h3>
      
      <p className="text-gray-600 text-center text-sm mb-6">
        Mesajları, bəyənmələri və sifarişləri izləmək üçün daxil olun
      </p>
      
      <div className="space-y-3">
        <button 
          onClick={() => handleAuthClick(false)}
          className="w-full bg-emerald-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
        >
          Daxil ol
        </button>
        
        <button 
          onClick={() => handleAuthClick(true)}
          className="w-full bg-gray-50 text-gray-700 px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
        >
          Qeydiyyatdan keç
        </button>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <MessageCircle className="w-4 h-4 flex-shrink-0" />
          <p>Daxil olaraq mesajlaşma funksiyasından istifadə edə bilərsiniz</p>
        </div>
        <div className="flex items-center space-x-3 text-sm text-gray-500">
          <Tag className="w-4 h-4 flex-shrink-0" />
          <p>Xüsusi endirimlər və kampaniyalardan xəbərdar olun</p>
        </div>
      </div>
    </div>
  );
}