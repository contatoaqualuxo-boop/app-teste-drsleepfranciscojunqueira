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
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
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
            { label: "Clientes", icon: Users, color: "from-blue-500 to-blue-600", href: "/empresa/clientes" },
            { label: "CRM", icon: MessageSquare, color: "from-purple-500 to-purple-600", href: "/empresa/crm" },
            { label: "Financeiro", icon: CreditCard, color: "from-emerald-500 to-emerald-600", href: "/empresa/financeiro" },
            { label: "Agenda", icon: Calendar, color: "from-amber-500 to-amber-600", href: "/empresa/agenda" },
            { label: "IA", icon: Sparkles, color: "from-pink-500 to-rose-600", href: "/empresa/ia" },
            { label: "Sistema de Fidelidade", icon: Gift, color: "from-cyan-500 to-teal-600", href: "/empresa/programa-fidelidade" },
            { label: "Visitas à Loja", icon: CalendarHeart, color: "from-indigo-500 to-violet-600", href: "/empresa/previsitas" },
            { label: "Campanhas", icon: Target, color: "from-red-500 to-orange-600", href: "/empresa/campanhas" },
          ].map((card, i) => (
            <Link 
              key={i} 
              href={card.href} 
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

        {/* Novos Cards Premium */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Saúde Comercial */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Saúde Comercial</h3>
              <Activity className="w-6 h-6 text-blue-400" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Clientes ativos", value: "987", color: "from-emerald-500/30 to-green-500/30", status: "success" },
                { label: "Clientes inativos", value: "247", color: "from-amber-500/30 to-orange-500/30", status: "warning" },
                { label: "Leads aguardando", value: "89", color: "from-purple-500/30 to-pink-500/30", status: "info" },
                { label: "Clientes VIP", value: "156", color: "from-blue-500/30 to-cyan-500/30", status: "vip" }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-2 h-2 rounded-full ${
                      item.status === "success" ? "bg-emerald-400" :
                      item.status === "warning" ? "bg-amber-400" :
                      item.status === "vip" ? "bg-blue-400" : "bg-purple-400"
                    }`} />
                    <span className="text-white/60 text-sm">{item.label}</span>
                  </div>
                  <p className="text-white font-bold text-2xl">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance das Lojas */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Performance das Lojas</h3>
              <Store className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-4">
              {[
                { name: "Zona Norte", conversion: "32%", sales: 245, consultants: 8, performance: 85 },
                { name: "Centro", conversion: "28%", sales: 189, consultants: 6, performance: 70 },
                { name: "Zona Sul", conversion: "35%", sales: 278, consultants: 9, performance: 95 }
              ].map((store, i) => (
                <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-white font-semibold">{store.name}</h4>
                    <span className="text-emerald-400 text-sm font-medium">{store.conversion}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-3">
                    <span className="text-white/60">{store.sales} vendas</span>
                    <span className="text-white/60">{store.consultants} consultores</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
                      style={{ width: `${store.performance}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Produtos Mais Vendidos */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Produtos Mais Vendidos</h3>
              <ShoppingCart className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: "Colchão Premium Orthomol", sales: 89 },
                { rank: 2, name: "Travesseiro Pluma Natural", sales: 76 },
                { rank: 3, name: "Cama Box King Size", sales: 54 },
                { rank: 4, name: "Colchão Infantil Eco", sales: 45 },
                { rank: 5, name: "Protetor de Colchão", sales: 38 }
              ].map((product, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center text-white font-bold">
                    {product.rank}
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-medium">{product.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{product.sales}</p>
                    <p className="text-white/40 text-xs">unidades</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Alertas Inteligentes */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Alertas Inteligentes</h3>
              <Bell className="w-6 h-6 text-amber-400" />
            </div>
            <div className="space-y-3">
              {[
                { icon: Zap, text: "12 colchões precisam de giro", color: "text-amber-400" },
                { icon: Calendar, text: "31 travesseiros vencem este mês", color: "text-orange-400" },
                { icon: ShieldCheck, text: "7 garantias próximas do fim", color: "text-red-400" },
                { icon: Gift, text: "15 clientes fazem aniversário", color: "text-purple-400" },
                { icon: Users, text: "4 indicações aguardando validação", color: "text-blue-400" }
              ].map((alert, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4 border border-white/10">
                  <alert.icon className={`w-5 h-5 flex-shrink-0 ${alert.color}`} />
                  <p className="text-white/80 text-sm">{alert.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Ranking dos Consultores */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Ranking dos Consultores</h3>
              <Target className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-3">
              {[
                { rank: 1, name: "Mariana Costa", conversion: "42%", sales: 89, avatar: "M" },
                { rank: 2, name: "Ricardo Alves", conversion: "38%", sales: 76, avatar: "R" },
                { rank: 3, name: "Fernanda Lima", conversion: "35%", sales: 68, avatar: "F" },
                { rank: 4, name: "Carlos Souza", conversion: "31%", sales: 54, avatar: "C" },
                { rank: 5, name: "Juliana Rocha", conversion: "29%", sales: 48, avatar: "J" }
              ].map((consultor, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0">
                    {consultor.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                        {consultor.rank}
                      </span>
                      <p className="text-white text-sm font-medium">{consultor.name}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-emerald-400 font-bold">{consultor.conversion}</p>
                    <p className="text-white/40 text-xs">{consultor.sales} vendas</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resumo Financeiro */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-xl">Resumo Financeiro</h3>
              <CreditCard className="w-6 h-6 text-blue-400" />
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <p className="text-white/60 text-sm mb-1">Receita do mês</p>
                <p className="text-white font-bold text-3xl">R$ 89,540</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/60 text-xs mb-1">Meta</p>
                  <p className="text-white font-bold text-xl">R$ 100,000</p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <p className="text-white/60 text-xs mb-1">Percentual</p>
                  <p className="text-emerald-400 font-bold text-xl">89,5%</p>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-white/60 text-sm">Ticket médio</p>
                  <p className="text-white font-bold">R$ 3,450</p>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-gradient-to-r from-emerald-500 to-green-500 h-2 rounded-full" style={{ width: "89.5%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}