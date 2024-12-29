import { LucideIcon } from 'lucide-react';

export interface Subcategory {
  id: number;
  name: string;
  icon: LucideIcon;
}

export interface Category {
  id: number;
  name: string;
  icon: LucideIcon;
  color: string;
  subcategories: Subcategory[];
}