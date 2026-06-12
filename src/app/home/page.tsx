"use client";

import Link from "next/link";
import { useMemo } from "react";
import {
  Bell,
  User,
  Bed,
  Calendar,
  Star,
  Gift,
  Users,
  ShieldCheck,
  ChevronRight,
  Home,
  UserCircle,
  Rotate3D,
  CheckCircle2,
  Sparkles
} from "lucide-react";

import { useAuth } from "@/components/AuthProvider";

export default function HomePage() {
  const { user } = useAuth();
  const customerName = useMemo(() => {
    const metadataName = user?.user_metadata?.name;

    if (typeof metadataName === "string" && metadataName.trim()) {
      return metadataName.trim();
    }

    if (user?.email) {
      return user.email.split("@")[0];
    }

    return "Cliente";
  }, [user]);

  return (
    <main className="min-h-screen relative flex flex-col overflow-hidden pb-32" style={{ background: "var(--background)" }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 gap-6 max-w-md mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
              Olá, {customerName} 👋
            </p>
            <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>
              Seu descanso está sendo acompanhado.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}>
              <Bell className="w-5 h-5" />
            </button>
            <Link href="/minha-conta" className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", color: "var(--foreground)" }}>
              <UserCircle className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* TOP SUMMARY CARDS (3 columns) */}
        <div className="grid grid-cols-3 gap-3">
          {/* 1. Meu Colchão (kept the same as before) */}
          <Link href="/meu-colchao" className="col-span-1 rounded-2xl p-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center mb-3">
              <Bed className="w-5 h-5 text-blue-500" />
            </div>
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>Meu Colchão</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Dr. Sleep Infinity</p>
            <div className="flex items-center gap-1 mt-2 text-emerald-400">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span className="text-xs font-medium">Garantia ativa</span>
            </div>
            <div className="flex items-center gap-1 text-blue-400 text-xs font-medium mt-3">
              <span>Ver detalhes</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 2. Próximo Giro (NEW CONTENT) */}
          <Link href="/cuidados" className="col-span-1 rounded-2xl p-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center mb-3">
              <Rotate3D className="w-5 h-5 text-purple-500" />
            </div>
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>Próximo Giro</p>
            <p className="text-[10px] leading-tight mb-2" style={{ color: "var(--text-muted)" }}>
              Acompanhe a recomendação de rotação do seu colchão.
            </p>
            <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>Próximo giro:</p>
            <p className="text-xl font-black mb-2" style={{ color: "var(--foreground)" }}>12 dias</p>
            <p className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>Último realizado: há 78 dias</p>
            <p className="text-[10px] font-medium text-emerald-400 mb-2">Status: Dentro do prazo</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
              <div className="w-[72%] h-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>
            <div className="flex items-center gap-1 text-purple-400 text-xs font-medium">
              <span>Ver histórico</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>

          {/* 3. Dr. Pontos (NEW CONTENT) */}
          <Link href="/clube-do-sono" className="col-span-1 rounded-2xl p-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center mb-3">
              <Star className="w-5 h-5 text-emerald-500" />
            </div>
            <p className="font-semibold text-sm mb-1" style={{ color: "var(--foreground)" }}>Dr. Pontos</p>
            <p className="text-[10px] leading-tight mb-2" style={{ color: "var(--text-muted)" }}>
              Ganhe pontos através de cuidados, indicações e participação no Clube do Sono.
            </p>
            <p className="text-xl font-black mb-2" style={{ color: "var(--foreground)" }}>2450</p>
            <p className="text-[10px] mb-1" style={{ color: "var(--text-muted)" }}>Próximo benefício: 3000 pontos</p>
            <p className="text-[10px] font-medium text-emerald-400 mb-2">Faltam: 550 pontos</p>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mb-2">
              <div className="w-[82%] h-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-xs font-medium">
              <span>Ver recompensas</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </Link>
        </div>

        {/* LOWER CARDS (2 columns) */}
        <div className="grid grid-cols-2 gap-3">
          {/* 4. Cuidados Personalizados (NEW) */}
          <Link href="/cuidados" className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center mb-4">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <p className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Cuidados Personalizados</p>
            <p className="text-[10px] leading-tight mb-4" style={{ color: "var(--text-muted)" }}>
              Receba recomendações inteligentes para aumentar a vida útil do seu colchão.
            </p>
            <p className="text-xs font-medium text-amber-500 mb-1">Próxima ação:</p>
            <p className="text-sm font-semibold mb-2" style={{ color: "var(--foreground)" }}>Aspiração do colchão</p>
            <p className="text-xs font-medium text-emerald-400 mb-1">Status: Em dia</p>
            <p className="text-[10px] mb-3" style={{ color: "var(--text-muted)" }}>Próxima recomendação: 8 dias</p>
            <div className="flex items-center gap-1 text-amber-400 text-xs font-medium">
              <span>Ver recomendações</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 5. Clube do Sono (NEW) */}
          <Link href="/clube-do-sono" className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center mb-4">
              <Gift className="w-7 h-7 text-yellow-900" />
            </div>
            <p className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Clube do Sono</p>
            <p className="text-[10px] leading-tight mb-4" style={{ color: "var(--text-muted)" }}>
              Acumule benefícios exclusivos ao cuidar do seu sistema de sono.
            </p>
            <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Nível atual:</p>
            <p className="text-sm font-semibold text-yellow-500 mb-2">Sono Premium</p>
            <p className="text-xs font-medium mb-1" style={{ color: "var(--text-muted)" }}>Benefícios disponíveis:</p>
            <p className="text-xl font-black text-emerald-500 mb-1">3</p>
            <p className="text-xs mb-3" style={{ color: "var(--text-muted)" }}>Próxima recompensa: Travesseiro com desconto</p>
            <div className="flex items-center gap-1 text-yellow-500 text-xs font-medium">
              <span>Ver benefícios</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>

          {/* 6. Prévisita 360° (kept) */}
          <Link href="/previsita" className="col-span-2 rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
              <Rotate3D className="w-7 h-7 text-white" />
            </div>
            <p className="font-bold text-lg mb-1" style={{ color: "var(--foreground)" }}>Prévisita 360°</p>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Conheça cada detalhe da loja sem sair de casa!
            </p>
            <div className="mt-4 flex items-center gap-1 text-blue-400 text-xs font-medium">
              <span>Fazer tour virtual</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Banner (kept) */}
        <Link href="/indique-ganhe" className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-5 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <Gift className="w-12 h-12 text-yellow-500" />
            </div>
            <div className="flex-1">
            <p className="text-white font-bold text-lg">Indique um amigo e ganhe R$100</p>
          </div>
          </div>
          <button className="w-full mt-4 bg-white text-blue-600 font-bold py-3 rounded-full">
            Quero indicar
          </button>
        </Link>
      </div>

      {/* Bottom Navigation (kept) */}
      <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t pb-4 pt-3 z-50" style={{ background: "rgba(2,6,23,0.95)", borderColor: "var(--card-border)" }}>
        <div className="max-w-md mx-auto px-4">
          <div className="grid grid-cols-5 gap-2">
            <Link href="/home" className="flex flex-col items-center justify-center p-2 text-blue-500">
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Início</span>
            </Link>
            <Link href="/meu-colchao" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <Bed className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Meu Colchão</span>
            </Link>
            <Link href="/cuidados" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Cuidados</span>
            </Link>
            <Link href="/clube-do-sono" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <Gift className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Clube do Sono</span>
            </Link>
            <Link href="/minha-conta" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <User className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Minha Conta</span>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
