"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight, 
  LayoutDashboard, Store, FileText, CalendarHeart, Search, Plus, 
  Filter, Phone, Calendar as CalendarIcon, User, UserCheck, 
  TrendingUp, ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function CrmPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const, isActive: true },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "outros" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Novo":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "Em atendimento":
        return "bg-amber-500/20 text-amber-400 border-amber-500/30";
      case "Negociação":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      case "Fechado":
        return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      default:
        return "bg-white/10 text-white/60 border-white/20";
    }
  };

  return (
    <DashboardLayout
      title="CRM"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <div className="flex items-center gap-3">
          <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            FJ
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-black text-white">CRM</h1>
          <p className="text-blue-300 text-sm mt-1">Gestão de Relacionamento com Clientes</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content - Table */}
          <div className="xl:col-span-3 space-y-6">
            {/* Top Bar */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar cliente..." 
                    className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 w-full sm:w-64" 
                  />
                </div>
                <div className="flex gap-2">
                  {["Todos", "Ativos", "Inativos"].map((filter, i) => (
                    <button 
                      key={i} 
                      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${i === 0 ? "bg-blue-600/30 border border-blue-500/30 text-blue-400" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <button className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-xl font-medium shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4 h-4" />
                Novo Cliente
              </button>
            </div>

            {/* Table */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Nome</th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Telefone</th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Última Pré-visita</th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Status</th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Consultor</th>
                      <th className="text-left px-6 py-4 text-xs font-medium text-white/40 uppercase tracking-wider">Próxima ação</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {clients.map((client) => (
                      <tr key={client.id} className="hover:bg-white/5 transition-all">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-medium">
                              {client.name.charAt(0)}
                            </div>
                            <span className="text-white font-medium">{client.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-white/70 text-sm flex items-center gap-2">
                            <Phone className="w-3 h-3" />
                            {client.phone}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-white/70 text-sm flex items-center gap-2">
                            <CalendarIcon className="w-3 h-3" />
                            {client.lastPreVisit}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(client.status)}`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className="text-white/70 text-sm">{client.consultant}</span>
                        </td>
                        <td className="px-6 py-4">
                          <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1">
                            {client.nextAction}
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-white/40 text-sm">Mostrando 1-8 de 8</span>
                <div className="flex gap-2">
                  <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white/80 transition-all">
                    <ChevronRight className="w-4 h-4 rotate-180" />
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/30 flex items-center justify-center text-blue-400 font-medium">
                    1
                  </button>
                  <button className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-white/10 hover:text-white/80 transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Side Panel - Summary */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Resumo do CRM</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">Clientes ativos</span>
                    <span className="text-white font-bold text-xl">124</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">Novos hoje</span>
                    <span className="text-emerald-400 font-bold text-xl">5</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: "30%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">Negociações</span>
                    <span className="text-purple-400 font-bold text-xl">18</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white/70 text-sm">Conversão</span>
                    <span className="text-amber-400 font-bold text-xl">24,5%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full" style={{ width: "24.5%" }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3 rounded-xl transition-all text-left">
                  <Plus className="w-4 h-4" />
                  Nova pré-visita
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3 rounded-xl transition-all text-left">
                  <Filter className="w-4 h-4" />
                  Filtrar clientes
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3 rounded-xl transition-all text-left">
                  <TrendingUp className="w-4 h-4" />
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