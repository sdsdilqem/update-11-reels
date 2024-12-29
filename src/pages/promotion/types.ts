import { LucideIcon } from 'lucide-react';

export interface PromotionPlan {
  id: string;
  name: string;
  price: number;
  icon: LucideIcon;
  color: string;
  features: string[];
}