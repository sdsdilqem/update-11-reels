import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import BottomSheet from '../common/BottomSheet';
import { 
  Settings, Package, Heart, LogOut, MessageCircle, 
  ShoppingBag, BarChart2
} from 'lucide-react';

interface ProfileSheetProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileSheet({ isOpen, onClose }: ProfileSheetProps) {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { 
      icon: MessageCircle, 
      label: 'Mesajlar', 
      path: '/messages',
      color: 'bg-blue-50 text-blue-600'
    },
    { 
      icon: Heart, 
      label: 'Bəyənmələr', 
      path: '/likes',
      color: 'bg-red-50 text-red-600'
    },
    { 
      icon: ShoppingBag, 
      label: 'Sifarişlər', 
      path: '/orders',
      color: 'bg-green-50 text-green-600'
    },
    { 
      icon: Package, 
      label: 'Mənim elanlarım', 
      path: '/my-listings',
      color: 'bg-purple-50 text-purple-600'
    },
    { 
      icon: BarChart2, 
      label: 'Statistika', 
      path: '/statistics',
      color: 'bg-amber-50 text-amber-600'
    },
    { 
      icon: Settings, 
      label: 'Tənzimləmələr', 
      path: '/settings',
      color: 'bg-gray-50 text-gray-600'
    }
  ];

  const handleItemClick = (item: any) => {
    if (item.label === 'Çıxış') {
      logout();
      onClose();
    } else if (item.path) {
      navigate(item.path);
      onClose();
    }
  };

  if (!user) return null;

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4 mb-8 p-2">
          <img
            src={user.avatar}
            alt={user.username}
            className="w-16 h-16 rounded-2xl object-cover ring-2 ring-gray-100"
          />
          <div>
            <h2 className="text-xl font-semibold">{user.username}</h2>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Menu Grid - 3x2 */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleItemClick(item)}
              className="flex flex-col items-center p-3 rounded-xl transition-all hover:scale-[0.98] active:scale-95"
              style={{ background: item.color.split(' ')[0] }}
            >
              <div className={`p-2.5 rounded-xl bg-white/80 backdrop-blur-sm mb-2`}>
                <item.icon className={`w-5 h-5 ${item.color.split(' ')[1]}`} />
              </div>
              <span className={`text-xs font-medium ${item.color.split(' ')[1]} text-center leading-tight`}>
                {item.label}
              </span>
            </button>
          ))}
        </div>

        {/* Logout Button */}
        <button
          onClick={() => handleItemClick({ label: 'Çıxış' })}
          className="w-full flex items-center justify-center p-3 rounded-xl bg-red-50 text-red-600 transition-all hover:scale-[0.99] active:scale-[0.98]"
        >
          <LogOut className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Çıxış</span>
        </button>
      </div>
    </BottomSheet>
  );
}