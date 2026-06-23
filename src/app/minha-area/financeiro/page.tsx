'use client';

import React from 'react';
import { TrendingUp } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockMovimentacoes = [
  { id: 1, tipo: 'Receita', valor: 'R$ 999', empresa: 'Loja do Sono', data: '20/06/2026' },
  { id: 2, tipo: 'Receita', valor: 'R$ 499', empresa: 'Colchões Premium', data: '18/06/2026' },
  { id: 3, tipo: 'Estorno', valor: 'R$ 99', empresa: 'Cliente X', data: '15/06/2026' },
];

export default function SuperAdminFinanceiroPage() {
  return (
    <SuperAdminDashboardLayout title="Financeiro" activePath="/minha-area/financeiro">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Data</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Tipo</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-right p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Valor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockMovimentacoes.map((mov) => (
                  <tr key={mov.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4 text-white/80">{mov.data}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        mov.tipo === 'Receita' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'
                      }`}>
                        {mov.tipo}
                      </span>
                    </td>
                    <td className="p-4 text-white/80">{mov.empresa}</td>
                    <td className={`p-4 text-right font-bold ${
                      mov.tipo === 'Receita' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {mov.tipo === 'Estorno' ? '-' : ''}{mov.valor}
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
