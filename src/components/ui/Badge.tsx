'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const theme = useTheme();

  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  const variantStyles = {
    default: 'bg-gray-800 text-gray-200 border border-gray-700',
    primary: 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30',
    secondary: 'bg-purple-500/20 text-purple-300 border border-purple-500/30',
    accent: 'bg-amber-500/20 text-amber-300 border border-amber-500/30',
  };

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}>
      {children}
    </span>
  );
};
