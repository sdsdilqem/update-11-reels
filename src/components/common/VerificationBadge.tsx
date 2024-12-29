import React from 'react';
import { Shield, ShieldCheck, ShieldAlert } from 'lucide-react';

interface VerificationBadgeProps {
  level: 'BASIC' | 'VERIFIED' | 'PREMIUM';
}

export default function VerificationBadge({ level }: VerificationBadgeProps) {
  const badges = {
    BASIC: {
      icon: Shield,
      color: 'text-gray-500',
      tooltip: 'Basic Member'
    },
    VERIFIED: {
      icon: ShieldCheck,
      color: 'text-blue-500',
      tooltip: 'Verified Member'
    },
    PREMIUM: {
      icon: ShieldAlert,
      color: 'text-gold-500',
      tooltip: 'Premium Member'
    }
  };

  const BadgeIcon = badges[level].icon;

  return (
    <div className="inline-flex items-center" title={badges[level].tooltip}>
      <BadgeIcon className={`w-4 h-4 ${badges[level].color}`} />
    </div>
  );
}