'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
  isActive?: boolean;
  group?: 'principal' | 'outros';
}

interface DashboardLayoutProps {
  children: React.ReactNode;
  title?: string;
  breadcrumbItems?: { label: string; href?: string }[];
  sidebarNavItems?: NavItem[];
  sidebarTitle?: string;
  sidebarSubtitle?: string;
  actions?: React.ReactNode;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  title,
  sidebarNavItems,
  sidebarTitle = 'Dashboard',
  sidebarSubtitle = 'Prévisita',
  actions,
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] relative flex overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'w-72' : 'w-20'
        } ${
          isMobileSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } bg-gradient-to-b from-[#03091c] to-[#020617] border-r border-white/10 flex-shrink-0 flex flex-col`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/20">
          </div>
          {isSidebarOpen && (
            <div className="flex-1">
              <p className="text-white font-black text-lg tracking-tight">{sidebarTitle}</p>
              <p className="text-blue-400 text-xs font-medium">{sidebarSubtitle}</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {/* Principal Group */}
          {sidebarNavItems?.filter(i => i.group === 'principal').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                item.isActive
                  ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium shadow-lg shadow-blue-500/10'
                  : 'text-white/60 hover:bg-white/5 hover:text-white hover:border hover:border-white/10'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span className="truncate">{item.label}</span>}
            </Link>
          ))}

          {isSidebarOpen && sidebarNavItems?.filter(i => i.group === 'principal').length > 0 && sidebarNavItems?.filter(i => i.group === 'outros').length > 0 && (
            <div className="h-px bg-white/10 my-4" />
          )}

          {/* Outros Group */}
          {sidebarNavItems?.filter(i => i.group === 'outros').map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileSidebarOpen(false)}
              className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                item.isActive
                  ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium shadow-lg shadow-blue-500/10'
                  : 'text-white/60 hover:bg-white/5 hover:text-white hover:border hover:border-white/10'
              }`}
            >
              <item.icon className="w-5 h-5 flex-shrink-0" />
              {isSidebarOpen && <span className="truncate">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Toggle Sidebar */}
        <div className="p-4 border-t border-white/10">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all"
          >
            {isSidebarOpen ? (
              <Menu className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
            {isSidebarOpen && <span className="text-sm font-medium">Recolher</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-[#020617]/90 backdrop-blur-2xl border-b border-white/10 px-6 py-4 flex items-center gap-4">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
            className="lg:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
          >
            {isMobileSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Title */}
          <div className="flex-1">
            <h1 className="text-xl font-bold text-white">{title}</h1>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {actions}
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Widget Container */}
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
};
