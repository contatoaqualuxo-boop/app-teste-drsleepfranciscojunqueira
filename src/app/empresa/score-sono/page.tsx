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
  XCircle,
  Clock,
  Sparkles,
  HeartPulse,
  Activity,
  Target,
  Zap
} from "lucide-react";

export default function ScoreSonoPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Star, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const, isActive: true },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const scores = [
    {
      id: 1,
      cliente: "Ana Carolina Silva",
      idade: 34,
      peso: 68,
      posicao: "Lateral",
      dor: "Lombar",
      qualidade: "Boa",
      score: 78,
      status: "Bom",
      recomendacao: "Trocar travesseiro",
      proximaAcao: "Enviar recomendação"
    },
    {
      id: 2,
      cliente: "Bruno Mendes",
      idade: 42,
      peso: 92,
      posicao: "Costas",
      dor: "Cervical",
      qualidade: "Ruim",
      score: 45,
      status: "Atenção",
      recomendacao: "Upgrade de colchão",
      proximaAcao: "Agendar pré-visita"
    },
    {
      id: 3,
      cliente: "Carla Costa",
      idade: 28,
      peso: 56,
      posicao: "Barriga",
      dor: "Nenhuma",
      qualidade: "Excelente",
      score: 92,
      status: "Excelente",
      recomendacao: "Acompanhar satisfação",
      proximaAcao: "Enviar pesquisa"
    },
    {
      id: 4,
      cliente: "Daniel Almeida",
      idade: 55,
      peso: 85,
      posicao: "Lateral",
      dor: "Lombar e joelho",
      qualidade: "Muito ruim",
      score: 28,
      status: "Crítico",
      recomendacao: "Consultor especializado",
      proximaAcao: "Contato imediato"
    },
    {
      id: 5,
      cliente: "Eliane Ribeiro",
      idade: 31,
      peso: 62,
      posicao: "Costas",
      dor: "Nenhuma",
      qualidade: "Boa",
      score: 84,
      status: "Bom",
      recomendacao: "Adicionar acessórios",
      proximaAcao: "Enviar catálogo"
    }
  ];

  const getScoreConfig = (status: string) => {
    switch (status) {
      case "Excelente":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", icon: CheckCircle2 };
      case "Bom":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", icon: Star };
      case "Atenção":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", icon: AlertTriangle };
      case "Crítico":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25", icon: XCircle };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", icon: Clock };
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-emerald-400";
    if (score >= 60) return "text-blue-400";
    if (score >= 40) return "text-amber-400";
    return "text-red-400";
  };

  return (
    <DashboardLayout
      title="Score Sono™"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Score Sono™</h1>
          <p className="text-blue-300/90 text-sm mt-1">Entenda o perfil de sono dos clientes e gere oportunidades comerciais com mais precisão.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Scores avaliados", value: "248", icon: Activity, color: "from-blue-500/30 to-cyan-500/30", trend: "+18" },
            { label: "Clientes com score baixo", value: "23", icon: AlertTriangle, color: "from-red-500/30 to-amber-500/30", trend: "+4" },
            { label: "Oportunidades de recompra", value: "41", icon: Target, color: "from-emerald-500/30 to-green-500/30", trend: "+12" },
            { label: "Recomendações geradas", value: "156", icon: Zap, color: "from-purple-500/30 to-pink-500/30", trend: "+28" }
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
                    placeholder="Buscar por cliente, idade ou dor..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Cliente", "Idade", "Peso", "Posição", "Dor", "Qualidade", "Score", "Recomendação", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-6 py-4">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {scores.map((item) => {
                      const scoreConfig = getScoreConfig(item.status);
                      const ScoreIcon = scoreConfig.icon;
                      return (
                        <tr key={item.id} className="group hover:bg-white/5 transition-all duration-300">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {item.cliente.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{item.cliente}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.idade} anos</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.peso} kg</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.posicao}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.dor}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.qualidade}</span>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                              <span className={`text-2xl font-black ${getScoreColor(item.score)}`}>{item.score}</span>
                              <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${scoreConfig.bg} ${scoreConfig.text} ${scoreConfig.border}`}>
                                <ScoreIcon className="w-3 h-3 inline mr-1" />
                                {item.status}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.recomendacao}</span>
                          </td>
                          <td className="px-6 py-5">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1.5 font-semibold transition-all">
                              {item.proximaAcao}
                              <ChevronRight className="w-4 h-4" />
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

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Resumo inteligente
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Principal queixa", value: "Dor lombar" },
                  { label: "Produto mais indicado", value: "Colchão Premium Orthomol" },
                  { label: "Clientes prioritários", value: "7" },
                  { label: "Potencial de venda", value: "R$ 12.800" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-amber-400 font-semibold mb-2">Importante</h4>
                  <p className="text-white/70 text-sm leading-relaxed">O Score Sono™ não é diagnóstico médico. É um índice consultivo para orientar atendimento, conforto e pós-venda.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
