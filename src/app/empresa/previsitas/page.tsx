"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Calendar as CalendarIcon, MapPin, Zap,
  Clock, AlertTriangle, Sparkles, MessageCircle, CheckCircle, Gift, HeartPulse, Activity
} from "lucide-react";

export default function PreVisitasPage() {
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
    { label: "Visitas a Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const, isActive: true },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const preVisitas = [
    { id: 1, client: "Ana Carolina Silva", date: "16/06/2026", time: "10:00", consultant: "Maria Souza", origin: "Instagram", type: "Tour 360°", status: "Agendada", nextAction: "Confirmar" },
    { id: 2, client: "Bruno Mendes", date: "16/06/2026", time: "14:30", consultant: "João Pereira", origin: "WhatsApp", type: "Presencial", status: "Confirmada", nextAction: "Preparar material" },
    { id: 3, client: "Carla Costa", date: "17/06/2026", time: "09:00", consultant: "Ana Santos", origin: "Loja física", type: "Presencial", status: "Agendada", nextAction: "Enviar lembrete" },
    { id: 4, client: "Daniel Almeida", date: "15/06/2026", time: "16:00", consultant: "Carlos Lima", origin: "Google Ads", type: "Tour 360°", status: "Em andamento", nextAction: "Acompanhar" },
    { id: 5, client: "Eliane Ribeiro", date: "14/06/2026", time: "11:00", consultant: "Maria Souza", origin: "Indicção", type: "Presencial", status: "Finalizada", nextAction: "Seguir no CRM" },
    { id: 6, client: "Fernando Gomes", date: "18/06/2026", time: "15:30", consultant: "João Pereira", origin: "Facebook", type: "Tour 360°", status: "Agendada", nextAction: "Confirmar" },
    { id: 7, client: "Gabriela Martins", date: "13/06/2026", time: "10:30", consultant: "Ana Santos", origin: "WhatsApp", type: "Presencial", status: "Cancelada", nextAction: "Reagendar" },
    { id: 8, client: "Henrique Carvalho", date: "16/06/2026", time: "17:00", consultant: "Carlos Lima", origin: "Loja física", type: "Presencial", status: "Confirmada", nextAction: "Preparar material" },
    { id: 9, client: "Isabela Oliveira", date: "19/06/2026", time: "09:30", consultant: "Maria Souza", origin: "Instagram", type: "Tour 360°", status: "Agendada", nextAction: "Enviar link" },
    { id: 10, client: "Júlio Santos", date: "20/06/2026", time: "14:00", consultant: "João Pereira", origin: "Indicção", type: "Presencial", status: "Agendada", nextAction: "Confirmar" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Agendada":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25" };
      case "Confirmada":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" };
      case "Em andamento":
        return { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/25" };
      case "Finalizada":
        return { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/25" };
      case "Cancelada":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20" };
    }
  };

  const getOriginIcon = (origin: string) => {
    switch (origin) {
      case "Instagram":
        return "📸";
      case "WhatsApp":
        return "💬";
      case "Loja física":
        return "🏪";
      case "Google Ads":
        return "🔍";
      case "Facebook":
        return "👥";
      case "Indicção":
        return "👋";
      default:
        return "📍";
    }
  };

  return (
    <DashboardLayout
      title="Visitas a Loja"
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
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Visitas a Loja</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gestão inteligente das visitas à loja.</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Pré-visitas agendadas", value: "32", icon: CalendarHeart, color: "from-blue-500/30 to-cyan-500/30" },
            { label: "Em andamento", value: "2", icon: Zap, color: "from-purple-500/30 to-pink-500/30" },
            { label: "Finalizadas", value: "156", icon: CheckCircle, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Taxa de conversão", value: "78%", icon: TrendingUp, color: "from-amber-500/30 to-orange-500/30" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6">
            {/* Top Bar */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Buscar pré-visita por cliente, data ou consultor..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todas", "Hoje", "Amanhã", "Esta semana", "Finalizadas"].map((filter, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${i === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-sm" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/80"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4.5 h-4.5" />
                Nova Pré-visita
              </button>
            </div>

            {/* Pre-Visitas Table */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Cliente", "Data", "Horário", "Consultor", "Origem", "Tipo", "Status", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-6 py-5">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {preVisitas.map((preVisita) => {
                      const statusConfig = getStatusConfig(preVisita.status);
                      return (
                        <tr key={preVisita.id} className="group hover:bg-white/5 transition-all duration-300 cursor-pointer">
                          <td className="px-6 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {preVisita.client.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{preVisita.client}</span>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <CalendarIcon className="w-3.5 h-3.5 text-white/40" />
                              {preVisita.date}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-white/40" />
                              {preVisita.time}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/80 text-sm font-medium">{preVisita.consultant}</span>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <span className="text-lg">{getOriginIcon(preVisita.origin)}</span>
                              {preVisita.origin}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/80 text-sm font-medium">{preVisita.type}</span>
                          </td>
                          <td className="px-6 py-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              {preVisita.status}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                              {preVisita.nextAction}
                              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Resumo do Dia */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <CalendarHeart className="w-5 h-5 text-emerald-400" />
                Resumo do Dia
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Agendadas hoje</p>
                  <p className="text-white font-semibold text-xl">4 pré-visitas</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Confirmadas</p>
                  <p className="text-emerald-400 font-semibold text-xl">2</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Pendentes</p>
                  <p className="text-amber-400 font-semibold text-xl">2</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Conversão prevista</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full" style={{ width: "80%" }} />
                    </div>
                    <span className="text-blue-400 font-bold text-lg">80%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Agenda rápida */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-400" />
                Próximos horários
              </h3>
              <div className="space-y-3">
                {[
                  { time: "10:00", client: "Ana Carolina" },
                  { time: "14:30", client: "Bruno Mendes" },
                  { time: "17:00", client: "Henrique Carvalho" },
                ].map((appointment, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <span className="text-white font-semibold text-sm min-w-[50px]">{appointment.time}</span>
                    <span className="text-white/80 text-sm">{appointment.client}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alertas */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Alertas
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
                  <AlertTriangle className="w-4.5 h-4.5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">Confirmações pendentes</p>
                    <p className="text-white/60 text-xs">2 pré-visitas sem confirmação</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  <AlertTriangle className="w-4.5 h-4.5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">Clientes atrasados</p>
                    <p className="text-white/60 text-xs">1 cliente atrasado há 10 minutos</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                  <AlertTriangle className="w-4.5 h-4.5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">Pré-visitas sem retorno</p>
                    <p className="text-white/60 text-xs">3 pré-visitas finalizadas sem retorno</p>
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