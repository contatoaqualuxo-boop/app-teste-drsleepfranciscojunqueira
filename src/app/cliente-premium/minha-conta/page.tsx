'use client';

import React from 'react';
import { User, Mail, Phone, MapPin, Edit } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: User, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: User, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: User, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: User, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: User, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: User, group: 'outros' as const },
  { label: 'Pré-visita', href: '/cliente-premium/pre-visita', icon: User, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: User, group: 'outros' as const, isActive: true },
];

const mockProfile = {
  name: 'Cliente Premium',
  email: 'cliente@example.com',
  phone: '(11) 99999-9999',
  address: 'Rua Exemplo, 123 - São Paulo, SP',
};

export default function PremiumCustomerAccount() {
  return (
    <DashboardLayout
      title="Minha Conta"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
      actions={
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 transition-all">
          <Edit className="w-4 h-4" /> Editar
        </button>
      }
    >
      <div className="space-y-6">
        <Card className="backdrop-blur-xl">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center border border-blue-500/20">
              <User className="w-12 h-12 text-white/80" />
            </div>
            <div className="flex-1 space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-white">{mockProfile.name}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-white/40" />
                  <span className="text-white/70">{mockProfile.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white/40" />
                  <span className="text-white/70">{mockProfile.phone}</span>
                </div>
                <div className="flex items-center gap-3 md:col-span-2">
                  <MapPin className="w-5 h-5 text-white/40" />
                  <span className="text-white/70">{mockProfile.address}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
