import React from 'react';
import { Phone, MessageCircle, ExternalLink, ShieldCheck, Clock } from 'lucide-react';
import { BsWhatsapp } from 'react-icons/bs';
import BottomSheet from './common/BottomSheet';

interface ContactSheetProps {
  isOpen: boolean;
  onClose: () => void;
  username: string;
  avatar: string;
}

export default function ContactSheet({ isOpen, onClose, username, avatar }: ContactSheetProps) {
  const contactMethods = [
    {
      icon: BsWhatsapp,
      label: 'WhatsApp',
      action: () => window.open('https://wa.me/1234567890'),
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Phone,
      label: 'Zəng et',
      action: () => window.open('tel:+1234567890'),
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: MessageCircle,
      label: 'Mesaj yaz',
      action: () => console.log('Open chat'),
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ExternalLink,
      label: 'Profil',
      action: () => console.log('Open profile'),
      color: 'text-gray-600',
      bgColor: 'bg-gray-50'
    }
  ];

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="space-y-6">
        {/* Seller Info */}
        <div className="flex items-center space-x-4">
          <img 
            src={avatar} 
            alt={username} 
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h3 className="text-lg font-semibold">{username}</h3>
              <ShieldCheck className="w-4 h-4 text-blue-500" />
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-500 mt-1">
              <Clock className="w-4 h-4" />
              <span>Adətən 1 saat ərzində cavab verir</span>
            </div>
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-2 gap-3">
          {contactMethods.map(({ icon: Icon, label, action, color, bgColor }) => (
            <button
              key={label}
              onClick={action}
              className={`flex items-center space-x-3 p-4 rounded-xl transition-colors ${bgColor} hover:opacity-90`}
            >
              <div className={`${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <span className={`font-medium ${color}`}>{label}</span>
            </button>
          ))}
        </div>

        {/* Safety Tips */}
        <div className="bg-yellow-50 rounded-xl p-4">
          <h4 className="font-medium text-yellow-800 mb-2">Təhlükəsizlik məsləhətləri</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• Məhsulu görmədən ödəniş etməyin</li>
            <li>• Şübhəli satıcılardan çəkinin</li>
            <li>• Görüş yerini ictimai məkanda seçin</li>
          </ul>
        </div>
      </div>
    </BottomSheet>
  );
}