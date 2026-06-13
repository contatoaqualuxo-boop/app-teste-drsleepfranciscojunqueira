'use client';

import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
}) => {
  return (
    <div className={`space-y-1 ${className || ''}`}>
      <h3 className="text-xl font-bold text-white">{title}</h3>
      {subtitle && (
        <p className="text-sm text-white/60">{subtitle}</p>
      )}
    </div>
  );
};
