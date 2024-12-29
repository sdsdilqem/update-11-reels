import React from 'react';
import { ArrowLeft, Search, ShoppingBag, CreditCard, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HelpSection from './components/HelpSection';
import SearchBar from './components/SearchBar';
import { helpSections } from './constants';

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-30 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Link to="/settings" className="p-2 -ml-2 hover:bg-gray-50 rounded-full">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <h1 className="font-semibold">Kömək mərkəzi</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-6">
        {/* Search */}
        <SearchBar />

        {/* Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { icon: ShoppingBag, label: 'Sifarişlər', color: 'blue' },
            { icon: CreditCard, label: 'Ödəniş', color: 'green' },
            { icon: Shield, label: 'Təhlükəsizlik', color: 'purple' },
            { icon: HelpCircle, label: 'Ümumi', color: 'amber' }
          ].map(({ icon: Icon, label, color }) => (
            <button
              key={label}
              className={`p-4 bg-${color}-50 rounded-xl hover:bg-${color}-100 transition-colors`}
            >
              <Icon className={`w-6 h-6 text-${color}-500 mb-2`} />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </div>

        {/* Help Sections */}
        <div className="space-y-6">
          {helpSections.map((section) => (
            <HelpSection key={section.title} {...section} />
          ))}
        </div>
      </div>
    </div>
  );
}