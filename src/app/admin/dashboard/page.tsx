"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Home,
  Users,
  Bed,
  ShoppingCart,
  Share2,
  ShieldCheck,
  Gift,
  Bell,
  FileText,
  Settings,
  Store,
  User,
  ChevronDown,
  Calendar,
  UserCircle,
  Star,
  Clock,
  TrendingUp,
  CheckCircle2,
  XCircle,
  Plus,
  Edit,
  Send,
  GiftIcon
} from "lucide-react";

export default function AdminDashboardPage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = () => {
    setToast("Funcionalidade será conectada futuramente via VPS.");
    setTimeout(() => setToast(null), 4000);
  };

  return (
    <main className="min-h-screen bg-[#020617] relative flex overflow-hidden">
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl text-white font-medium">
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <div className="w-72 bg-[#03091c] border-r border-white/10 flex-shrink-0 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-white/10 flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <Bed className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-black text-lg">Dr. Sleep</p>
            <p className="text-blue-400 text-xs font-medium">+ Sono™</p>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 p-4 space-y-1">
          {/* Principal */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Principal</p>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Users className="w-5 h-5" />
              <span>Clientes</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Bed className="w-5 h-5" />
              <span>Colchões</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <ShoppingCart className="w-5 h-5" />
              <span>Vendas</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Share2 className="w-5 h-5" />
              <span>Indicações</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
              <span>Cuidados</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Gift className="w-5 h-5" />
              <span>Pontos e Recompensas</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Bell className="w-5 h-5" />
              <span>Notificações</span>
            </button>
          </div>

          {/* Relatórios */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Relatórios</p>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <FileText className="w-5 h-5" />
              <span>Relatórios</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <TrendingUp className="w-5 h-5" />
              <span>Analytics</span>
            </button>
          </div>

          {/* Configurações */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Configurações</p>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Store className="w-5 h-5" />
              <span>Lojas</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <UserCircle className="w-5 h-5" />
              <span>Usuários</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span>Permissões</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
            </button>
            <button onClick={showToast} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span>Integrações</span>
            </button>
          </div>
        </div>

        {/* Help */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4">
            <p className="text-white font-medium text-sm mb-1">Precisa de ajuda?</p>
            <p className="text-blue-200/70 text-xs">Acesse nossa central de ajuda</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Topbar */}
        <div className="sticky top-0 z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-white font-medium text-lg">Dashboard</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={showToast} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
                <Bell className="w-5 h-5" />
                <div className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></div>
              </button>
              <div className="flex items-center gap-4 pl-4 border-l border-white/10">
                <div className="text-right">
                  <p className="text-white font-medium text-sm">Loja atual</p>
                  <div className="flex items-center gap-1 text-blue-400 text-xs">
                    <span>Dr. Sleep Ribeirão Preto</span>
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                    <p className="text-white font-bold text-sm">AD</p>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-medium text-xs">Admin</p>
                    <p className="text-white/40 text-[10px]">Administrador</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
                <Calendar className="w-4.5 h-4.5 text-white/60" />
                <p className="text-white/60 text-xs">01/06/2024 - 30/06/2024</p>
              </div>
              <button onClick={showToast} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
          {/* Demo Banner */}
          <div className="mt-3 text-center text-xs text-white/40 italic">
            Modo demonstração — painel administrativo será conectado futuramente via VPS.
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1">
          {/* Welcome */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">Olá, Admin!</h2>
              <p className="text-blue-100/70 text-sm mt-1">Bem-vindo ao painel administrativo do Dr. Sleep + Sono™</p>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-5 gap-4">
            {/* Clientes Cadastrados */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Clientes cadastrados</p>
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-black text-white">1.248</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12% em relação ao mês anterior</span>
              </div>
            </div>
            {/* Colchões Vendidos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Colchões vendidos</p>
                <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Bed className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <p className="text-3xl font-black text-white">1.485</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+8% em relação ao mês anterior</span>
              </div>
            </div>
            {/* Indicações */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Indicações</p>
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              <p className="text-3xl font-black text-white">328</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+15% em relação ao mês anterior</span>
              </div>
            </div>
            {/* Pontos Distribuídos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Pontos distribuídos</p>
                <div className="w-10 h-10 rounded-full bg-yellow-600/20 flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              <p className="text-3xl font-black text-white">245.780</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+18% em relação ao mês anterior</span>
              </div>
            </div>
            {/* Resgates Realizados */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Resgates realizados</p>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Gift className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <p className="text-3xl font-black text-white">156</p>
              <div className="flex items-center gap-1 mt-2 text-emerald-400 text-xs font-medium">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+10% em relação ao mês anterior</span>
              </div>
            </div>
          </div>

          {/* Charts & Atalhos */}
          <div className="grid grid-cols-12 gap-4">
            {/* Vendas de Colchões */}
            <div className="col-span-6 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Vendas de colchões</p>
                <div className="flex items-center gap-2">
                  <button onClick={showToast} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-white/60 text-xs font-medium">
                    Este mês
                  </button>
                  <button onClick={showToast} className="px-3 py-1.5 bg-white/10 border border-white/10 rounded-lg text-white text-xs font-medium">
                    Últimos 30 dias
                  </button>
                </div>
              </div>
              {/* Fake Chart */}
              <div className="relative h-64 bg-white/1 rounded-xl p-4 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between py-4 text-white/30 text-xs w-8">
                  <span>250</span>
                  <span>200</span>
                  <span>150</span>
                  <span>100</span>
                  <span>50</span>
                  <span>0</span>
                </div>
                <div className="ml-8 h-full flex items-end justify-between gap-2 relative">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between py-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-full border-t border-white/5"></div>
                    ))}
                  </div>
                  {/* Bars */}
                  {[50, 80, 120, 90, 100, 85, 95, 110, 130, 125, 140, 135, 150, 145, 130, 120, 110, 130, 145, 155, 140, 160, 150, 135, 120, 115, 130, 125, 150, 180, 160].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end relative z-10">
                      <div 
                        className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg opacity-80"
                        style={{height: `${(h/250)*100}%`}}
                      ></div>
                    </div>
                  ))}
                </div>
                {/* Axis X */}
                <div className="absolute left-8 right-0 bottom-2 flex justify-between text-white/30 text-[10px] px-1">
                  <span>01</span>
                  <span>05</span>
                  <span>10</span>
                  <span>15</span>
                  <span>20</span>
                  <span>25</span>
                  <span>30</span>
                </div>
              </div>
            </div>
            {/* Clientes por Status */}
            <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Clientes por status</p>
              </div>
              <div className="flex items-center justify-center gap-6">
                {/* Fake Donut */}
                <div className="relative w-36 h-36">
                  <div className="absolute inset-0 rounded-full border-8 border-transparent border-t-emerald-500 border-r-emerald-500 border-b-emerald-500 border-l-yellow-500"></div>
                  <div className="absolute inset-4 rounded-full bg-[#03091c] flex flex-col items-center justify-center">
                    <p className="text-2xl font-black text-white">1.248</p>
                    <p className="text-white/40 text-xs">Total</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                    <p className="text-white/80 text-sm"><span className="text-white font-medium">892</span> (71%) Ativos</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <p className="text-white/80 text-sm"><span className="text-white font-medium">256</span> (21%) Inativos</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <p className="text-white/80 text-sm"><span className="text-white font-medium">100</span> (8%) Risco de churn</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Atalhos Rápidos */}
            <div className="col-span-3 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Atalhos rápidos</p>
              </div>
              <div className="space-y-2">
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <User className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Novo cliente</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <Bed className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Novo colchão</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <ShoppingCart className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Registrar venda</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <Send className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Enviar notificação</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <Edit className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Gerenciar cuidados</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
                <button onClick={showToast} className="w-full flex items-center gap-3 px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all">
                  <GiftIcon className="w-4.5 h-4.5 text-white/50" />
                  <span className="text-white/80 text-sm">Gerenciar recompensas</span>
                  <ChevronDown className="w-4 h-4 text-white/40 ml-auto" />
                </button>
              </div>
            </div>
          </div>

          {/* Lists */}
          <div className="grid grid-cols-12 gap-4">
            {/* Indicações Recentes */}
            <div className="col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Indicações recentes</p>
                <button onClick={showToast} className="text-blue-400 text-xs font-medium">Ver todas</button>
              </div>
              <div className="space-y-3">
                {[
                  {nome: "Maria Silva", indicado: "João Silva", status: "Pendente", tempo: "Há 2h"},
                  {nome: "Carlos Souza", indicado: "Ana Clara", status: "Pendente", tempo: "Há 5h"},
                  {nome: "Juliana Lima", indicado: "Pedro Santos", status: "Comprou", tempo: "Há 1d"},
                  {nome: "Rafael Costa", indicado: "Fernanda Rocha", status: "Pago", tempo: "Há 2d"},
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                      <User className="w-5 h-5 text-white/60" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{item.nome}</p>
                      <p className="text-white/40 text-xs">Indicou para {item.indicado}</p>
                    </div>
                    <div className="text-right">
                      <p className={`text-xs font-medium ${
                        item.status === "Pago" ? "text-emerald-400" : 
                        item.status === "Comprou" ? "text-green-400" : 
                        "text-yellow-400"
                      }`}>{item.status}</p>
                      <p className="text-white/30 text-[10px]">{item.tempo}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cuidados Pendentes */}
            <div className="col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Cuidados pendentes</p>
                <button onClick={showToast} className="text-blue-400 text-xs font-medium">Ver todas</button>
              </div>
              <div className="space-y-3">
                {[
                  {servico: "Giro do colchão", cliente: "156 clientes", status: "Atrasado", cor: "text-red-400"},
                  {servico: "Limpeza do colchão", cliente: "89 clientes", status: "Hoje", cor: "text-yellow-400"},
                  {servico: "Aspiração", cliente: "212 clientes", status: "Em 2 dias", cor: "text-blue-400"},
                  {servico: "Ventilação do quarto", cliente: "178 clientes", status: "Em 3 dias", cor: "text-blue-400"},
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.status === "Atrasado" ? "bg-red-600/20" : 
                      item.status === "Hoje" ? "bg-yellow-600/20" : 
                      "bg-blue-600/20"
                    }`}>
                      <Clock className={`w-5 h-5 ${
                        item.status === "Atrasado" ? "text-red-400" : 
                        item.status === "Hoje" ? "text-yellow-400" : 
                        "text-blue-400"
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium text-sm">{item.servico}</p>
                      <p className="text-white/40 text-xs">{item.cliente}</p>
                    </div>
                    <p className={`text-xs font-medium ${item.cor}`}>{item.status}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Produtos */}
            <div className="col-span-4 bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Top produtos</p>
                <button onClick={showToast} className="text-blue-400 text-xs font-medium">Ver todas</button>
              </div>
              <div className="space-y-3">
                {[
                  {nome: "Dr. Sleep Infinity", vendas: "845 vendas", percentual: 43},
                  {nome: "Dr. Sleep Prime", vendas: "412 vendas", percentual: 28},
                  {nome: "Dr. Sleep Max", vendas: "298 vendas", percentual: 20},
                  {nome: "Dr. Sleep Comfort", vendas: "130 vendas", percentual: 9},
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-white/3 rounded-xl border border-white/5 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                        <Bed className="w-5 h-5 text-white/60" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{item.nome}</p>
                        <p className="text-white/40 text-xs">{item.vendas}</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{width: `${item.percentual}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2024 Dr. Sleep + Sono™ - Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
}
