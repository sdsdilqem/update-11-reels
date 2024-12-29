import React, { useEffect, useState } from 'react';
import BottomSheet from '../common/BottomSheet';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { useAuth } from '../../contexts/AuthContext';

interface AuthSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthSheet({ isOpen, onClose }: AuthSheetProps) {
  const { showAuthSheet, setShowAuthSheet } = useAuth();
  const [activeTab, setActiveTab] = useState<'login' | 'register'>(showAuthSheet.defaultTab);

  useEffect(() => {
    if (showAuthSheet.isOpen) {
      setActiveTab(showAuthSheet.defaultTab);
    }
  }, [showAuthSheet.defaultTab]);

  const handleClose = () => {
    onClose();
    setShowAuthSheet({ isOpen: false, defaultTab: 'login' });
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose}>
      <div className="px-1">
        {/* Tabs */}
        <div className="flex space-x-6 mb-8">
          <button
            onClick={() => setActiveTab('login')}
            className={`pb-2 text-lg font-medium transition-colors relative ${
              activeTab === 'login' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            Daxil ol
            {activeTab === 'login' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('register')}
            className={`pb-2 text-lg font-medium transition-colors relative ${
              activeTab === 'register' ? 'text-blue-600' : 'text-gray-500'
            }`}
          >
            Qeydiyyat
            {activeTab === 'register' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
            )}
          </button>
        </div>

        {/* Welcome Text */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            {activeTab === 'login' ? 'Xoş gəlmisiniz!' : 'Hesab yaradın'}
          </h2>
          <p className="text-gray-500 mt-2">
            {activeTab === 'login' 
              ? 'Hesabınıza daxil olun və alış-verişə davam edin'
              : 'Qeydiyyatdan keçərək xüsusi təkliflərdən yararlanın'
            }
          </p>
        </div>

        {activeTab === 'login' ? (
          <LoginForm onSuccess={handleClose} />
        ) : (
          <RegisterForm onSuccess={handleClose} />
        )}
      </div>
    </BottomSheet>
  );
}