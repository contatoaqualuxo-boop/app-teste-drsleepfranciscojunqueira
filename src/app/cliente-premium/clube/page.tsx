'use client';

import React from 'react';
import { Trophy, Star, Gift, ChevronRight } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Trophy, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Trophy, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Trophy, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Trophy, group: 'principal' as const, isActive: true },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Trophy, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: Trophy, group: 'outros' as const },
  { label: 'Pré-visita', href: '/cliente-premium/pre-visita', icon: Trophy, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: Trophy, group: 'outros' as const },
];

const mockRewards = [
  { title: 'Desconto 10%', points: 500, available: true },
  { title: 'Desconto 15%', points: 1000, available: true },
  { title: 'Brinde', points: 2000, available: false },
];

export default function PremiumCustomerClub() {
  return (
    <DashboardLayout
      title="Clube"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        {/* Club Status */}
        <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 border border-yellow-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-4">
            <Trophy className="w-12 h-12 text-yellow-400" />
            <div>
              <h2 className="text-2xl font-bold text-white">Nível Gold</h2>
              <p className="text-white/70">2.450 pontos</p>
            </div>
          </div>
        </div>

        {/* Rewards */}
        <div className="space-y-4">
          {mockRewards.map((reward, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    reward.available ? 'bg-gradient-to-br from-yellow-500/30 to-orange-500/30' : 'bg-white/5'
                  }`}>
                    <Gift className={`w-6 h-6 ${reward.available ? 'text-yellow-400' : 'text-white/40'}`} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{reward.title}</h3>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <Star className="w-4 h-4" /> {reward.points} pontos
                    </p>
                  </div>
                </div>
                {reward.available && <ChevronRight className="w-4 h-4 text-white/40" />}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
