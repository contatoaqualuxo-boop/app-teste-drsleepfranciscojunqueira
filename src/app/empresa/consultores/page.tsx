"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, MapPin, Phone, Zap, Clock
} from "lucide-react";

export default function ConsultantsPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const, isActive: true },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const consultants = [
    { id: 1, name: "Maria Souza", role: "Gerente de Loja", store: "Zona Norte", phone: "(11) 98765-4321", previsitas: 142, conversion: 85, performance: "Alta" },
    { id: 2, name: "João Pereira", role: "Consultor Senior", store: "Centro", phone: "(11) 91234-5678", previsitas: 98, conversion: 72, performance: "Alta" },
    { id: 3, name: "Ana Santos", role: "Consultor Jr", store: "Zona Sul", phone: "(11) 99876-5432", previsitas: 67, conversion: 62, performance: "Média" },
    { id: 4, name: "Carlos Oliveira", role: "Consultor Jr", store: "Zona Norte", phone: "(11) 92345-6789", previsitas: 45, conversion: 55, performance: "Em acompanhamento" },
  ];

  const getPerformanceColor = (perf: string) => {
    if (perf === "Alta") return "text-emerald-400";
    if (perf === "Média") return "text-yellow-400";
    return "text-red-400";
  };

  const getPerformanceBg = (perf: string) => {
    if (perf === "Alta") return "bg-emerald-500/15 border-emerald-500/30";
    if (perf === "Média") return "bg-yellow-500/15 border-yellow-500/30";
    return "bg-red-500/15 border-red-500/30";
  };

  return (
    <DashboardLayout
      title="Consultores"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Consultores</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gestão da equipe comercial e atendimento</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total de consultores", value: "24", icon: Users },
            { label: "Ativos", value: "18", icon: UserCheck },
            { label: "Pré-visitas atendidas", value: "352", icon: CalendarHeart },
            { label: "Conversão média", value: "71%", icon: TrendingUp }
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

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Buscar consultor por nome, loja ou cargo..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todos", "Ativos", "Alta performance", "Em acompanhamento"].map((filter, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${i === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-sm" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/80"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <Link href="/empresa/consultores/novo" className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4.5 h-4.5" />
                Novo Consultor
              </Link>
            </div>

            <div className="space-y-4">
              {consultants.map((consultant) => (
                <Link key={consultant.id} href={`/empresa/consultores/${consultant.id}`} className="block">
                  <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-2 flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                          {consultant.name.charAt(0)}
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <p className="text-white font-semibold">{consultant.name}</p>
                        <p className="text-white/60 text-xs">{consultant.role}</p>
                      </div>
                      <div className="md:col-span-2 flex items-center gap-2">
                        <Store className="w-3.5 h-3.5 text-white/50" />
                        <span className="text-white/80 text-sm">{consultant.store}</span>
                      </div>
                      <div className="md:col-span-2 flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-white/50" />
                        <span className="text-white/80 text-sm">{consultant.phone}</span>
                      </div>
                      <div className="md:col-span-1 text-center">
                        <p className="text-white font-semibold">{consultant.previsitas}</p>
                        <p className="text-white/60 text-xs">Pré-visitas</p>
                      </div>
                      <div className="md:col-span-1 text-center">
                        <p className="text-white font-semibold">{consultant.conversion}%</p>
                        <p className="text-white/60 text-xs">Conversão</p>
                      </div>
                      <div className="md:col-span-2 flex items-center gap-2 justify-between">
                        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold border ${getPerformanceBg(consultant.performance)} ${getPerformanceColor(consultant.performance)}`}>
                          {consultant.performance}
                        </span>
                        <span className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold transition-all">
                          Ver detalhes
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                Resumo da equipe
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Melhor consultor</p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                      M
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">Maria Souza</p>
                      <p className="text-white/60 text-xs">85% de conversão</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Loja com melhor equipe</p>
                  <p className="text-white font-semibold">Zona Norte</p>
                  <p className="text-white/60 text-xs">9 consultores, 78% de conversão</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Meta do mês</p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-semibold text-sm">Pré-visitas</p>
                    <p className="text-white">352 / 400</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: "88%" }} />
                  </div>
                  <p className="text-white/60 text-xs mt-2 text-right">88% concluído</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                {[
                  { label: "Ver relatório de equipe" },
                  { label: "Agendar reunião" },
                  { label: "Enviar comunicado" }
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
