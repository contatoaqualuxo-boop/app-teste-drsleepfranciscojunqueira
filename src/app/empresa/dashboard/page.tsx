"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import {
  Home,
  Users,
  ShoppingCart,
  ShieldCheck,
  CalendarHeart,
  Bell,
  Settings,
  ChevronLeft,
  LayoutDashboard,
  Store,
  FileText,
  Clock
} from "lucide-react";
import { createClient } from "@/lib/supabase";

interface Company {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
}

interface Store {
  id: string;
  name: string;
}

export default function CompanyDashboardPage() {
  const supabase = useMemo(() => createClient(), []);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [company, setCompany] = useState<Company | null>(null);
  const [stores, setStores] = useState<Store[]>([]);
  const [metrics, setMetrics] = useState({
    customers: 0,
    products: 0,
    warranties: 0,
    previsitas: 0,
    users: 0,
    lastAccess: new Date()
  });

  useEffect(() => {
    async function fetchData() {
      try {
        // Get current user to find company
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          return;
        }

        // Get user's company
        const { data: userData } = await supabase
          .from("users")
          .select("company_id")
          .eq("id", user.id)
          .single();
        
        if (userData?.company_id) {
          // Get company details
          const { data: companyData } = await supabase
            .from("companies")
            .select("*")
            .eq("id", userData.company_id)
            .single();
          
          setCompany(companyData || null);

          // Get company stores
          const { data: storesData } = await supabase
            .from("stores")
            .select("id, name")
            .eq("company_id", userData.company_id)
            .eq("is_active", true);
          
          setStores(storesData || []);

          // Fetch metrics for the company
          const [
            customersCount,
            productsCount,
            warrantiesCount,
            usersCount
          ] = await Promise.all([
            supabase.from("users").select("id", { count: "exact", head: true })
              .eq("company_id", userData.company_id)
              .eq("is_active", true),
            supabase.from("products").select("id", { count: "exact", head: true })
              .eq("company_id", userData.company_id)
              .eq("is_active", true),
            supabase.from("user_products").select("id", { count: "exact", head: true })
              .eq("company_id", userData.company_id),
            supabase.from("users").select("id", { count: "exact", head: true })
              .eq("company_id", userData.company_id)
              .eq("is_active", true)
          ]);

          setMetrics({
            customers: customersCount.count || 0,
            products: productsCount.count || 0,
            warranties: warrantiesCount.count || 0,
            previsitas: 0,
            users: usersCount.count || 0,
            lastAccess: new Date()
          });
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [supabase]);

  const showToast = (message: string) => {
    setToast(message);
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
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <LayoutDashboard className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="text-white font-black text-lg">{company?.name || "Empresa"}</p>
            <p className="text-blue-400 text-xs font-medium">Painel</p>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 p-4 space-y-1">
          {/* Principal */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Principal</p>
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <Link href="/empresa/clientes" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Users className="w-5 h-5" />
              <span>Clientes</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/produtos" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <ShoppingCart className="w-5 h-5" />
              <span>Produtos</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/garantias" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
              <span>Garantias</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
          </div>

          {/* Outros */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Outros</p>
            <Link href="/empresa/lojas" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Store className="w-5 h-5" />
              <span>Lojas</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/documentos" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <FileText className="w-5 h-5" />
              <span>Documentos</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/previsitas" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <CalendarHeart className="w-5 h-5" />
              <span>Prévisitas</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/configuracoes" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
          </div>
        </div>

        {/* Help */}
        <div className="p-4 border-t border-white/10">
          <div className="bg-blue-600/10 border border-blue-500/30 rounded-xl p-4">
            <p className="text-white font-medium text-sm mb-1">Suporte Prévisita</p>
            <p className="text-blue-200/70 text-xs">Entre em contato com nossa equipe</p>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Topbar */}
        <div className="sticky top-0 z-40 bg-[#020617]/95 backdrop-blur-xl border-b border-white/10 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <p className="text-white font-medium text-lg">Dashboard</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => showToast("Notificações em desenvolvimento")} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
                <Bell className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1">
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">Bem-vindo ao Painel</h2>
              <p className="text-blue-100/70 text-sm mt-1">{company?.name || "Sua empresa"}</p>
            </div>
          </div>

          {/* Metrics Cards */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 animate-pulse" />
                    <div className="flex-1 space-y-2">
                      <div className="w-32 h-4 bg-white/10 rounded animate-pulse" />
                      <div className="w-20 h-3 bg-white/10 rounded animate-pulse" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Clientes */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-3xl">{metrics.customers}</h3>
                    <p className="text-white/70 text-sm">Clientes</p>
                  </div>
                </div>
              </div>

              {/* Produtos */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center flex-shrink-0">
                    <ShoppingCart className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-3xl">{metrics.products}</h3>
                    <p className="text-white/70 text-sm">Produtos</p>
                  </div>
                </div>
              </div>

              {/* Garantias */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-3xl">{metrics.warranties}</h3>
                    <p className="text-white/70 text-sm">Garantias</p>
                  </div>
                </div>
              </div>

              {/* Prévisitas */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/30 to-pink-500/30 flex items-center justify-center flex-shrink-0">
                    <CalendarHeart className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-3xl">{metrics.previsitas}</h3>
                    <p className="text-white/70 text-sm">Prévisitas</p>
                  </div>
                </div>
              </div>

              {/* Usuários */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500/30 to-violet-500/30 flex items-center justify-center flex-shrink-0">
                    <Users className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-3xl">{metrics.users}</h3>
                    <p className="text-white/70 text-sm">Usuários</p>
                  </div>
                </div>
              </div>

              {/* Último Acesso */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-500/30 to-red-500/30 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-white/60" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{metrics.lastAccess.toLocaleDateString('pt-BR')}</h3>
                    <p className="text-white/70 text-sm">Último acesso</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2026 Plataforma Prévisita - Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
}