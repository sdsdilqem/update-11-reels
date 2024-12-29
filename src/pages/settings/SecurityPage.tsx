import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function SecurityPage() {
  const { user } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [message, setMessage] = useState({ type: '', text: '' });

  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setMessage({ type: 'error', text: 'Şifrələr uyğun gəlmir' });
      return;
    }
    try {
      // TODO: Implement password change logic
      setMessage({ type: 'success', text: 'Şifrə uğurla yeniləndi' });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Şifrə yeniləmə xətası' });
    }
  };

  const handleEmailChange = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // TODO: Implement email change logic
      setMessage({ type: 'success', text: 'Email uğurla yeniləndi' });
      setNewEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Email yeniləmə xətası' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/settings" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Təhlükəsizlik</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        {message.text && (
          <div className={`mb-4 p-4 rounded-xl ${
            message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
          }`}>
            {message.text}
          </div>
        )}

        {/* Password Change Form */}
        <div className="bg-white rounded-xl p-6 mb-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-blue-50 rounded-lg">
              <Lock className="w-5 h-5 text-blue-500" />
            </div>
            <h2 className="text-lg font-medium">Şifrə yeniləmə</h2>
          </div>

          <form onSubmit={handlePasswordChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cari şifrə
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yeni şifrə
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yeni şifrəni təsdiqlə
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
            >
              Şifrəni yenilə
            </button>
          </form>
        </div>

        {/* Email Change Form */}
        <div className="bg-white rounded-xl p-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-2 bg-purple-50 rounded-lg">
              <Mail className="w-5 h-5 text-purple-500" />
            </div>
            <h2 className="text-lg font-medium">Email yeniləmə</h2>
          </div>

          <form onSubmit={handleEmailChange} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Cari email
              </label>
              <input
                type="email"
                value={user?.email}
                disabled
                className="w-full px-4 py-2 bg-gray-100 text-gray-500 rounded-xl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Yeni email
              </label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="w-full px-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-colors"
            >
              Email yenilə
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}