import React from 'react';
import { Link } from 'react-router-dom';
import { Play, TrendingUp, Crown, Gift } from 'lucide-react';
import type { FeatureItem } from './types';

const features: FeatureItem[] = [
  {
    id: 'reels',
    title: 'Reels',
    description: 'Məhsulları ardıcıl görün',
    icon: Play,
    color: 'blue',
    link: '/reels',
    hasNotification: true
  },
  {
    id: 'trends',
    title: 'Trendlər',
    description: 'Trend məhsullara baxın',
    icon: TrendingUp,
    color: 'purple',
    link: '/trend',
    hasNotification: true
  },
  {
    id: 'vip',
    title: 'VIP Status',
    description: 'Satışları artırın',
    icon: Crown,
    color: 'amber'
  },
  {
    id: 'bonus',
    title: 'Bonus Hədiyyələr',
    description: '500 xal bonus sizi gözləyir',
    icon: Gift,
    color: 'green'
  }
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {features.map(({ id, title, description, icon: Icon, color, link, hasNotification }) => {
        const Content = (
          <div
            className={`
              bg-${color}-50 p-4 rounded-xl transition-all relative
              hover:scale-[0.98] active:scale-95 cursor-pointer
              h-full flex flex-col
            `}
          >
            {hasNotification && (
              <span className="absolute top-2 right-2">
                <span className={`absolute w-4 h-4 bg-${color}-500 rounded-full`} />
                <span className={`absolute w-4 h-4 bg-${color}-500 rounded-full animate-ping`} />
              </span>
            )}
            <div className={`p-2.5 bg-${color}-100 rounded-xl w-fit mb-3`}>
              <Icon className={`w-5 h-5 text-${color}-500`} />
            </div>
            <h3 className={`text-${color}-700 font-medium mb-1`}>{title}</h3>
            <p className={`text-${color}-600 text-sm`}>{description}</p>
          </div>
        );

        return link ? (
          <Link key={id} to={link} className="block">
            {Content}
          </Link>
        ) : (
          <div key={id}>{Content}</div>
        );
      })}
    </div>
  );
}