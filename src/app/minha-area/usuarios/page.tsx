'use client';

import React from 'react';
import { UserCog } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockUsuarios = [
  { id: 1, nome: 'Super Admin', email: 'admin@platform.com', role: 'Super Admin', dataCriacao: '01/01/2026' },
  { id: 2, nome: 'Financeiro', email: 'financeiro@platform.com', role: 'Financeiro', dataCriacao: '15/03/2026' },
];

export default function SuperAdminUsuariosPage() {
  return (
    <SuperAdminDashboardLayout title="Usuários" activePath="/minha-area/usuarios">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Nome</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Email</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Role</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Criação</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockUsuarios.map((usuario) => (
                  <tr key={usuario.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500/30 to-purple-500/30 flex items-center justify-center text-white/80 font-bold text-sm">
                          {usuario.nome.charAt(0)}
                        </div>
                        <p className="text-white font-medium">{usuario.nome}</p>
                      </div>
                    </td>
                    <td className="p-4 text-white/80">{usuario.email}</td>
                    <td className="p-4">
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-500/20 text-indigo-400">
                        {usuario.role}
                      </span>
                    </td>
                    <td className="p-4 text-white/80">{usuario.dataCriacao}</td>
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
