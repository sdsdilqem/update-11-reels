import React from 'react';
import { MessageCircle, Heart, ShoppingBag } from 'lucide-react';
import NotificationCategory from './NotificationCategory';

interface NotificationCategoriesProps {
  onCategoryClick: (path: string) => void;
}

const categories = [
  {
    type: 'messages',
    icon: MessageCircle,
    title: 'Mesajlar',
    count: 2,
    message: 'Yeni mesajlarınız var',
    color: 'text-blue-500',
    path: '/messages'
  },
  {
    type: 'likes',
    icon: Heart,
    title: 'Bəyənmələr',
    count: 3,
    message: 'Məhsullarınız bəyənildi',
    color: 'text-red-500',
    path: '/likes'
  },
  {
    type: 'orders',
    icon: ShoppingBag,
    title: 'Sifarişlər',
    count: 1,
    message: 'Yeni sifarişləriniz var',
    color: 'text-green-500',
    path: '/orders'
  }
];

export default function NotificationCategories({ onCategoryClick }: NotificationCategoriesProps) {
  return (
    <div className="space-y-3">
      {categories.map((category) => (
        <NotificationCategory
          key={category.type}
          icon={category.icon}
          title={category.title}
          message={category.message}
          count={category.count}
          color={category.color}
          onClick={() => onCategoryClick(category.path)}
        />
      ))}
    </div>
  );
}