"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Bell,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  FileText,
  BookOpen,
  Plus,
  Home,
  Bed,
  User,
  Gift,
  PlusCircle,
  MoreHorizontal
} from "lucide-react";

export default function MeuColchaoPage() {
  return (
    <main className="min-h-screen bg-[#020617] relative flex flex-col overflow-hidden pb-32">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-[400px] bg-gradient-to-b from-blue-600/10 to-transparent" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-400/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 gap-6 max-w-md mx-auto w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <Link href="/home" className="w-fit flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
            <ChevronLeft className="w-5 h-5 text-white" />
          </Link>
          <p className="text-xl font-bold text-white">Meu Sistema de Sono</p>
          <button className="w-fit flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10">
            <Bell className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h2 className="text-2xl font-black text-white leading-tight">
            Acompanhe a vida útil, garantias e cuidados dos seus produtos.
          </h2>
        </div>

        {/* Produtos */}
        <div className="space-y-4">
          {/* Card Colchão */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl border border-blue-500/20 flex items-center justify-center">
                <Bed className="w-16 h-16 text-white/70" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-white mb-1">Dr. Sleep Infinity</p>
                <p className="text-blue-400 text-sm font-medium mb-3">Modelo Premium</p>
                <div className="flex items-center gap-1 text-emerald-400 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium">Excelente estado</span>
                </div>
                <p className="text-white/70 text-sm">Colchão de molas ensacadas com tecnologia avançada.</p>
                <p className="text-white/50 text-sm mt-2">Vida útil estimada: 10 anos</p>
                <button className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg">
                  Ver detalhes →
                </button>
              </div>
            </div>

            {/* Detalhes do Colchão */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Data da compra</p>
                  <p className="text-white font-medium text-sm">24/07/2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Garantia</p>
                  <p className="text-white font-medium text-sm">10 anos</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Tempo de uso</p>
                  <p className="text-white font-medium text-sm">11 meses</p>
                </div>
              </div>
            </div>

            {/* Status Colchão */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="bg-white/3 rounded-lg p-3 text-center">
                <p className="text-white/60 text-xs mb-1">Status da Garantia</p>
                <div className="flex items-center justify-center gap-1 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="text-sm font-medium">Ativa</span>
                </div>
              </div>
              <div className="bg-white/3 rounded-lg p-3 text-center">
                <p className="text-white/60 text-xs mb-1">Próximo Giro</p>
                <p className="text-blue-400 text-sm font-medium">Em 12 dias</p>
              </div>
              <div className="bg-white/3 rounded-lg p-3 text-center">
                <p className="text-white/60 text-xs mb-1">Última atualização</p>
                <p className="text-white text-sm font-medium">15 dias atrás</p>
              </div>
            </div>

            {/* Ações Colchão */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Editar modelo</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Editar data</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Tirar foto</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Enviar imagem</span>
              </button>
            </div>
          </div>

          {/* Card Travesseiro */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <div className="flex items-center gap-4">
              <div className="w-32 h-32 bg-gradient-to-br from-amber-600/20 to-amber-800/20 rounded-xl border border-amber-500/20 flex items-center justify-center">
                <div className="w-16 h-10 bg-white/20 rounded-full" />
              </div>
              <div className="flex-1">
                <p className="text-lg font-bold text-white mb-1">Travesseiro Premium</p>
                <p className="text-blue-400 text-sm font-medium mb-3">Modelo Comfort</p>
                <div className="flex items-center gap-1 text-emerald-400 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                  <span className="text-sm font-medium">Excelente estado</span>
                </div>
                <p className="text-white/70 text-sm">Travesseiro de espuma viscoelástica com suporte ideal.</p>
                <p className="text-white/50 text-sm mt-2">Vida útil estimada: 2 anos</p>
                <button className="mt-3 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg">
                  Ver detalhes →
                </button>
              </div>
            </div>

            {/* Detalhes do Travesseiro */}
            <div className="grid grid-cols-3 gap-3 mt-5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Calendar className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Data da compra</p>
                  <p className="text-white font-medium text-sm">24/07/2024</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Garantia</p>
                  <p className="text-white font-medium text-sm">1 ano</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4.5 h-4.5 text-blue-400" />
                <div>
                  <p className="text-white/60 text-[10px]">Tempo de uso</p>
                  <p className="text-white font-medium text-sm">11 meses</p>
                </div>
              </div>
            </div>

            {/* Ações Travesseiro */}
            <div className="grid grid-cols-4 gap-3 mt-4">
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Editar modelo</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Editar data</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Tirar foto</span>
              </button>
              <button className="flex flex-col items-center gap-2 p-2 text-white/70">
                <Plus className="w-4 h-4" />
                <span className="text-[10px]">Enviar imagem</span>
              </button>
            </div>
          </div>

          {/* Adicionar produto */}
          <div className="bg-white/3 border border-dashed border-white/10 rounded-2xl p-4 flex flex-col items-center gap-2">
            <PlusCircle className="w-8 h-8 text-white/50" />
            <p className="text-white/50 text-sm font-medium">Adicionar novo produto</p>
            <div className="flex gap-3 mt-2">
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full text-white/70 text-xs">
                <span>🛏</span> Colchão
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full text-white/70 text-xs">
                <span>☁</span> Travesseiro
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full text-white/70 text-xs">
                <span>🛡</span> Protetor
              </button>
              <button className="flex items-center gap-1 px-3 py-1.5 bg-white/5 rounded-full text-white/70 text-xs">
                <span>🪑</span> Base
              </button>
            </div>
          </div>
        </div>

        {/* Documentos do Produto */}
        <div className="mt-4">
          <p className="text-lg font-bold text-white mb-3">Documentos do Produto</p>
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-400" />
              </div>
              <p className="text-white font-medium">Nota Fiscal</p>
            </button>
            <button className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-emerald-400" />
              </div>
              <p className="text-white font-medium">Certificado de Garantia</p>
            </button>
            <button className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-purple-400" />
              </div>
              <p className="text-white font-medium">Manual de Cuidados</p>
            </button>
            <button className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3">
              <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-amber-400" />
              </div>
              <p className="text-white font-medium">Guia do Sono</p>
            </button>
          </div>
        </div>

        {/* Histórico */}
        <div className="mt-4">
          <p className="text-lg font-bold text-white mb-3">Histórico</p>
          <div className="space-y-3">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Produto cadastrado</p>
                <p className="text-white/40 text-xs mt-0.5">24 de julho de 2024</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Garantia registrada</p>
                <p className="text-white/40 text-xs mt-0.5">25 de julho de 2024</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Primeiro cuidado realizado</p>
                <p className="text-white/40 text-xs mt-0.5">10 de agosto de 2024</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 mt-2"></div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Giro registrado</p>
                <p className="text-white/40 text-xs mt-0.5">15 de novembro de 2024</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biblioteca do Sono */}
        <div className="mt-4 bg-gradient-to-r from-blue-600/20 to-blue-800/20 border border-blue-500/30 rounded-2xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-white">Biblioteca do Sono</p>
              <p className="text-white/70 text-sm mt-1">Aprenda a aumentar a vida útil dos seus produtos.</p>
            </div>
          </div>
          <Link href="/biblioteca-do-sono" className="mt-4 block w-full bg-blue-600 text-white font-semibold py-2 rounded-lg text-center">
            Ver conteúdos
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
            <Link href="/meu-colchao" className="flex flex-col items-center justify-center p-2 text-blue-500">
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
            <Link href="/minha-conta" className="flex flex-col items-center justify-center p-2 text-white/50 hover:text-white">
              <User className="w-6 h-6" />
              <span className="text-xs font-medium mt-1">Minha Conta</span>
            </Link>
          </div>
        </div>
      </nav>
    </main>
  );
}
