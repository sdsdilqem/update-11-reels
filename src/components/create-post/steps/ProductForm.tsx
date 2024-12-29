import React, { useState } from 'react';
import { PostFormData } from '../../../types/post';
import { formatPhoneNumber } from '../../../utils/phone';
import FormInput from '../form/FormInput';
import FormTextArea from '../form/FormTextArea';

interface ProductFormProps {
  initialData: PostFormData;
  submitLabel: string;
  onSubmit: (data: PostFormData) => void;
}

export default function ProductForm({
  initialData,
  submitLabel,
  onSubmit
}: ProductFormProps) {
  const [formData, setFormData] = useState(initialData);

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
      <FormInput
        id="title"
        value={formData.title}
        onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        placeholder="Məhsulun adı"
        required
      />

      <FormInput
        id="price"
        type="number"
        value={formData.price}
        onChange={(e) => setFormData(prev => ({ ...prev, price: e.target.value }))}
        placeholder="Qiymət"
        prefix="₼"
        required
      />

      <FormTextArea
        id="description"
        value={formData.description}
        onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        placeholder="Məhsul haqqında ətraflı məlumat..."
        required
      />

      <FormInput
        id="sellerName"
        value={formData.sellerName}
        onChange={(e) => setFormData(prev => ({ ...prev, sellerName: e.target.value }))}
        placeholder="Ad və Soyad"
        required
      />

      <FormInput
        id="phone"
        type="tel"
        value={formData.phone}
        onChange={handlePhoneChange}
        placeholder="Əlaqə nömrəsi (0XX XXX XX XX)"
        required
      />

      <button
        type="submit"
        className="w-full py-3 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition-colors font-medium"
      >
        {submitLabel}
      </button>
    </form>
  );
}