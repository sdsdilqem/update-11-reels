import React, { TextareaHTMLAttributes } from 'react';

interface FormTextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export default function FormTextArea({ className = '', ...props }: FormTextAreaProps) {
  return (
    <textarea
      {...props}
      className={`
        w-full px-4 py-3 bg-gray-50 rounded-xl 
        focus:outline-none focus:ring-2 focus:ring-emerald-100 
        transition-all min-h-[100px] resize-none
        ${className}
      `}
    />
  );
}