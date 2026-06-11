"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Bed,
  ShieldCheck,
  Gift,
  User,
  UserCircle,
  Bell,
  Lock,
  MessageSquare,
  FileText,
  LogOut,
  Star,
  Calendar,
  Users,
  Trophy,
  MapPin
} from "lucide-react";

export default function MinhaContaPage() {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <main className="min-h-screen bg-[#020617] relative flex flex-col overflow-hidden pb-32">
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
          <Link href="/home" className="w-fit flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
            <ChevronLeft className="w-5 h-5 text-white" />
          </Link>
          <p className="text-xl font-bold text-white">Minha Conta</p>
          <div className="w-10 h-10"></div>
        </div>

        {/* Card Principal */}
        <div className="bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-400/10 rounded-full blur-3xl" />
          <div className="flex items-start gap-4 relative z-10">
            {/* Avatar */}
            <div className="w-20 h-20 rounded-full border-4 border-blue-500/30 overflow-hidden flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center">
                <UserCircle className="w-12 h-12 text-blue-300" />
              </div>
            </div>

            {/* Info */}
            <div className="flex-1">
              <h2 className="text-2xl font-black text-white leading-tight">
                Olá, Fernando! 👋
              </h2>
              <p className="text-blue-100/70 text-sm mt-1">
                Aqui você gerencia suas informações e acompanha sua jornada de sono.
              </p>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex items-center gap-1 px-3 py-1 bg-blue-600/30 rounded-full border border-blue-500/30">
                  <Star className="w-3.5 h-3.5 text-yellow-400" />
                  <span className="text-white font-medium text-sm">Sono Premium</span>
                </div>
              </div>
            </div>

            {/* Dr. Pontos */}
            <div className="text-right">
              <p className="text-blue-100/60 text-xs">Dr. Pontos</p>
              <p className="text-3xl font-black text-blue-400">2.450</p>
              <p className="text-white/40 text-xs">pontos disponíveis</p>
              <Link href="/clube-do-sono" className="mt-2 inline-block bg-blue-600/30 text-blue-300 text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-500/30">
                Ver meus pontos
              </Link>
            </div>
          </div>
        </div>

        {/* Acesso Rápido */}
        <div>
          <p className="text-lg font-bold text-white mb-3">Acesso rápido</p>
          <div className="grid grid-cols-4 gap-3">
            {/* Meus Dados */}
            <button 
              onClick={() => showToast("Esta tela será conectada em breve.")}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center">
                <User className="w-6 h-6 text-blue-400" />
              </div>
              <p className="text-white font-medium text-xs text-center">Meus dados</p>
            </button>

            {/* Segurança */}
            <button 
              onClick={() => showToast("Esta tela será conectada em breve.")}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <Lock className="w-6 h-6 text-emerald-400" />
              </div>
              <p className="text-white font-medium text-xs text-center">Segurança</p>
            </button>

            {/* Notificações */}
            <button 
              onClick={() => showToast("Esta tela será conectada em breve.")}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center">
                <Bell className="w-6 h-6 text-purple-400" />
              </div>
              <p className="text-white font-medium text-xs text-center">Notificações</p>
            </button>

            {/* Consultoria do Sono */}
            <button 
              onClick={() => showToast("Atendimento será conectado em breve.")}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-yellow-600/20 flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-yellow-400" />
              </div>
              <p className="text-white font-medium text-xs text-center">Consultoria do Sono</p>
            </button>
          </div>
        </div>

        {/* Minha Jornada */}
        <div>
          <p className="text-lg font-bold text-white mb-3">Minha jornada</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            {/* Meu Colchão */}
            <Link href="/meu-colchao" className="flex items-center gap-3 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <Bed className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Meu colchão</p>
                <p className="text-white/40 text-xs">Veja os detalhes do seu colchão e garantia</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>

            {/* Histórico de Cuidados */}
            <Link href="/cuidados" className="flex items-center gap-3 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-emerald-600/20 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-emerald-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Histórico de cuidados</p>
                <p className="text-white/40 text-xs">Acompanhe os cuidados realizados</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>

            {/* Giros Realizados */}
            <Link href="/cuidados" className="flex items-center gap-3 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <div className="w-5 h-5 relative">
                  <div className="absolute inset-0 border-2 border-purple-400 rounded-full" />
                  <div className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <div className="absolute bottom-0 right-0 w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Giros realizados</p>
                <p className="text-white/40 text-xs">Veja seus giros e próximos agendamentos</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>

            {/* Clube do Sono */}
            <Link href="/clube-do-sono" className="flex items-center gap-3 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-yellow-600/20 flex items-center justify-center">
                <Gift className="w-5 h-5 text-yellow-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Clube do Sono</p>
                <p className="text-white/40 text-xs">Benefícios, trocas e recompensas</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>

            {/* Indique e Ganhe */}
            <Link href="/indique-ganhe" className="flex items-center gap-3 px-5 py-4 border-b border-white/5 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-pink-600/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-pink-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Indique e Ganhe</p>
                <p className="text-white/40 text-xs">Convide amigos e ganhe pontos</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>

            {/* Prévisita 360° */}
            <Link href="/previsita" className="flex items-center gap-3 px-5 py-4 hover:bg-white/5 transition-all">
              <div className="w-10 h-10 rounded-full bg-cyan-600/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Prévisita 360°</p>
                <p className="text-white/40 text-xs">Revisite a loja e explore em 360°</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </Link>
          </div>
        </div>

        {/* Suporte */}
        <div>
          <p className="text-lg font-bold text-white mb-3">Suporte</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-blue-400" />
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Fale com a Dr. Sleep</p>
                <p className="text-white/60 text-xs">Nossa equipe está pronta para te ajudar</p>
              </div>
            </div>
            <button 
              onClick={() => showToast("Atendimento será conectado em breve.")}
              className="mt-4 w-full bg-blue-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
            >
              Abrir atendimento
            </button>
          </div>
        </div>

        {/* Legal */}
        <div>
          <p className="text-lg font-bold text-white mb-3">Legal</p>
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
            <button 
              onClick={() => showToast("Esta tela será conectada em breve.")}
              className="flex items-center gap-3 px-5 py-4 w-full hover:bg-white/5 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-purple-600/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-white font-medium">Políticas e termos</p>
              </div>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </button>
          </div>
        </div>

        {/* Sair da Conta */}
        <div>
          <Link href="/" className="bg-red-900/20 border border-red-500/30 rounded-2xl p-4 flex items-center gap-3 hover:bg-red-900/30 transition-all">
            <div className="w-10 h-10 rounded-full bg-red-600/20 flex items-center justify-center">
              <LogOut className="w-5 h-5 text-red-400" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-white font-medium">Sair da conta</p>
              <p className="text-white/40 text-xs">Encerrar sessão neste dispositivo</p>
            </div>
            <ChevronRight className="w-4 h-4 text-red-400" />
          </Link>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#020617]/95 backdrop-blur-xl border-t border-white/10 pb-4 pt-3 z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="grid grid-cols-5 gap-2">
            <Link href="/home" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Início</span>
            </Link>
            <Link href="/meu-colchao" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
              <Bed className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Meu Colchão</span>
            </Link>
            <Link href="/cuidados" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
              <ShieldCheck className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Cuidados</span>
            </Link>
            <Link href="/clube-do-sono" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
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
