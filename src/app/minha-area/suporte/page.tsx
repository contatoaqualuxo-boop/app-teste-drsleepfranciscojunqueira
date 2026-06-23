'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

const mockTickets = [
  { id: 1, assunto: 'Dúvida sobre configuração', empresa: 'Loja do Sono', status: 'Aberto', prioridade: 'Alta', data: '20/06/2026' },
  { id: 2, assunto: 'Erro no relatório', empresa: 'Colchões Premium', status: 'Em Andamento', prioridade: 'Média', data: '18/06/2026' },
  { id: 3, assunto: 'Solicitação de upgrade', empresa: 'Descanso Total', status: 'Resolvido', prioridade: 'Baixa', data: '15/06/2026' },
];

export default function SuperAdminSuportePage() {
  return (
    <SuperAdminDashboardLayout title="Suporte" activePath="/minha-area/suporte">
      <div className="space-y-6">
        <Card variant="glass">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Assunto</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Empresa</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Status</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Prioridade</th>
                  <th className="text-left p-4 text-white/40 text-xs font-bold uppercase tracking-wider">Data</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockTickets.map((ticket) => (
                  <tr key={ticket.id} className="hover:bg-white/5 transition-all">
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-yellow-500/30 to-orange-500/30 flex items-center justify-center">
                          <MessageSquare className="w-4 h-4 text-yellow-400" />
                        </div>
                        <p className="text-white font-medium">{ticket.assunto}</p>
                      </div>
                    </td>
                    <td className="p-4 text-white/80">{ticket.empresa}</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ticket.status === 'Aberto' ? 'bg-red-500/20 text-red-400' :
                        ticket.status === 'Em Andamento' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ticket.prioridade === 'Alta' ? 'bg-red-500/20 text-red-400' :
                        ticket.prioridade === 'Média' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {ticket.prioridade}
                      </span>
                    </td>
                    <td className="p-4 text-white/80">{ticket.data}</td>
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
