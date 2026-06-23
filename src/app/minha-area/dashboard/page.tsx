'use client';

import React from 'react';
import {
  LayoutDashboard,
  Building2,
  Users,
  CreditCard,
  TrendingUp,
  ChevronRight,
  AlertCircle,
  CalendarCheck,
} from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

// Mock data
const mockStats = [
  { label: 'Empresas Ativas', value: '142', icon: Building2, color: 'from-blue-500/30 to-indigo-500/30' },
  { label: 'Clientes Totais', value: '3,851', icon: Users, color: 'from-purple-500/30 to-violet-500/30' },
  { label: 'Assinaturas Ativas', value: '312', icon: CreditCard, color: 'from-green-500/30 to-emerald-500/30' },
  { label: 'Receita Mensal', value: 'R$ 158.2k', icon: TrendingUp, color: 'from-yellow-500/30 to-amber-500/30' },
];

const mockLastCompanies = [
  { id: 1, name: 'Loja do Sono', createdAt: '20/06/2026', status: 'Ativa', owner: 'Carlos Silva' },
  { id: 2, name: 'Colchões Premium', createdAt: '18/06/2026', status: 'Ativa', owner: 'Maria Santos' },
  { id: 3, name: 'Descanso Total', createdAt: '15/06/2026', status: 'Pendente', owner: 'João Pereira' },
];

const mockLastActivities = [
  { id: 1, type: 'Empresa Criada', description: 'Loja do Sono foi criada', date: 'Hoje, 14:32' },
  { id: 2, type: 'Pagamento Recebido', description: 'Assinatura premium paga', date: 'Hoje, 12:15' },
  { id: 3, type: 'Suporte Atendido', description: 'Ticket #104 resolvido', date: 'Ontem, 18:45' },
];

const mockAlerts = [
  { id: 1, type: 'Aviso', message: '3 licenças vencerão em 7 dias', priority: 'Alta' },
  { id: 2, type: 'Info', message: 'Nova versão disponível', priority: 'Média' },
];

const mockDueSoon = [
  { id: 1, company: 'Colchões Premium', amount: 'R$ 999', dueDate: '25/06/2026' },
  { id: 2, company: 'Descanso Total', amount: 'R$ 499', dueDate: '28/06/2026' },
];

export default function SuperAdminDashboardPage() {
  return (
    <SuperAdminDashboardLayout title="Dashboard" activePath="/minha-area/dashboard">
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {mockStats.map((stat, i) => (
            <Card key={i} variant="glass">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/80" />
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Últimas Empresas */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4">Últimas Empresas</h3>
            <div className="space-y-3">
              {mockLastCompanies.map((company) => (
                <div key={company.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-white font-medium">{company.name}</p>
                    <p className="text-white/60 text-sm">{company.owner} • {company.createdAt}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    company.status === 'Ativa' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {company.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Últimas Atividades */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4">Últimas Atividades</h3>
            <div className="space-y-3">
              {mockLastActivities.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2" />
                  <div className="flex-1">
                    <p className="text-white font-medium">{activity.type}</p>
                    <p className="text-white/60 text-sm">{activity.description}</p>
                    <p className="text-white/40 text-xs mt-1">{activity.date}</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white/40" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Another Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Alertas */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-400" />
              Alertas
            </h3>
            <div className="space-y-3">
              {mockAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.priority === 'Alta' ? 'bg-red-500' : 'bg-yellow-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-white font-medium">{alert.type}</p>
                    <p className="text-white/60 text-sm">{alert.message}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    alert.priority === 'Alta' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {alert.priority}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Próximos Vencimentos */}
          <Card variant="glass">
            <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
              <CalendarCheck className="w-5 h-5 text-indigo-400" />
              Próximos Vencimentos
            </h3>
            <div className="space-y-3">
              {mockDueSoon.map((item) => (
                <div key={item.id} className="flex items-start justify-between p-3 rounded-xl bg-white/5">
                  <div>
                    <p className="text-white font-medium">{item.company}</p>
                    <p className="text-white/60 text-sm">{item.dueDate}</p>
                  </div>
                  <p className="text-white font-bold">{item.amount}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </SuperAdminDashboardLayout>
  );
}
