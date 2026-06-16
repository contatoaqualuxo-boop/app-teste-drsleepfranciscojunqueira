"use client";

import Link from "next/link";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import {
  Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronRight,
  Store, FileText, CalendarHeart, UserCheck, User, CheckCircle2
} from "lucide-react";

export default function NewClientPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const, isActive: true },
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
      title="Novo Cliente"
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
          <h1 className="text-3xl font-black text-white tracking-tight">Novo Cliente</h1>
          <p className="text-blue-300/90 text-sm mt-1">Cadastre um novo cliente na base da Dr. Sleep + Sono™.</p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2 space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                Dados pessoais
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Nome" },
                  { label: "CPF" },
                  { label: "Telefone" },
                  { label: "WhatsApp" },
                  { label: "Email" },
                  { label: "Data de nascimento" },
                  { label: "Cidade" },
                  { label: "Estado" }
                ].map((item, i) => (
                  <div key={i}>
                    <label className="text-white/60 text-xs uppercase tracking-wider block mb-1">{item.label}</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-blue-400" />
                Interesse comercial
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Produto de interesse" },
                  { label: "Origem do cliente" },
                  { label: "Consultor responsável" },
                  { label: "Loja vinculada" },
                  { label: "Status" },
                  { label: "Score inicial" }
                ].map((item, i) => (
                  <div key={i}>
                    <label className="text-white/60 text-xs uppercase tracking-wider block mb-1">{item.label}</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h2 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                Preferências
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { label: "Tipo de colchão" },
                  { label: "Faixa de investimento" },
                  { label: "Necessidade principal" },
                  { label: "Observações" }
                ].map((item, i) => (
                  <div key={i} className={i === 3 ? "sm:col-span-2" : ""}>
                    <label className="text-white/60 text-xs uppercase tracking-wider block mb-1">{item.label}</label>
                    <input
                      type="text"
                      placeholder=""
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500/30 transition-all"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-400" />
                Resumo
              </h3>
              <div className="space-y-5 mb-6">
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Campos obrigatórios</p>
                  <p className="text-white/80 text-sm">Nome, CPF, Email, Telefone</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Consultor responsável</p>
                  <p className="text-white/80 text-sm">A definir</p>
                </div>
                <div>
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Loja vinculada</p>
                  <p className="text-white/80 text-sm">A definir</p>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-2">Status inicial</p>
                  <p className="text-white font-semibold">Ativo</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-white font-semibold mb-3 text-sm">Checklist</h4>
                <div className="space-y-2">
                  {[
                    "Dados pessoais", "Interesse comercial", "Preferências"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-white/60">
                      <div className="w-4 h-4 border border-white/30 rounded flex items-center justify-center"></div>
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 shadow-sm">
              <h3 className="text-white font-bold text-lg mb-4">Ações rápidas</h3>
              <div className="space-y-3">
                <Link
                  href="/empresa/clientes"
                  className="w-full flex items-center justify-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 text-white/80 px-4 py-3.5 rounded-xl transition-all font-semibold shadow-sm"
                >
                  Cancelar
                </Link>
                <button className="w-full flex items-center justify-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-3.5 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
                  Salvar Cliente
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
