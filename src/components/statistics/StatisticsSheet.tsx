import React from 'react';
import { BarChart2, Eye, Heart, MessageCircle, Share2 } from 'lucide-react';
import BottomSheet from '../common/BottomSheet';

interface StatisticsSheetProps {
  isOpen: boolean;
  onClose: () => void;
  stats: {
    views: number;
    likes: number;
    comments: number;
    shares: number;
  };
}

export default function StatisticsSheet({ isOpen, onClose, stats }: StatisticsSheetProps) {
  const statItems = [
    { icon: Eye, label: 'Baxış sayı', value: stats.views },
    { icon: Heart, label: 'Bəyənmə', value: stats.likes },
    { icon: MessageCircle, label: 'Şərh', value: stats.comments },
    { icon: Share2, label: 'Paylaşım', value: stats.shares }
  ];

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h2 className="text-lg font-semibold">Statistika</h2>
            <p className="text-sm text-gray-500">Son 30 günlük aktivlik</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {statItems.map((item) => (
            <div 
              key={item.label}
              className="bg-gray-50 rounded-xl p-4 flex items-center space-x-3"
            >
              <div className="p-2 bg-white rounded-lg">
                <item.icon className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <p className="text-2xl font-semibold">{item.value}</p>
                <p className="text-sm text-gray-500">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </BottomSheet>
  );
}