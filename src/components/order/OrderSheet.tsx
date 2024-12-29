import React from 'react';
import BottomSheet from '../common/BottomSheet';
import OrderHeader from './OrderHeader';
import OrderPriceSummary from './OrderPriceSummary';
import OrderForm from './OrderForm';
import { useOrderForm } from './hooks/useOrderForm';

interface OrderSheetProps {
  isOpen: boolean;
  onClose: () => void;
  productTitle: string;
  productPrice: number;
}

export default function OrderSheet({ isOpen, onClose, productTitle, productPrice }: OrderSheetProps) {
  const deliveryFee = 5;
  const totalPrice = productPrice + deliveryFee;

  const {
    formData,
    errors,
    handleSubmit,
    handlePhoneChange,
    handleInputChange
  } = useOrderForm(onClose);

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <div className="px-4 pb-6">
        <OrderHeader 
          title={productTitle}
          estimatedTime="2-3 saat"
          status="Stokda"
        />
        <div className="mt-4 mb-6">
          <OrderPriceSummary
            productPrice={productPrice}
            deliveryFee={deliveryFee}
            totalPrice={totalPrice}
          />
        </div>
        <OrderForm
          formData={formData}
          errors={errors}
          onSubmit={handleSubmit}
          onPhoneChange={handlePhoneChange}
          onInputChange={handleInputChange}
        />
      </div>
    </BottomSheet>
  );
}