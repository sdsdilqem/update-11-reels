import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Package, Phone, MapPin } from 'lucide-react';
import type { Order } from '../../types/order';

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const statusColors = {
    PENDING: 'bg-yellow-100 text-yellow-800',
    CONFIRMED: 'bg-green-100 text-green-800',
    DELIVERED: 'bg-blue-100 text-blue-800',
    CANCELLED: 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Package className="w-5 h-5 text-blue-500" />
          <span className="font-medium">Sifariş #{order.id}</span>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[order.status]}`}>
          {order.status}
        </span>
      </div>
      
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={order.productImage}
          alt={order.productTitle}
          className="w-20 h-20 rounded-lg object-cover"
        />
        <div>
          <h3 className="font-medium mb-1">{order.productTitle}</h3>
          <p className="text-emerald-600 font-medium">{order.price} ₼</p>
          <p className="text-sm text-gray-500 mt-1">
            {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600 border-t pt-4">
        <p className="font-medium text-gray-900">{order.fullName}</p>
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4" />
          <span>{order.phone}</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4" />
          <span>{order.address}</span>
        </div>
      </div>
    </div>
  );
}