'use client';

import React from 'react';
import { Shield } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockLicencas = [
  { id: 1, empresa: 'Loja do Sono', tipo: 'Premium', validade: '20/06/2027', status: 'Ativa' },
  { id: 2, empresa: 'Colchões Premium', tipo: 'Pro', validade: '18/06/2026', status: 'Vencendo' },
  { id: 3, empresa: 'Descanso Total', tipo: 'Free', validade: 'Indeterminada', status: 'Ativa' },
];

export default function SuperAdminLicencasPage() {
  return (
    <SuperAdminDashboardLayout title="Licenças" activePath="/minha-area/licencas">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Tipo</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Validade</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockLicencas.map((licenca) => (
                  <tr key={licenca.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500/30 to-violet-500/30 flex items-center justify-center">
                          <Shield className="w-4 h-4 text-purple-400" />
                        </div>
                        <p className="text-white font-medium">{licenca.empresa}</p>
                      </div>
                    </td>
                    <td className="p-4 text-white/80">{licenca.tipo}</td>
                    <td className="p-4 text-white/80">{licenca.validade}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        licenca.status === 'Ativa' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {licenca.status}
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
