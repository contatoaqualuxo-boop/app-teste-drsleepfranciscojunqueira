"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Input } from "@/components/ui";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  MapPin, User, Phone, Mail, Image as ImageIcon, CheckCircle2, X, Upload,
  Clock
} from "lucide-react";

export default function EditStorePage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Pré-visitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  return (
    <DashboardLayout
      title="Editar Loja"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Editar Loja</h1>
          <p className="text-blue-300/90 text-sm mt-1">Atualize as informações da unidade.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                Informações gerais
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Nome da loja" placeholder="Digite o nome da loja" defaultValue="Dr. Sleep - Zona Norte" />
                <Input label="Nome fantasia" placeholder="Digite o nome fantasia" defaultValue="Sono Premium Zona Norte" />
                <Input label="CNPJ" placeholder="00.000.000/0000-00" defaultValue="12.345.678/0001-90" />
                <Input label="Telefone" placeholder="(00) 00000-0000" defaultValue="(11) 99876-5432" />
                <Input label="WhatsApp" placeholder="(00) 00000-0000" defaultValue="(11) 99876-5432" />
                <Input label="Email" placeholder="loja@email.com" defaultValue="zona.norte@drsleep.com.br" type="email" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                Endereço
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Input label="CEP" placeholder="00000-000" defaultValue="01310-100" />
                <div className="md:col-span-2">
                  <Input label="Rua" placeholder="Digite o nome da rua" defaultValue="Av. Paulista" />
                </div>
                <Input label="Número" placeholder="Número" defaultValue="890" />
                <Input label="Bairro" placeholder="Digite o bairro" defaultValue="Zona Norte" />
                <Input label="Cidade" placeholder="Digite a cidade" defaultValue="São Paulo" />
                <Input label="Estado" placeholder="UF" defaultValue="SP" />
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                Responsável
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Gerente" placeholder="Nome do gerente" defaultValue="Ana Santos" />
                <Input label="Supervisor" placeholder="Nome do supervisor" defaultValue="Carlos Oliveira" />
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
                  <select className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all">
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
                        className="w-10 h-10 rounded-xl border-2 border-white/40 transition-all"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Logo</label>
                  <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl border-dashed hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-xl flex items-center justify-center mb-3">
                      <Store className="w-10 h-10 text-white/70" />
                    </div>
                    <p className="text-white/60 text-sm">Clique para alterar logo</p>
                    <p className="text-white/40 text-xs mt-1">PNG, JPG até 5MB</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/90">Foto da fachada</label>
                  <div className="flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-xl border-dashed hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer">
                    <div className="w-full h-24 bg-gradient-to-br from-blue-900/20 to-purple-900/20 rounded-xl flex items-center justify-center mb-3">
                      <ImageIcon className="w-10 h-10 text-white/70" />
                    </div>
                    <p className="text-white/60 text-sm">Clique para alterar fachada</p>
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
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Histórico da unidade</p>
                  <p className="text-white/80 text-sm">Criada em Jan/2024</p>
                  <p className="text-white/60 text-xs mt-1">18 meses de operação</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Última alteração</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-white/50" />
                    <span className="text-white/80 text-sm">15/06/2026 às 14:30</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Responsável</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                      FJ
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Francisco Junqueira</p>
                      <p className="text-white/60 text-xs">Administrador</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <Link href="/empresa/lojas/1" className="w-full">
                  <button className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all shadow-sm">
                    <X className="w-4 h-4" />
                    Cancelar
                  </button>
                </Link>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                  <Plus className="w-4.5 h-4.5" />
                  Salvar alterações
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
