'use client';

import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { Input } from '@/components/ui';
import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  Bell,
  Settings,
  Store,
  FileText,
  CalendarHeart,
  Plus,
  MapPin,
  User,
  Phone,
  Mail,
  Image as ImageIcon,
  CheckCircle2,
  X,
  Upload,
} from 'lucide-react';

export default function NewStorePage() {
  const navItems = [
    { label: 'Dashboard', href: '/empresa/dashboard', icon: Home, group: 'principal' as const },
    { label: 'Clientes', href: '/empresa/clientes', icon: Users, group: 'principal' as const },
    { label: 'CRM', href: '/empresa/crm', icon: Users, group: 'principal' as const },
    { label: 'Produtos', href: '/empresa/produtos', icon: ShoppingCart, group: 'principal' as const },
    { label: 'Garantias', href: '/empresa/garantias', icon: ShieldCheck, group: 'principal' as const },
    { label: 'Lojas', href: '/empresa/lojas', icon: Store, group: 'principal' as const, isActive: true },
    { label: 'Documentos', href: '/empresa/documentos', icon: FileText, group: 'outros' as const },
    { label: 'Prévisitas', href: '/empresa/previsitas', icon: CalendarHeart, group: 'outros' as const },
    { label: 'Configurações', href: '/empresa/configuracoes', icon: Settings, group: 'outros' as const },
  ];

  const requiredFields = [
    { name: 'Nome da loja', completed: false },
    { name: 'CNPJ', completed: false },
    { name: 'Telefone', completed: false },
    { name: 'CEP', completed: false },
    { name: 'Gerente', completed: false },
  ];

  return (
    <DashboardLayout
      title="Nova Loja"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 transition-all relative shadow-sm">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-purple-600/30">
            FJ
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Nova Loja</h1>
          <p className="text-blue-300/90 text-sm mt-1">Cadastre uma nova unidade da empresa.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                Informações gerais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Nome da loja" placeholder="Digite o nome da loja" />
                <Input label="Nome fantasia" placeholder="Digite o nome fantasia" />
                <Input label="CNPJ" placeholder="00.000.000/0000-00" />
                <Input label="Telefone" placeholder="(00) 00000-0000" />
                <Input label="WhatsApp" placeholder="(00) 00000-0000" />
                <Input label="E-mail" placeholder="loja@email.com" type="email" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Endereço
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="CEP" placeholder="00000-000" />
                <div className="md:col-span-2">
                  <Input label="Rua" placeholder="Digite o nome da rua" />
                </div>
                <Input label="Número" placeholder="Número" />
                <Input label="Bairro" placeholder="Digite o bairro" />
                <Input label="Cidade" placeholder="Digite a cidade" />
                <Input label="Estado" placeholder="UF" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                Responsável
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Gerente" placeholder="Nome do gerente" />
                <Input label="Supervisor" placeholder="Nome do supervisor" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-400" />
                Configurações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Status</label>
                  <select className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all">
                    <option value="active">Ativa</option>
                    <option value="inactive">Inativa</option>
                    <option value="paused">Pausada</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Cor da unidade</label>
                  <div className="flex gap-2">
                    {['#3B82F6', '#8B5CF6', '#10B981', '#F59E0B', '#EF4444', '#6366F1'].map((color, i) => (
                      <button
                        key={i}
                        className="w-10 h-10 rounded-xl border-2 border-white/20 hover:border-white/40 transition-all"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Logo</label>
                  <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl border-dashed hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <Upload className="w-10 h-10 text-white/40 mb-3" />
                    <p className="text-white/60 text-sm">Clique para enviar logo</p>
                    <p className="text-white/40 text-xs mt-1">PNG, JPG até 5MB</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Foto da fachada</label>
                  <div className="flex flex-col items-center justify-center p-8 bg-white/5 border border-white/10 rounded-xl border-dashed hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <ImageIcon className="w-10 h-10 text-white/40 mb-3" />
                    <p className="text-white/60 text-sm">Clique para enviar foto</p>
                    <p className="text-white/40 text-xs mt-1">PNG, JPG até 10MB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Resumo
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Dados obrigatórios</p>
                  <div className="space-y-2">
                    {requiredFields.map((field, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${field.completed ? 'bg-emerald-500/20 border-emerald-500/30' : 'bg-white/5 border-white/10'}`}>
                          {field.completed ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <X className="w-3.5 h-3.5 text-white/30" />
                          )}
                        </div>
                        <span className={`text-sm ${field.completed ? 'text-emerald-300' : 'text-white/60'}`}>{field.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Próximos passos</p>
                  <div className="space-y-2">
                    {[
                      'Cadastrar produtos na loja',
                      'Adicionar consultores',
                      'Configurar horários',
                      'Vincular cliente'
                    ].map((step, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-blue-500/50" />
                        <span className="text-sm text-white/60">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-2.5 rounded-xl transition-all shadow-sm">
                  <X className="w-4 h-4" />
                  Cancelar
                </button>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                  <Plus className="w-4.5 h-4.5" />
                  Salvar Loja
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
