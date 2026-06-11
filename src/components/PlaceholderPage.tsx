"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  backLink?: string;
}

export function PlaceholderPage({ title, backLink = "/" }: PlaceholderPageProps) {
  return (
    <main className="min-h-screen bg-[#020617] flex flex-col items-center justify-center px-6">
      <div className="absolute top-6 left-6">
        <Link href={backLink} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-5 h-5 text-white" />
        </Link>
      </div>

      <div className="w-full max-w-md text-center space-y-6">
        <div className="w-20 h-20 mx-auto bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full bg-blue-500" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-white">{title}</h1>
          <p className="text-blue-100/60 text-lg">Esta tela será conectada em breve.</p>
        </div>

        <Link href="/" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white py-3 px-8 rounded-xl font-bold transition-all active:scale-[0.98]">
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
