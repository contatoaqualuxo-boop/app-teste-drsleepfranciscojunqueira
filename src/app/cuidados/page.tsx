"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Rotate3D,
  Sparkles,
  Wind,
  Home,
  Bed,
  ShieldCheck,
  Gift,
  User,
} from "lucide-react";

export default function CuidadosPage() {
  return (
    <main className="min-h-screen relative flex flex-col overflow-hidden pb-32" style={{ background: "var(--background)" }}>
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-blue-600/10 to-transparent" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 gap-6 max-w-md mx-auto w-full">
        <div className="flex items-center gap-4">
          <Link href="/home" className="w-fit flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </Link>
          <p className="text-xl font-bold" style={{ color: "var(--foreground)" }}>
            Cuidados Personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                <Rotate3D className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Próximo giro</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>em 12 dias</p>
              </div>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[72%] h-full bg-gradient-to-r from-purple-500 to-pink-500" />
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Aspiração do colchão</p>
                <p className="text-sm text-emerald-400">Em dia</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
                <Wind className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Ventilação recomendada</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Realize todos os dias</p>
              </div>
            </div>
          </div>
        </div>

        <Link href="/home" className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-2xl font-bold transition-all active:scale-[0.98]">
          Voltar para Home
        </Link>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 backdrop-blur-xl border-t pb-4 pt-3 z-50" style={{ background: "rgba(2,6,23,0.95)", borderColor: "var(--card-border)" }}>
        <div className="max-w-md mx-auto px-4">
          <div className="grid grid-cols-5 gap-2">
            <Link href="/home" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Início</span>
            </Link>
            <Link href="/meu-colchao" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <Bed className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Meu Colchão</span>
            </Link>
            <Link href="/cuidados" className="flex flex-col items-center justify-center p-2 text-blue-500">
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
