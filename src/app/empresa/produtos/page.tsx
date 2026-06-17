"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Package, Filter, Sparkles, AlertTriangle, Gift, HeartPulse, Activity
} from "lucide-react";

export default function ProdutosPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const, isActive: true },
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

  const products = [
    { id: 1, category: "Colchões", name: "Colchão Premium Orthomol", price: "R$ 4.500", stock: 12, status: "Disponível", featured: true, description: "Colchão de molas ensacadas com pillow top premium" },
    { id: 2, category: "Travesseiros", name: "Travesseiro Ergonômico Sono", price: "R$ 350", stock: 45, status: "Disponível", featured: false, description: "Travesseiro com espuma viscoelástica e tecnologia de temperatura" },
    { id: 3, category: "Cabeceiras", name: "Cabeceira Estofada Premium", price: "R$ 1.200", stock: 8, status: "Disponível", featured: true, description: "Cabeceira estofada em tecido premium com detalhes em botões" },
    { id: 4, category: "Poltronas", name: "Poltrona Relax Massageadora", price: "R$ 2.800", stock: 3, status: "Baixo estoque", featured: false, description: "Poltrona reclinável com função de massagem e aquecimento" },
    { id: 5, category: "Acessórios", name: "Protetor de Colchão Impermeável", price: "R$ 180", stock: 89, status: "Disponível", featured: false, description: "Protetor impermeável e antialérgico para colchões" },
    { id: 6, category: "Colchões", name: "Colchão Hybrid Premium", price: "R$ 5.800", stock: 6, status: "Disponível", featured: true, description: "Colchão híbrido com molas ensacadas e espuma viscoelástica" },
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Disponível":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25" };
      case "Baixo estoque":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25" };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20" };
    }
  };

  return (
    <DashboardLayout
      title="Produtos"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Produtos</h1>
          <p className="text-blue-300/90 text-sm mt-1">Catálogo inteligente da Dr. Sleep + Sono™</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total de produtos", value: "156", icon: Package, color: "from-blue-500/30 to-cyan-500/30" },
            { label: "Colchões", value: "48", icon: TrendingUp, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Acessórios", value: "62", icon: Star, color: "from-purple-500/30 to-pink-500/30" },
            { label: "Produtos em destaque", value: "12", icon: Sparkles, color: "from-amber-500/30 to-orange-500/30" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
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
                    placeholder="Buscar produto por nome, categoria ou SKU..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
                <div className="flex gap-2 flex-wrap">
                  {["Todos", "Destaques", "Baixo estoque", "Mais vendidos"].map((filter, i) => (
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
                Novo Produto
              </button>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => {
                const statusConfig = getStatusConfig(product.status);
                return (
                  <Link key={product.id} href={`/empresa/produtos/${product.id}`} className="block">
                    <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm relative cursor-pointer">
                    {product.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/25 text-amber-400 flex items-center gap-1.5">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          Destaque
                        </span>
                      </div>
                    )}
                    <div className="w-full h-32 bg-gradient-to-br from-blue-500/20 via-purple-600/20 to-cyan-500/20 rounded-xl mb-4 flex items-center justify-center">
                      <ShoppingCart className="w-12 h-12 text-white/60" />
                    </div>
                    <p className="text-blue-300/80 text-xs uppercase tracking-wider mb-1">{product.category}</p>
                    <h3 className="text-white font-semibold mb-2">{product.name}</h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-white font-bold text-xl">{product.price}</p>
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                        {product.status}
                      </span>
                    </div>
                    <p className="text-white/60 text-xs">Estoque: {product.stock} unidades</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Resumo do Catálogo */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-400" />
                Resumo do Catálogo
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Categoria mais vendida</p>
                  <p className="text-white font-semibold text-lg">Colchões</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Produto mais consultado</p>
                  <p className="text-white font-medium">Colchão Premium Orthomol</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Estoque crítico</p>
                      <p className="text-white/80 text-sm">3 produtos com estoque abaixo de 5 unidades</p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Sugestão de campanha</p>
                  <p className="text-white/80 text-sm">Criar campanha de destaque para colchões com até 15% de desconto</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}