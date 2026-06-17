"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  Bell,
  Settings,
  ChevronRight,
  Store,
  FileText,
  CalendarHeart,
  Search,
  Plus,
  UserCheck,
  TrendingUp,
  Star,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  HeartPulse,
  Activity,
  Target,
  Zap,
  Gift,
  DollarSign,
  User,
  MessageSquare,
  Play
} from "lucide-react";

export default function OportunidadesPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: MessageSquare, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const, isActive: true },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const oportunidades = [
    {
      id: 1,
      cliente: "Ana Carolina Silva",
      oportunidade: "Recompra de colchão",
      motivo: "Colchão Premium comprado há 5 anos",
      valor: "R$ 4.500",
      prioridade: "Alta",
      consultor: "Maria Souza",
      proximaAcao: "Ligar hoje"
    },
    {
      id: 2,
      cliente: "Bruno Mendes",
      oportunidade: "Troca de travesseiro",
      motivo: "Travesseiro ergônico com 6 meses de uso",
      valor: "R$ 350",
      prioridade: "Baixa",
      consultor: "João Pereira",
      proximaAcao: "Enviar e-mail"
    },
    {
      id: 3,
      cliente: "Carla Costa",
      oportunidade: "Indicação pendente",
      motivo: "Indicou Daniel Almeida, sem compra",
      valor: "R$ 100 bônus",
      prioridade: "Média",
      consultor: "Ana Santos",
      proximaAcao: "Verificar status"
    },
    {
      id: 4,
      cliente: "Daniel Almeida",
      oportunidade: "Cliente inativo",
      motivo: "Nenhuma compra há 18 meses",
      valor: "R$ 2.800",
      prioridade: "Alta",
      consultor: "Maria Souza",
      proximaAcao: "Contato imediato"
    },
    {
      id: 5,
      cliente: "Eliane Ribeiro",
      oportunidade: "Aniversário",
      motivo: "Aniversário da cliente em 10 dias",
      valor: "R$ 500 acessórios",
      prioridade: "Média",
      consultor: "João Pereira",
      proximaAcao: "Enviar presente"
    },
    {
      id: 6,
      cliente: "Fernando Gomes",
      oportunidade: "Garantia próxima do fim",
      motivo: "Garantia do colchão acaba em 2 meses",
      valor: "R$ 0 (manutenção)",
      prioridade: "Baixa",
      consultor: "Ana Santos",
      proximaAcao: "Enviar lembrete"
    }
  ];

  const getPrioridadeConfig = (prioridade: string) => {
    switch (prioridade) {
      case "Alta":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25", icon: AlertTriangle };
      case "Média":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", icon: Clock };
      case "Baixa":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", icon: CheckCircle2 };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", icon: Clock };
    }
  };

  return (
    <DashboardLayout
      title="Motor de Oportunidades™"
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
        <div>
          <h1 className="text-3xl font-black text-white tracking-tight">Motor de Oportunidades™</h1>
          <p className="text-blue-300/90 text-sm mt-1">Veja onde estão as próximas vendas da loja antes que elas sejam perdidas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Receita recuperável", value: "R$ 28.400", icon: DollarSign, color: "from-emerald-500/30 to-green-500/30", trend: "+18%" },
            { label: "Clientes prioritários", value: "4", icon: User, color: "from-red-500/30 to-amber-500/30", trend: "+1" },
            { label: "Recompras previstas", value: "12", icon: Target, color: "from-blue-500/30 to-cyan-500/30", trend: "+5" },
            { label: "Ações recomendadas", value: "24", icon: Zap, color: "from-purple-500/30 to-pink-500/30", trend: "+8" }
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
          <div className="xl:col-span-3 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between shadow-sm">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                  <input
                    type="text"
                    placeholder="Buscar por cliente, oportunidade..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {oportunidades.map((item) => {
                const prioridadeConfig = getPrioridadeConfig(item.prioridade);
                const PrioridadeIcon = prioridadeConfig.icon;
                return (
                  <div key={item.id} className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div className="space-y-1">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Cliente</p>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold text-sm shadow-sm">
                            {item.cliente.charAt(0)}
                          </div>
                          <span className="text-white font-semibold">{item.cliente}</span>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Oportunidade</p>
                        <p className="text-white/80 text-sm">{item.oportunidade}</p>
                        <p className="text-white/50 text-xs">{item.motivo}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Valor</p>
                        <p className="text-white font-bold">{item.valor}</p>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border inline-flex items-center gap-1 ${prioridadeConfig.bg} ${prioridadeConfig.text} ${prioridadeConfig.border}`}>
                          <PrioridadeIcon className="w-3 h-3" />
                          {item.prioridade}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-white/60 text-xs uppercase tracking-wider">Consultor</p>
                        <p className="text-white/80 text-sm">{item.consultor}</p>
                        <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1.5 font-semibold transition-all mt-1">
                          {item.proximaAcao}
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Resumo do dia
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Receita potencial hoje", value: "R$ 12.800" },
                  { label: "Clientes para contato", value: "7" },
                  { label: "Produtos sugeridos", value: "15" },
                  { label: "Indicações para validar", value: "4" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/15 to-purple-600/15 backdrop-blur-2xl border border-blue-500/25 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Play className="w-5 h-5 text-blue-400" />
                Começar meu dia
              </h3>
              <button className="w-full bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-600/30 active:scale-[0.98]">
                Começar atendimento
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
