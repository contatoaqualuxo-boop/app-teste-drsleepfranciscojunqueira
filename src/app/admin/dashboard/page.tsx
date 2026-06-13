"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Home,
  Users,
  Store,
  Building2,
  Bed,
  ShieldCheck,
  Bell,
  Settings,
  ChevronDown,
  TrendingUp,
  User,
  Plus,
  LayoutDashboard
} from "lucide-react";
import { createClient } from "@/lib/supabase";
import { useAuth } from "@/components/AuthProvider";

// Define types for our data
interface Company {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Store {
  id: string;
  company_id: string;
  name: string;
  address: string | null;
  phone: string | null;
  whatsapp: string | null;
  email: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface User {
  id: string;
  company_id: string | null;
  store_id: string | null;
  name: string;
  email: string;
  phone: string | null;
  avatar_url: string | null;
  last_login: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface Product {
  id: string;
  company_id: string;
  category_id: string | null;
  brand: string | null;
  name: string;
  model: string | null;
  description: string | null;
  warranty_months: number | null;
  estimated_lifespan_months: number | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function SuperAdminDashboardPage() {
  const { hasRole, isLoading: isAuthLoading } = useAuth();
  const supabase = useMemo(() => createClient(), []);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);
  const [stores, setStores] = useState<Store[]>([]);
  const [users, setUsers] = useState<User[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  // Fetch data from Supabase
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch companies
        const { data: companiesData, error: companiesError } = await supabase
          .from("companies")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (companiesError) {
          console.error("Error fetching companies:", companiesError);
        } else {
          setCompanies(companiesData || []);
        }

        // Fetch stores
        const { data: storesData, error: storesError } = await supabase
          .from("stores")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (storesError) {
          console.error("Error fetching stores:", storesError);
        } else {
          setStores(storesData || []);
        }

        // Fetch users
        const { data: usersData, error: usersError } = await supabase
          .from("users")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (usersError) {
          console.error("Error fetching users:", usersError);
        } else {
          setUsers(usersData || []);
        }

        // Fetch products
        const { data: productsData, error: productsError } = await supabase
          .from("products")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (productsError) {
          console.error("Error fetching products:", productsError);
        } else {
          setProducts(productsData || []);
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

  // Calculate metrics
  const totalCompanies = companies.length;
  const totalStores = stores.length;
  const totalUsers = users.length;
  const totalProducts = products.length;

  // Find Dr. Sleep as the founder company
  const founderCompany = companies.find(c => c.slug === "dr-sleep" || c.name.includes("Dr. Sleep"));

  // Count total clients (users who are clients - assuming all users are clients for now)
  const totalClients = totalUsers;

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
            <p className="text-white font-black text-lg">Prévisita</p>
            <p className="text-blue-400 text-xs font-medium">Plataforma</p>
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
            <button onClick={() => showToast("Funcionalidade será implementada em breve")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Building2 className="w-5 h-5" />
              <span>Empresas</span>
            </button>
            <button onClick={() => showToast("Funcionalidade será implementada em breve")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Store className="w-5 h-5" />
              <span>Lojas</span>
            </button>
            <button onClick={() => showToast("Funcionalidade será implementada em breve")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Users className="w-5 h-5" />
              <span>Usuários</span>
            </button>
            <button onClick={() => showToast("Funcionalidade será implementada em breve")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <ShieldCheck className="w-5 h-5" />
              <span>Permissões</span>
            </button>
          </div>

          {/* Configurações */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Configurações</p>
            <button onClick={() => showToast("Funcionalidade será implementada em breve")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Settings className="w-5 h-5" />
              <span>Configurações Globais</span>
            </button>
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
              <h1 className="text-white font-medium text-lg">Dashboard Super Admin</h1>
            </div>
            <div className="flex items-center gap-4">
              <button onClick={() => showToast("Notificações em desenvolvimento")} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
                <Bell className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 px-3 py-2 bg-white/5 rounded-xl border border-white/10">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500/30 to-blue-500/30 flex items-center justify-center">
                  <p className="text-white font-bold text-sm">SA</p>
                </div>
                <div className="text-left">
                  <p className="text-white font-medium text-xs">Super Admin</p>
                  <p className="text-white/40 text-[10px]">Plataforma Prévisita</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 space-y-6 flex-1">
          {/* Welcome */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">Olá, Super Admin!</h2>
              <p className="text-blue-100/70 text-sm mt-1">Bem-vindo ao painel de controle da Plataforma Prévisita</p>
            </div>
          </div>

          {/* KPIs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Empresas */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Empresas</p>
                <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-16 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : (
                <p className="text-3xl font-black text-white">{totalCompanies}</p>
              )}
            </div>

            {/* Lojas */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Lojas</p>
                <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
                  <Store className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-16 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : (
                <p className="text-3xl font-black text-white">{totalStores}</p>
              )}
            </div>

            {/* Usuários */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Usuários</p>
                <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                  <Users className="w-5 h-5 text-purple-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-16 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : (
                <p className="text-3xl font-black text-white">{totalUsers}</p>
              )}
            </div>

            {/* Clientes */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Clientes</p>
                <div className="w-10 h-10 rounded-full bg-yellow-600/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-yellow-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-16 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : (
                <p className="text-3xl font-black text-white">{totalClients}</p>
              )}
            </div>

            {/* Produtos */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white/60 text-sm">Produtos</p>
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Bed className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-16 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : (
                <p className="text-3xl font-black text-white">{totalProducts}</p>
              )}
            </div>

            {/* Cliente Fundador - Dr. Sleep */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-2xl p-5 hover:from-blue-600/20 hover:to-purple-600/20 transition-all">
              <div className="flex items-center justify-between mb-4">
                <p className="text-blue-200/80 text-sm">Cliente Fundador</p>
                <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              {isLoading ? (
                <div className="w-32 h-8 bg-white/10 rounded-lg animate-pulse"></div>
              ) : founderCompany ? (
                <p className="text-xl font-bold text-white truncate">{founderCompany.name}</p>
              ) : (
                <p className="text-white/60 text-sm">Dr. Sleep - Francisco Junqueira</p>
              )}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Recent Companies */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Empresas Recentes</p>
              </div>
              {isLoading ? (
                <div className="space-y-3">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
                      <div className="flex-1 space-y-2">
                        <div className="w-32 h-4 bg-white/10 rounded animate-pulse"></div>
                        <div className="w-24 h-3 bg-white/10 rounded animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : companies.length > 0 ? (
                <div className="space-y-3">
                  {companies.slice(0, 3).map((company) => (
                    <div key={company.id} className="flex items-center gap-3 p-3 bg-white/3 rounded-xl border border-white/5">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                        {company.logo_url ? (
                          <Image 
                            src={company.logo_url} 
                            alt={company.name} 
                            fill 
                            className="object-contain rounded-full"
                          />
                        ) : (
                          <Building2 className="w-5 h-5 text-white/60" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium text-sm">{company.name}</p>
                        <p className="text-white/40 text-xs">{new Date(company.created_at).toLocaleDateString('pt-BR')}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        company.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                      }`}>
                        {company.is_active ? "Ativa" : "Inativa"}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Building2 className="w-12 h-12 text-white/20 mx-auto mb-3" />
                  <p className="text-white/40 text-sm">Nenhuma empresa cadastrada ainda</p>
                </div>
              )}
            </div>

            {/* Platform Overview */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-medium text-lg">Visão Geral da Plataforma</p>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-blue-600/5 rounded-xl border border-blue-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-5 h-5 text-blue-400" />
                    <p className="text-white font-medium text-sm">Cliente Fundador</p>
                  </div>
                  <p className="text-blue-100/70 text-xs">Dr. Sleep - Francisco Junqueira é o primeiro cliente da Plataforma Prévisita e serve como referência para o desenvolvimento</p>
                </div>
                <div className="p-4 bg-purple-600/5 rounded-xl border border-purple-500/10">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-purple-400" />
                    <p className="text-white font-medium text-sm">Estrutura Multiempresa</p>
                  </div>
                  <p className="text-purple-100/70 text-xs">Plataforma preparada para atender múltiplas empresas e lojas com isolamento completo de dados</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2024 Plataforma Prévisita - Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
}
