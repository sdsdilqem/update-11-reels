import React from 'react';
import { Shield } from 'lucide-react';
import OrderFormInput from './OrderFormInput';
import { OrderFormData } from './types';

interface OrderFormProps {
  formData: OrderFormData;
  errors: Record<keyof OrderFormData, string | undefined>;
  onSubmit: (e: React.FormEvent) => void;
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInputChange: (field: keyof OrderFormData, value: string) => void;
}

export default function OrderForm({
  formData,
  errors,
  onSubmit,
  onPhoneChange,
  onInputChange
}: OrderFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="space-y-3">
        <OrderFormInput
          type="text"
          placeholder="Ad və Soyad"
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          error={errors.name}
          required
        />
        <OrderFormInput
          type="tel"
          placeholder="Əlaqə nömrəsi (0XX XXX XX XX)"
          value={formData.phone}
          onChange={onPhoneChange}
          error={errors.phone}
          required
        />
        <OrderFormInput
          as="textarea"
          placeholder="Çatdırılma ünvanı"
          value={formData.address}
          onChange={(e) => onInputChange('address', e.target.value)}
          error={errors.address}
          required
        />
      </div>

      <div className="flex items-center space-x-2 bg-green-50 p-2 rounded-lg">
        <Shield className="w-4 h-4 text-green-500 flex-shrink-0" />
        <p className="text-xs text-green-700">
          Məhsul çatdırıldıqdan sonra ödəniş
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-emerald-500 text-white py-3 rounded-xl hover:bg-emerald-600 transition-colors text-sm font-medium"
      >
        Sifarişi təsdiqlə
      </button>
    </form>
  );
}