import React from 'react';

interface OrderFormInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: 'input' | 'textarea';
  error?: string;
}

export default function OrderFormInput({ 
  as = 'input', 
  className = '', 
  error,
  ...props 
}: OrderFormInputProps) {
  const baseClassName = "w-full px-3 py-2 bg-gray-50 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-100";
  const errorClassName = error ? "ring-2 ring-red-100" : "";
  const finalClassName = `${baseClassName} ${errorClassName} ${className}`.trim();

  const inputElement = as === 'textarea' ? (
    <textarea
      {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      className={`${finalClassName} min-h-[60px]`}
    />
  ) : (
    <input
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
      className={finalClassName}
    />
  );

  return (
    <div className="space-y-1">
      {inputElement}
      {error && (
        <p className="text-xs text-red-500 pl-1">{error}</p>
      )}
    </div>
  );
}