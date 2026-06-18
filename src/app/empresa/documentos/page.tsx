"use client";

import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  CalendarHeart,
  Bell,
  Settings,
  Store,
  FileText,
  Calendar,
  UserCheck,
  Gift,
  HeartPulse,
  Activity,
  Zap,
  Search,
  Plus,
  Download,
  FileCheck,
  File,
  FileArchive
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";

const mockDocuments = [
  {
    id: "1",
    name: "Contrato de Prestação de Serviços - Cliente X",
    type: "Contratos",
    date: "15/06/2026",
    size: "245 KB",
    status: "Ativo"
  },
  {
    id: "2",
    name: "Manual de Instalação Colchão Premium",
    type: "Manuais",
    date: "10/05/2026",
    size: "1.2 MB",
    status: "Ativo"
  },
  {
    id: "3",
    name: "Termo de Garantia Colchão Orthomol",
    type: "Garantias",
    date: "20/04/2026",
    size: "156 KB",
    status: "Ativo"
  },
  {
    id: "4",
    name: "Contrato de Consultoria Loja Centro",
    type: "Contratos",
    date: "05/03/2026",
    size: "189 KB",
    status: "Ativo"
  },
  {
    id: "5",
    name: "Manual de Uso Travesseiro Ergonômico",
    type: "Manuais",
    date: "12/02/2026",
    size: "890 KB",
    status: "Ativo"
  },
  {
    id: "6",
    name: "Termo de Garantia Cama Box King",
    type: "Garantias",
    date: "28/01/2026",
    size: "178 KB",
    status: "Ativo"
  }
];

const documentCategories = [
  { label: "Documentos ativos", icon: FileCheck, count: 24, color: "from-blue-500/30 to-cyan-500/30" },
  { label: "Contratos", icon: FileText, count: 12, color: "from-purple-500/30 to-pink-500/30" },
  { label: "Manuais", icon: File, count: 8, color: "from-emerald-500/30 to-green-500/30" },
  { label: "Garantias", icon: FileArchive, count: 4, color: "from-amber-500/30 to-orange-500/30" }
];

export default function DocumentosPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Consultores", href: "/empresa/consultores", icon: UserCheck, group: "principal" as const },
    { label: "CRM", href: "/empresa/crm", icon: UserCheck, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "principal" as const },
    { label: "Indicou Ganhou", href: "/empresa/indicou-ganhou", icon: Gift, group: "principal" as const },
    { label: "Cuidados do Sono", href: "/empresa/cuidados-sono", icon: HeartPulse, group: "principal" as const },
    { label: "Score Sono™", href: "/empresa/score-sono", icon: Activity, group: "principal" as const },
    { label: "Motor de Oportunidades™", href: "/empresa/oportunidades", icon: Zap, group: "principal" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const, isActive: true },
    { label: "Visitas a Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const }
  ];

  return (
    <DashboardLayout
      title="Documentos"
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
          <button className="flex items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-xl font-semibold shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all">
            <Plus className="w-4 h-4" />
            Novo Documento
          </button>
        </div>
      }
    >
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight">Documentos</h1>
          <p className="text-blue-300/90 text-sm mt-1">Gerencie todos os documentos da sua empresa</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {documentCategories.map((category, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl shadow-sm group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              <h3 className="text-white font-bold text-2xl">{category.count}</h3>
              <p className="text-white/60 text-sm mt-1">{category.label}</p>
            </div>
          ))}
        </div>

        {/* Documents List */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-white font-bold text-xl">Lista de Documentos</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10 bg-white/2.5">
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Documento</span>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Tipo</span>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Data</span>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Tamanho</span>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Status</span>
                  </th>
                  <th className="text-left px-6 py-4">
                    <span className="text-xs font-bold text-white/50 uppercase tracking-wider">Ação</span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {mockDocuments.map((doc) => (
                  <tr key={doc.id} className="group hover:bg-white/5 transition-all duration-300 cursor-pointer">
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-600/30 to-cyan-500/30 flex items-center justify-center text-white font-semibold shadow-sm">
                          <FileText className="w-5 h-5" />
                        </div>
                        <span className="text-white font-semibold">{doc.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-white/80 text-sm">{doc.type}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-white/60 text-sm flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-white/40" />
                        {doc.date}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="text-white/60 text-sm">{doc.size}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="px-4 py-2 rounded-full text-xs font-semibold border bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-6 py-5">
                      <button className="text-blue-400 text-sm hover:text-blue-300 flex items-center gap-2 font-semibold transition-all">
                        <Download className="w-4 h-4" />
                        Baixar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
