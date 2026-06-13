'use client';

import React from 'react';
import Link from 'next/link';
import { Bell, LucideIcon from 'lucide-react';
import { useTheme } from '@/lib/theme';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
  group?: 'principal' | 'outros';
}

interface BaseLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbItems?: { label: string; href?: string }[];
  sidebarNavItems?: NavItem[];
  sidebarTitle?: string;
  sidebarSubtitle?: string;
  actions?: React.ReactNode;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  children,
  title,
  breadcrumbItems,
  sidebarNavItems,
  sidebarTitle = 'Empresa',
  sidebarSubtitle = 'Painel',
  actions,
}) => {
  const theme = useTheme();

  return (
    <main className="min-h-screen bg-[#020617] relative flex overflow-hidden">
      {/* Sidebar */}
      <div className="w-72 bg-[#03091c] border-r border-white/10 flex-shrink-0 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
          </div>
          <div>
            <p className="text-white font-black text-lg">{sidebarTitle}</p>
            <p className="text-blue-400 text-xs font-medium">{sidebarSubtitle}</p>
          </div>
        </div>
        {/* Nav */}
        <div className="flex-1 p-4 space-y-1">
          {/* Principal */}
          {sidebarNavItems?.filter(i => i.group === 'principal').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                item.isActive
                  ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
          {/* Outros */}
          {sidebarNavItems?.filter(i => i.group === 'outros').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                item.isActive
                  ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium'
                  : 'text-white/60 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        {/* Help */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4">
            <p className="text-white font-medium text-sm mb-1">Suporte Prévisita</p>
            <p className="text-blue-200/70 text-xs">Entre em contato com nossa equipe</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Topbar */}
        <div className="sticky top-0 z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <p className="text-white font-medium text-lg">{title}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {actions}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 Plataforma Prévisita - Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
};
