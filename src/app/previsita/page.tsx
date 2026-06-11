"use client";

import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, HelpCircle, Home, Bed, ShieldCheck, Gift, User, Phone } from "lucide-react";

export default function PreVisitaPage() {
  const openWhatsApp = () => {
    const phone = "5516981901039";
    const url = `https://wa.me/${phone}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen relative flex flex-col overflow-hidden pb-32" style={{ background: "var(--background)" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 gap-6 max-w-md mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <Link href="/home" className="w-fit flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </Link>
          <p className="text-xl font-bold" style={{ color: "var(--foreground)" }}>Prévisita</p>
          <button className="w-fit flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <HelpCircle className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </button>
        </div>

        {/* Hero Section */}
        <div className="space-y-4">
          <h1 className="text-3xl font-black leading-tight" style={{ color: "var(--foreground)" }}>
            Conheça cada detalhe da loja
            <span className="text-blue-400 block"> sem sair de casa.</span>
          </h1>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            Descubra ambientes, produtos e tenha essa experiência Imersiva.
          </p>

          {/* Main Image */}
          <div className="relative w-full h-48 rounded-2xl overflow-hidden flex items-center justify-center" style={{ border: "1px solid var(--card-border)", background: "var(--card-bg)" }}>
            <Image
              src="/abertura-de-tour.png"
              alt="Abertura de tour"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  const placeholder = document.createElement('div');
                  placeholder.className = 'text-center p-4';
                  placeholder.innerHTML = `
                    <p style="color: var(--text-muted)">Imagem da Prévisita carregando</p>
                  `;
                  parent.appendChild(placeholder);
                }
              }}
            />
          </div>

          {/* Iniciar Prévisita Button */}
          <button
            onClick={() => window.open("https://drsleepfranciscojunqueira.previsita.com.br/", "_blank")}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white py-4 px-6 rounded-2xl shadow-xl shadow-blue-600/25 active:scale-[0.98] transition-all"
          >
            <div className="w-6 h-6 relative">
              <div className="absolute inset-0 border-2 border-white rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-white rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight">INICIAR PRÉVISITA</span>
          </button>

          {/* Dúvidas */}
          <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Tenho dúvidas sobre algum produto ou serviço?</p>
                <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>Fale com um especialista da nossa equipe.</p>
              </div>
            </div>
            <button
              onClick={openWhatsApp}
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              Falar com especialista →
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
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
