import React, { InputHTMLAttributes } from 'react';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function FormInput({ label, ...props }: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...props}
        className="w-full px-4 py-2 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-100"
      />
    </div>
  );
}