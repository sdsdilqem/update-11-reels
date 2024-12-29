import React from 'react';

interface OrderPriceSummaryProps {
  productPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

export default function OrderPriceSummary({ productPrice, deliveryFee, totalPrice }: OrderPriceSummaryProps) {
  return (
    <div className="bg-blue-50 rounded-lg p-3">
      <div className="grid grid-cols-2 gap-2 text-sm">
        <span className="text-gray-600">Məhsul:</span>
        <span className="text-right">₼{productPrice}</span>
        <span className="text-gray-600">Çatdırılma:</span>
        <span className="text-right">₼{deliveryFee}</span>
        <span className="font-medium pt-2 border-t">Cəmi:</span>
        <span className="text-right font-medium text-blue-500 pt-2 border-t">₼{totalPrice}</span>
      </div>
    </div>
  );
}