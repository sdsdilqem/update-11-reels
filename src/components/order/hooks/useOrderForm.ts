import { useState } from 'react';
import { OrderFormData } from '../types';
import { validateName, validatePhoneNumber, validateAddress } from '../../../utils/validation';
import { formatPhoneNumber } from '../../../utils/phone';

interface ValidationErrors {
  name?: string;
  phone?: string;
  address?: string;
}

export const useOrderForm = (onSubmitSuccess: () => void) => {
  const [formData, setFormData] = useState<OrderFormData>({
    name: '',
    phone: '',
    address: ''
  });
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    if (!validateName(formData.name)) {
      newErrors.name = 'Ad və Soyad minimum 3 simvol olmalıdır';
    }

    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = 'Düzgün telefon nömrəsi daxil edin';
    }

    if (!validateAddress(formData.address)) {
      newErrors.address = 'Ünvan minimum 10 simvol olmalıdır';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Order submitted:', formData);
      onSubmitSuccess();
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formattedPhone }));
    if (errors.phone) {
      setErrors(prev => ({ ...prev, phone: undefined }));
    }
  };

  const handleInputChange = (field: keyof OrderFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return {
    formData,
    errors,
    handleSubmit,
    handlePhoneChange,
    handleInputChange
  };
};