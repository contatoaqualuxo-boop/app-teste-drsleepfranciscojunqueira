"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, MapPin, Phone, Zap, Calendar, Target, CheckCircle
} from "lucide-react";

export default function StoreProfilePage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const consultants = [
    { id: 1, name: "Maria Souza", role: "Gerente de Loja", performance: "Alta", previsits: 45, conversion: "85%" },
    { id: 2, name: "João Pereira", role: "Consultor Senior", performance: "Alta", previsits: 38, conversion: "78%" },
    { id: 3, name: "Ana Santos", role: "Consultor Jr", performance: "Média", previsits: 25, conversion: "65%" },
  ];

  const products = [
    { id: 1, name: "Colchão Premium Orthomol", category: "Colchões", sales: 128, averageTicket: "R$ 2.499,00" },
    { id: 2, name: "Travesseiro Ergonômico Sono", category: "Acessórios", sales: 195, averageTicket: "R$ 399,00" },
    { id: 3, name: "Cabeceira Estofada Premium", category: "Cabeceiras", sales: 67, averageTicket: "R$ 1.299,00" },
  ];

  const timeline = [
    { id: 1, date: "Jan/2024", title: "Inauguração", description: "Abertura oficial da unidade Zona Norte" },
    { id: 2, date: "Mar/2024", title: "Primeira pré-visita", description: "Primeira experiência de compra virtual concluída" },
    { id: 3, date: "Jun/2024", title: "Campanha de destaque", description: "Lançamento da campanha 'Sono Premium' com sucesso" },
    { id: 4, date: "Nov/2024", title: "Recorde de vendas", description: "Melhor mês da história: R$ 180.000,00 em faturamento" },
    { id: 5, date: "Jul/2024", title: "Próxima meta", description: "Alcançar 50 pré-visitas por semana", future: true },
  ];

  const getStatusClassName = (status: string) => {
    const base = "inline-flex rounded-full px-3 py-1 text-xs font-semibold border";
    if (status === "Destaque") return base + " bg-purple-500/15 text-purple-300 border-purple-500/30";
    if (status === "Ativa") return base + " bg-emerald-500/15 text-emerald-300 border-emerald-500/30";
    return base + " bg-white/10 text-white/70 border-white/10";
  };

  const getPerformanceColor = (perf: string) => {
    if (perf === "Alta") return "text-emerald-400";
    if (perf === "Média") return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <DashboardLayout
      title="Perfil da Loja"
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
        {/* Header Premium */}
        <div className="bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-indigo-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500/60 to-purple-600/60 rounded-2xl flex items-center justify-center shadow-lg">
              <Store className="w-14 h-14 text-white/90" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-black text-white tracking-tight">Dr. Sleep - Zona Norte</h1>
                <span className={getStatusClassName("Destaque")}>Destaque</span>
              </div>
              <div className="flex flex-wrap gap-4 text-white/80 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-white/60" />
                  Av. Paulista, 890, Zona Norte
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-white/60" />
                  (11) 99876-5432
                </span>
                <span className="flex items-center gap-1">
                  <UserCheck className="w-4 h-4 text-white/60" />
                  Gerente: Ana Santos
                </span>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" fill={i < 5 ? "currentColor" : "none"} />
                  ))}
                </div>
                <p className="text-white/80 text-sm">Score de performance: 5/5</p>
              </div>
            </div>
          </div>
        </div>
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Faturamento mensal", value: "R$ 125.000,00", icon: ShoppingCart },
            { label: "Pré-visitas realizadas", value: "142", icon: CalendarHeart },
            { label: "Taxa de conversão", value: "78%", icon: TrendingUp },
            { label: "Avaliação média", value: "4.8/5", icon: Star }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-2 space-y-6">
            {/* 1. Consultores da unidade */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  Consultores da unidade
                </h2>
              </div>
              <div className="overflow-x-auto">
                <div className="divide-y divide-white/10">
                  {consultants.map((consultant) => (
                    <Link key={consultant.id} href="/empresa/consultores" className="flex flex-col md:flex-row items-center gap-4 p-6 hover:bg-white/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                        {consultant.name.charAt(0)}
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-white font-semibold">{consultant.name}</p>
                        <p className="text-white/60 text-xs">{consultant.role}</p>
                      </div>
                      <div className="flex gap-2 md:gap-8 w-full md:w-auto justify-center md:justify-end">
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm">{consultant.previsits}</p>
                          <p className="text-white/60 text-xs">Pré-visitas</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm">{consultant.conversion}</p>
                          <p className="text-white/60 text-xs">Conversão</p>
                        </div>
                        <div className="text-center">
                          <p className={`font-semibold text-sm ${getPerformanceColor(consultant.performance)}`}>{consultant.performance}</p>
                          <p className="text-white/60 text-xs">Performance</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* 2. Produtos mais vendidos */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-blue-400" />
                  Produtos mais vendidos
                </h2>
              </div>
              <div className="overflow-x-auto">
                <div className="divide-y divide-white/10">
                  {products.map((product) => (
                    <div key={product.id} className="flex flex-col md:flex-row items-center gap-4 p-6 hover:bg-white/5 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-semibold shadow-sm">
                        C
                      </div>
                      <div className="flex-1 text-center md:text-left">
                        <p className="text-white font-semibold">{product.name}</p>
                        <p className="text-white/60 text-xs">{product.category}</p>
                      </div>
                      <div className="flex gap-2 md:gap-8 w-full md:w-auto justify-center md:justify-end">
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm">{product.sales}</p>
                          <p className="text-white/60 text-xs">Vendas</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-semibold text-sm">{product.averageTicket}</p>
                          <p className="text-white/60 text-xs">Ticket médio</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* 3. Timeline da loja */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-blue-400" />
                  Timeline da loja
                </h2>
              </div>
              <div className="p-6 space-y-6">
                {timeline.map((item, i) => (
                  <div key={item.id} className="relative pl-8 border-l border-white/20 last:border-l-transparent">
                    <div className={`absolute left-[-9px] top-0 w-4 h-4 rounded-full ${item.future ? "bg-yellow-500/50 border-2 border-yellow-400" : "bg-blue-500 border-2 border-blue-400"}`} />
                    <div className="mb-1">
                      <p className="text-white/60 text-xs uppercase tracking-wider">{item.date}</p>
                      <p className="text-white font-semibold">{item.title}</p>
                      <p className="text-white/60 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* 4. Metas da unidade */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-6 border-b border-white/10">
                <h2 className="text-white font-bold text-lg flex items-center gap-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  Metas da unidade
                </h2>
              </div>
              <div className="p-6">
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-semibold">Meta mensal</p>
                    <p className="text-white">R$ 150.000,00 / R$ 200.000,00</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full" style={{ width: "75%" }} />
                  </div>
                  <p className="text-white/60 text-xs mt-2 text-right">75% concluído</p>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">Meta de pré-visitas atingida</p>
                      <p className="text-white/60 text-xs">142 / 120 pré-visitas</p>
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl flex items-center gap-3">
                    <Target className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">Próximo objetivo</p>
                      <p className="text-white/60 text-xs">Alcançar 50 pré-visitas por semana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Right Panel */}
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Store className="w-5 h-5 text-blue-400" />
                Resumo da Loja
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Melhor consultor</p>
                  <p className="text-white font-semibold">Maria Souza</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Produto mais vendido</p>
                  <p className="text-white font-semibold">Travesseiro Ergonômico Sono</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Ranking interno</p>
                  <p className="text-white font-semibold">#1 de 8 unidades</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Campanha ativa</p>
                  <p className="text-white font-semibold">Sono Premium - 15% OFF</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Cashback gerado</p>
                  <p className="text-white font-semibold">R$ 8.500,00</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Clientes fidelidade</p>
                  <p className="text-white font-semibold">128 clientes</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <Link href="/empresa/lojas/1/editar" className="w-full">
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                    <Plus className="w-4.5 h-4.5" />
                    Editar Loja
                  </button>
                </Link>
                {[
                  { label: "Ver relatório" },
                  { label: "Agendar reunião" },
                  { label: "Criar campanha" },
                  { label: "Ver equipe" }
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
