"use client";

import Link from "next/link";
import Image from "next/image";
import { UserPlus, User, ShieldCheck, CalendarHeart, Gift, Users, Lock, ChevronRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen relative flex items-end justify-center overflow-hidden" style={{ background: "var(--background)" }}>
      {/* Background decorative elements */}
      <div className="absolute top-10 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />

      <div className="w-full max-w-md relative z-10 px-6 pb-16 pt-12 flex flex-col items-center gap-10">
        {/* Logo with blue circle */}
        <div className="relative w-[180px] h-[180px] mx-auto mb-0">
          {/* Blue circle behind logo */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
          {/* Logo container */}
          <div className="relative w-[180px] h-[180px] flex items-center justify-center">
            <Image
              src="/LOGO FRANCISCO JUNQUEIRA.png"
              alt="Logo Dr. Sleep Francisco Junqueira"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Titles */}
        <div className="text-center space-y-3">
          <p className="text-xl font-medium" style={{ color: "var(--text-muted)" }}>Bem-vindo ao</p>
          <h1 className="text-4xl font-black tracking-tight" style={{ color: "var(--foreground)" }}>
            Dr. Sleep <span className="text-blue-400 font-bold">+ Sono™</span>
          </h1>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 rotate-45 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center">
          <p className="text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            Conecte-se ao seu colchão e acompanhe todos os <span className="text-blue-400 font-semibold">cuidados</span> da sua <span className="text-blue-400 font-semibold">jornada de descanso</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <Link
            href="/cadastro"
            className="w-full flex items-center justify-between bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl shadow-xl shadow-blue-600/25 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-4">
              <UserPlus className="w-6 h-6" strokeWidth={2.5} />
              <span className="text-xl font-bold tracking-tight">Criar minha conta</span>
            </div>
            <ChevronRight className="w-6 h-6 opacity-80" />
          </Link>

          {/* MODO DEMONSTRAÇÃO - futuramente substituir por autenticação real */}
          <Link
            href="/home"
            className="w-full flex items-center justify-between py-4 px-6 rounded-2xl active:scale-[0.98] transition-all"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            <div className="flex items-center gap-4">
              <User className="w-6 h-6 opacity-70" strokeWidth={2.5} />
              <span className="text-xl font-bold tracking-tight opacity-90">Já possuo cadastro</span>
            </div>
            <ChevronRight className="w-6 h-6 opacity-50" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="w-full grid grid-cols-4 gap-3">
          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <ShieldCheck className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-medium leading-tight" style={{ color: "var(--text-muted)" }}>
              Garantia do produto
            </span>
            <span className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>
              Acesse informações importantes sobre sua compra.
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <CalendarHeart className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-medium leading-tight" style={{ color: "var(--text-muted)" }}>
              Cuidados personalizados
            </span>
            <span className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>
              Receba lembretes para giro, limpeza e conservação.
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <Gift className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-medium leading-tight" style={{ color: "var(--text-muted)" }}>
              Clube do Sono
            </span>
            <span className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>
              Acumule pontos e desbloqueie recompensas.
            </span>
          </div>

          <div className="flex flex-col items-center text-center gap-2">
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "rgba(59,130,246,0.1)", border: "1px solid rgba(59,130,246,0.2)" }}>
              <Users className="w-6 h-6 text-blue-400" />
            </div>
            <span className="text-xs font-medium leading-tight" style={{ color: "var(--text-muted)" }}>
              Indique e ganhe
            </span>
            <span className="text-[10px] leading-tight" style={{ color: "var(--text-muted)" }}>
              Convide amigos e acompanhe suas recompensas.
            </span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-widest" style={{ color: "var(--text-muted)" }}>
          <Lock className="w-4 h-4" />
          <span>Seus dados estão protegidos</span>
        </div>
      </div>
    </main>
  );
}
