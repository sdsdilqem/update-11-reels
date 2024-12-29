import { Car, Home, Laptop, Smartphone, Shirt, Sofa, Dumbbell, Grid } from 'lucide-react';
import type { Category } from '../../types/category';

export const categories: Category[] = [
  {
    id: 1,
    name: 'Nəqliyyat',
    icon: Car,
    color: 'bg-blue-500',
    subcategories: [
      { id: 11, name: 'Avtomobillər', icon: Car },
      { id: 12, name: 'Ehtiyat hissələri', icon: Car }
    ]
  },
  {
    id: 2,
    name: 'Elektronika',
    icon: Laptop,
    color: 'bg-purple-500',
    subcategories: [
      { id: 21, name: 'Telefonlar', icon: Smartphone },
      { id: 22, name: 'Kompüterlər', icon: Laptop }
    ]
  },
  {
    id: 3,
    name: 'Daşınmaz',
    icon: Home,
    color: 'bg-green-500',
    subcategories: [
      { id: 31, name: 'Mənzillər', icon: Home },
      { id: 32, name: 'Villalar', icon: Home }
    ]
  },
  {
    id: 4,
    name: 'Geyim',
    icon: Shirt,
    color: 'bg-pink-500',
    subcategories: [
      { id: 41, name: 'Kişi geyimləri', icon: Shirt },
      { id: 42, name: 'Qadın geyimləri', icon: Shirt }
    ]
  },
  {
    id: 5,
    name: 'Mebel',
    icon: Sofa,
    color: 'bg-amber-500',
    subcategories: [
      { id: 51, name: 'Ev mebeli', icon: Sofa },
      { id: 52, name: 'Ofis mebeli', icon: Sofa }
    ]
  },
  {
    id: 6,
    name: 'İdman',
    icon: Dumbbell,
    color: 'bg-red-500',
    subcategories: [
      { id: 61, name: 'Trenajorlar', icon: Dumbbell },
      { id: 62, name: 'Aksesuarlar', icon: Dumbbell }
    ]
  },
  {
    id: 7,
    name: 'Telefon',
    icon: Smartphone,
    color: 'bg-indigo-500',
    subcategories: [
      { id: 71, name: 'Smartfonlar', icon: Smartphone },
      { id: 72, name: 'Aksesuarlar', icon: Smartphone }
    ]
  },
  {
    id: 8,
    name: 'Hamısı',
    icon: Grid,
    color: 'bg-gray-500',
    subcategories: []
  }
];