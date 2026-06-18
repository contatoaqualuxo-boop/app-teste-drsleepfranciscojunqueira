"use client";

import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  CalendarHeart,
  Bell,
  Settings,
  Store,
  FileText,
  UserCheck,
  Gift,
  HeartPulse,
  Activity,
  Zap,
  Search,
  Palette,
  Lock,
  Shield,
  UserPlus,
  Globe,
  CheckCircle2
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const configSections = [
  {
    title: "Dados da empresa",
    icon: Settings,
    description: "Informações básicas da sua empresa",
    color: "from-blue-600 to-cyan-600"
  },
  {
    title: "Identidade visual",
    icon: Palette,
    description: "Configurações de cores e marca",
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Preferências do sistema",
    icon: Globe,
    description: "Configurações gerais do sistema",
    color: "from-emerald-600 to-green-600"
  },
  {
    title: "Permissões",
    icon: UserPlus,
    description: "Gerenciar permissões de usuários",
    color: "from-amber-600 to-orange-600"
  },
  {
    title: "Segurança",
    icon: Shield,
    description: "Configurações de segurança",
    color: "from-red-600 to-rose-600"
  }
];

const quickActions = [
  { label: "Alterar senha", icon: Lock, color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { label: "Verificar autenticação", icon: CheckCircle2, color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { label: "Configurar backup", icon: FileText, color: "bg-purple-500/20 text-purple-400 border-purple-500/30" }
];

export default function ConfiguracoesPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas a Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const, isActive: true }
  ];

  return (
    <DashboardLayout
      title="Configurações"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:flex">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              type="text"
              placeholder="Pesquisar..."
              className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            />
          </div>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Configurações</h1>
          <p className="text-blue-300/90 text-sm mt-1">Personalize e gerencie as configurações do seu painel</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Configuration Sections */}
          <div className="lg:col-span-3 space-y-4">
            {configSections.map((section, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm group cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${section.color} flex items-center justify-center shadow-lg shadow-black/20 flex-shrink-0`}>
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-xl">{section.title}</h3>
                    <p className="text-white/60 text-sm mt-1">{section.description}</p>
                  </div>
                  <div className="text-white/20 group-hover:text-white/50 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions Sidebar */}
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                {quickActions.map((action, i) => (
                  <button
                    key={i}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl border ${action.color} hover:opacity-90 transition-all duration-200 font-medium`}
                  >
                    <action.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="text-sm">{action.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Security Status */}
            <div className="bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-emerald-600/10 backdrop-blur-xl border border-emerald-500/20 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold text-lg">Status de Segurança</h4>
                <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.6)]"></div>
              </div>
              <p className="text-emerald-300/90 text-sm">
                Seu painel está seguro e atualizado com as últimas proteções de dados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
