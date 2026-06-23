'use client';

import React from 'react';
import { Settings } from 'lucide-react';
import { SuperAdminDashboardLayout } from '@/components/layout/SuperAdminDashboardLayout';
import { Card } from '@/components/ui/Card';

export default function SuperAdminConfiguracoesPage() {
  return (
    <SuperAdminDashboardLayout title="Configurações" activePath="/minha-area/configuracoes">
      <div className="space-y-6">
        <Card variant="glass" className="p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center">
              <Settings className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white">Configurações do Sistema</h3>
          </div>
          <p className="text-white/60">Página de configurações mockada. Aqui serão implementadas as configurações globais da plataforma.</p>
        </Card>
      </div>
    </SuperAdminDashboardLayout>
  );
}
