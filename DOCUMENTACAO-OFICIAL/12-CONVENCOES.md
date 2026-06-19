
# 12 - Convenções

## Organização de Arquivos

- **Páginas**: Colocar em `src/app/` de acordo com a área (admin, empresa, cliente)
- **Componentes**: Colocar em `src/components/`
  - Componentes de layout: `src/components/layout/`
  - Componentes de UI: `src/components/ui/`
  - Outros componentes: `src/components/`
- **Hooks**: Colocar em `src/hooks/`
- **Lib**: Colocar em `src/lib/`
  - Integração com Supabase: `src/lib/supabase.ts` e `src/lib/supabase-server.ts`
  - Runtime: `src/lib/runtime.ts`
  - Engines/resolvers: `src/lib/`
- **Tipos**: Colocar em `src/lib/types.ts`

## Nomenclatura de Arquivos

- **Arquivos de página**: kebab-case (ex: `my-page.tsx`, `page.tsx`)
- **Componentes**: PascalCase (ex: `MyComponent.tsx`)
- **Hooks**: camelCase, sempre começando com "use" (ex: `useMyHook.ts`)
- **Arquivos de lib**: kebab-case (ex: `my-utility.ts`)

## Nomenclatura de Variáveis e Funções

- **Variáveis e funções**: camelCase (ex: `myVariable`, `myFunction()`)
- **Constantes**: UPPER_SNAKE_CASE (ex: `MY_CONSTANT`)
- **Componentes**: PascalCase (ex: `MyComponent`)
- **Hooks**: camelCase, sempre começando com "use" (ex: `useMyHook`)

## Imports

Sempre organizar os imports na seguinte ordem:
1. Imports de bibliotecas externas (ex: `react`, `next`, `lucide-react`)
2. Imports de `@/` (src) (ex: `@/components/layout/DashboardLayout`)
3. Imports relativos (ex: `./my-component`)

Exemplo:
```tsx
// 1. Bibliotecas externas
import React, { useState } from 'react';
import { Home, Users } from 'lucide-react';
import Link from 'next/link';

// 2. Imports de @/
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useRuntimeIdentity } from '@/hooks/useRuntimeIdentity';

// 3. Imports relativos
import { MyComponent } from './MyComponent';
```

## Ícones

- Sempre usar ícones da biblioteca **Lucide React**
- Não misturar bibliotecas de ícones
- Importar apenas os ícones que você usa
- Usar tamanhos consistentes (normalmente `w-5 h-5` ou `w-6 h-6`)

## Menus

Todas as páginas da área da empresa usam o **mesmo menu padronizado** na sidebar, na seguinte ordem exata:
1. Dashboard
2. Clientes
3. Consultores
4. CRM
5. Produtos
6. Garantias
7. Lojas
8. Indicou Ganhou
9. Cuidados do Sono
10. Score Sono™
11. Motor de Oportunidades™
12. Documentos
13. Visitas à Loja
14. Configurações

## Estrutura das Páginas

Todas as páginas autenticadas usam o `DashboardLayout`:
1. Importar o `DashboardLayout`
2. Definir o `navItems` com o menu padronizado
3. Renderizar o conteúdo dentro do `DashboardLayout`

Exemplo:
```tsx
import { Home, Users, /* ... outros ícones */ } from 'lucide-react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';

export default function MinhaPagina() {
  const navItems = [
    { label: "Dashboard", href: "/empresa/dashboard", icon: Home, group: "principal" as const },
    { label: "Clientes", href: "/empresa/clientes", icon: Users, group: "principal" as const },
    // ... restante do menu
  ];

  return (
    <DashboardLayout
      title="Minha Página"
      sidebarNavItems={navItems}
      sidebarTitle="Dr. Sleep"
      sidebarSubtitle="Sono™"
    >
      {/* Conteúdo da página */}
    </DashboardLayout>
  );
}
```

## Boas Práticas

1. **TypeScript Estrito**: Sempre tipar tudo, evitar `any`
2. **Componentes Pequenos e Reutilizáveis**: Divida componentes grandes em componentes menores
3. **Server-First**: Sempre que possível, usar Server Components do Next.js
4. **Performance**: Evitar re-renders desnecessários, usar `useMemo` e `useCallback` quando apropriado
5. **Segurança**: Sempre respeitar RLS e RBAC
6. **Consistência**: Manter a consistência visual e de código
7. **Documentação**: Sempre documentar componentes e funções complexas
8. **Git**: Commits pequenos, mensagens claras em português
