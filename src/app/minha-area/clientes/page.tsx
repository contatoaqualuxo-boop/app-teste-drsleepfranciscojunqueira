'use client';

import React from 'react';
import { Users } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockClientes = [
  { id: 1, nome: 'Ana Carolina', empresa: 'Loja do Sono', email: 'ana@email.com', dataCadastro: '10/06/2026' },
  { id: 2, nome: 'Bruno Mendes', empresa: 'Colchões Premium', email: 'bruno@email.com', dataCadastro: '08/06/2026' },
];

export default function SuperAdminClientesPage() {
  return (
    <SuperAdminDashboardLayout title="Clientes" activePath="/minha-area/clientes">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Nome</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Email</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Cadastro</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockClientes.map((cliente) => (
                  <tr key={cliente.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-white/80 font-bold text-sm">
                          {cliente.nome.charAt(0)}
                        </div>
                        <p className="text-white font-medium">{cliente.nome}</p>
                      </div>
                    </td>
                    <td className="p-4 text-white/80">{cliente.empresa}</td>
                    <td className="p-4 text-white/80">{cliente.email}</td>
                    <td className="p-4 text-white/80">{cliente.dataCadastro}</td>
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
