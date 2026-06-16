"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { 
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight, 
  LayoutDashboard, Store, FileText, CalendarHeart, Search, User, 
  TrendingUp, Zap, CreditCard, Calendar, Sparkles, Gift, 
  Target, MessageSquare, Clock, Activity, CheckCircle2, Plus 
} from "lucide-react";
import Link from "next/link";

export default function CompanyDashboardPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const, isActive: true },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: User, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: MessageSquare, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Bom dia";
    if (hour < 18) return "Boa tarde";
    return "Boa noite";
  };

  const recentActivities = [
    { id: 1, user: "Maria Silva", action: "realizou uma pré-visita", time: "15 minutos atrás", avatar: "M" },
    { id: 2, user: "João Pereira", action: "cadastrou um novo cliente", time: "1 hora atrás", avatar: "J" },
    { id: 3, user: "Ana Costa", action: "finalizou uma venda", time: "3 horas atrás", avatar: "A" },
    { id: 4, user: "Carlos Mendes", action: "adicionou uma tarefa", time: "5 horas atrás", avatar: "C" },
  ];

  const upcomingTasks = [
    { id: 1, title: "Ligar para cliente X", date: "Hoje, 16:00", done: false },
    { id: 2, title: "Atualizar planos de fidelidade", date: "Amanhã, 10:00", done: false },
    { id: 3, title: "Enviar relatório de vendas", date: "Amanhã, 14:00", done: true },
  ];

  return (
    <DashboardLayout
      title="Dashboard"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <div className="flex items-center gap-3">
          <div className="relative hidden sm:flex">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="pl-9 pr-4 py-2 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30" 
            />
          </div>
          <button className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full" />
          </button>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
            FJ
          </div>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Header Premium */}
        <div>
          <p className="text-blue-300 text-sm font-medium">{getGreeting()}</p>
          <h1 className="text-4xl font-black text-white mt-1">Bem-vindo à Dr. Sleep + Sono™</h1>
        </div>

        {/* Indicadores Superiores */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { label: "Clientes", value: "1,234", icon: Users, color: "from-blue-500/30 to-cyan-500/30", trend: "+12%" },
            { label: "Vendas", value: "R$ 45,678", icon: CreditCard, color: "from-emerald-500/30 to-green-500/30", trend: "+8%" },
            { label: "Leads", value: "567", icon: Target, color: "from-purple-500/30 to-pink-500/30", trend: "+23%" },
            { label: "Conversão", value: "24,5%", icon: TrendingUp, color: "from-amber-500/30 to-orange-500/30", trend: "+3%" },
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white/80" />
                </div>
                <span className="text-xs font-medium text-emerald-400">{stat.trend}</span>
              </div>
              <h3 className="text-white font-bold text-2xl">{stat.value}</h3>
              <p className="text-white/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Grid Premium Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[ 
            { label: "Clientes", icon: Users, color: "from-blue-500 to-blue-600" },
            { label: "CRM", icon: MessageSquare, color: "from-purple-500 to-purple-600" },
            { label: "Financeiro", icon: CreditCard, color: "from-emerald-500 to-emerald-600" },
            { label: "Agenda", icon: Calendar, color: "from-amber-500 to-amber-600" },
            { label: "IA", icon: Sparkles, color: "from-pink-500 to-rose-600" },
            { label: "Sistema de Fidelidade", icon: Gift, color: "from-cyan-500 to-teal-600" },
            { label: "Pré-visitas", icon: CalendarHeart, color: "from-indigo-500 to-violet-600" },
            { label: "Campanhas", icon: Target, color: "from-red-500 to-orange-600" },
          ].map((card, i) => (
            <Link 
              key={i} 
              href="#" 
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg shadow-black/20`}>
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-bold text-lg">{card.label}</h3>
                </div>
                <ChevronRight className="w-5 h-5 text-white/40 group-hover:text-white/80 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>

        {/* Gráfico Fictício + Seções */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gráfico Fictício */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Desempenho de Vendas</h3>
              <button className="text-blue-400 text-sm hover:text-blue-300">Ver detalhes</button>
            </div>
            <div className="h-64 flex items-end justify-between gap-2 px-2">
              {[40, 65, 45, 80, 60, 90, 70].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-gradient-to-t from-blue-600/50 to-purple-600/50 rounded-t-lg hover:from-blue-600/70 hover:to-purple-600/70 transition-all"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-white/40 text-xs mt-3 px-2">
              {["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"].map((month, i) => (
                <span key={i}>{month}</span>
              ))}
            </div>
          </div>

          {/* Próximas Tarefas */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Próximas tarefas</h3>
              <button className="w-8 h-8 rounded-lg bg-white/10 border border-white/10 flex items-center justify-center">
                <Plus className="w-4 h-4 text-white/60" />
              </button>
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task) => (
                <div key={task.id} className="flex items-start gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${task.done ? "bg-emerald-500/30 border-emerald-500/50" : "border-white/20"}`}>
                    {task.done && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm ${task.done ? "text-white/40 line-through" : "text-white"}`}>
                      {task.title}
                    </p>
                    <p className="text-white/40 text-xs mt-1 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {task.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Atividades Recentes */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">Atividades Recentes</h3>
            <button className="text-blue-400 text-sm hover:text-blue-300">Ver todas</button>
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                  {activity.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}