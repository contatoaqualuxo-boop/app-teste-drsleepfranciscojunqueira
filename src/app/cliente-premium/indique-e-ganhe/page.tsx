'use client';

import React from 'react';
import { Gift, Users, Share2, Copy } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Gift, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Gift, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Gift, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Gift, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Gift, group: 'principal' as const, isActive: true },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: Gift, group: 'outros' as const },
  { label: 'Pré-visita', href: '/cliente-premium/pre-visita', icon: Gift, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: Gift, group: 'outros' as const },
];

const mockReferral = {
  code: 'CLIENTE123',
  referralsCount: 5,
  pointsEarned: 1000,
};

export default function PremiumCustomerReferral() {
  return (
    <DashboardLayout
      title="Indique e Ganhe"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        {/* Intro */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Convide seus amigos</h2>
          <p className="text-white/70">Ganhe pontos exclusivos para cada indicação que se torna cliente.</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <Users className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-white font-bold text-2xl">{mockReferral.referralsCount}</h3>
            <p className="text-white/60 text-sm">Indicações</p>
          </Card>
          <Card className="backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <Gift className="w-6 h-6 text-pink-400" />
            </div>
            <h3 className="text-white font-bold text-2xl">{mockReferral.pointsEarned}</h3>
            <p className="text-white/60 text-sm">Pontos Ganho</p>
          </Card>
        </div>

        {/* Referral Code */}
        <Card className="backdrop-blur-xl">
          <h3 className="text-white font-bold text-lg mb-4">Seu Código de Indicação</h3>
          <div className="flex items-center gap-3">
            <div className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white font-mono text-lg">
              {mockReferral.code}
            </div>
            <Button variant="primary" className="flex items-center gap-2">
              <Copy className="w-4 h-4" /> Copiar
            </Button>
            <Button variant="secondary" className="flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Compartilhar
            </Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
