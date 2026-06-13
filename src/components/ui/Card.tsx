'use client';

import React from 'react';
import { useTheme } from '@/lib/theme';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'glass';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
}) => {
  const theme = useTheme();

  const baseStyles = 'rounded-xl border p-6';

  const variantStyles = {
    default: 'bg-white/5 border-white/10',
    glass: 'bg-white/3 border-white/10 backdrop-blur-xl',
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className || ''}`}>
      {children}
    </div>
  );
};
