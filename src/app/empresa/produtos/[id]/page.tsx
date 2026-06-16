"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Package, Sparkles, Edit, DollarSign,
  AlertTriangle, TrendingUp as TrendingUpIcon
} from "lucide-react";

export default function ProductProfilePage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const, isActive: true },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "outros" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const timelineSteps = [
    { title: "Cadastro", description: "15/03/2026 - Produto cadastrado no sistema" },
    { title: "Entrada em estoque", description: "20/03/2026 - 50 unidades recebidas" },
    { title: "Campanha criada", description: "10/05/2026 - Campanha de lançamento" },
    { title: "Venda", description: "18/06/2026 - Última venda registrada" },
    { title: "Reposição", description: "Próxima etapa - Reposição de estoque" },
  ];

  const relatedProducts = [
    { name: "Travesseiro Ergonômico Sono", price: "R$ 350", category: "Travesseiros" },
    { name: "Cabeceira Estofada Premium", price: "R$ 1.200", category: "Cabeceiras" },
    { name: "Colchão Hybrid Premium", price: "R$ 5.800", category: "Colchões" },
  ];

  return (
    <DashboardLayout
      title="Perfil do Produto"
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
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-80 h-64 bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 rounded-2xl flex items-center justify-center flex-shrink-0">
              <ShoppingCart className="w-24 h-24 text-white/60" />
            </div>
            <div className="flex-1 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <p className="text-blue-300/80 text-xs uppercase tracking-wider mb-1">Colchões</p>
                  <h1 className="text-3xl font-black text-white tracking-tight">Colchão Premium Orthomol</h1>
                  <p className="text-white/60 text-sm mt-2">Dr. Sleep • Linha Premium</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/25 text-emerald-400">
                    Disponível
                  </span>
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/25 text-amber-400 flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    Destaque
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Estoque</p>
                  <p className="text-white font-bold text-xl">12 unidades</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Preço</p>
                  <p className="text-white font-bold text-xl">R$ 4.500</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Valor de venda", value: "R$ 248.000", icon: DollarSign, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Estoque disponível", value: "12", icon: Package, color: "from-blue-500/30 to-cyan-500/30" },
            { label: "Margem estimada", value: "42%", icon: TrendingUpIcon, color: "from-purple-500/30 to-pink-500/30" },
            { label: "Última venda", value: "18/06", icon: CalendarHeart, color: "from-amber-500/30 to-orange-500/30" },
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

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {[
            { label: "Editar Produto", icon: Edit, color: "from-blue-600 to-blue-700" },
            { label: "Nova Venda", icon: Plus, color: "from-emerald-600 to-emerald-700" },
            { label: "Criar Campanha", icon: Sparkles, color: "from-purple-600 to-purple-700" },
            { label: "Ver Histórico", icon: FileText, color: "from-amber-600 to-amber-700" },
          ].map((btn, i) => (
            <button
              key={i}
              className={`flex items-center gap-2 bg-gradient-to-br ${btn.color} hover:brightness-110 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg active:scale-[0.98] transition-all`}
            >
              <btn.icon className="w-4.5 h-4.5" />
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6">
            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Histórico do Produto
              </h2>
              <div className="space-y-8">
                {timelineSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border border-blue-500/20">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600" />
                      </div>
                      {i < timelineSteps.length - 1 && (
                        <div className="w-0.5 h-full bg-gradient-to-b from-white/20 to-white/10 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pt-1">
                      <h3 className="text-white font-semibold">{step.title}</h3>
                      <p className="text-white/60 text-sm mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Especificações Técnicas */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-400" />
                Especificações Técnicas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { label: "Tipo", value: "Molas ensacadas" },
                  { label: "Altura", value: "30 cm" },
                  { label: "Molas", value: "700 unidades" },
                  { label: "Pillow Top", value: "Sim" },
                  { label: "Densidade", value: "Média" },
                  { label: "Garantia", value: "10 anos" },
                  { label: "Revestimento", value: "Tecido premium" },
                ].map((spec, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-2">{spec.label}</p>
                    <p className="text-white font-semibold">{spec.value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Produtos Relacionados */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400" />
                Produtos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedProducts.map((product, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <p className="text-blue-300/80 text-xs uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                    <p className="text-white font-bold text-lg">{product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Resumo do Produto */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Resumo do Produto
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Giro</p>
                  <p className="text-white font-semibold text-lg">Alto</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Mais vendido</p>
                  <p className="text-blue-400 font-semibold text-sm">#1 da categoria</p>
                </div>
                <div className="flex items-start gap-3 pt-4 border-t border-white/10">
                  <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Estoque crítico</p>
                    <p className="text-white/80 text-sm">Recomenda reposição</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Conversão</p>
                  <div className="flex items-center gap-3">
                    <div className="w-full bg-white/10 rounded-full h-3">
                      <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full" style={{ width: "78%" }} />
                    </div>
                    <span className="text-emerald-400 font-bold text-lg">78%</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Visualizações</p>
                  <p className="text-white font-semibold">1.248</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}