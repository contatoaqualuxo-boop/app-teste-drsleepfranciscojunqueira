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
  Tags,
  Globe,
  Mail,
  Phone,
  Hash,
  Play
} from "lucide-react";
import { createClient } from "@/lib/supabase";

interface CompanySettings {
  id: string;
  company_id: string;
  app_name: string | null;
  company_name: string | null;
  logo_url: string | null;
  favicon_url: string | null;
  primary_color: string | null;
  secondary_color: string | null;
  whatsapp: string | null;
  instagram: string | null;
  facebook: string | null;
  youtube: string | null;
  website: string | null;
  previsita_url: string | null;
  loyalty_program_name: string | null;
  wallet_name: string | null;
  points_name: string | null;
  welcome_message: string | null;
  mattress_rotation_interval_days: number | null;
  reminder_days_before: number | null;
  support_email: string | null;
  support_phone: string | null;
  privacy_policy_url: string | null;
  terms_url: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export default function CompanySettingsPage() {
  const supabase = useMemo(() => createClient(), []);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [settings, setSettings] = useState<CompanySettings | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
          return;
        }

        const { data: userData } = await supabase
          .from("users")
          .select("company_id")
          .eq("id", user.id)
          .single();
        
        if (!userData?.company_id) {
          return;
        }

        const { data, error } = await supabase
          .from("settings")
          .select("*")
          .eq("company_id", userData.company_id)
          .single();
        
        if (error) {
          console.error("Error fetching settings:", error);
        } else {
          setSettings(data || null);
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
            <p className="text-white font-black text-lg">Empresa</p>
            <p className="text-blue-400 text-xs font-medium">Painel</p>
          </div>
        </div>

        {/* Nav */}
        <div className="flex-1 p-4 space-y-1">
          {/* Principal */}
          <div className="mb-6">
            <p className="text-white/40 text-xs uppercase tracking-wider px-3 mb-2">Principal</p>
            <Link href="/empresa/dashboard" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Home className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
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
            <Link href="/empresa/categorias" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <Tags className="w-5 h-5" />
              <span>Categorias</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/timeline" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <CalendarHeart className="w-5 h-5" />
              <span>Timeline</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/documentos" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
              <FileText className="w-5 h-5" />
              <span>Documentos</span>
              <ChevronLeft className="w-4 h-4 ml-auto text-white/40" />
            </Link>
            <Link href="/empresa/configuracoes" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-medium">
              <Settings className="w-5 h-5" />
              <span>Configurações</span>
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
                <Link href="/empresa/dashboard" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </Link>
                <h1 className="text-white font-medium text-lg">Configurações</h1>
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
              <h2 className="text-2xl font-black text-white">Configurações da Empresa</h2>
              <p className="text-blue-100/70 text-sm mt-1">Visualize as configurações atuais da sua empresa</p>
            </div>
          </div>

          {/* Settings Cards */}
          {isLoading ? (
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-32 h-4 bg-white/10 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : settings ? (
            <div className="space-y-4">
              {/* Identidade Visual */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-white/60" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Identidade Visual</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {settings.app_name && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Nome do Aplicativo</p>
                      <p className="text-white font-medium text-sm">{settings.app_name}</p>
                    </div>
                  )}
                  {settings.company_name && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Nome da Empresa</p>
                      <p className="text-white font-medium text-sm">{settings.company_name}</p>
                    </div>
                  )}
                  {settings.primary_color && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Cor Primária</p>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full border border-white/10"
                          style={{ backgroundColor: settings.primary_color }}
                        />
                        <span className="text-white font-medium text-sm">{settings.primary_color}</span>
                      </div>
                    </div>
                  )}
                  {settings.secondary_color && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Cor Secundária</p>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full border border-white/10"
                          style={{ backgroundColor: settings.secondary_color }}
                        />
                        <span className="text-white font-medium text-sm">{settings.secondary_color}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Contatos e Redes Sociais */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-white/60" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Contatos e Redes Sociais</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {settings.support_email && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">E-mail de Suporte</p>
                        <p className="text-white font-medium text-sm">{settings.support_email}</p>
                      </div>
                    </div>
                  )}
                  {settings.support_phone && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">Telefone de Suporte</p>
                        <p className="text-white font-medium text-sm">{settings.support_phone}</p>
                      </div>
                    </div>
                  )}
                  {settings.whatsapp && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">WhatsApp</p>
                        <p className="text-white font-medium text-sm">{settings.whatsapp}</p>
                      </div>
                    </div>
                  )}
                  {settings.instagram && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Hash className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">Instagram</p>
                        <p className="text-white font-medium text-sm">{settings.instagram}</p>
                      </div>
                    </div>
                  )}
                  {settings.facebook && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Hash className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">Facebook</p>
                        <p className="text-white font-medium text-sm">{settings.facebook}</p>
                      </div>
                    </div>
                  )}
                  {settings.youtube && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5 flex items-center gap-2">
                      <Play className="w-4 h-4 text-white/40" />
                      <div>
                        <p className="text-white/40 text-xs">YouTube</p>
                        <p className="text-white font-medium text-sm">{settings.youtube}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Programa de Fidelidade */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-white/60" />
                  </div>
                  <h3 className="text-white font-bold text-lg">Programa de Fidelidade</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {settings.loyalty_program_name && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Nome do Programa</p>
                      <p className="text-white font-medium text-sm">{settings.loyalty_program_name}</p>
                    </div>
                  )}
                  {settings.wallet_name && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Nome da Carteira</p>
                      <p className="text-white font-medium text-sm">{settings.wallet_name}</p>
                    </div>
                  )}
                  {settings.points_name && (
                    <div className="p-4 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs">Nome dos Pontos</p>
                      <p className="text-white font-medium text-sm">{settings.points_name}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <Settings className="w-20 h-20 text-white/10 mb-4" />
              <h3 className="text-white font-bold text-xl mb-2">Nenhuma configuração encontrada</h3>
              <p className="text-blue-100/60 text-sm max-w-md">
                As configurações da sua empresa ainda não foram definidas. As funcionalidades de edição serão implementadas em breve.
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