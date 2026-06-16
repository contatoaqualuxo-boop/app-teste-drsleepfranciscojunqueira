"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, Search, Plus, UserCheck,
  TrendingUp, Star, Phone, Calendar as CalendarIcon,
  MessageSquare, Target, Sparkles, CreditCard, MapPin
} from "lucide-react";

export default function ClientProfilePage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const, isActive: true },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "outros" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const timelineSteps = [
    { icon: CalendarHeart, title: "Pré-visita", description: "10/06/2026 - Visitou loja e conheceu produtos" },
    { icon: UserCheck, title: "Atendimento", description: "12/06/2026 - Primeiro atendimento com consultor" },
    { icon: Star, title: "Teste dos colchões", description: "14/06/2026 - Testou modelos e definiu preferência" },
    { icon: Target, title: "Negociação", description: "16/06/2026 - Alinhou valores e condições de pagamento" },
    { icon: CreditCard, title: "Venda", description: "18/06/2026 - Fechamento da venda e confirmação do pedido" },
    { icon: MessageSquare, title: "Pós-venda", description: "Próxima etapa" },
  ];

  return (
    <DashboardLayout
      title="Perfil do Cliente"
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
          <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/40 via-purple-600/40 to-cyan-500/40 flex items-center justify-center text-white font-bold text-4xl shadow-lg shadow-purple-600/20">
              A
            </div>
            <div className="flex-1 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-black text-white tracking-tight">Ana Carolina Silva</h1>
                  <p className="text-blue-300/90 text-sm mt-1">Cliente desde 2024</p>
                </div>
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 flex items-center gap-2 w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Ativo
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <Phone className="w-4 h-4 text-white/50" />
                  <span>(11) 98765-4321</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MessageSquare className="w-4 h-4 text-white/50" />
                  <span>WhatsApp</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <MapPin className="w-4 h-4 text-white/50" />
                  <span>São Paulo, SP</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2">
              <p className="text-white/60 text-xs uppercase tracking-wider">Score de Relacionamento</p>
              <div className="flex items-center gap-3">
                <div className="w-36 bg-white/10 rounded-full h-3">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-3 rounded-full" style={{ width: "85%" }} />
                </div>
                <span className="text-emerald-400 font-bold text-xl">85</span>
              </div>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Valor total comprado", value: "R$ 12.500", icon: CreditCard, color: "from-blue-500/30 to-cyan-500/30" },
            { label: "Última compra", value: "18/06/2026", icon: CalendarIcon, color: "from-emerald-500/30 to-green-500/30" },
            { label: "Última pré-visita", value: "10/06/2026", icon: CalendarHeart, color: "from-purple-500/30 to-pink-500/30" },
            { label: "Próxima ação", value: "Ligar", icon: Target, color: "from-amber-500/30 to-orange-500/30" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-lg tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="xl:col-span-3 space-y-6">
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {[
                { label: "Enviar WhatsApp", icon: MessageSquare, color: "from-emerald-600 to-emerald-700" },
                { label: "Nova Pré-visita", icon: CalendarHeart, color: "from-purple-600 to-purple-700" },
                { label: "Nova Venda", icon: Plus, color: "from-blue-600 to-blue-700" },
                { label: "Agendar Retorno", icon: CalendarIcon, color: "from-amber-600 to-amber-700" },
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

            {/* Timeline */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-8 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-400" />
                Timeline do Cliente
              </h2>
              <div className="space-y-8">
                {timelineSteps.map((step, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 flex items-center justify-center border border-blue-500/20">
                        <step.icon className="w-5 h-5 text-blue-400" />
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

            {/* Produtos de Interesse */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                Produtos de Interesse
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {["Colchões", "Travesseiros", "Cabeceiras", "Acessórios"].map((product, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer">
                    <p className="text-white font-semibold">{product}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Observações do Consultor */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 shadow-sm">
              <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                Observações do Consultor
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Cliente prefere colchões de molas ensacadas, com altura entre 25 e 30cm. 
                Mostrou interesse por modelos premium e orçamento até R$ 10.000. 
                Acompanhar com amostra de tecido e realizar nova pré-visita para finalizar negociação.
              </p>
            </div>
          </div>

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Programa Fidelidade */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400" />
                Programa Fidelidade
              </h3>
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    Cashback
                  </span>
                  <span className="text-emerald-400 font-bold text-xl">R$ 250</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <CalendarIcon className="w-4 h-4 text-purple-400" />
                    Aniversário
                  </span>
                  <span className="text-white font-medium">15/08</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/70 text-sm flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    Última Interação
                  </span>
                  <span className="text-white/70 text-sm">Hoje</span>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <span className="px-4 py-2 rounded-full text-xs font-semibold bg-amber-500/15 border border-amber-500/25 text-amber-400 flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Cliente VIP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}