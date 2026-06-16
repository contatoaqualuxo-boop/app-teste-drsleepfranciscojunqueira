"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  CalendarHeart, Search, Plus, UserCheck,
  Calendar as CalendarIcon, Zap, Clock, AlertTriangle
} from "lucide-react";

export default function AgendaPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const scheduleItems = [
    { id: 1, time: "09:00", client: "Ana Carolina Silva", type: "Pré-visita", consultant: "Maria Souza", status: "Confirmado", nextAction: "Acompanhar" },
    { id: 2, time: "10:30", client: "Bruno Mendes", type: "Atendimento", consultant: "João Pereira", status: "Pendente", nextAction: "Confirmar" },
  ];

  const getStatusClassName = (status: string) => {
    const base = "inline-flex rounded-full px-3 py-1 text-xs font-semibold";
    if (status === "Confirmado") return base + " bg-emerald-500/15 text-emerald-300";
    if (status === "Pendente") return base + " bg-yellow-500/15 text-yellow-300";
    if (status === "Em andamento") return base + " bg-blue-500/15 text-blue-300";
    if (status === "Finalizado") return base + " bg-purple-500/15 text-purple-300";
    if (status === "Reagendar") return base + " bg-red-500/15 text-red-300";
    return base + " bg-white/10 text-white/70";
  };

  return (
    <DashboardLayout
      title="Agenda"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Agenda</h1>
          <p className="text-blue-300/90 text-sm mt-1">Organização dos atendimentos, retornos e pré-visitas</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Atendimentos hoje", value: "5", icon: CalendarHeart },
            { label: "Pré-visitas agendadas", value: "3", icon: CalendarIcon },
            { label: "Retornos pendentes", value: "12", icon: Clock },
            { label: "Horários livres", value: "4", icon: Zap }
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
              <div className="relative flex-1 sm:flex-initial">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                <input
                  type="text"
                  placeholder="Buscar por cliente, tipo ou consultor..."
                  className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                />
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4.5 h-4.5" />
                Novo Agendamento
              </button>
            </div>
            <div className="space-y-4">
              {scheduleItems.map((item) => (
                <div key={item.id} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-white/40" />
                      <span className="text-white/80 text-sm font-semibold">{item.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                        {item.client.charAt(0)}
                      </div>
                      <span className="text-white font-semibold">{item.client}</span>
                    </div>
                    <span className="text-white/80 text-sm font-medium">{item.type}</span>
                    <span className="text-white/70 text-sm">{item.consultant}</span>
                    <span className={getStatusClassName(item.status)}>
                      {item.status}
                    </span>
                    <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold justify-end transition-all">
                      {item.nextAction}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <CalendarHeart className="w-5 h-5 text-blue-400" />
                Resumo do Dia
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Próximos horários</p>
                  <div className="space-y-2">
                    {[
                      { time: "09:00", client: "Ana Carolina" },
                      { time: "10:30", client: "Bruno Mendes" }
                    ].map((app, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                        <span className="text-white font-semibold text-sm min-w-[50px]">{app.time}</span>
                        <span className="text-white/80 text-sm">{app.client}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Alertas de Agenda
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <AlertTriangle className="w-4.5 h-4.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">2 confirmações pendentes</p>
                    <p className="text-white/60 text-xs">Pré-visitas sem confirmação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
