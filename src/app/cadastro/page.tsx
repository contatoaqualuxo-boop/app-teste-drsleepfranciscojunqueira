"use client";

import Link from "next/link";
import Image from "next/image";
import {
  User,
  Phone,
  Mail,
  Calendar,
  Lock,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  CalendarHeart,
  Gift,
  Users,
  Moon,
  Star,
} from "lucide-react";
import { useState } from "react";

export default function CadastroPage() {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    dataNascimento: "",
  });
  const [errors, setErrors] = useState({
    nome: "",
    whatsapp: "",
    email: "",
    dataNascimento: "",
  });

  const validateAndSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {
      nome: formData.nome.trim() ? "" : "Por favor, informe seu nome completo.",
      whatsapp: formData.whatsapp.trim() ? "" : "Por favor, informe seu WhatsApp.",
      email: formData.email.trim() ? "" : "Por favor, informe seu e-mail.",
      dataNascimento: formData.dataNascimento.trim() ? "" : "Por favor, informe sua data de nascimento.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error);
    if (!hasErrors) {
      // Simular navegação para home
      window.location.href = "/home";
    }
  };

  return (
    <main className="min-h-screen bg-[#020617] relative flex flex-col overflow-hidden pb-12">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Bedroom background overlay (gradient) */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/95 to-[#020617]" />
        
        {/* Stars */}
        <div className="absolute top-8 right-24">
          <Star className="w-2 h-2 text-blue-300/60" fill="currentColor" />
        </div>
        <div className="absolute top-12 right-48">
          <Star className="w-1.5 h-1.5 text-blue-200/40" fill="currentColor" />
        </div>
        <div className="absolute top-24 right-32">
          <Star className="w-1 h-1 text-blue-100/30" fill="currentColor" />
        </div>
        
        {/* Moon */}
        <div className="absolute top-10 right-10">
          <Moon className="w-16 h-16 text-amber-100/70" />
        </div>

        {/* Decorative blue lines (right) */}
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 overflow-hidden">
          <svg viewBox="0 0 400 400" className="w-full h-full text-blue-500/30">
            <path d="M 0 400 Q 100 300 200 350 T 400 300" stroke="currentColor" strokeWidth="1" fill="none" />
            <path d="M 50 400 Q 150 280 250 330 T 400 280" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M 100 400 Q 200 260 300 310 T 400 260" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <circle cx="250" cy="320" r="3" fill="currentColor" className="opacity-80" />
            <circle cx="180" cy="350" r="2" fill="currentColor" className="opacity-60" />
            <circle cx="320" cy="280" r="4" fill="currentColor" className="opacity-90" />
            <circle cx="120" cy="380" r="2" fill="currentColor" className="opacity-50" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 pb-6 max-w-md mx-auto w-full">
        {/* Back button */}
        <Link href="/" className="w-fit mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-5 h-5 text-white" />
        </Link>

        {/* Logo with blue circle */}
        <div className="mx-auto mb-6 relative">
          {/* Blue circle behind logo */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
          {/* Logo container */}
          <div className="relative w-[160px] h-[160px] mx-auto flex items-center justify-center">
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
        <div className="text-center space-y-2 mb-4">
          <p className="text-2xl text-white/90 font-medium">Bem-vindo ao</p>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Dr. Sleep <span className="text-blue-400 font-bold">+ Sono</span>
            <span className="text-xs text-blue-300 align-top">™</span>
          </h1>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 rotate-45 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
        </div>

        {/* Subtitle */}
        <div className="text-center mb-6 px-4">
          <p className="text-blue-100/80 text-[17px] leading-relaxed">
            Conecte-se ao seu colchão e acompanhe todos os <span className="text-blue-400 font-semibold">cuidados</span> da sua <span className="text-blue-400 font-semibold">jornada</span> de <span className="text-blue-400 font-semibold">descanso</span>.
          </p>
        </div>

        {/* Main Buttons */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {/* Criar minha conta */}
          <button
            className="flex flex-col items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-4 px-3 rounded-2xl shadow-xl shadow-blue-600/30 transition-all active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-base font-bold">Criar minha conta</p>
              <p className="text-[11px] text-white/80">É rápido e fácil</p>
            </div>
          </button>

          {/* Já possuo cadastro */}
          <Link
            href="/login"
            className="flex flex-col items-center gap-2 bg-transparent border-2 border-white/20 hover:border-white/40 text-white py-4 px-3 rounded-2xl transition-all active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <User className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-base font-bold">Já possuo cadastro</p>
              <p className="text-[11px] text-white/60">Quero entrar</p>
            </div>
          </Link>
        </div>

        {/* Glassmorphism Form Card */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl shadow-black/30 mb-4">
          {/* Form Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-500/20">
              <User className="w-5.5 h-5.5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Dados obrigatórios</h2>
              <p className="text-blue-100/60 text-sm">Preencha os campos abaixo para criar sua conta.</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={validateAndSubmit} className="flex flex-col gap-4">
            {/* Nome */}
            <div className="space-y-1.5">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                  <User className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <input
                  type="text"
                  value={formData.nome}
                  onChange={(e) => {
                    setFormData({ ...formData, nome: e.target.value });
                    if (errors.nome) setErrors({ ...errors, nome: "" });
                  }}
                  placeholder="Nome completo"
                  className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.nome ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
              </div>
              {errors.nome && <p className="text-red-400 text-xs ml-1">{errors.nome}</p>}
            </div>

            {/* WhatsApp */}
            <div className="space-y-1.5">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                  <Phone className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <input
                  type="tel"
                  value={formData.whatsapp}
                  onChange={(e) => {
                    setFormData({ ...formData, whatsapp: e.target.value });
                    if (errors.whatsapp) setErrors({ ...errors, whatsapp: "" });
                  }}
                  placeholder="WhatsApp"
                  className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.whatsapp ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                  (XX) 9 9999-9999
                </div>
              </div>
              {errors.whatsapp && <p className="text-red-400 text-xs ml-1">{errors.whatsapp}</p>}
            </div>

            {/* E-mail */}
            <div className="space-y-1.5">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                  <Mail className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: "" });
                  }}
                  placeholder="E-mail"
                  className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                  seu@email.com
                </div>
              </div>
              {errors.email && <p className="text-red-400 text-xs ml-1">{errors.email}</p>}
            </div>

            {/* Data de nascimento */}
            <div className="space-y-1.5">
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                  <Calendar className="w-5.5 h-5.5" strokeWidth={2} />
                </div>
                <input
                  type="text"
                  value={formData.dataNascimento}
                  onChange={(e) => {
                    setFormData({ ...formData, dataNascimento: e.target.value });
                    if (errors.dataNascimento) setErrors({ ...errors, dataNascimento: "" });
                  }}
                  placeholder="Data de nascimento"
                  className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                    errors.dataNascimento ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                  }`}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 text-sm">
                  DD / MM / AAAA
                </div>
              </div>
              {errors.dataNascimento && <p className="text-red-400 text-xs ml-1">{errors.dataNascimento}</p>}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-4.5 px-6 rounded-2xl shadow-xl shadow-blue-600/40 active:scale-[0.98] transition-all mt-2"
            >
              <span className="text-xl font-bold tracking-tight">Começar minha jornada</span>
              <ChevronRight className="w-6 h-6 opacity-90" />
            </button>
          </form>

          {/* Security Text */}
          <div className="mt-4 flex items-start gap-3 px-2">
            <ShieldCheck className="w-5.5 h-5.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-100/70 text-[13px] leading-relaxed">
              Seus dados estão protegidos e nunca serão compartilhados. Utilizamos criptografia de ponta a ponta.
            </p>
          </div>
        </div>

        {/* Benefits */}
        <div className="w-full grid grid-cols-4 gap-2">
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[11px] font-medium text-blue-100/70 leading-tight">
              Garantia do produto
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <CalendarHeart className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[11px] font-medium text-blue-100/70 leading-tight">
              Cuidados personalizados
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Gift className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[11px] font-medium text-blue-100/70 leading-tight">
              Clube do Sono
            </span>
          </div>
          <div className="flex flex-col items-center text-center gap-1.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-400" />
            </div>
            <span className="text-[11px] font-medium text-blue-100/70 leading-tight">
              Indique e ganhe
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
