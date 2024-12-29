import { StaticProduct } from '../types/product';

export const appleProducts: StaticProduct[] = [
  {
    id: 'iphone-15-pro-max',
    title: 'iPhone 15 Pro Max',
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800',
    specs: {
      display: '6.7" Super Retina XDR OLED',
      chip: 'A17 Pro chip',
      camera: '48MP Main | 12MP Ultra Wide | 12MP Telephoto',
      battery: '29 saata qədər video oynatma'
    },
    colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    storage: ['256GB', '512GB', '1TB'],
    description: 'Titanium korpus, USB-C, 48MP əsas kamera və A17 Pro prosessor ilə ən güclü iPhone'
  },
  {
    id: 'macbook-pro-16',
    title: 'MacBook Pro 16"',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
    specs: {
      display: '16" Liquid Retina XDR',
      chip: 'M3 Pro/Max chip',
      camera: '1080p FaceTime HD',
      battery: '22 saata qədər'
    },
    colors: ['Space Black', 'Silver'],
    storage: ['512GB', '1TB', '2TB', '4TB'],
    description: 'M3 Pro və M3 Max çipləri ilə professional səviyyəli noutbuk'
  },
  {
    id: 'ipad-pro',
    title: 'iPad Pro',
    image: 'https://images.unsplash.com/photo-1587033411391-5d9e51cce126?w=800',
    specs: {
      display: '12.9" Liquid Retina XDR',
      chip: 'M2 chip',
      camera: '12MP Wide | 10MP Ultra Wide',
      battery: '10 saata qədər'
    },
    colors: ['Space Gray', 'Silver'],
    storage: ['128GB', '256GB', '512GB', '1TB', '2TB'],
    description: 'M2 çip və Liquid Retina XDR ekranı ilə professional tablet'
  }
];

export const mercedesProducts: StaticProduct[] = [
  {
    id: 'eqs-sedan',
    title: 'Mercedes-Benz EQS Sedan',
    image: 'https://images.unsplash.com/photo-1622200294772-e411737ad936?w=800',
    specs: {
      display: '56" MBUX Hyperscreen',
      chip: 'EQ Electric Intelligence',
      camera: '360° Camera System',
      battery: '770 km məsafə'
    },
    colors: ['Obsidian Black', 'High-Tech Silver', 'Nautical Blue'],
    storage: ['107.8 kWh'],
    description: 'Tam elektrikli premium sedan'
  }
];

export const nikeProducts: StaticProduct[] = [
  {
    id: 'air-max',
    title: 'Nike Air Max',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800',
    specs: {
      display: 'Air Cushioning',
      chip: 'React Foam',
      camera: 'Dynamic Support',
      battery: 'Durable Design'
    },
    colors: ['Black/White', 'University Red', 'Royal Blue'],
    storage: ['40', '41', '42', '43', '44', '45'],
    description: 'İkonik Air Max seriyasının ən son modeli'
  }
];

export const samsungProducts: StaticProduct[] = [
  {
    id: 'galaxy-s24-ultra',
    title: 'Samsung Galaxy S24 Ultra',
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=800',
    specs: {
      display: '6.8" Dynamic AMOLED 2X',
      chip: 'Snapdragon 8 Gen 3',
      camera: '200MP Main | 12MP Ultra Wide | 50MP Telephoto',
      battery: '5000 mAh'
    },
    colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet'],
    storage: ['256GB', '512GB', '1TB'],
    description: 'S Pen və AI özəllikləri ilə premium smartfon'
  }
];

export const getProductsByBrandId = (brandId: string): StaticProduct[] => {
  switch (brandId) {
    case 'apple':
      return appleProducts;
    case 'mercedes':
      return mercedesProducts;
    case 'nike':
      return nikeProducts;
    case 'samsung':
      return samsungProducts;
    default:
      return [];
  }
};