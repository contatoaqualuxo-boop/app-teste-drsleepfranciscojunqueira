'use client';

import React from 'react';
import { CreditCard } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockAssinaturas = [
  { id: 1, empresa: 'Loja do Sono', plano: 'Premium', valor: 'R$ 999/mês', status: 'Ativa', proximoVencimento: '20/07/2026' },
  { id: 2, empresa: 'Colchões Premium', plano: 'Pro', valor: 'R$ 499/mês', status: 'Ativa', proximoVencimento: '18/07/2026' },
];

export default function SuperAdminAssinaturasPage() {
  return (
    <SuperAdminDashboardLayout title="Assinaturas" activePath="/minha-area/assinaturas">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Plano</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Valor</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Próximo Vencimento</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockAssinaturas.map((assinatura) => (
                  <tr key={assinatura.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/30 to-blue-500/30 flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-indigo-400" />
                        </div>
                        <p className="text-white font-medium">{assinatura.empresa}</p>
                      </div>
                    </td>
                    <td className="p-4 text-white/80">{assinatura.plano}</td>
                    <td className="p-4 text-white/80">{assinatura.valor}</td>
                    <td className="p-4 text-white/80">{assinatura.proximoVencimento}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        {assinatura.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </SuperAdminDashboardLayout>
  );
}
