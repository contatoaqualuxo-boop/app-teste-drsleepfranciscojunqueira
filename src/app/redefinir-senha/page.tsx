"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Moon,
  ShieldCheck,
  Star,
} from "lucide-react";

import { createClient } from "@/lib/supabase";

type ResetErrors = {
  password: string;
  confirmPassword: string;
  general: string;
};

const initialErrors: ResetErrors = {
  password: "",
  confirmPassword: "",
  general: "",
};

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = useMemo(() => createClient(), []);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<ResetErrors>(initialErrors);
  const [isAuthorizing, setIsAuthorizing] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const prepareRecoverySession = async () => {
      const code = searchParams.get("code");

      if (!code) {
        if (isMounted) {
          setErrors({
            ...initialErrors,
            general: "O link de redefinicao e invalido ou expirou. Solicite uma nova recuperacao.",
          });
          setIsAuthorizing(false);
        }
        return;
      }

      const { error } = await supabase.auth.exchangeCodeForSession(code);

      if (!isMounted) {
        return;
      }

      if (error) {
        setErrors({
          ...initialErrors,
          general: "Nao foi possivel validar o link de redefinicao. Solicite uma nova recuperacao.",
        });
      }

      setIsAuthorizing(false);
    };

    void prepareRecoverySession();

    return () => {
      isMounted = false;
    };
  }, [searchParams, supabase]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors: ResetErrors = {
      password:
        password.length >= 6 ? "" : "A nova senha deve ter pelo menos 6 caracteres.",
      confirmPassword:
        confirmPassword === password ? "" : "As senhas precisam ser iguais.",
      general: "",
    };

    setErrors(nextErrors);
    setIsSuccess(false);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.auth.updateUser({
      password,
    });

    if (error) {
      setErrors({
        ...initialErrors,
        general: "Nao foi possivel redefinir sua senha agora. Solicite uma nova recuperacao.",
      });
      setIsSubmitting(false);
      return;
    }

    setIsSuccess(true);
    setIsSubmitting(false);
    setPassword("");
    setConfirmPassword("");

    window.setTimeout(() => {
      router.replace("/login");
      router.refresh();
    }, 1500);
  };

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
      </div>

      <div className="relative z-10 flex-1 flex flex-col px-4 pt-6 pb-6 max-w-md mx-auto w-full">
        <Link
          href="/login"
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
          <p className="text-2xl text-white/90 font-medium">Defina sua nova senha</p>
          <h1 className="text-4xl font-black text-white tracking-tight">
            Plataforma <span className="text-blue-400 font-bold">Previsita</span>
          </h1>
        </div>

        <div className="text-center mb-6 px-4">
          <p className="text-blue-100/80 text-[17px] leading-relaxed">
            Finalize sua recuperacao com uma nova senha segura.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 shadow-2xl shadow-black/30 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-11 h-11 bg-blue-600/30 rounded-full flex items-center justify-center border border-blue-500/20">
              <Lock className="w-5.5 h-5.5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-white font-bold text-lg">Redefinir senha</h2>
              <p className="text-blue-100/60 text-sm">Use o link validado pelo Supabase Auth.</p>
            </div>
          </div>

          {isAuthorizing ? (
            <div className="rounded-2xl border border-blue-500/30 bg-blue-500/10 px-4 py-3">
              <p className="text-sm text-blue-100">Validando seu link de redefinicao...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {isSuccess ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3">
                  <p className="text-sm text-emerald-100">
                    Senha redefinida com sucesso. Voce sera redirecionado para o login.
                  </p>
                </div>
              ) : null}

              <div className="space-y-1.5">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                    <Lock className="w-5.5 h-5.5" strokeWidth={2} />
                  </div>
                  <input
                    type="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      if (errors.password || errors.general) {
                        setErrors((current) => ({
                          ...current,
                          password: "",
                          general: "",
                        }));
                      }
                    }}
                    placeholder="Nova senha"
                    autoComplete="new-password"
                    className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                      errors.password
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                    }`}
                  />
                </div>
                {errors.password ? <p className="text-red-400 text-xs ml-1">{errors.password}</p> : null}
              </div>

              <div className="space-y-1.5">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-400">
                    <Lock className="w-5.5 h-5.5" strokeWidth={2} />
                  </div>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                      if (errors.confirmPassword || errors.general) {
                        setErrors((current) => ({
                          ...current,
                          confirmPassword: "",
                          general: "",
                        }));
                      }
                    }}
                    placeholder="Confirmar nova senha"
                    autoComplete="new-password"
                    className={`w-full bg-white/5 border rounded-2xl py-4 pl-12 pr-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 transition-all ${
                      errors.confirmPassword
                        ? "border-red-500/50 focus:ring-red-500/20"
                        : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                    }`}
                  />
                </div>
                {errors.confirmPassword ? (
                  <p className="text-red-400 text-xs ml-1">{errors.confirmPassword}</p>
                ) : null}
              </div>

              {errors.general ? (
                <div className="rounded-2xl border border-red-500/30 bg-red-500/10 px-4 py-3">
                  <p className="text-sm text-red-200">{errors.general}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={isSubmitting || !!errors.general}
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4.5 px-6 rounded-2xl shadow-xl shadow-blue-600/40 active:scale-[0.98] transition-all mt-2"
              >
                <span className="text-xl font-bold tracking-tight">
                  {isSubmitting ? "Salvando..." : "Salvar nova senha"}
                </span>
                <ChevronRight className="w-6 h-6 opacity-90" />
              </button>
            </form>
          )}

          <div className="mt-4 flex items-start gap-3 px-2">
            <ShieldCheck className="w-5.5 h-5.5 text-blue-400 flex-shrink-0 mt-0.5" />
            <p className="text-blue-100/70 text-[13px] leading-relaxed">
              O processo continua usando o fluxo oficial do Supabase Auth.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
