"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  HelpCircle,
  Home,
  Bed,
  ShieldCheck,
  Gift,
  User,
  Users,
  CheckCircle2,
  Clock,
  Copy,
  ChevronRight,
  Trophy,
  Share2,
  MessageSquare,
  Camera,
  MoreHorizontal
} from "lucide-react";

export default function IndiqueGanhePage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const copyLink = () => {
    navigator.clipboard.writeText("https://drsleep.indique.com.br/demo");
    showToast("Link copiado!");
  };

  return (
    <main className="min-h-screen relative flex flex-col overflow-hidden pb-32" style={{ background: "var(--background)" }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-2xl text-white font-medium">
          {toast}
        </div>
      )}

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 gap-6 max-w-md mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-2">
          <Link href="/home" className="w-fit flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <ChevronLeft className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </Link>
          <p className="text-xl font-bold" style={{ color: "var(--foreground)" }}>Indique e Ganhe</p>
          <button className="w-fit flex items-center justify-center w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <HelpCircle className="w-5 h-5" style={{ color: "var(--foreground)" }} />
          </button>
        </div>

        {/* Banner Superior */}
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
          <h2 className="text-2xl font-black text-white leading-tight relative z-10">
            Indique amigos e ganhe recompensas.
          </h2>
          <p className="text-blue-100/70 text-lg mt-2 relative z-10">
            Quanto mais amigos você indicar, mais você ganha.
          </p>
          <div className="mt-4 relative z-10">
            <Image
              src="/apli6.png"
              alt="Indique e ganhe"
              width={300}
              height={150}
              className="object-contain rounded-xl"
            />
          </div>
        </div>

        {/* Card Principal */}
        <div className="rounded-2xl p-6 flex items-center justify-between gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
          <div className="space-y-1">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Seu saldo disponível</p>
            <p className="text-4xl font-black" style={{ color: "var(--foreground)" }}>R$ 150,00</p>
            <p className="text-sm font-medium flex items-center gap-1 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" /> 2000 pontos
            </p>
            <p className="text-xs mt-2" style={{ color: "var(--text-muted)" }}>Saldo pronto para solicitar</p>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>Resgate via PIX</p>
            <div className="w-16 h-10 rounded-lg flex items-center justify-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
              {/* PIX logo placeholder */}
              <div className="text-blue-400 font-black text-xl">PIX</div>
            </div>
            <button
              onClick={() => showToast("Funcionalidade disponível em breve.")}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold py-2 px-4 rounded-xl text-sm active:scale-[0.98] transition-all"
            >
              Solicitar resgate
            </button>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-4 gap-3">
          <div className="rounded-2xl p-4 flex flex-col items-center gap-2 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>12</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Amigos indicados</p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Total de indicações</p>
          </div>
          <div className="rounded-2xl p-4 flex flex-col items-center gap-2 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
            </div>
            <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>8</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Indicações aprovadas</p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Amigos que compraram</p>
          </div>
          <div className="rounded-2xl p-4 flex flex-col items-center gap-2 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
              <Clock className="w-5 h-5 text-purple-400" />
            </div>
            <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>4</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Pendentes</p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Aguardando compra</p>
          </div>
          <div className="rounded-2xl p-4 flex flex-col items-center gap-2 text-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
            <div className="w-10 h-10 rounded-full bg-yellow-600/20 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-yellow-400" />
            </div>
            <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>R$ 450,00</p>
            <p className="text-xs" style={{ color: "var(--text-muted)" }}>Total já ganho</p>
            <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Em dinheiro</p>
          </div>
        </div>

        {/* Card de Evolução */}
        <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 border border-blue-500/20 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <Trophy className="w-16 h-16 text-yellow-400/30" />
          </div>
          <div className="ml-20">
            <p className="text-white font-bold text-lg">Você está no caminho certo!</p>
            <p className="text-blue-100/70 text-sm mt-1">
              Faltam apenas 3 indicações para alcançar o próximo nível e ganhar R$ 100,00 extras!
            </p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex-1 mr-4">
              <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[70%] h-full bg-gradient-to-r from-blue-500 to-emerald-500" />
              </div>
              <p className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>7/10 indicações</p>
            </div>
            <div className="text-right">
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>Próximo bônus</p>
              <p className="text-2xl font-black text-emerald-400">R$ 100,00</p>
            </div>
          </div>
        </div>

        {/* Compartilhe seu link */}
        <div className="rounded-2xl p-5" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Compartilhe seu link</p>
              <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>Envie para amigos e comece a ganhar!</p>
            </div>
            <button className="text-blue-400 text-sm font-medium flex items-center gap-1">
              Ver regras <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="flex items-center gap-3 rounded-xl p-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <div className="w-10 h-10 flex items-center justify-center text-blue-400">
              <Share2 className="w-5 h-5" />
            </div>
            <p className="flex-1 font-mono text-sm" style={{ color: "var(--text-muted)" }}>
              https://drsleep.indique.com.br/demo
            </p>
            <button
              onClick={copyLink}
              className="bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl text-sm active:scale-[0.98] transition-all"
            >
              Copiar link
            </button>
          </div>

          {/* Botões de Compartilhamento */}
          <div className="grid grid-cols-4 gap-3 mt-5">
            <button
              onClick={() => showToast("Compartilhamento será ativado futuramente.")}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/10 transition-all"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="w-12 h-12 rounded-full bg-green-600/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-green-400" />
              </div>
              <p className="font-medium text-xs" style={{ color: "var(--foreground)" }}>WhatsApp</p>
            </button>
            <button
              onClick={() => showToast("Compartilhamento será ativado futuramente.")}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/10 transition-all"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                <Camera className="w-6 h-6 text-pink-400" />
              </div>
              <p className="font-medium text-xs" style={{ color: "var(--foreground)" }}>Instagram</p>
            </button>
            <button
              onClick={() => showToast("Compartilhamento será ativado futuramente.")}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/10 transition-all"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="w-12 h-12 rounded-full bg-blue-700/20 flex items-center justify-center">
                <div className="w-6 h-6 text-blue-400 font-black text-xl">f</div>
              </div>
              <p className="font-medium text-xs" style={{ color: "var(--foreground)" }}>Facebook</p>
            </button>
            <button
              onClick={() => showToast("Compartilhamento será ativado futuramente.")}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl hover:bg-white/10 transition-all"
              style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
                <MoreHorizontal className="w-6 h-6" style={{ color: "var(--text-muted)" }} />
              </div>
              <p className="font-medium text-xs" style={{ color: "var(--foreground)" }}>Mais opções</p>
            </button>
          </div>
        </div>

        {/* Ranking */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Ranking de Indicadores</p>
            <button className="text-blue-400 text-sm font-medium flex items-center gap-1">
              Ver ranking completo <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            {/* 1º */}
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-yellow-900 font-black">1</div>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Fernando Silva</p>
                <p className="text-xs font-medium flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-3 h-3" /> Você
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>12 indicações</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>R$ 450,00</p>
              </div>
            </div>
            {/* 2º */}
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-gray-700 font-black">2</div>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Juliana Souza</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>10 indicações</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>R$ 350,00</p>
              </div>
            </div>
            {/* 3º */}
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 bg-orange-700 rounded-full flex items-center justify-center text-orange-100 font-black">3</div>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Carlos Mendes</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>8 indicações</p>
                <p className="text-xs" style={{ color: "var(--text-muted)" }}>R$ 250,00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Indicações Recentes */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <p className="text-lg font-bold" style={{ color: "var(--foreground)" }}>Suas indicações recentes</p>
            <button className="text-blue-400 text-sm font-medium flex items-center gap-1">
              Ver todas <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Bruno Oliveira</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <p className="text-xs font-medium">Aprovada</p>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>+ R$ 50,00</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Pago</p>
              </div>
            </div>
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Mariana Lima</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <p className="text-xs font-medium">Aprovada</p>
                </div>
                <p className="text-sm" style={{ color: "var(--text-muted)" }}>+ R$ 50,00</p>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Pago</p>
              </div>
            </div>
            <div className="rounded-2xl p-4 flex items-center gap-4" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)", boxShadow: "var(--card-shadow)" }}>
              <div className="w-10 h-10 rounded-full" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }} />
              <div className="flex-1">
                <p className="font-medium" style={{ color: "var(--foreground)" }}>Pedro Santos</p>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-purple-400">
                  <Clock className="w-4 h-4" />
                  <p className="text-xs font-medium">Pendente</p>
                </div>
                <p className="text-[10px]" style={{ color: "var(--text-muted)" }}>Em análise</p>
              </div>
            </div>
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
            <Link href="/minha-conta" className="flex flex-col items-center justify-center p-2 text-blue-500">
              <User className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Minha Conta</span>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
