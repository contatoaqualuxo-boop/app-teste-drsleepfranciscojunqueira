"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Bell,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Gift,
  Home,
  Bed,
  User,
  Users,
  TrendingUp,
  Target,
  MoreHorizontal,
  ArrowRight,
  Zap
} from "lucide-react";

export default function ClientePage() {
  return (
    <main className="min-h-screen bg-[#020617] relative flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col">
        {/* Main Content */}
        <div className="flex-1">
          {/* Desktop Layout */}
          <div className="hidden lg:flex min-h-screen">
            {/* Left Side - Content */}
            <div className="flex-1 p-8 overflow-y-auto">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-4xl font-black text-white">Olá, Ana Carolina</h1>
                  <p className="text-blue-300 text-lg mt-2">Bem-vinda à sua área de cuidados do sono.</p>
                </div>
                <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Bell className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Quick Actions Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: "Meu colchão", icon: Bed, color: "from-blue-600 to-blue-700" },
                  { label: "Próxima ventilação", icon: Zap, color: "from-emerald-600 to-emerald-700" },
                  { label: "Próximo giro", icon: Clock, color: "from-amber-600 to-amber-700" },
                  { label: "Troca de travesseiro", icon: Gift, color: "from-purple-600 to-purple-700" },
                  { label: "Garantia", icon: ShieldCheck, color: "from-cyan-600 to-cyan-700" },
                  { label: "Cashback", icon: TrendingUp, color: "from-rose-600 to-rose-700" },
                  { label: "Indicou Ganhou", icon: Users, color: "from-indigo-600 to-indigo-700" },
                  { label: "Mais", icon: MoreHorizontal, color: "from-gray-600 to-gray-700" }
                ].map((action, i) => (
                  <button
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-4`}>
                      <action.icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-white font-bold text-lg">{action.label}</p>
                  </button>
                ))}
              </div>

              {/* Cuidados do Sono */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6">Cuidados do Sono</h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="relative">
                    {/* Timeline Line */}
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/10" />
                    
                    {/* Timeline Items */}
                    <div className="space-y-8">
                      {[
                        { label: "Compra realizada", date: "24/07/2024", status: "completed" },
                        { label: "Primeira ventilação", date: "10/08/2024", status: "completed" },
                        { label: "Giro recomendado", date: "15/11/2024", status: "completed" },
                        { label: "Troca de travesseiro", date: "15/01/2025", status: "upcoming" },
                        { label: "Revisão de conforto", date: "24/07/2025", status: "upcoming" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-4 relative pl-12">
                          <div className={`absolute left-0 w-12 h-12 rounded-full flex items-center justify-center ${
                            item.status === "completed" 
                              ? "bg-emerald-600/20 border border-emerald-500/30" 
                              : "bg-white/5 border border-white/10"
                          }`}>
                            {item.status === "completed" ? (
                              <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                            ) : (
                              <Clock className="w-6 h-6 text-white/50" />
                            )}
                          </div>
                          <div className="flex-1">
                            <p className={`text-lg font-bold ${item.status === "completed" ? "text-white" : "text-white/50"}`}>
                              {item.label}
                            </p>
                            <p className="text-white/40 text-sm mt-1">{item.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Indicou Ganhou */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Indicou Ganhou</h2>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  {/* Código único */}
                  <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 mb-6">
                    <p className="text-white/60 text-sm mb-2">Seu código único</p>
                    <p className="text-3xl font-black text-white tracking-wider">ANA.S160620261448</p>
                    <button className="mt-4 bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium hover:bg-white/20 transition-all">
                      Copiar código
                    </button>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { label: "Indicações realizadas", value: "12", color: "text-blue-400" },
                      { label: "Indicações aprovadas", value: "8", color: "text-emerald-400" },
                      { label: "Bônus disponível", value: "R$ 800", color: "text-amber-400" },
                      { label: "Ranking", value: "#45", color: "text-purple-400" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10">
                        <p className="text-white/60 text-xs mb-1">{stat.label}</p>
                        <p className={`text-2xl font-black ${stat.color}`}>{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Ranking Visual */}
                  <div>
                    <p className="text-white font-bold mb-4">Top 10 do mês</p>
                    <div className="space-y-3">
                      {[
                        { name: "Maria Silva", points: 2450, rank: 1 },
                        { name: "João Pereira", points: 2180, rank: 2 },
                        { name: "Ana Carolina", points: 1890, rank: 3 },
                        { name: "Carlos Mendes", points: 1650, rank: 4 },
                        { name: "Juliana Costa", points: 1420, rank: 5 }
                      ].map((person, i) => (
                        <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${
                          person.name === "Ana Carolina" 
                            ? "bg-blue-600/20 border-blue-500/30" 
                            : "bg-white/5 border-white/10"
                        }`}>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                            person.rank === 1 ? "bg-amber-500 text-black" :
                            person.rank === 2 ? "bg-gray-400 text-black" :
                            person.rank === 3 ? "bg-orange-700 text-white" :
                            "bg-white/10 text-white/60"
                          }`}>
                            {person.rank}
                          </div>
                          <div className="flex-1">
                            <p className={`font-bold ${person.name === "Ana Carolina" ? "text-blue-300" : "text-white"}`}>
                              {person.name}
                            </p>
                            <p className="text-white/40 text-sm">{person.points} pontos</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Painel Lateral */}
            <div className="w-96 bg-white/5 border-l border-white/10 p-8 overflow-y-auto">
              <h3 className="text-xl font-bold text-white mb-6">Resumo do cliente</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Cliente desde</p>
                  <p className="text-white font-bold text-lg">24 de julho de 2024</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Produto comprado</p>
                  <p className="text-white font-bold text-lg">Dr. Sleep Infinity</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Consultor</p>
                  <p className="text-white font-bold text-lg">Mariana Costa</p>
                </div>
                
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Loja</p>
                  <p className="text-white font-bold text-lg">Zona Norte</p>
                </div>
                
                <div className="pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 font-bold text-lg">Status VIP</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Link 
                    href="/home"
                    className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all font-semibold shadow-sm mb-3"
                  >
                    Voltar ao início
                  </Link>
                  <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                    Agendar atendimento
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden p-6 pb-32">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-black text-white">Olá, Ana Carolina</h1>
              <p className="text-blue-300 text-base mt-2">Bem-vinda à sua área de cuidados do sono.</p>
            </div>

            {/* Quick Actions Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Meu colchão", icon: Bed, color: "from-blue-600 to-blue-700" },
                { label: "Próxima ventilação", icon: Zap, color: "from-emerald-600 to-emerald-700" },
                { label: "Próximo giro", icon: Clock, color: "from-amber-600 to-amber-700" },
                { label: "Troca de travesseiro", icon: Gift, color: "from-purple-600 to-purple-700" },
                { label: "Garantia", icon: ShieldCheck, color: "from-cyan-600 to-cyan-700" },
                { label: "Cashback", icon: TrendingUp, color: "from-rose-600 to-rose-700" },
                { label: "Indicou Ganhou", icon: Users, color: "from-indigo-600 to-indigo-700" },
                { label: "Mais", icon: MoreHorizontal, color: "from-gray-600 to-gray-700" }
              ].map((action, i) => (
                <button
                  key={i}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 hover:border-white/20 transition-all text-left"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
                    <action.icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-white font-bold text-sm">{action.label}</p>
                </button>
              ))}
            </div>

            {/* Cuidados do Sono */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Cuidados do Sono</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="space-y-6">
                  {[
                    { label: "Compra realizada", date: "24/07/2024", status: "completed" },
                    { label: "Primeira ventilação", date: "10/08/2024", status: "completed" },
                    { label: "Giro recomendado", date: "15/11/2024", status: "completed" },
                    { label: "Troca de travesseiro", date: "15/01/2025", status: "upcoming" },
                    { label: "Revisão de conforto", date: "24/07/2025", status: "upcoming" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        item.status === "completed" 
                          ? "bg-emerald-600/20 border border-emerald-500/30" 
                          : "bg-white/5 border border-white/10"
                      }`}>
                        {item.status === "completed" ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <Clock className="w-5 h-5 text-white/50" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className={`font-bold ${item.status === "completed" ? "text-white" : "text-white/50"}`}>
                          {item.label}
                        </p>
                        <p className="text-white/40 text-sm">{item.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Indicou Ganhou */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-white mb-4">Indicou Ganhou</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-4 mb-4">
                  <p className="text-white/60 text-xs mb-2">Seu código único</p>
                  <p className="text-xl font-black text-white tracking-wider">ANA.S160620261448</p>
                  <button className="mt-3 w-full bg-white/10 border border-white/20 rounded-xl px-4 py-2 text-white text-sm font-medium">
                    Copiar código
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {[
                    { label: "Indicações", value: "12", color: "text-blue-400" },
                    { label: "Aprovadas", value: "8", color: "text-emerald-400" },
                    { label: "Bônus", value: "R$ 800", color: "text-amber-400" },
                    { label: "Ranking", value: "#45", color: "text-purple-400" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-white/5 rounded-xl p-3 border border-white/10">
                      <p className="text-white/60 text-xs mb-1">{stat.label}</p>
                      <p className={`text-xl font-black ${stat.color}`}>{stat.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resumo do Cliente */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Resumo do cliente</h2>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 space-y-4">
                {[
                  { label: "Cliente desde", value: "24 de julho de 2024" },
                  { label: "Produto", value: "Dr. Sleep Infinity" },
                  { label: "Consultor", value: "Mariana Costa" },
                  { label: "Loja", value: "Zona Norte" }
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-bold">{item.value}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <span className="text-emerald-400 font-bold">Status VIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 pb-4 pt-3 z-50">
          <div className="max-w-md mx-auto px-4">
            <div className="grid grid-cols-5 gap-2">
              <Link href="/home" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
                <Home className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Início</span>
              </Link>
              <Link href="/meu-colchao" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
                <Bed className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Meu Colchão</span>
              </Link>
              <Link href="/cliente" className="flex flex-col items-center justify-center p-2 text-blue-500">
                <User className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Área do Cliente</span>
              </Link>
              <Link href="/clube-do-sono" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
                <Gift className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Clube do Sono</span>
              </Link>
              <Link href="/minha-conta" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
                <User className="w-6 h-6" />
                <span className="text-xs font-medium mt-1">Minha Conta</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </main>
  );
}
