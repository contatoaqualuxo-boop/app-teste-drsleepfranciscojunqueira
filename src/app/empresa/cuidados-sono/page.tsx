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
  Bed,
  Wind,
  RefreshCcw,
  HeartPulse,
  Activity,
  Zap,
  Gift
} from "lucide-react";

export default function CuidadosSonoPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: Bed, group: "principal" as const, isActive: true },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const cuidados = [
    {
      id: 1,
      cliente: "Ana Carolina Silva",
      produto: "Colchão Premium Orthomol",
      dataCompra: "12/06/2025",
      proximoGiro: "12/06/2026",
      proximaVentilacao: "18/06/2026",
      trocaTravesseiro: "12/12/2026",
      status: "Em dia",
      proximaAcao: "Enviar lembrete de giro"
    },
    {
      id: 2,
      cliente: "Bruno Mendes",
      produto: "Travesseiro Ergonômico Sono",
      dataCompra: "05/01/2026",
      proximoGiro: "-",
      proximaVentilacao: "-",
      trocaTravesseiro: "05/07/2026",
      status: "Trocar travesseiro",
      proximaAcao: "Contatar cliente"
    },
    {
      id: 3,
      cliente: "Carla Costa",
      produto: "Colchão Hybrid Premium",
      dataCompra: "20/05/2025",
      proximoGiro: "20/05/2026",
      proximaVentilacao: "27/05/2026",
      trocaTravesseiro: "20/11/2026",
      status: "Giro pendente",
      proximaAcao: "Agendar pré-visita"
    },
    {
      id: 4,
      cliente: "Daniel Almeida",
      produto: "Colchão Ortopédico",
      dataCompra: "10/04/2024",
      proximoGiro: "10/10/2025",
      proximaVentilacao: "10/04/2026",
      trocaTravesseiro: "10/10/2025",
      status: "Recompra sugerida",
      proximaAcao: "Oferecer upgrade"
    },
    {
      id: 5,
      cliente: "Eliane Ribeiro",
      produto: "Kit Cama + Travesseiro",
      dataCompra: "02/03/2026",
      proximoGiro: "02/06/2026",
      proximaVentilacao: "02/04/2026",
      trocaTravesseiro: "02/09/2026",
      status: "Ventilar colchão",
      proximaAcao: "Enviar guia de ventilação"
    }
  ];

  const getStatusConfig = (status: string) => {
    switch (status) {
      case "Em dia":
        return { bg: "bg-emerald-500/15", text: "text-emerald-400", border: "border-emerald-500/25", icon: CheckCircle2 };
      case "Giro pendente":
        return { bg: "bg-amber-500/15", text: "text-amber-400", border: "border-amber-500/25", icon: RefreshCcw };
      case "Ventilar colchão":
        return { bg: "bg-blue-500/15", text: "text-blue-400", border: "border-blue-500/25", icon: Wind };
      case "Trocar travesseiro":
        return { bg: "bg-purple-500/15", text: "text-purple-400", border: "border-purple-500/25", icon: Bed };
      case "Recompra sugerida":
        return { bg: "bg-pink-500/15", text: "text-pink-400", border: "border-pink-500/25", icon: HeartPulse };
      default:
        return { bg: "bg-white/10", text: "text-white/60", border: "border-white/20", icon: AlertTriangle };
    }
  };

  return (
    <DashboardLayout
      title="Cuidados do Sono"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Cuidados do Sono</h1>
          <p className="text-blue-300/90 text-sm mt-1">Acompanhe prazos de giro, ventilação, troca de travesseiros e recompra dos clientes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Colchões em acompanhamento", value: "124", icon: Bed, color: "from-blue-500/30 to-cyan-500/30", trend: "+12" },
            { label: "Giros pendentes", value: "12", icon: RefreshCcw, color: "from-amber-500/30 to-orange-500/30", trend: "+3" },
            { label: "Ventilações pendentes", value: "8", icon: Wind, color: "from-purple-500/30 to-pink-500/30", trend: "+1" },
            { label: "Trocas de travesseiro", value: "31", icon: Sparkles, color: "from-emerald-500/30 to-green-500/30", trend: "+5" }
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
                    placeholder="Buscar por cliente ou produto..."
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
                      {["Cliente", "Produto", "Data da compra", "Próximo giro", "Próxima ventilação", "Troca de travesseiro", "Status", "Próxima ação"].map((col, i) => (
                        <th key={i} className="text-left px-6 py-4">
                          <span className="text-xs font-bold text-white/50 uppercase tracking-wider">{col}</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {cuidados.map((item) => {
                      const statusConfig = getStatusConfig(item.status);
                      const StatusIcon = statusConfig.icon;
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
                            <span className="text-white/80 text-sm">{item.produto}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.dataCompra}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.proximoGiro}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.proximaVentilacao}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className="text-white/70 text-sm">{item.trocaTravesseiro}</span>
                          </td>
                          <td className="px-6 py-5">
                            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border flex items-center gap-1.5 ${statusConfig.bg} ${statusConfig.text} ${statusConfig.border}`}>
                              <StatusIcon className="w-3.5 h-3.5" />
                              {item.status}
                            </span>
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
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                Alertas de cuidados
              </h3>
              <div className="space-y-4">
                {[
                  { icon: RefreshCcw, text: "12 colchões precisam de giro", color: "text-amber-400" },
                  { icon: Wind, text: "8 precisam de ventilação", color: "text-blue-400" },
                  { icon: Bed, text: "31 travesseiros próximos da troca", color: "text-purple-400" },
                  { icon: HeartPulse, text: "5 clientes em período de recompra", color: "text-pink-400" }
                ].map((alerta, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 flex items-start gap-3">
                    <alerta.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${alerta.color}`} />
                    <p className="text-white/80 text-sm">{alerta.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                Regras de cuidado
              </h3>
              <div className="space-y-4">
                {[
                  { text: "Girar colchão periodicamente" },
                  { text: "Ventilar colchão conforme orientação" },
                  { text: "Trocar travesseiro no prazo recomendado" },
                  { text: "Acompanhar conforto do cliente" }
                ].map((regra, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    <p className="text-white/80 text-sm">{regra.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
