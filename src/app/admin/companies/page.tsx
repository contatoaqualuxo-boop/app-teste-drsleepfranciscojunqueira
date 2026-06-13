"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import {
  Home,
  Users,
  Store,
  Building2,
  ShieldCheck,
  Bell,
  Settings,
  ChevronLeft,
  LayoutDashboard,
  CheckCircle2,
  XCircle
} from "lucide-react";
import { createClient } from "@/lib/supabase";

interface Company {
  id: string;
  name: string;
  slug: string;
  logo_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function CompaniesPage() {
  const supabase = useMemo(() => createClient(), []);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data, error } = await supabase
          .from("companies")
          .select("*")
          .order("created_at", { ascending: false });
        
        if (error) {
          console.error("Error fetching companies:", error);
        } else {
          setCompanies(data || []);
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
            <p className="text-white font-black text-lg">Prévisita</p>
            <p className="text-blue-400 text-xs font-medium">Plataforma</p>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 p-4 space-y-1">
          {/* Principal */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Principal</p>
            <button onClick={() => showToast("Funcionalidade disponível")} className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </button>
            <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium">
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
              <div className="flex items-center gap-3">
                <button onClick={() => showToast("Voltar ao Dashboard")} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h1 className="text-white font-medium text-lg">Empresas</h1>
              </div>
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
          {/* Page Header */}
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black text-white">Todas as Empresas</h2>
              <p className="text-blue-100/70 text-sm mt-1">Gerencie as empresas da Plataforma Prévisita</p>
            </div>
          </div>

          {/* Companies Grid/Cards */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-32 h-4 bg-white/10 rounded animate-pulse"></div>
                      <div className="w-20 h-3 bg-white/10 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-white/10 rounded animate-pulse"></div>
                    <div className="w-2/3 h-3 bg-white/10 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : companies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {companies.map((company) => (
                <div key={company.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center overflow-hidden">
                      {company.logo_url ? (
                        <Image
                          src={company.logo_url}
                          alt={company.name}
                          fill
                          className="object-contain"
                          priority
                        />
                      ) : (
                        <Building2 className="w-7 h-7 text-white/60" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg truncate">{company.name}</h3>
                      <p className="text-blue-200/70 text-xs truncate">{company.slug}</p>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      company.is_active ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                    }`}>
                      {company.is_active ? (
                        <CheckCircle2 className="w-3 h-3 inline mr-1" />
                      ) : (
                        <XCircle className="w-3 h-3 inline mr-1" />
                      )}
                      {company.is_active ? "Ativa" : "Inativa"}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/40 text-xs">
                      Criada em: {new Date(company.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Building2 className="w-20 h-20 text-white/10 mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Nenhuma empresa cadastrada</h3>
              <p className="text-blue-100/60 text-sm max-w-md">
                Ainda não há empresas na Plataforma Prévisita. As funcionalidades de criação de empresas serão implementadas em breve.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10 text-center text-white/40 text-xs">
          © 2024 Plataforma Prévisita - Todos os direitos reservados.
        </div>
      </div>
    </main>
  );
}