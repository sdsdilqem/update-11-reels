import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';
import SellerProfile from './pages/SellerProfile';
import MessagesPage from './pages/messages/MessagesPage';
import ChatPage from './pages/messages/ChatPage';
import LikesPage from './pages/likes/LikesPage';
import OrdersPage from './pages/orders/OrdersPage';
import SettingsPage from './pages/settings/SettingsPage';
import SecurityPage from './pages/settings/SecurityPage';
import ProfilePage from './pages/settings/profile/ProfilePage';
import HelpPage from './pages/help/HelpPage';
import PromotionPage from './pages/promotion/PromotionPage';
import ReelsView from './pages/ReelsView/ReelsView';
import TrendView from './pages/ReelsView2/ReelsView2';
import BrandsPage from './pages/brands/BrandsPage';
import BrandPage from './pages/brands/BrandPage';
import StaticProductPage from './pages/brands/StaticProductPage';

// Routes that should not show the navbar
const ROUTES_WITHOUT_NAVBAR = ['/reels', '/trend'];

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          {/* Only show Navbar if not in reels routes */}
          <Routes>
            {ROUTES_WITHOUT_NAVBAR.map(path => (
              <Route key={path} path={path} element={null} />
            ))}
            <Route path="*" element={<Navbar />} />
          </Routes>
          
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/reels" element={<ReelsView />} />
            <Route path="/trend" element={<TrendView />} />
            <Route path="/brands" element={<BrandsPage />} />
            <Route path="/brands/:id" element={<BrandPage />} />
            <Route path="/brands/:brandId/products/:productId" element={<StaticProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product/:id/promote" element={<PromotionPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route path="/seller/:username" element={<SellerProfile />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/messages/:id" element={<ChatPage />} />
            <Route path="/likes" element={<LikesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/settings/security" element={<SecurityPage />} />
            <Route path="/settings/profile" element={<ProfilePage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}