"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, UserCheck, TrendingUp, Star, Phone,
  Mail, MapPin, Award, Target, Calendar, Clock
} from "lucide-react";

export default function ConsultantProfilePage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Pré-visitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  return (
    <DashboardLayout
      title="Perfil do Consultor"
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
        <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center text-white font-bold text-3xl shadow-sm">
              M
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">Maria Souza</h1>
              <p className="text-blue-300/90 text-sm mt-1">Gerente de Loja • Zona Norte</p>
              <div className="flex flex-wrap gap-3 mt-3 justify-center md:justify-start">
                <span className="inline-flex rounded-full px-3 py-1 text-xs font-semibold bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
                  Ativo
                </span>
                <span className="inline-flex items-center gap-2 text-yellow-400">
                  <Star className="w-4 h-4 fill-yellow-400" />
                  Score de Performance: 89%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Pré-visitas", value: "142", icon: CalendarHeart },
            { label: "Conversão", value: "85%", icon: TrendingUp },
            { label: "Vendas", value: "89", icon: ShoppingCart },
            { label: "Ticket Médio", value: "R$ 1.250", icon: Star }
          ].map((stat, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-600/30 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-white/90" />
                </div>
                <h3 className="text-white font-bold text-2xl tracking-tight">{stat.value}</h3>
              </div>
              <p className="text-white/60 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-400" />
                Dados do consultor
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Nome", value: "Maria Souza" },
                  { label: "CPF", value: "123.456.789-00" },
                  { label: "Telefone", value: "(11) 98765-4321" },
                  { label: "WhatsApp", value: "(11) 98765-4321" },
                  { label: "Email", value: "maria.souza@drsleep.com.br" },
                  { label: "Cargo", value: "Gerente de Loja" },
                  { label: "Loja", value: "Zona Norte" },
                  { label: "Supervisor", value: "Carlos Pereira" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                Performance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Conversão", value: "85%" },
                  { label: "Ranking", value: "#2 na loja" },
                  { label: "Meta", value: "100 pré-visitas" },
                  { label: "Resultado", value: "142 pré-visitas" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-400" />
                Timeline
              </h2>
              <div className="space-y-4">
                {[
                  { date: "15/03/2023", event: "Admissão" },
                  { date: "22/04/2023", event: "Primeira venda" },
                  { date: "10/12/2023", event: "Melhor mês" },
                  { date: "05/02/2024", event: "Último treinamento" },
                  { date: "30/06/2024", event: "Próxima meta" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-white font-medium">{item.event}</p>
                      <p className="text-white/60 text-sm">{item.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-blue-400" />
                Metas
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-white font-medium text-sm">Meta mensal de pré-visitas</p>
                    <p className="text-white">142 / 100</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: "142%" }} />
                  </div>
                  <p className="text-white/60 text-xs mt-2 text-right">142% concluído</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-blue-400" />
                Resumo
              </h3>
              <div className="space-y-5">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Melhor indicador</p>
                  <p className="text-white font-semibold">Conversão</p>
                  <p className="text-white/60 text-xs">85% de taxa de conversão</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Última atividade</p>
                  <p className="text-white font-semibold">Pré-visita</p>
                  <p className="text-white/60 text-xs">Hoje às 10:30</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Clientes ativos</p>
                  <p className="text-white font-semibold">47</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Campanha atual</p>
                  <p className="text-white font-semibold">Promoção Verão 2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <Link
                  href="/empresa/consultores/1/editar"
                  className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm"
                >
                  Editar consultor
                </Link>
                {[
                  { label: "Ver agenda" },
                  { label: "Ver clientes" },
                  { label: "Relatório" }
                ].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all text-left shadow-sm"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
