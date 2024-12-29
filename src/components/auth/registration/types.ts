import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  link?: string;
  hasNotification?: boolean;
}