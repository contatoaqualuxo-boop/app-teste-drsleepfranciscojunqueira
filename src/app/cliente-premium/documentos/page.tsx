'use client';

import React from 'react';
import { FileText, Download, ChevronRight } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: FileText, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: FileText, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: FileText, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: FileText, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: FileText, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: FileText, group: 'outros' as const, isActive: true },
  { label: 'Visita à Loja', href: '/cliente-premium/pre-visita', icon: FileText, group: 'outros' as const },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: FileText, group: 'outros' as const },
];

const mockDocuments = [
  { title: 'Garantia', type: 'PDF', date: '15/03/2026' },
  { title: 'Manual do Usuário', type: 'PDF', date: '15/03/2026' },
  { title: 'Certificado de Autenticidade', type: 'PDF', date: '15/03/2026' },
];

export default function PremiumCustomerDocuments() {
  return (
    <DashboardLayout
      title="Documentos"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        <div className="space-y-4">
          {mockDocuments.map((doc, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-indigo-500/30 rounded-xl flex items-center justify-center">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{doc.title}</h3>
                    <p className="text-white/60 text-sm">{doc.type} • {doc.date}</p>
                  </div>
                </div>
                <Download className="w-4 h-4 text-white/40" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
