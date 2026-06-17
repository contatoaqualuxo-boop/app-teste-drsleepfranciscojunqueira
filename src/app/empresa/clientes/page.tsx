"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  UserX, TrendingUp, Star, Phone, Calendar as CalendarIcon,
  Briefcase, Target, UserPlus, Sparkles, CreditCard, Gift
} from "lucide-react";

export default function ClientesPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const, isActive: true },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const clients = [
    { id: 1, name: "Ana Carolina Silva", phone: "(11) 98765-4321", product: "Colchão Premium", lastPurchase: "12/06/2026", status: "Ativo", potential: "R$ 8.500" },
    { id: 2, name: "Bruno Mendes", phone: "(11) 91234-5678", product: "Travesseiro Ergonômico", lastPurchase: "05/06/2026", status: "Ativo", potential: "R$ 2.200" },
    { id: 3, name: "Carla Costa", phone: "(11) 99876-5432", product: "Kit Cama + Travesseiro", lastPurchase: "20/05/2026", status: "Fidelidade", potential: "R$ 12.000" },
    { id: 4, name: "Daniel Almeida", phone: "(11) 92345-6789", product: "Colchão Ortopédico", lastPurchase: "10/04/2026", status: "Inativo", potential: "R$ 6.000" },
    { id: 5, name: "Eliane Ribeiro", phone: "(11) 93456-7890", product: "Cama Box", lastPurchase: "02/06/2026", status: "Fidelidade", potential: "R$ 15.000" },
    { id: 6, name: "Fernando Gomes", phone: "(11) 94567-8901", product: "Colchão Hybrid", lastPurchase: "18/06/2026", status: "Ativo", potential: "R$ 10.000" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Ativo":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", dot: "bg-emerald-500" };
      case "Inativo":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25", dot: "bg-red-500" };
      case "Fidelidade":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", dot: "bg-amber-500" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", dot: "bg-white/40" };
    }
  };

  return (
    <DashboardLayout
      title="Clientes"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Clientes</h1>
          <p className="text-blue-300/90 text-sm mt-1">Base de clientes da Dr. Sleep + Sono™</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total de clientes", value: "1,248", icon: Users, color: "from-blue-500/30 to-cyan-500/30", trend: "+12%" },
            { label: "Clientes ativos", value: "986", icon: UserCheck, color: "from-emerald-500/30 to-green-500/30", trend: "+8%" },
            { label: "Clientes com pré-visita", value: "152", icon: CalendarHeart, color: "from-purple-500/30 to-pink-500/30", trend: "+15%" },
            { label: "Clientes fidelidade", value: "312", icon: Star, color: "from-amber-500/30 to-orange-500/30", trend: "+5%" },
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
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6">
            {/* Top Bar */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Buscar cliente por nome, telefone ou produto..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todos", "Ativos", "Inativos", "Fidelidade"].map((filter, i) => (
                    <button
                      key={i}
                      className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${i === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400 shadow-sm" : "bg-white/5 border border-white/10 text-white/60 hover:bg-white/10 hover:border-white/20 hover:text-white/80"}`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>
              <Link href="/empresa/clientes/novo" className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                <Plus className="w-4.5 h-4.5" />
                Novo Cliente
              </Link>
            </div>

            {/* Clients List */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Cliente", "Telefone", "Produto", "Última Compra", "Status", "Potencial"].map((col, i) => (
                        <th key={i} className="text-left px-8 py-5">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {clients.map((client) => {
                      const statusConfig = getStatusConfig(client.status);
                      return (
                        <Link key={client.id} href={`/empresa/clientes/${client.id}`} className="block">
                          <tr className="group hover:bg-white/5 transition-all duration-300 cursor-pointer">
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
                            <span className="text-white/80 text-sm font-medium">{client.product}</span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/70 text-sm flex items-center gap-2">
                              <CalendarIcon className="w-3.5 h-3.5 text-white/40" />
                              {client.lastPurchase}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-2 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              <span className={`w-2 h-2 rounded-full ${statusConfig.dot}`} />
                              {client.status}
                            </span>
                          </td>
                          <td className="px-8 py-6">
                            <span className="text-white/90 text-sm font-bold">{client.potential}</span>
                          </td>
                          </tr>
                        </Link>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Client Profile */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-400" />
                Perfil do Cliente
              </h3>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-bold text-xl shadow-sm">
                  A
                </div>
                <div>
                  <p className="text-white font-semibold">Ana Carolina Silva</p>
                  <p className="text-white/60 text-sm">Cliente desde 2024</p>
                </div>
              </div>

              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Preferência de Produto</p>
                  <p className="text-white/90 text-sm font-semibold">Colchão Premium</p>
                </div>

                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Última Interação</p>
                  <p className="text-white/90 text-sm font-semibold">Pré-visita em 12/06/2026</p>
                </div>

                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Próxima Ação</p>
                  <p className="text-blue-400 text-sm font-semibold">Ligar para confirmar pedido</p>
                </div>

                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Score de Relacionamento</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full" style={{ width: "85%" }} />
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">85</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações Rápidas</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <Phone className="w-4.5 h-4.5 text-blue-400" />
                  Ligar para Cliente
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <CalendarHeart className="w-4.5 h-4.5 text-purple-400" />
                  Agendar Pré-visita
                </button>
                <button className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm">
                  <CreditCard className="w-4.5 h-4.5 text-emerald-400" />
                  Ver Histórico de Compras
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}