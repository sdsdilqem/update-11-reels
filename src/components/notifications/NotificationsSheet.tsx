import React from 'react';
import { useNavigate } from 'react-router-dom';
import BottomSheet from '../common/BottomSheet';
import { useAuth } from '../../contexts/AuthContext';
import NotificationCategories from './NotificationCategories';
import LoginPrompt from './LoginPrompt';

interface NotificationsSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function NotificationsSheet({ isOpen, onClose }: NotificationsSheetProps) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleCategoryClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Bildirişlər</h2>
        {!isAuthenticated && (
          <span className="px-2 py-1 bg-red-50 text-red-500 text-xs font-medium rounded-full animate-pulse">
            Yeni bildiriş.
          </span>
        )}
      </div>

      {isAuthenticated ? (
        <NotificationCategories onCategoryClick={handleCategoryClick} />
      ) : (
        <LoginPrompt />
      )}
    </BottomSheet>
  );
}