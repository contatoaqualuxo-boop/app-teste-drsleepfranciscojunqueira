"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Star,
  Gift,
  CheckCircle2,
  Home,
  Bed,
  ShieldCheck,
  User,
} from "lucide-react";

export default function ClubeDoSonoPage() {
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
            Clube do Sono
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Dr. Pontos</p>
                <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>2450</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-yellow-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Nível</p>
                <p className="text-sm text-yellow-500">Sono Premium</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-cyan-600/20 flex items-center justify-center">
                <Star className="w-6 h-6 text-cyan-500" />
              </div>
              <div className="flex-1">
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Próximo benefício</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>3000 pontos</p>
              </div>
              <p className="text-sm font-medium text-emerald-400">Faltam 550</p>
            </div>
            <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[82%] h-full bg-gradient-to-r from-emerald-500 to-cyan-500" />
            </div>
          </div>

          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="flex items-center gap-4 mb-3">
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                <Gift className="w-6 h-6 text-purple-500" />
              </div>
              <div>
                <p className="font-semibold" style={{ color: "var(--foreground)" }}>Próxima recompensa</p>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>Travesseiro com desconto</p>
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
            <Link href="/cuidados" className="flex flex-col items-center justify-center p-2" style={{ color: "var(--text-muted)" }}>
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Cuidados</span>
            </Link>
            <Link href="/clube-do-sono" className="flex flex-col items-center justify-center p-2 text-blue-500">
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
