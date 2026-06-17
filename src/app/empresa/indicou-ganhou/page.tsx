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
  Gift,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  DollarSign,
  Zap,
  Award,
  Hash,
  Bed,
  HeartPulse,
  Activity
} from "lucide-react";

export default function IndicouGanhouPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const referrals = [
    {
      id: 1,
      referrer: "Ana Carolina Silva",
      code: "ANA.S170620261448",
      referred: "Bruno Mendes",
      purchaseValue: "R$ 4.500",
      status: "Bônus liberado",
      bonusAmount: "R$ 100",
      nextAction: "Aguardar pagamento"
    },
    {
      id: 2,
      referrer: "Carlos Pereira",
      code: "CAR.P170620261449",
      referred: "Daniela Costa",
      purchaseValue: "R$ 890",
      status: "Não elegível",
      bonusAmount: "R$ 0",
      nextAction: "Aguardar nova compra"
    },
    {
      id: 3,
      referrer: "Eliane Ribeiro",
      code: "ELI.R170620261450",
      referred: "Fernando Souza",
      purchaseValue: "-",
      status: "Aguardando compra",
      bonusAmount: "R$ 100",
      nextAction: "Enviar lembrete"
    },
    {
      id: 4,
      referrer: "Gabriela Lima",
      code: "GAB.L170620261451",
      referred: "Henrique Almeida",
      purchaseValue: "R$ 2.800",
      status: "Compra confirmada",
      bonusAmount: "R$ 100",
      nextAction: "Validar e liberar bônus"
    },
    {
      id: 5,
      referrer: "Isabela Santos",
      code: "ISA.S170620261452",
      referred: "João Augusto",
      purchaseValue: "R$ 3.200",
      status: "Bônus pago",
      bonusAmount: "R$ 100",
      nextAction: "Enviar agradecimento"
    }
  ];

  const topReferrers = [
    { rank: 1, name: "Ana Carolina Silva", referrals: 12, totalBonus: "R$ 1.200" },
    { rank: 2, name: "Eliane Ribeiro", referrals: 9, totalBonus: "R$ 900" },
    { rank: 3, name: "Carlos Pereira", referrals: 7, totalBonus: "R$ 700" },
    { rank: 4, name: "Gabriela Lima", referrals: 5, totalBonus: "R$ 500" },
    { rank: 5, name: "Isabela Santos", referrals: 4, totalBonus: "R$ 400" }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Aguardando compra":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", icon: Clock };
      case "Compra confirmada":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", icon: CheckCircle2 };
      case "Bônus liberado":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", icon: Gift };
      case "Bônus pago":
        return { bg: "bg-cyan-500/15", text: "text-cyan-400", border: "border-cyan-500/25", icon: DollarSign };
      case "Não elegível":
        return { bg: "bg-red-500/15", text: "text-red-400", border: "border-red-500/25", icon: XCircle };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", icon: AlertTriangle };
    }
  };

  return (
    <DashboardLayout
      title="Indicou Ganhou"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Indicou Ganhou</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gerencie indicações, recompensas e oportunidades geradas pelos clientes.</p>
        </div>

        {/* Alert */}
        <div className="bg-amber-500/10 backdrop-blur-xl border border-amber-500/25 rounded-2xl p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
            <div>
              <h4 className="text-amber-400 font-semibold">Compra mínima para validar bônus: R$ 1.000</h4>
              <p className="text-white/60 text-sm mt-1">Indicações só geram recompensas após confirmação de compra elegível.</p>
            </div>
          </div>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Indicações recebidas", value: "124", icon: Users, color: "from-blue-500/30 to-cyan-500/30", trend: "+18%" },
            { label: "Indicações aprovadas", value: "89", icon: CheckCircle2, color: "from-emerald-500/30 to-green-500/30", trend: "+12%" },
            { label: "Bônus pagos", value: "R$ 8.900", icon: DollarSign, color: "from-purple-500/30 to-pink-500/30", trend: "+22%" },
            { label: "Conversão por indicação", value: "71%", icon: TrendingUp, color: "from-amber-500/30 to-orange-500/30", trend: "+5%" }
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
                    placeholder="Buscar por cliente, código ou pessoa indicada..."
                    className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 w-full sm:w-80 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Referrals List */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/2.5">
                      {["Cliente indicador", "Código", "Pessoa indicada", "Valor da compra", "Status", "Bônus previsto", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-6 py-4">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {referrals.map((referral) => {
                      const statusConfig = getStatusConfig(referral.status);
                      const StatusIcon = statusConfig.icon;
                      return (
                        <tr key={referral.id} className="group hover:bg-white/5 transition-all duration-300">
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                                {referral.referrer.charAt(0)}
                              </div>
                              <span className="text-white font-semibold">{referral.referrer}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <div className="flex items-center gap-2">
                              <Hash className="w-3.5 h-3.5 text-white/40" />
                              <span className="text-white/80 text-sm font-mono">{referral.code}</span>
                            </div>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/80 text-sm">{referral.referred}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white font-bold">{referral.purchaseValue}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              <StatusIcon className="w-3.5 h-3.5" />
                              {referral.status}
                            </span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white font-bold">{referral.bonusAmount}</span>
                          </td>
                          <td className="px-6 py-5">
                            <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-1.5 font-semibold transition-all">
                              {referral.nextAction}
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

          {/* Right Panel */}
          <div className="space-y-6">
            {/* Ranking */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-yellow-400" />
                Ranking de indicadores
              </h3>
              <div className="space-y-4">
                {topReferrers.map((referrer) => (
                  <div key={referrer.rank} className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          referrer.rank === 1 ? "bg-gradient-to-br from-yellow-500/30 to-amber-500/30 text-yellow-400" :
                          referrer.rank === 2 ? "bg-gradient-to-br from-gray-400/30 to-gray-500/30 text-gray-300" :
                          referrer.rank === 3 ? "bg-gradient-to-br from-orange-500/30 to-red-500/30 text-orange-400" :
                          "bg-white/10 text-white/60"
                        }`}>
                          {referrer.rank}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-sm">{referrer.name}</p>
                          <p className="text-white/60 text-xs">{referrer.referrals} indicações</p>
                        </div>
                      </div>
                      <span className="text-emerald-400 font-bold">{referrer.totalBonus}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rules */}
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-blue-400" />
                Regras do programa
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Compra mínima", value: "R$ 1.000" },
                  { label: "Bônus padrão", value: "R$ 100" },
                  { label: "Validação", value: "Após venda confirmada" },
                  { label: "Código", value: "Único por cliente" }
                ].map((rule, i) => (
                  <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl p-4 border border-white/10">
                    <p className="text-white/60 text-sm">{rule.label}</p>
                    <p className="text-white font-semibold">{rule.value}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Exemplo de código</p>
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-center justify-between">
                    <span className="text-blue-300 font-mono text-sm">ANA.S170620261448</span>
                    <button className="text-blue-400 text-xs hover:text-blue-300 font-semibold transition-all">
                      Copiar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
