'use client';

import React from 'react';
import { CalendarHeart, MapPin, Clock, ChevronRight } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Card } from '@/components/ui/Card';

const navItems = [
  { label: 'Home', href: '/cliente-premium', icon: CalendarHeart, group: 'principal' as const },
  { label: 'Meu Produto', href: '/cliente-premium/meu-produto', icon: CalendarHeart, group: 'principal' as const },
  { label: 'Cuidados', href: '/cliente-premium/cuidados', icon: CalendarHeart, group: 'principal' as const },
  { label: 'Clube', href: '/cliente-premium/clube', icon: CalendarHeart, group: 'principal' as const },
  { label: 'Indique e Ganhe', href: '/cliente-premium/indique-e-ganhe', icon: CalendarHeart, group: 'principal' as const },
  { label: 'Documentos', href: '/cliente-premium/documentos', icon: CalendarHeart, group: 'outros' as const },
  { label: 'Visita à Loja', href: '/cliente-premium/pre-visita', icon: CalendarHeart, group: 'outros' as const, isActive: true },
  { label: 'Minha Conta', href: '/cliente-premium/minha-conta', icon: CalendarHeart, group: 'outros' as const },
];

const mockVisits = [
  { date: '25/06/2026', time: '14:00', location: 'Loja Principal', status: 'Agendada' },
  { date: '15/05/2026', time: '10:00', location: 'Loja Principal', status: 'Concluída' },
  { date: '20/04/2026', time: '16:00', location: 'Loja Principal', status: 'Concluída' },
];

export default function PremiumCustomerPreVisit() {
  return (
    <DashboardLayout
      title="Visita à Loja"
      sidebarNavItems={navItems}
      sidebarTitle="Área do Cliente"
      sidebarSubtitle="Premium"
    >
      <div className="space-y-6">
        {/* Intro */}
        <div className="bg-gradient-to-r from-indigo-600/20 to-violet-600/20 border border-indigo-500/20 rounded-2xl p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white mb-2">Agende sua visita</h2>
          <p className="text-white/70">Agende, acompanhe e consulte o histórico das suas visitas à loja.</p>
        </div>

        {/* Visits List */}
        <div className="space-y-4">
          {mockVisits.map((visit, i) => (
            <Card key={i} className="backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-violet-500/30 rounded-xl flex items-center justify-center">
                    <CalendarHeart className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{visit.date} às {visit.time}</h3>
                    <p className="text-white/60 text-sm flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {visit.location}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    visit.status === 'Agendada' ? 'bg-blue-500/20 text-blue-400' : 'bg-emerald-500/20 text-emerald-400'
                  }`}>{visit.status}</span>
                  {visit.status === 'Agendada' && <ChevronRight className="w-4 h-4 text-white/40" />}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
