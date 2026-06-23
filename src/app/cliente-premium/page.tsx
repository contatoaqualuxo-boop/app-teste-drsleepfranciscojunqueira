'use client';

import React from 'react';
import Link from 'next/link';
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
  CheckCircle,
  Store,
  UserCheck,
  MessageCircle,
  ShieldCheck,
} from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Home, group: 'principal' as const, isActive: true },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Package, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Heart, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Trophy, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Gift, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: FileText, group: 'outros' as const },
  { label: 'Visita à Loja', href: '/cliente-premium/pre-visita', icon: CalendarHeart, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: User, group: 'outros' as const },
];

// Mock data
const mockProduct = {
  name: 'Produto Premium',
  purchaseDate: '15/03/2026',
  warrantyExpiry: '15/03/2031',
  warrantyDaysLeft: 1730,
};

const mockNextCare = {
  daysLeft: 12,
  progress: 60,
};

const mockClub = {
  level: 'Gold',
  points: 2450,
  nextReward: 'Desconto 15%',
  nextRewardPoints: 3000,
};

const mockLastVisit = {
  date: '25/05/2026',
  store: 'Loja Principal',
  consultant: 'Maria Silva',
};

const mockNotifications = [
  { id: 1, title: 'Novo cuidado disponível', message: 'Uma nova dica de cuidado foi adicionada', date: 'Hoje' },
  { id: 2, title: 'Garantia atualizada', message: 'Seu status de garantia foi renovado', date: 'Ontem' },
  { id: 3, title: 'Pontos adicionados', message: '200 pontos creditados por indicação', date: '3 dias atrás' },
];

const mockQuickActions = [
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Package, color: 'from-blue-500/30 to-indigo-500/30' },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: FileText, color: 'from-purple-500/30 to-violet-500/30' },
  { label: 'Garantia', href: '/cliente-premium/meu-produto', icon: ShieldCheck, color: 'from-green-500/30 to-emerald-500/30' },
  { label: 'WhatsApp', href: '#', icon: MessageCircle, color: 'from-green-600/30 to-teal-500/30' },
  { label: 'Agendar Visita', href: '/cliente-premium/pre-visita', icon: CalendarHeart, color: 'from-orange-500/30 to-amber-500/30' },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Gift, color: 'from-pink-500/30 to-rose-500/30' },
];

function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Bom dia';
  if (hour < 18) return 'Boa tarde';
  return 'Boa noite';
}

export default function PremiumCustomerHome() {
  const greeting = getGreeting();

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
        {/* Banner Superior */}
        <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-indigo-600/20 border border-blue-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <h3 className="text-white font-bold text-lg mb-2">🎉 Oferta exclusiva para você!</h3>
          <p className="text-white/70 text-sm">Aproveite benefícios especiais no mês do seu aniversário.</p>
        </div>

        {/* Saudação Dinâmica */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-1">{greeting}, Cliente!</h2>
          <p className="text-white/60 text-sm">Bem-vindo à sua área premium. Acompanhe tudo sobre seu produto aqui.</p>
        </div>

        {/* Card Principal do Produto */}
        <Card variant="glass">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-2xl flex items-center justify-center border border-blue-500/20 flex-shrink-0">
              <Package className="w-8 h-8 text-white/80" />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-xl font-bold text-white">{mockProduct.name}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Data da compra</p>
                  <p className="text-white/80 text-sm">{mockProduct.purchaseDate}</p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Garantia</p>
                  <p className="text-white/80 text-sm">Até {mockProduct.warrantyExpiry}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-green-400 font-medium">{mockProduct.warrantyDaysLeft} dias restantes</span>
              </div>
            </div>
            <Link href="/cliente-premium/meu-produto" className="w-full md:w-auto">
              <Button variant="primary" size="md" className="w-full md:w-auto">
                Ver Produto
              </Button>
            </Link>
          </div>
        </Card>

        {/* Grid: Próximo Cuidado + Clube + Última Visita */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Próximo Cuidado */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-rose-400" />
              Próximo Cuidado
            </h3>
            <p className="text-white/70 text-sm mb-3">Faltam {mockNextCare.daysLeft} dias para o próximo cuidado</p>
            <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-rose-500 to-pink-500"
                style={{ width: `${mockNextCare.progress}%` }}
              />
            </div>
          </Card>

          {/* Clube */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-yellow-400" />
              Clube
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Nível</p>
                <p className="text-white font-bold">{mockClub.level}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Pontos</p>
                <p className="text-white font-bold">{mockClub.points.toLocaleString('pt-BR')}</p>
              </div>
              <div className="pt-2 border-t border-white/10">
                <p className="text-white/40 text-xs uppercase tracking-wider">Próxima recompensa</p>
                <p className="text-white font-medium">{mockClub.nextReward} ({mockClub.nextRewardPoints - mockClub.points} pontos)</p>
              </div>
            </div>
          </Card>

          {/* Última Visita */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <Store className="w-5 h-5 text-blue-400" />
              Última Visita
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Data</p>
                <p className="text-white/80 text-sm">{mockLastVisit.date}</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider">Loja</p>
                <p className="text-white/80 text-sm">{mockLastVisit.store}</p>
              </div>
              <div className="flex items-center gap-2">
                <UserCheck className="w-4 h-4 text-white/40" />
                <p className="text-white/80 text-sm">{mockLastVisit.consultant}</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Central de Notificações */}
        <Card variant="glass">
          <h3 className="text-white font-bold text-lg mb-4">Central de Notificações</h3>
          <div className="space-y-3">
            {mockNotifications.map((notification) => (
              <div key={notification.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                <div className="flex-1">
                  <p className="text-white font-medium">{notification.title}</p>
                  <p className="text-white/60 text-sm">{notification.message}</p>
                  <p className="text-white/40 text-xs mt-1">{notification.date}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-white/40" />
              </div>
            ))}
          </div>
        </Card>

        {/* Ações Rápidas */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Ações Rápidas</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {mockQuickActions.map((action, i) => (
              <Link key={i} href={action.href} className="group">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className={`w-10 h-10 mx-auto rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-2`}>
                    <action.icon className="w-5 h-5 text-white/80" />
                  </div>
                  <p className="text-white/80 text-xs font-medium">{action.label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
