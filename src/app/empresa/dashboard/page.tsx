"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Home, Users, ShoppingCart, ShieldCheck, Bell, Settings, ChevronLeft, LayoutDashboard, Store, FileText, CalendarHeart } from "lucide-react";
import Link from "next/link";

export default function CompanyDashboardPage() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const, isActive: true },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    { label: "Produtos", href: "/empresa/produtos", icon: ShoppingCart, group: "principal" as const },
    { label: "Garantias", href: "/empresa/garantias", icon: ShieldCheck, group: "principal" as const },
    { label: "Lojas", href: "/empresa/lojas", icon: Store, group: "outros" as const },
    { label: "Documentos", href: "/empresa/documentos", icon: FileText, group: "outros" as const },
    { label: "Prévisitas", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

  return (
    <DashboardLayout
      title="Dashboard"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <button className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
          <Bell className="w-5 h-5" />
        </button>
      }
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-black text-white">Dashboard</h1>
          <p className="text-blue-300 text-sm mt-1">Dr. Sleep + Sono™</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-white font-bold text-xl">Clientes</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-white font-bold text-xl">CRM</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-white font-bold text-xl">Financeiro</h3>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xl">
            <h3 className="text-white font-bold text-xl">IA</h3>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}