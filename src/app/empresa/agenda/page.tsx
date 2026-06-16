"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Calendar as CalendarIcon, Zap, Clock,
  AlertTriangle, Sparkles, MapPin
} from "lucide-react";

export default function AgendaPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "outros" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const scheduleItems = [
    { id: 1, time: "09:00", client: "Ana Carolina Silva", type: "Pré-visita", consultant: "Maria Souza", status: "Confirmado", nextAction: "Acompanhar" },
    { id: 2, time: "10:30", client: "Bruno Mendes", type: "Atendimento", consultant: "João Pereira", status: "Pendente", nextAction: "Confirmar" },
    { id: 3, time: "14:00", client: "Carla Costa", type: "Retorno", consultant: "Ana Santos", status: "Em andamento", nextAction: "Seguir" },
    { id: 4, time: "15:30", client: "Daniel Almeida", type: "Pré-visita", consultant: "Carlos Lima", status: "Confirmado", nextAction: "Preparar material" },
    { id: 5, time: "17:00", client: "Eliane Ribeiro", type: "Retorno", consultant: "Maria Souza", status: "Finalizado", nextAction: "Arquivar" },
  ];

  const weekDays = [
    { day: 16, name: "Seg", selected: true },
    { day: 17, name: "Ter", selected: false },
    { day: 18, name: "Qua", selected: false },
    { day: 19, name: "Qui", selected: false },
    { day: 20, name: "Sex", selected: false },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Confirmado":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" };
      case "Pendente":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25" };
      case "Em andamento":
        return { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/25" };
      case "Finalizado":
        return { bg: "bg-gray-500/15", text: "text-gray-400", border: "border-gray-500/25" };
      case "Reagendar":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20" };
    }
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
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Agenda</h1>
          <p className="text-blue-300/90 text-sm mt-1">Organização dos atendimentos, retornos e pré-visitas</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Atendimentos hoje", value: "5", icon: CalendarHeart, color: "from-blue-500/30 to-cyan-500/30" },
            { label: "Pré-visitas agendadas", value: "3", icon: CalendarIcon, color: "from-purple-500/30 to-pink-500/30" },
            { label: "Retornos pendentes", value: "12", icon: Clock, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Horários livres", value: "4", icon: Zap, color: "from-amber-500/30 to-orange-500/30" },
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
                    placeholder="Buscar por cliente, tipo ou consultor..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Hoje", "Semana", "Pré-visitas", "Retornos", "Consultores"].map((filter, i) => (
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
                Novo Agendamento
              </button>
            </div>

            {/* Week Calendar */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <div className="flex gap-4 overflow-x-auto pb-2">
                {weekDays.map((day, i) => (
                  <div
                    key={i}
                    className={`min-w-[80px] p-4 rounded-xl text-center transition-all cursor-pointer ${day.selected ? "bg-blue-600/20 border border-blue-500/30" : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20"}`}
                  >
                    <p className={`text-sm font-semibold text-white">{day.day}</p>
                    <p className="text-xs text-white/60 mt-1">{day.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Schedule List */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Horário", "Cliente", "Tipo", "Consultor", "Status", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-6 py-5">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {scheduleItems.map((item) => {
                      const statusConfig = getStatusConfig(item.status);
                      return (
                        <tr key={item.id} className="group hover:bg-white/5 transition-all duration-300 cursor-pointer">
                          <td className="px-6 py-6">
                            <span className="text-white/80 text-sm font-semibold flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-white/40" />
                              {item.time}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {item.client.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{item.client}</span>
                            </div>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/80 text-sm font-medium">{item.type}</span>
                          </td>
                          <td className="px-6 py-6">
                            <span className="text-white/70 text-sm">{item.consultant}</span>
                          </td>
                          <td className="px-6 py-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              {item.status}
                            </span>
                          </td>
                          <td className="px-6 py-6">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                              {item.nextAction}
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
                <CalendarHeart className="w-5 h-5 text-blue-400" />
                Resumo do Dia
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Próximos horários</p>
                  <div className="space-y-2">
                    {[
                      { time: "09:00", client: "Ana Carolina" },
                      { time: "10:30", client: "Bruno Mendes" },
                      { time: "14:00", client: "Carla Costa" },
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

            {/* Consultores Disponíveis */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-purple-400" />
                Consultores Disponíveis
              </h3>
              <div className="space-y-3">
                {["Maria Souza", "João Pereira", "Ana Santos", "Carlos Lima"].map((consultant, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold">
                      {consultant.charAt(0)}
                    </div>
                    <span className="text-white/80 text-sm">{consultant}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Alertas de Agenda */}
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
                <div className="flex items-start gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/20">
                  <AlertTriangle className="w-4.5 h-4.5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium text-sm">1 retorno atrasado</p>
                    <p className="text-white/60 text-xs">Bruno Mendes</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações Rápidas */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                {[
                  { label: "Novo Atendimento", icon: Plus },
                  { label: "Ver Retornos", icon: CalendarIcon },
                  { label: "Pré-visitas", icon: CalendarHeart },
                ].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm"
                  >
                    <action.icon className="w-4.5 h-4.5 text-blue-400" />
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