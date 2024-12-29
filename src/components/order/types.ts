// Common types used across order components
export interface OrderFormData {
  name: string;
  phone: string;
  address: string;
}

export interface OrderPriceData {
  productPrice: number;
  deliveryFee: number;
  totalPrice: number;
}

export interface OrderHeaderData {
  title: string;
  estimatedTime: string;
  status: string;
}