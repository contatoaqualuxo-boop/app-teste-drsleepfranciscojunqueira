"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, Suspense } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Mail,
  Moon,
  ShieldCheck,
  Star,
} from "lucide-react";

import { createClient } from "@/lib/supabase";

type LoginErrors = {
  email: string;
  password: string;
  general: string;
};

const initialErrors: LoginErrors = {
  email: "",
  password: "",
  general: "",
};

function LoginForm() {
  const router = useRouter();
  const { useSearchParams } = require("next/navigation");
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginErrors>(initialErrors);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const signupStatus = searchParams.get("signup");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: LoginErrors = {
      email: formData.email.trim() ? "" : "Por favor, informe seu e-mail.",
      password: formData.password.trim() ? "" : "Por favor, informe sua senha.",
      general: "",
    };

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: formData.email.trim(),
      password: formData.password,
    });

    if (error) {
      setErrors({
        ...initialErrors,
        general: "Nao foi possivel entrar. Verifique seus dados e tente novamente.",
      });
      setIsSubmitting(false);
      return;
    }

    router.replace("/home");
    router.refresh();
  };

  return (
    <>
      {signupStatus === "success" ? (
        <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
          <p className="text-sm text-emerald-100">
            Cadastro realizado com sucesso. Agora voce pode entrar com seu e-mail e sua senha.
          </p>
        </div>
      ) : null}

      <div className="space-y-1.5">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
            <Mail className="w-5.5 h-5.5" strokeWidth={2} />
          </div>
          <input
            type="email"
            value={formData.email}
            onChange={(event) => {
              setFormData((current) => ({ ...current, email: event.target.value }));
              if (errors.email || errors.general) {
                setErrors((current) => ({ ...current, email: "", general: "" }));
              }
            }}
            placeholder="E-mail"
            autoComplete="email"
            className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
              errors.email ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
            }`}
          />
        </div>
        {errors.email ? <p className="text-red-400 text-xs ml-1">{errors.email}</p> : null}
      </div>

      <div className="space-y-1.5">
        <div className="relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
            <Lock className="w-5.5 h-5.5" strokeWidth={2} />
          </div>
          <input
            type="password"
            value={formData.password}
            onChange={(event) => {
              setFormData((current) => ({ ...current, password: event.target.value }));
              if (errors.password || errors.general) {
                setErrors((current) => ({ ...current, password: "", general: "" }));
              }
            }}
            placeholder="Senha"
            autoComplete="current-password"
            className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
              errors.password ? "border-red-500/50 focus:ring-red-500/20" : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
            }`}
          />
        </div>
        {errors.password ? <p className="text-red-400 text-xs ml-1">{errors.password}</p> : null}
      </div>

      <div className="flex justify-end">
        <Link
          href="/recuperar-senha"
          className="text-sm text-blue-300 hover:text-blue-200 transition-colors"
        >
          Esqueci minha senha
        </Link>
      </div>

      {errors.general ? (
        <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3">
          <p className="text-sm text-red-200">{errors.general}</p>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4.5 px-6 rounded-2xl shadow-xl shadow-blue-600/40 active:scale-[0.98] transition-all mt-2"
      >
        <span className="text-xl font-bold tracking-tight">
          {isSubmitting ? "Entrando..." : "Entrar agora"}
        </span>
        <ChevronRight className="w-6 h-6 opacity-90" />
      </button>
    </>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#020617] relative flex flex-col overflow-hidden pb-12">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/80 via-[#020617]/95 to-[#020617]" />

        <div className="absolute top-8 right-24">
          <Star className="w-2 h-2 text-blue-300/60" fill="currentColor" />
        </div>
        <div className="absolute top-12 right-48">
          <Star className="w-1.5 h-1.5 text-blue-200/40" fill="currentColor" />
        </div>
        <div className="absolute top-24 right-32">
          <Star className="w-1 h-1 text-blue-100/30" fill="currentColor" />
        </div>

        <div className="absolute top-10 right-10">
          <Moon className="w-16 h-16 text-amber-100/70" />
        </div>

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
        <Link
          href="/"
          className="w-fit mb-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </Link>

        <div className="mx-auto mb-6 relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-600/30 rounded-full blur-3xl" />
          <div className="relative w-[160px] h-[160px] mx-auto flex items-center justify-center">
            <Image
              src="/LOGO FRANCISCO JUNQUEIRA.png"
              alt="Logo da plataforma"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        <div className="text-center space-y-2 mb-4">
          <p className="text-2xl text-white/90 font-medium">Acesse sua conta</p>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Plataforma <span className="text-blue-400 font-bold">Previsita</span>
          </h1>
          <div className="flex justify-center mt-2">
            <div className="w-2 h-2 rotate-45 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
          </div>
        </div>

        <div className="text-center mb-6 px-4">
          <p className="text-blue-100/80 text-[17px] leading-relaxed">
            Entre com seu e-mail e sua senha para continuar com seguranca na sua jornada.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <Link
            href="/cadastro"
            className="flex flex-col items-center gap-2 bg-transparent border-2 border-white/20 hover:border-white/40 text-white py-4 px-3 rounded-2xl transition-all active:scale-[0.98]"
          >
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-base font-bold">Criar conta</p>
              <p className="text-[11px] text-white/60">Novo acesso</p>
            </div>
          </Link>

          <div className="flex flex-col items-center gap-2 bg-gradient-to-br from-blue-600 to-blue-700 text-white py-4 px-3 rounded-2xl shadow-xl shadow-blue-600/30">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <div className="text-center">
              <p className="text-base font-bold">Entrar</p>
              <p className="text-[11px] text-white/80">Acesso seguro</p>
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl shadow-black/30 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-500/20">
              <Lock className="w-5.5 h-5.5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Login</h2>
              <p className="text-blue-100/60 text-sm">Use suas credenciais para acessar a plataforma.</p>
            </div>
          </div>

          <form className="flex flex-col gap-4">
            <Suspense fallback={
              <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-4 py-3">
                <p className="text-sm text-blue-100">Carregando...</p>
              </div>
            }>
              <LoginForm />
            </Suspense>
          </form>

          <div className="mt-4 flex items-start gap-3 px-2">
            <ShieldCheck className="w-5.5 h-5.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-100/70 text-[13px] leading-relaxed">
              Seu acesso usa autenticacao do Supabase e mantem a plataforma protegida para cada empresa.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
