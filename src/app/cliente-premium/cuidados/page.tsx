'use client';

import React from 'react';
import { Heart, ChevronRight, Clock, BookOpen } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Heart, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Heart, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Heart, group: 'principal' as const, isActive: true },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Heart, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Heart, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: Heart, group: 'outros' as const },
  { label: 'Visita à Loja', href: '/cliente-premium/pre-visita', icon: Heart, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: Heart, group: 'outros' as const },
];

const mockTips = [
  { title: 'Dica 1', description: 'Como manter seu produto em perfeito estado', duration: '5 min' },
  { title: 'Dica 2', description: 'Rotina semanal de cuidados', duration: '10 min' },
  { title: 'Dica 3', description: 'Erros comuns a evitar', duration: '7 min' },
];

export default function PremiumCustomerCare() {
  return (
    <DashboardLayout
      title="Cuidados"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        {/* Intro */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 border border-emerald-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Dicas de Cuidado</h2>
          <p className="text-white/70">Tudo que você precisa para manter seu produto em perfeito estado.</p>
        </div>

        {/* Tips List */}
        <div className="space-y-4">
          {mockTips.map((tip, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/30 to-teal-500/30 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{tip.title}</h3>
                    <p className="text-white/60 text-sm">{tip.description}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-white/40" />
                  <span className="text-white/40 text-sm">{tip.duration}</span>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
