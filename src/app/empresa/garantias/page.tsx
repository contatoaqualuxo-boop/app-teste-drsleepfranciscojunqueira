"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Calendar as CalendarIcon, AlertTriangle, Sparkles, Clock, Gift, HeartPulse, Activity, Zap
} from "lucide-react";

export default function WarrantiesPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const, isActive: true },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas a Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const warranties = [
    { id: 1, client: "Ana Carolina Silva", product: "Colchão Premium Orthomol", purchaseDate: "15/03/2026", expiryDate: "15/03/2036", status: "Ativa", nextAction: "Nenhuma" },
    { id: 2, client: "Bruno Mendes", product: "Travesseiro Ergonômico Sono", purchaseDate: "10/05/2026", expiryDate: "10/05/2028", status: "Vencendo", nextAction: "Contatar cliente" },
    { id: 3, client: "Carla Costa", product: "Cabeceira Estofada Premium", purchaseDate: "20/01/2021", expiryDate: "20/01/2026", status: "Expirada", nextAction: "Arquivar" },
    { id: 4, client: "Daniel Almeida", product: "Colchão Hybrid Premium", purchaseDate: "01/06/2026", expiryDate: "01/06/2036", status: "Em análise", nextAction: "Avaliar solicitação" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Ativa":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" };
      case "Vencendo":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25" };
      case "Expirada":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25" };
      case "Em análise":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20" };
    }
  };

  return (
    <DashboardLayout
      title="Garantias"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Garantias</h1>
          <p className="text-blue-300/90 text-sm mt-1">Controle de garantias, prazos e pós-venda</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Garantias ativas", value: "156", icon: ShieldCheck, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Vencendo em breve", value: "28", icon: Clock, color: "from-amber-500/30 to-orange-500/30" },
            { label: "Expiradas", value: "42", icon: AlertTriangle, color: "from-red-500/30 to-pink-500/30" },
            { label: "Solicitações abertas", value: "8", icon: Search, color: "from-blue-500/30 to-cyan-500/30" },
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
                    placeholder="Buscar garantia por cliente, produto ou data..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todas", "Ativas", "Vencendo", "Expiradas", "Em análise"].map((filter, i) => (
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
                Nova Garantia
              </button>
            </div>

            {/* Warranties Table */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Cliente", "Produto", "Data da compra", "Validade", "Status", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-8 py-5">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {warranties.map((warranty) => {
                      const statusConfig = getStatusConfig(warranty.status);
                      return (
                        <tr key={warranty.id} className="group hover:bg-white/5 transition-all duration-300 cursor-pointer">
                          <td className="px-8 py-6">
                            <div className="flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {warranty.client.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{warranty.client}</span>
                            </div>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/80 text-sm font-medium">{warranty.product}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <CalendarIcon className="w-3.5 h-3.5 text-white/40" />
                              {warranty.purchaseDate}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <ShieldCheck className="w-3.5 h-3.5 text-white/40" />
                              {warranty.expiryDate}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              {warranty.status}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold group-hover:gap-3 transition-all">
                              {warranty.nextAction}
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
            {/* Resumo de Garantias */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Resumo de Garantias
              </h3>
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Garantias vencendo em 30 dias</p>
                    <p className="text-white/80 text-sm">28 garantias necessitam atenção</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Produto com mais solicitações</p>
                  <p className="text-white font-semibold">Colchão Premium Orthomol</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Alertas de pós-venda</p>
                  <div className="space-y-2">
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-500" />
                      12 garantias com solicitações pendentes
                    </p>
                    <p className="text-white/80 text-sm flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      8 atendimentos agendados para hoje
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ações rápidas */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                {[
                  { label: "Ver solicitações", icon: FileText },
                  { label: "Emitir certificado", icon: ShieldCheck },
                  { label: "Enviar lembretes", icon: Bell },
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