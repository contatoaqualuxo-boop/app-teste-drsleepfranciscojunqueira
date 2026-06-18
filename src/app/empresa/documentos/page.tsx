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
  Store,
  FileText,
  Calendar,
  UserCheck,
  Gift,
  HeartPulse,
  Activity,
  Zap,
  LayoutDashboard,
  ChevronLeft
} from "lucide-react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { createClient } from "@/lib/supabase";

interface UserType {
  id: string;
  name: string;
  email: string;
}

interface ProductType {
  id: string;
  name: string;
}

interface DocumentType {
  id: string;
  company_id: string;
  user_product_id: string | null;
  user_id: string | null;
  document_type: string;
  file_name: string;
  file_path: string;
  file_url: string | null;
  mime_type: string | null;
  file_size_bytes: number | null;
  expires_at: string | null;
  created_at: string;
  users?: UserType;
}

export default function DocumentsPage() {
  const supabase = useMemo(() => createClient(), []);
  const [toast, setToast] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [documents, setDocuments] = useState<DocumentType[]>([]);

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
    { label: "Visitas à Loja", href: "/empresa/previsitas", icon: CalendarHeart, group: "outros" as const },
    { label: "Configurações", href: "/empresa/configuracoes", icon: Settings, group: "outros" as const },
  ];

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
          .from("documents")
          .select("*, users!left(*)")
          .eq("company_id", userData.company_id)
          .order("created_at", { ascending: false });
        
        if (error) {
          console.error("Error fetching documents:", error);
        } else {
          setDocuments(data || []);
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
    <DashboardLayout
      title="Documentos"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
      actions={
        <div className="flex items-center gap-3">
          <button onClick={() => showToast("Notificações em desenvolvimento")} className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white relative">
            <Bell className="w-5 h-5" />
          </button>
        </div>
      }
    >
      {/* Toast */}
      {toast && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl text-white font-medium">
          {toast}
        </div>
      )}

      <div className="space-y-6">
        {/* Page Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black text-white">Todos os Documentos</h2>
            <p className="text-blue-100/70 text-sm mt-1">Gerencie os documentos da sua empresa</p>
          </div>
        </div>

        {/* Documents */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
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
        ) : documents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white/60" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg truncate">{doc.file_name}</h3>
                    <p className="text-blue-200/70 text-xs truncate">{doc.document_type}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {doc.users && (
                    <div className="flex items-center gap-2 text-white/50 text-xs">
                      <Users className="w-3 h-3 flex-shrink-0" />
                      <span>{doc.users.name}</span>
                    </div>
                  )}
                  {doc.file_size_bytes && (
                    <div className="flex items-center gap-2 text-white/50 text-xs">
                      <span>{(doc.file_size_bytes / 1024).toFixed(2)} KB</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-white/50 text-xs">
                    <Calendar className="w-3 h-3 flex-shrink-0" />
                    <span>Adicionado em: {new Date(doc.created_at).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <FileText className="w-20 h-20 text-white/10 mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Nenhum documento</h3>
            <p className="text-blue-100/60 text-sm max-w-md">
              Ainda não há documentos na sua empresa. As funcionalidades de upload de documentos serão implementadas em breve.
            </p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}