import React from 'react';
import { Shield, CreditCard, Clock } from 'lucide-react';

export default function SecurityNotice() {
  const features = [
    {
      icon: Shield,
      title: 'Təhlükəsiz ödəniş',
      description: 'Bütün ödənişlər şifrələnir və qorunur'
    },
    {
      icon: CreditCard,
      title: 'Dərhal aktivləşdirmə',
      description: 'Ödəniş təsdiqlənən kimi reklam başlayır'
    },
    {
      icon: Clock,
      title: '24/7 Dəstək',
      description: 'Hər hansı problem yaranarsa bizimlə əlaqə saxlayın'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
      {features.map((feature) => (
        <div 
          key={feature.title}
          className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl"
        >
          <div className="p-2 bg-white rounded-lg">
            <feature.icon className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <h4 className="font-medium text-sm">{feature.title}</h4>
            <p className="text-xs text-gray-500 mt-0.5">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}