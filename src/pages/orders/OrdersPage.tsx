import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import OrderCard from '../../components/orders/OrderCard';
import { mockOrders } from '../../data/mockOrders';

export default function OrdersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-2xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Sifarişlərim</h1>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6">
        <div className="space-y-4">
          {mockOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}