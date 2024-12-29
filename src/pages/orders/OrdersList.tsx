import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import { Package } from 'lucide-react';
import type { Order } from '../../types/order';

interface OrdersListProps {
  orders: Order[];
}

export default function OrdersList({ orders }: OrdersListProps) {
  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white rounded-xl border border-gray-100 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <Package className="w-5 h-5 text-blue-500" />
              <span className="font-medium">Sifariş #{order.id}</span>
            </div>
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              order.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' :
              order.status === 'CONFIRMED' ? 'bg-green-100 text-green-800' :
              'bg-red-100 text-red-800'
            }`}>
              {order.status}
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <img
              src={order.productImage}
              alt={order.productTitle}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm mb-1">{order.productTitle}</h3>
              <p className="text-sm text-gray-500">₼{order.price}</p>
              <p className="text-xs text-gray-500 mt-1">
                {formatDistanceToNow(new Date(order.timestamp), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}