import React from 'react';
import { ArrowLeft, User, Shield, HelpCircle, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SettingsPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const settingsSections = [
    {
      title: 'Hesab',
      items: [
        { 
          icon: User, 
          label: 'Profil məlumatları', 
          action: () => navigate('/settings/profile') 
        },
        { 
          icon: Shield, 
          label: 'Təhlükəsizlik', 
          action: () => navigate('/settings/security') 
        }
      ]
    },
    {
      title: 'Digər',
      items: [
        { 
          icon: HelpCircle, 
          label: 'Kömək mərkəzi', 
          action: () => navigate('/help')
        },
        { 
          icon: LogOut, 
          label: 'Çıxış', 
          action: logout, 
          color: 'text-red-500' 
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Tənzimləmələr</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {settingsSections.map((section) => (
          <div key={section.title} className="mb-8">
            <h2 className="text-sm font-medium text-gray-500 mb-2">{section.title}</h2>
            <div className="bg-white rounded-xl overflow-hidden">
              {section.items.map((item, index) => (
                <button
                  key={item.label}
                  onClick={item.action}
                  className={`w-full flex items-center space-x-3 p-4 hover:bg-gray-50 transition-colors ${
                    index !== 0 ? 'border-t border-gray-100' : ''
                  } ${item.color || 'text-gray-700'}`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}