
# 15 - Manual do Desenvolvedor

## Como Começar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Crie o arquivo `.env.local` com as credenciais do Supabase
4. Execute o servidor de desenvolvimento: `npm run dev`
5. Acesse `http://localhost:3000`

## Como Criar uma Nova Página

1. Crie o arquivo da página em `src/app/[area]/[nome-da-pagina]/page.tsx` (ex: `src/app/empresa/minha-nova-pagina/page.tsx`)
2. Importe o `DashboardLayout` (se for uma página autenticada)
3. Importe os ícones necessários do `lucide-react`
4. Defina o `navItems` com o menu padronizado
5. Renderize o conteúdo dentro do `DashboardLayout`

Exemplo:
```tsx
"use client";

import { Home, Users, /* ... outros ícones */ } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default function MinhaNovaPagina() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    // ... restante do menu padronizado
  ];

  return (
    <DashboardLayout
      title="Minha Nova Página"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
    >
      <div className="space-y-6">
        <h1 className="text-3xl font-black text-white">Minha Nova Página</h1>
        {/* Conteúdo da página */}
      </div>
    </DashboardLayout>
  );
}
```

## Como Criar um Novo Módulo

1. Adicione o módulo no `ModuleEngine` em `src/lib/modules.ts`
2. Crie o hook `useRuntimeModuleName.ts` em `src/hooks/`
3. Adicione a integração no Runtime em `src/lib/runtime.ts`
4. Atualize a documentação

## Como Criar um Novo Motor

1. Crie o arquivo do motor em `src/lib/`
2. Adicione o hook correspondente em `src/hooks/`
3. Integre com o Runtime (se necessário)
4. Atualize a documentação

## Como Criar um Novo Hook

1. Crie o arquivo em `src/hooks/` (ex: `useMyHook.ts`)
2. Implemente o hook
3. Exporte o hook
4. Atualize a documentação

Exemplo de hook usando Runtime:
```tsx
import { useRuntimeIdentity } from './useRuntimeIdentity';

export function useMyHook() {
  const identity = useRuntimeIdentity();
  // Lógica do hook
  return { /* dados do hook */ };
}
```

## Como Criar uma Nova Rota

1. Crie a pasta da rota em `src/app/` (ex: `src/app/minha-nova-rota/`)
2. Crie o arquivo `page.tsx` dentro da pasta
3. Implemente a página
4. Atualize a navegação no Navigation Engine (se necessário)

## Como Criar um Novo Provider

1. Crie o arquivo do provider em `src/components/` (ex: `MyProvider.tsx`)
2. Implemente o provider usando `createContext` e `useContext`
3. Envolva o app com o provider em `src/app/layout.tsx`
4. Atualize a documentação

## Como Criar uma Nova Integração

1. Adicione a integração no `ProviderIntegrationEngine` em `src/lib/providers.ts`
2. Crie o hook correspondente em `src/hooks/`
3. Integre com o Runtime
4. Atualize a documentação

## Como Adicionar uma Nova Empresa White Label

1. Adicione a empresa na tabela `companies` do banco
2. Adicione as configurações na tabela `settings`
3. Adicione as roles na tabela `roles`
4. Adicione as lojas na tabela `stores`
5. O Runtime se encarregará de carregar as configurações automaticamente

## Como Usar o Runtime

Para acessar o Runtime, use os hooks `useRuntime*`:

```tsx
import { useRuntimeIdentity } from '@/hooks/useRuntimeIdentity';
import { useRuntimeTheme } from '@/hooks/useRuntimeTheme';
import { useRuntimeBrandAssets } from '@/hooks/useRuntimeBrandAssets';

export function MeuComponente() {
  const identity = useRuntimeIdentity();
  const theme = useRuntimeTheme();
  const brandAssets = useRuntimeBrandAssets();

  return (
    <div>
      <h1>{identity.name}</h1>
      {/* ... */}
    </div>
  );
}
```

## Como Usar o Supabase

Para acessar o Supabase no browser:
```tsx
import { createClient } from '@/lib/supabase';

export function MeuComponente() {
  const supabase = createClient();

  // Use o supabase
}
```

Para acessar o Supabase no servidor (Server Components, Server Actions):
```tsx
import { createServerClient } from '@/lib/supabase-server';

export async function MeuServerComponent() {
  const supabase = createServerClient();

  // Use o supabase
}
```

## Boas Práticas de Desenvolvimento

1. Sempre use TypeScript estrito
2. Sempre execute `npm run lint`, `npx tsc --noEmit` e `npm run build` antes de commit
3. Commits pequenos, mensagens claras em português
4. Sempre respeite a arquitetura congelada
5. Sempre respeite o isolamento por `company_id`
6. Sempre use RLS
7. Sempre use o menu padronizado nas páginas da área da empresa
8. Sempre use o design system e Tailwind CSS
