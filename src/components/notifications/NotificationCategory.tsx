import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NotificationCategoryProps {
  icon: LucideIcon;
  title: string;
  message: string;
  count: number;
  color: string;
  onClick: () => void;
}

export default function NotificationCategory({
  icon: Icon,
  title,
  message,
  count,
  color,
  onClick
}: NotificationCategoryProps) {
  const baseColor = color.split('-')[1];
  
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start space-x-3">
        <div className={`${color} p-2 bg-${baseColor}-50 rounded-lg`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="font-medium text-gray-900">{title}</span>
            {count > 0 && (
              <span className={`px-2 py-0.5 text-xs font-medium text-white rounded-full bg-${baseColor}-500`}>
                {count}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600 truncate">{message}</p>
        </div>
      </div>
    </button>
  );
}