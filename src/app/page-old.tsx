"use client";

import Link from "next/link";
import Image from "next/image";
import { User, ShieldCheck, HeartHandshake, Crown, Users, ChevronRight } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col justify-end bg-[#0F172A] relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/fachada-loja.png"
          alt="Fachada da loja"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A]/40 via-[#0F172A]/70 to-[#0F172A]" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto px-6 pb-12 pt-8 flex flex-col items-center gap-8">
        {/* Welcome Section */}
        <div className="text-center space-y-4">
          <p className="text-xl font-medium text-white/80">Bem-vindo ao</p>
          <h1 className="text-6xl font-bold tracking-tight text-white">
            Doctor<span className="text-[#2563EB]">+</span>
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-[#2563EB] to-transparent mx-auto" />
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-lg leading-relaxed text-white/70">
            Conecte-se ao seu colchão
            <br />
            e acompanhe sua <span className="text-[#2563EB] font-semibold">jornada de descanso</span>.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <Link
            href="/cadastro"
            className="w-full flex items-center justify-between bg-[#2563EB] hover:bg-[#1D4ED8] text-white py-5 px-6 rounded-2xl active:scale-[0.98] transition-all duration-200 shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <User className="w-6 h-6" strokeWidth={2} />
              </div>
              <span className="text-xl font-semibold tracking-tight">Criar minha conta</span>
            </div>
            <ChevronRight className="w-6 h-6" />
          </Link>

          <Link
            href="/home"
            className="w-full flex items-center justify-between py-5 px-6 rounded-2xl border border-white/20 bg-white/5 active:scale-[0.98] transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center">
                <User className="w-6 h-6 text-white/80" strokeWidth={2} />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">Já possuo cadastro</span>
            </div>
            <ChevronRight className="w-6 h-6 text-white/60" />
          </Link>
        </div>

        {/* Benefits */}
        <div className="w-full p-6 rounded-3xl border border-white/10 bg-white/5">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-white/80 text-center leading-tight">
                Garantia<br />do Produto
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <HeartHandshake className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-white/80 text-center leading-tight">
                Cuidados<br />Personalizados
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-white/80 text-center leading-tight">
                Clube<br />do Sono
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-medium text-white/80 text-center leading-tight">
                Indique<br />e Ganhe
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
