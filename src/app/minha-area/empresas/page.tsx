'use client';

import React from 'react';
import { Building2, MoreHorizontal } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockEmpresas = [
  { id: 1, name: 'Loja do Sono', status: 'Ativa', clientes: 245, assinatura: 'Premium', createdAt: '20/06/2026' },
  { id: 2, name: 'Colchões Premium', status: 'Ativa', clientes: 412, assinatura: 'Pro', createdAt: '18/06/2026' },
  { id: 3, name: 'Descanso Total', status: 'Pendente', clientes: 0, assinatura: 'Free', createdAt: '15/06/2026' },
];

export default function SuperAdminEmpresasPage() {
  return (
    <SuperAdminDashboardLayout title="Empresas" activePath="/minha-area/empresas">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Clientes</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Assinatura</th>
                  <th className="text-right p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockEmpresas.map((empresa) => (
                  <tr key={empresa.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-500/30 flex items-center justify-center">
                          <Building2 className="w-4 h-4 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-medium">{empresa.name}</p>
                          <p className="text-white/40 text-xs">{empresa.createdAt}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        empresa.status === 'Ativa' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {empresa.status}
                      </span>
                    </td>
                    <td className="p-4 text-white/80">{empresa.clientes}</td>
                    <td className="p-4 text-white/80">{empresa.assinatura}</td>
                    <td className="p-4 text-right">
                      <button className="text-white/40 hover:text-white/80">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
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
