import { Sparkles, Rocket, Crown } from 'lucide-react';
import type { PromotionPlan } from './types';

export const promotionPlans: PromotionPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    price: 0.50,
    icon: Sparkles,
    color: 'blue',
    features: [
      'Axtarış nəticələrində yuxarıda',
      '24 saat ərzində 2x daha çox baxış',
      'Kateqoriya səhifəsində öncəlik'
    ]
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1.00,
    icon: Rocket,
    color: 'purple',
    features: [
      'Basic planın bütün üstünlükləri',
      'Ana səhifədə göstərilmə',
      '3x daha çox baxış',
      'VIP müştəri dəstəyi'
    ]
  },
  {
    id: 'ultra',
    name: 'Ultra Sponsorlu',
    price: 1.50,
    icon: Crown,
    color: 'amber',
    features: [
      'Premium planın bütün üstünlükləri',
      'Kateqoriya səhifəsində ilk sırada',
      '5x daha çox baxış',
      'Xüsusi sponsor nişanı',
      '24/7 prioritet dəstək'
    ]
  }
];