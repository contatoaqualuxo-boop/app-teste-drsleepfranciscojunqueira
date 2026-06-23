'use client';

import React from 'react';
import {
  Home,
  Package,
  Heart,
  Trophy,
  Gift,
  FileText,
  CalendarHeart,
  User,
  Bell,
  ChevronRight,
  Star,
  Activity,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Home, group: 'principal' as const, isActive: true },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Package, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Heart, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Trophy, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Gift, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: FileText, group: 'outros' as const },
  { label: 'Pré-visita', href: '/cliente-premium/pre-visita', icon: CalendarHeart, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: User, group: 'outros' as const },
];

const mockStats = [
  { label: 'Pontos', value: '2.450', icon: Star, color: 'from-yellow-500/30 to-amber-500/30' },
  { label: 'Nível', value: 'Gold', icon: Trophy, color: 'from-yellow-600/30 to-orange-500/30' },
  { label: 'Visitas', value: '3', icon: Activity, color: 'from-blue-500/30 to-cyan-500/30' },
];

const mockActivities = [
  { title: 'Atualização de produto', description: 'Seu produto recebeu uma atualização de cuidados', date: 'Hoje' },
  { title: 'Pontos adicionados', description: '200 pontos creditados por indicação', date: 'Ontem' },
  { title: 'Nova recomendação', description: 'Nova dica de cuidado personalizada', date: '3 dias atrás' },
];

export default function PremiumCustomerHome() {
  return (
    <DashboardLayout
      title="Home"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
      actions={
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all relative shadow-sm">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Olá, Cliente!</h2>
          <p className="text-white/70">Bem-vindo à sua área premium. Acompanhe tudo sobre seu produto aqui.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {mockStats.map((stat, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Recent Activity */}
        <Card className="backdrop-blur-xl">
          <h3 className="text-white font-bold text-lg mb-4">Atividades Recentes</h3>
          <div className="space-y-4">
            {mockActivities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-white font-medium">{activity.title}</p>
                  <p className="text-white/60 text-sm">{activity.description}</p>
                  <p className="text-white/40 text-xs mt-1">{activity.date}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
