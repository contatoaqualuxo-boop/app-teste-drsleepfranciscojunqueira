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
  Play,
  Palette,
  Image,
  Link as LinkIcon
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

export default function WhiteLabelPage() {
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
            <Link href="/empresa/identidade-visual" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 font-medium">
              <Palette className="w-5 h-5" />
              <span>Identidade Visual</span>
            </Link>
            <Link href="/empresa/configuracoes" className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-white/60 hover:bg-white/5 hover:text-white transition-all">
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
                <h1 className="text-white font-medium text-lg">Identidade Visual</h1>
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
              <h2 className="text-2xl font-black text-white">White Label</h2>
              <p className="text-purple-100/70 text-sm mt-1">Base da identidade visual da sua empresa</p>
            </div>
          </div>

          {/* Settings Cards */}
          {isLoading ? (
            <div className="space-y-6">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="w-40 h-5 bg-white/10 rounded animate-pulse"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[...Array(4)].map((_, j) => (
                      <div key={j} className="p-4 bg-white/3 rounded-xl border border-white/5">
                        <div className="w-24 h-3 bg-white/10 rounded animate-pulse mb-2"></div>
                        <div className="w-32 h-4 bg-white/10 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : settings ? (
            <div className="space-y-6">
              {/* Preview Card */}
              <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 border border-purple-500/20 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl">Preview da Identidade</h3>
                    <p className="text-purple-200/70 text-sm">Como sua marca aparecerá na plataforma</p>
                  </div>
                </div>
                <div className="bg-[#020617] rounded-2xl border border-white/10 p-6">
                  <div className="flex items-center gap-4">
                    {settings.logo_url ? (
                      <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                        <img src={settings.logo_url} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center">
                        <Image className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <div>
                      <p className="text-white font-black text-2xl">{settings.app_name || settings.company_name || "Prévisita"}</p>
                      <p className="text-purple-200/70 text-sm">{settings.company_name || "Empresa Exemplo"}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-6">
                    {settings.primary_color && (
                      <div className="flex-1">
                        <p className="text-white/40 text-xs mb-2">Cor Primária</p>
                        <div className="h-12 rounded-xl border border-white/10" style={{ backgroundColor: settings.primary_color }}></div>
                      </div>
                    )}
                    {settings.secondary_color && (
                      <div className="flex-1">
                        <p className="text-white/40 text-xs mb-2">Cor Secundária</p>
                        <div className="h-12 rounded-xl border border-white/10" style={{ backgroundColor: settings.secondary_color }}></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Identidade Visual */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-indigo-500/30 flex items-center justify-center flex-shrink-0">
                    <Image className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Identidade Visual</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {settings.app_name && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Nome do Aplicativo</p>
                      <p className="text-white font-semibold text-base">{settings.app_name}</p>
                    </div>
                  )}
                  {settings.company_name && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Nome da Empresa</p>
                      <p className="text-white font-semibold text-base">{settings.company_name}</p>
                    </div>
                  )}
                  {settings.logo_url && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Logo</p>
                      <div className="w-full h-20 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center overflow-hidden">
                        <img src={settings.logo_url} alt="Logo" className="max-h-full max-w-full object-contain" />
                      </div>
                    </div>
                  )}
                  {settings.primary_color && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Cor Primária</p>
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl border border-white/10"
                          style={{ backgroundColor: settings.primary_color }}
                        />
                        <span className="text-white font-semibold text-base font-mono">{settings.primary_color}</span>
                      </div>
                    </div>
                  )}
                  {settings.secondary_color && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5">
                      <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Cor Secundária</p>
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-12 h-12 rounded-xl border border-white/10"
                          style={{ backgroundColor: settings.secondary_color }}
                        />
                        <span className="text-white font-semibold text-base font-mono">{settings.secondary_color}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Links e Redes */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500/30 to-green-500/30 flex items-center justify-center flex-shrink-0">
                    <LinkIcon className="w-6 h-6 text-white/60" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Links e Redes Sociais</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {settings.website && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5 flex items-center gap-3">
                      <LinkIcon className="w-5 h-5 text-white/40 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Website</p>
                        <p className="text-white font-semibold text-sm truncate">{settings.website}</p>
                      </div>
                    </div>
                  )}
                  {settings.previsita_url && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5 flex items-center gap-3">
                      <LinkIcon className="w-5 h-5 text-white/40 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">URL Prévisita</p>
                        <p className="text-white font-semibold text-sm truncate">{settings.previsita_url}</p>
                      </div>
                    </div>
                  )}
                  {settings.instagram && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5 flex items-center gap-3">
                      <Hash className="w-5 h-5 text-white/40 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Instagram</p>
                        <p className="text-white font-semibold text-sm truncate">{settings.instagram}</p>
                      </div>
                    </div>
                  )}
                  {settings.facebook && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5 flex items-center gap-3">
                      <Hash className="w-5 h-5 text-white/40 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Facebook</p>
                        <p className="text-white font-semibold text-sm truncate">{settings.facebook}</p>
                      </div>
                    </div>
                  )}
                  {settings.youtube && (
                    <div className="p-5 bg-white/3 rounded-xl border border-white/5 flex items-center gap-3">
                      <Play className="w-5 h-5 text-white/40 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white/40 text-xs uppercase tracking-wider mb-1">YouTube</p>
                        <p className="text-white font-semibold text-sm truncate">{settings.youtube}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            // Empty State
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-indigo-500/20 flex items-center justify-center mb-6">
                <Palette className="w-12 h-12 text-purple-400/50" />
              </div>
              <h3 className="text-white font-bold text-2xl mb-3">Identidade Visual</h3>
              <p className="text-purple-100/60 text-sm max-w-lg mb-8">
                A identidade visual da sua empresa ainda não foi definida. As funcionalidades de edição estarão disponíveis em breve.
              </p>
              <div className="w-full max-w-md">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                  <p className="text-white/50 text-xs mb-4">Recursos que virão:</p>
                  <ul className="space-y-3 text-left">
                    <li className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      Upload de logo personalizado
                    </li>
                    <li className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      Escolha de cores da marca
                    </li>
                    <li className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      Configuração de domínio customizado
                    </li>
                  </ul>
                </div>
              </div>
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
