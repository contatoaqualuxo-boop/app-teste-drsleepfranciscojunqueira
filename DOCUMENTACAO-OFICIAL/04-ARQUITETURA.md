
# 04 - Arquitetura Completa

## Visão Geral da Arquitetura

A Plataforma Prévisita utiliza uma arquitetura moderna, escalável e segura:
- **Frontend**: Next.js 16 com App Router
- **Backend**: Next.js Server Components + Supabase
- **Banco de Dados**: PostgreSQL via Supabase
- **Autenticação**: Supabase Auth
- **Armazenamento de Arquivos**: Supabase Storage
- **Design System**: Tailwind CSS
- **Ícones**: Lucide React
- **Linguagem**: TypeScript (estrito)

## Estrutura de Pastas

```
dr-sleep-app/
├── public/                 # Arquivos estáticos (imagens, ícones, etc.)
├── src/
│   ├── app/               # Páginas do Next.js App Router
│   │   ├── admin/         # Área do Super Admin
│   │   ├── empresa/       # Área da Empresa
│   │   ├── cliente/       # Área do Cliente Final
│   │   ├── login/         # Página de login
│   │   ├── cadastro/      # Página de cadastro
│   │   ├── recuperar-senha/ # Página de recuperação de senha
│   │   ├── redefinir-senha/ # Página de redefinição de senha
│   │   ├── layout.tsx     # Layout raiz do app
│   │   └── page.tsx       # Página inicial
│   ├── components/        # Componentes React
│   │   ├── layout/        # Componentes de layout (DashboardLayout, etc.)
│   │   ├── ui/            # Componentes de UI (Button, Input, etc.)
│   │   ├── AuthProvider.tsx # Provedor de autenticação
│   │   ├── ClientWrapper.tsx # Wrapper para client components
│   │   ├── PlaceholderPage.tsx # Página placeholder
│   │   └── ThemeProvider.tsx # Provedor de tema
│   ├── hooks/             # Hooks customizados (todos os useRuntime*)
│   ├── lib/               # Biblioteca de funções utilitárias e configurações
│   │   ├── supabase.ts    # Cliente Supabase para browser
│   │   ├── supabase-server.ts # Cliente Supabase para servidor
│   │   ├── runtime.ts     # Runtime completo da plataforma
│   │   ├── tenant.ts      # Engine de Tenant
│   │   ├── registry.ts    # Registry de módulos
│   │   ├── providers.ts   # Providers de integração
│   │   ├── configuration.ts # Engine de configuração
│   │   ├── identity.ts    # Resolver de identidade
│   │   ├── theme.ts       # Resolver de tema
│   │   ├── brand-assets.ts # Resolver de assets de marca
│   │   ├── design-tokens.ts # Engine de design tokens
│   │   ├── motion.ts      # Resolver de animações
│   │   ├── fonts.ts       # Resolver de fontes
│   │   ├── spacing.ts     # Resolver de espaçamento
│   │   ├── layout.ts      # Resolver de layout
│   │   ├── navigation.ts  # Engine de navegação
│   │   ├── modules.ts     # Engine de módulos
│   │   ├── feature-flags.ts # Engine de feature flags
│   │   ├── permissions.ts # Engine de permissões
│   │   ├── access.ts      # Engine de acesso
│   │   ├── plans.ts       # Engine de planos
│   │   ├── billing.ts     # Resolver de billing
│   │   ├── subscription.ts # Resolver de assinatura
│   │   ├── usage-limits.ts # Engine de limites de uso
│   │   ├── types.ts       # Tipos TypeScript compartilhados
│   │   ├── use-rbac.ts    # Hook de RBAC
│   │   ├── white-label.ts # Utilitários de white label
│   │   ├── settings-adapter.ts # Adapter de settings
│   │   ├── supabase-settings-connector.ts # Connector para Supabase Settings
│   │   └── domain.ts      # Utilitários de domínio
│   └── middleware.ts      # Middleware do Next.js (proteção de rotas)
├── .env.local             # Variáveis de ambiente local
├── .gitignore             # Arquivos ignorados pelo git
├── package.json           # Dependências e scripts
├── package-lock.json      # Lockfile de dependências
├── next.config.ts         # Configuração do Next.js
├── tsconfig.json          # Configuração do TypeScript
├── tailwind.config.ts     # Configuração do Tailwind CSS
├── postcss.config.mjs     # Configuração do PostCSS
├── eslint.config.mjs      # Configuração do ESLint
├── supabase-schema-final.sql # Schema completo do banco de dados
├── validate-schema.ts     # Script para validar o schema
├── run-supabase-sql.ts    # Script para executar SQL no Supabase
└── DOCUMENTACAO-OFICIAL/  # Essa documentação!
```

## Responsabilidades das Pastas

### `src/app/`
Contém todas as páginas da aplicação organizadas por área:
- `admin/`: Área do Super Admin da Plataforma Prévisita
- `empresa/`: Área da Empresa (painel administrativo da empresa cliente)
- `cliente/`: Área do Cliente Final
- Páginas públicas: login, cadastro, recuperação de senha, etc.

### `src/components/`
Contém componentes React reutilizáveis:
- `layout/`: Componentes de layout como `DashboardLayout.tsx`
- `ui/`: Componentes de UI básicos como `Button.tsx`, `Input.tsx`, `Card.tsx`
- Providers: `AuthProvider.tsx`, `ThemeProvider.tsx`
- Outros componentes: `ClientWrapper.tsx`, `PlaceholderPage.tsx`

### `src/hooks/`
Contém hooks customizados, especialmente os hooks de Runtime:
- `useRuntimeAccess.ts`
- `useRuntimeBilling.ts`
- `useRuntimeBrandAssets.ts`
- `useRuntimeConfiguration.ts`
- `useRuntimeCurrentUser.ts`
- `useRuntimeDesignTokens.ts`
- `useRuntimeEnvironment.ts`
- `useRuntimeFeatureFlags.ts`
- `useRuntimeFonts.ts`
- `useRuntimeIdentity.ts`
- `useRuntimeLayout.ts`
- `useRuntimeModules.ts`
- `useRuntimeMotion.ts`
- `useRuntimeNavigation.ts`
- `useRuntimePermissions.ts`
- `useRuntimePlans.ts`
- `useRuntimeProviders.ts`
- `useRuntimeSpacing.ts`
- `useRuntimeSubscription.ts`
- `useRuntimeUsageLimits.ts`

### `src/lib/`
Contém a biblioteca principal da plataforma:
- Integração com o Supabase
- Runtime completo da plataforma
- Engines e resolvers para white label
- Tipos TypeScript compartilhados
- Utilitários diversos

## Runtime

O **Runtime** é o núcleo da plataforma. Ele gerencia:
- Identidade da empresa (nome, logo, etc.)
- Tema (cores, fontes, etc.)
- Design Tokens
- Animações
- Espaçamento
- Layout
- Navegação
- Módulos ativos
- Feature Flags
- Permissões
- Acesso
- Planos
- Billing
- Assinaturas
- Limites de uso
- Tenant
- Providers
- Configurações
- Usuário atual
- Ambiente

Para mais detalhes, leia o arquivo `05-RUNTIME.md`.

## DashboardLayout

O `DashboardLayout.tsx` é o componente de layout principal para todas as páginas autenticadas. Ele contém:
- Sidebar com navegação (com scroll independente)
- Header com ações e usuário
- Área de conteúdo principal
- Responsividade mobile (sidebar recolhida)

## Middleware

O `middleware.ts` é responsável por:
- Proteger rotas autenticadas
- Redirecionar usuários não autenticados para o login
- Verificar permissões de acesso

## Padrões Adotados

1. **Componentes Server-First**: Sempre que possível, usar Server Components do Next.js
2. **TypeScript Estrito**: Tipar tudo, evitar `any`
3. **Convenções de Nomenclatura**:
   - Arquivos: kebab-case (ex: `my-component.tsx`)
   - Componentes: PascalCase (ex: `MyComponent.tsx`)
   - Funções e variáveis: camelCase (ex: `myFunction`)
   - Constantes: UPPER_SNAKE_CASE (ex: `MY_CONSTANT`)
4. **Imports Organizados**:
   - Primeiro imports de bibliotecas externas
   - Depois imports de `@/` (src)
   - Depois imports relativos
5. **Tailwind CSS**: Usar Tailwind para estilos, evitar CSS customizado sempre que possível
6. **Lucide React**: Usar ícones da biblioteca Lucide React
7. **Git**: Commits pequenos, mensagens claras em português
