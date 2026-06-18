"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight, 
  Store, FileText, CalendarHeart, Search, Plus, 
  Filter, Phone, Calendar as CalendarIcon, UserCheck, 
  TrendingUp, ArrowRight, ArrowUpDown, Clock, UserX, UserPlus, Briefcase,
  Zap, CheckCircle, Star, Target, Sparkles, Gift, HeartPulse, Activity
} from "lucide-react";
import Link from "next/link";

export default function CrmPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const, isActive: true },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const clients = [
    { id: 1, name: "Ana Carolina Silva", phone: "(11) 98765-4321", lastPreVisit: "15/06/2026", status: "Novo", consultant: "Maria Souza", nextAction: "Ligar amanhã" },
    { id: 2, name: "Bruno Mendes", phone: "(11) 91234-5678", lastPreVisit: "14/06/2026", status: "Em atendimento", consultant: "João Pereira", nextAction: "Enviar orçamento" },
    { id: 3, name: "Carla Costa", phone: "(11) 99876-5432", lastPreVisit: "13/06/2026", status: "Negociação", consultant: "Ana Santos", nextAction: "Reunião às 14h" },
    { id: 4, name: "Daniel Almeida", phone: "(11) 92345-6789", lastPreVisit: "12/06/2026", status: "Fechado", consultant: "Carlos Lima", nextAction: "Aguardar pagamento" },
    { id: 5, name: "Eliane Ribeiro", phone: "(11) 93456-7890", lastPreVisit: "11/06/2026", status: "Novo", consultant: "Maria Souza", nextAction: "Primeiro contato" },
    { id: 6, name: "Fernando Gomes", phone: "(11) 94567-8901", lastPreVisit: "10/06/2026", status: "Em atendimento", consultant: "João Pereira", nextAction: "Enviar catálogo" },
    { id: 7, name: "Gabriela Martins", phone: "(11) 95678-9012", lastPreVisit: "09/06/2026", status: "Negociação", consultant: "Ana Santos", nextAction: "Aprovar proposta" },
    { id: 8, name: "Henrique Carvalho", phone: "(11) 96789-0123", lastPreVisit: "08/06/2026", status: "Fechado", consultant: "Carlos Lima", nextAction: "Fechamento concluído" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Novo":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", dot: "bg-blue-500" };
      case "Em atendimento":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", dot: "bg-amber-500" };
      case "Negociação":
        return { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/25", dot: "bg-purple-500" };
      case "Fechado":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", dot: "bg-emerald-500" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", dot: "bg-white/40" };
    }
  };

  const timelineSteps = [
    { icon: CalendarHeart, label: "Pré-visita realizada", color: "text-blue-400", bg: "bg-blue-500/20" },
    { icon: UserCheck, label: "Primeiro contato", color: "text-indigo-400", bg: "bg-indigo-500/20" },
    { icon: Target, label: "Negociação", color: "text-purple-400", bg: "bg-purple-500/20" },
    { icon: CheckCircle, label: "Venda concluída", color: "text-emerald-400", bg: "bg-emerald-500/20" },
  ];

  return (
    <DashboardLayout
      title="CRM"
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
          <h1 className="text-3xl font-black text-white tracking-tight">CRM</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gestão de Relacionamento com Clientes</p>
        </div>

        {/* Top Premium Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total de Clientes", value: "1,248", icon: Users, color: "from-blue-500/30 to-cyan-500/30", trend: "+12%" },
            { label: "Novos este mês", value: "38", icon: UserPlus, color: "from-emerald-500/30 to-green-500/30", trend: "+8%" },
            { label: "Negociações abertas", value: "18", icon: Briefcase, color: "from-purple-500/30 to-pink-500/30", trend: "+5%" },
            { label: "Taxa de Conversão", value: "24,5%", icon: TrendingUp, color: "from-amber-500/30 to-orange-500/30", trend: "+2%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <span className="text-xs font-semibold text-emerald-400">{stat.trend}</span>
              </div>
              <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Table */}
          <div className="xl:col-span-3 space-y-6">
            {/* Top Bar */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar cliente por nome, telefone ou e-mail..." 
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all" 
                  />
                </div>
                <div className="flex gap-2">
                  {["Todos", "Ativos", "Inativos"].map((filter, i) => (
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
                Novo Cliente
              </button>
            </div>

            {/* Table */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Nome", "Telefone", "Última Pré-visita", "Status", "Consultor", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-8 py-5">
                          <button className="flex items-center gap-2 text-xs font-bold text-white/50 uppercase tracking-wider hover:text-white/80 transition-colors">
                            {col}
                            <ArrowUpDown className="w-3.5 h-3.5" />
                          </button>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {clients.map((client) => {
                      const statusConfig = getStatusConfig(client.status);
                      return (
                        <tr key={client.id} className="group hover:bg-white/5 transition-all duration-300">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {client.name.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{client.name}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <Phone className="w-3.5 h-3.5 text-white/40" />
                              {client.phone}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <CalendarIcon className="w-3.5 h-3.5 text-white/40" />
                              {client.lastPreVisit}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-2 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              <span className={`w-2 h-2 rounded-full ${statusConfig.dot}`} />
                              {client.status}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-3">
                              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-600/30 flex items-center justify-center text-white/80 text-xs font-semibold">
                                {client.consultant.charAt(0)}
                              </div>
                              <span className="text-white/70 text-sm">{client.consultant}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                              {client.nextAction}
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* Enhanced Pagination */}
              <div className="px-8 py-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/50 text-sm font-medium">Mostrando 1-8 de 248 clientes</span>
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed" disabled>
                    <ChevronRight className="w-4.5 h-4.5 rotate-180" />
                  </button>
                  {[1, 2, 3, 4].map((page) => (
                    <button 
                      key={page} 
                      className={`w-10 h-10 rounded-lg text-sm font-bold flex items-center justify-center transition-all ${page === 1 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-sm" : "bg-white/5 border border-white/10 text-white/40 hover:bg-white/10 hover:text-white/80 hover:border-white/20"}`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white/80 hover:border-white/20 transition-all">
                    <ChevronRight className="w-4.5 h-4.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Right Panel */}
          <div className="space-y-6">
            {/* Summary */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-400" />
                Resumo Geral
              </h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/70 text-sm flex items-center gap-2">
                      <UserCheck className="w-3.5 h-3.5 text-blue-400" />
                      Clientes ativos
                    </span>
                    <span className="text-white font-bold text-xl">124</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white/70 text-sm flex items-center gap-2">
                      <UserX className="w-3.5 h-3.5 text-red-400" />
                      Clientes inativos
                    </span>
                    <span className="text-red-400 font-bold text-xl">28</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 h-3 rounded-full" style={{ width: "18%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Timeline do Cliente
              </h3>
              
              <div className="space-y-4">
                {timelineSteps.map((step, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: step.bg }}>
                      <step.icon className="w-5 h-5" style={{ color: step.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white/90 text-sm font-semibold">{step.label}</p>
                    </div>
                    {i < timelineSteps.length - 1 && (
                      <div className="w-4 h-0.5 bg-white/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Next Suggested Action */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 backdrop-blur-2xl border border-blue-500/20 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Próxima Ação Sugerida
              </h3>
              
              <div className="space-y-3">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white font-semibold">Ligar para Ana Carolina</p>
                  <p className="text-white/60 text-sm mt-1">Próxima ação para seguir o fluxo</p>
                </div>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3 rounded-xl font-semibold shadow-lg shadow-blue-600/20 active:scale-[0.98] transition-all">
                  <CheckCircle className="w-4.5 h-4.5" />
                  Iniciar Ação
                </button>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <UserPlus className="w-4.5 h-4.5 text-blue-400" />
                  Adicionar cliente
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <Briefcase className="w-4.5 h-4.5 text-purple-400" />
                  Nova pré-visita
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <TrendingUp className="w-4.5 h-4.5 text-emerald-400" />
                  Ver relatórios
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}