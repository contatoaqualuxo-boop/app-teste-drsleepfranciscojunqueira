"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, MapPin, Phone, Zap, Gift, HeartPulse, Activity
} from "lucide-react";

export default function StoresPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const, isActive: true },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas a Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const stores = [
    { id: 1, name: "Dr. Sleep - Centro", address: "Av. Brasil, 1234, Centro", manager: "Maria Souza", phone: "(11) 98765-4321", status: "Ativa", performance: "Alta", nextAction: "Enviar relatório" },
    { id: 2, name: "Dr. Sleep - Zona Sul", address: "Rua das Flores, 567, Zona Sul", manager: "João Pereira", phone: "(11) 91234-5678", status: "Ativa", performance: "Média", nextAction: "Verificar estoque" },
    { id: 3, name: "Dr. Sleep - Zona Norte", address: "Av. Paulista, 890, Zona Norte", manager: "Ana Santos", phone: "(11) 99876-5432", status: "Destaque", performance: "Alta", nextAction: "Reunião de planejamento" },
  ];

  const getStatusClassName = (status: string) => {
    const base = "inline-flex rounded-full px-3 py-1 text-xs font-semibold border";
    if (status === "Ativa") return base + " bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    if (status === "Destaque") return base + " bg-purple-500/15 text-purple-300 border-purple-500/30";
    if (status === "Baixa performance") return base + " bg-red-500/15 text-red-300 border-red-500/30";
    return base + " bg-white/10 text-white/70 border-white/10";
  };

  const getPerformanceColor = (perf: string) => {
    if (perf === "Alta") return "text-emerald-400";
    if (perf === "Média") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <DashboardLayout
      title="Lojas"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Lojas</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gestão das unidades, atendimento e performance local</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Unidades ativas", value: "8", icon: Store },
            { label: "Consultores", value: "24", icon: Users },
            { label: "Pré-visitas por loja", value: "15", icon: CalendarHeart },
            { label: "Conversão média", value: "78%", icon: TrendingUp }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          <div className="xl:col-span-3 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Buscar loja por nome, endereço ou responsável..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todas", "Ativas", "Destaque", "Baixa performance"].map((filter, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${i === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-sm" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/80"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <Link href="/empresa/lojas/nova" className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4.5 h-4.5" />
                Nova Loja
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {stores.map((store) => (
                <Link key={store.id} href={`/empresa/lojas/${store.id}`} className="block">
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm cursor-pointer">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-white font-semibold">{store.name}</h3>
                      <span className={getStatusClassName(store.status)}>{store.status}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill={i < 4 ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-white/40" />
                      <span className="text-white/80 text-sm">{store.address}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-white/40" />
                      <span className="text-white/80 text-sm">{store.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-white/40" />
                      <span className="text-white/80 text-sm">{store.manager}</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-white/10">
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Performance</p>
                      <p className={`font-semibold text-sm ${getPerformanceColor(store.performance)}`}>{store.performance}</p>
                    </div>
                    <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold transition-all">
                      {store.nextAction}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                Resumo das Lojas
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Melhor unidade</p>
                  <p className="text-white font-semibold">Dr. Sleep - Zona Norte</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Unidade com mais pré-visitas</p>
                  <p className="text-white font-semibold">Dr. Sleep - Centro</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Unidade com atenção necessária</p>
                  <div className="flex items-center gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                    <Zap className="w-4.5 h-4.5 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-medium text-sm">Dr. Sleep - Zona Sul</p>
                      <p className="text-white/60 text-xs">Baixa performance esta semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                {[
                  { label: "Enviar relatório para todas lojas" },
                  { label: "Ver ranking de performance" },
                  { label: "Agendar reunião com gerentes" }
                ].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
