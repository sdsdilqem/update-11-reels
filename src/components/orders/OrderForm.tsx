import React, { useState } from 'react';
import { Shield } from 'lucide-react';
import type { OrderFormData } from '../../types/order';
import { formatPhoneNumber } from '../../utils/phone';

interface OrderFormProps {
  onSubmit: (data: OrderFormData) => void;
  onCancel: () => void;
}

export default function OrderForm({ onSubmit, onCancel }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    fullName: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
            Ad və Soyad
          </label>
          <input
            type="text"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            className="w-full px-4 py-2.5 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Əlaqə nömrəsi
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="0XX XXX XX XX"
            className="w-full px-4 py-2.5 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
            required
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
            Çatdırılma ünvanı
          </label>
          <textarea
            id="address"
            value={formData.address}
            onChange={(e) => setFormData(prev => ({ ...prev, address: e.target.value }))}
            className="w-full px-4 py-2.5 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100 min-h-[100px]"
            required
          />
        </div>
      </div>

      <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-xl">
        <Shield className="w-5 h-5 text-green-500" />
        <p className="text-sm text-green-700">
          Məhsul çatdırıldıqdan sonra ödəniş
        </p>
      </div>

      <div className="flex space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors"
        >
          Ləğv et
        </button>
        <button
          type="submit"
          className="flex-1 px-6 py-3 bg-emerald-500 text-white rounded-xl hover:bg-blue-600 transition-colors"
        >
          Sifarişi təsdiqlə
        </button>
      </div>
    </form>
  );
}