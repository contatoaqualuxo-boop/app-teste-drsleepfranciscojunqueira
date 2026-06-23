'use client';

import React from 'react';
import { Package, ShieldCheck, Calendar, ChevronRight, CheckCircle } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: Package, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: Package, group: 'principal' as const, isActive: true },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: Package, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: Package, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: Package, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: Package, group: 'outros' as const },
  { label: 'Visita à Loja', href: '/cliente-premium/pre-visita', icon: Package, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: Package, group: 'outros' as const },
];

const mockProduct = {
  name: 'Produto Premium',
  model: 'Modelo XYZ',
  purchaseDate: '15/03/2026',
  warrantyExpiry: '15/03/2031',
  status: 'Ativo',
};

const mockFeatures = [
  { title: 'Garantia Ativa', description: '5 anos de garantia completa' },
  { title: 'Suporte Premium', description: 'Atendimento prioritário 24/7' },
  { title: 'Atualizações', description: 'Atualizações gratuitas de cuidados' },
];

export default function PremiumCustomerMyProduct() {
  return (
    <DashboardLayout
      title="Meu Produto"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        {/* Product Info Card */}
        <Card className="backdrop-blur-xl">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-2xl flex items-center justify-center border border-blue-500/20">
              <Package className="w-12 h-12 text-white/80" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{mockProduct.name}</h2>
              <p className="text-white/60 mb-4">{mockProduct.model}</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Data de Compra</p>
                  <p className="text-white font-medium flex items-center gap-2 mt-1">
                    <Calendar className="w-4 h-4" /> {mockProduct.purchaseDate}
                  </p>
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wider">Garantia</p>
                  <p className="text-white font-medium flex items-center gap-2 mt-1">
                    <ShieldCheck className="w-4 h-4" /> até {mockProduct.warrantyExpiry}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {mockFeatures.map((feature, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
                <h3 className="text-white font-bold">{feature.title}</h3>
              </div>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
