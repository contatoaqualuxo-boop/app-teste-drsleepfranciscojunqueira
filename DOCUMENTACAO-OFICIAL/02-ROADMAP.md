
# 02 - Roadmap Completo

## Fase 1: Foundation

**Status**: ✅ Concluída  
**Objetivo**: Criar a base arquitetônica da plataforma, configuração inicial, banco de dados e estrutura de pastas.

**Decisões Tomadas**:
- Next.js 16 com App Router
- Supabase para banco, auth e storage
- Tailwind CSS para design system
- TypeScript estrito
- Arquitetura multiempresa com `company_id`
- RLS em todas as tabelas
- Triggers `handle_updated_at` e `on_auth_user_created`

**Arquivos Envolvidos**:
- `package.json`
- `next.config.ts`
- `tsconfig.json`
- `supabase-schema-final.sql`
- `middleware.ts`
- Estrutura de pastas `src/`

**Commits Importantes**:
- Commits iniciais de configuração

**Dependências**:
- Next.js 16
- React 19
- Supabase SDK
- Tailwind CSS
- Lucide React

---

## Fase 2: Autenticação

**Status**: ✅ Concluída  
**Objetivo**: Implementar sistema de autenticação seguro, proteção de rotas e controle de permissões (RBAC).

**Funcionalidades Implementadas**:
- Login
- Cadastro
- Recuperação de senha
- Middleware de proteção de rotas
- RBAC com roles: `super_admin`, `admin_empresa`, `gerente_loja`, `vendedor`, `cliente`

**Arquivos Envolvidos**:
- `src/app/login/page.tsx`
- `src/app/cadastro/page.tsx`
- `src/app/recuperar-senha/page.tsx`
- `src/app/redefinir-senha/page.tsx`
- `middleware.ts`
- `src/lib/supabase.ts`
- `src/lib/supabase-server.ts`
- Tabelas `users`, `roles`, `user_roles`

**Commits Importantes**:
- Commits relacionados a autenticação

**Dependências**:
- `@supabase/ssr`
- `@supabase/supabase-js`

---

## Fase 3: Painel Super Admin

**Status**: ✅ Concluída  
**Objetivo**: Criar painel administrativo da Plataforma Prévisita para gerenciar empresas, lojas e usuários.

**Funcionalidades Implementadas**:
- Dashboard super admin
- Listagem de empresas
- Listagem de lojas
- Listagem de usuários
- Listagem de roles/permissões
- Configurações globais

**Arquivos Envolvidos**:
- `src/app/admin/dashboard/page.tsx`
- `src/app/admin/companies/page.tsx`
- `src/app/admin/stores/page.tsx`
- `src/app/admin/users/page.tsx`
- `src/app/admin/roles/page.tsx`
- `src/app/admin/settings/page.tsx`

---

## Fase 4: Painel da Empresa

**Status**: ✅ Concluída  
**Objetivo**: Criar painel administrativo da empresa para gerenciar clientes, produtos, garantias, etc.

**Funcionalidades Implementadas**:
- Dashboard empresa
- Listagem de clientes
- Listagem de produtos
- Listagem de garantias
- Timeline do cliente
- Listagem de documentos
- Configurações da empresa
- Programa de fidelidade (wallet)
- Visitas à Loja

**Arquivos Envolvidos**:
- `src/app/empresa/dashboard/page.tsx`
- `src/app/empresa/clientes/page.tsx`
- `src/app/empresa/produtos/page.tsx`
- `src/app/empresa/garantias/page.tsx`
- `src/app/empresa/timeline/page.tsx`
- `src/app/empresa/documentos/page.tsx`
- `src/app/empresa/configuracoes/page.tsx`
- `src/app/empresa/programa-fidelidade/page.tsx`
- `src/app/empresa/previsitas/page.tsx`

---

## Fase 5: White Label

**Status**: ✅ Concluída (Foundation) / 🔄 Em Andamento (Integração Real)  
**Objetivo**: Implementar sistema de white label completo, permitindo que cada empresa tenha sua própria identidade visual e configurações.

**Funcionalidades Implementadas (Foundation)**:
- Runtime completo com engines/resolvers
- Theme Engine
- Design Tokens Engine
- Brand Assets Resolver
- Navigation Engine
- Module Engine
- Feature Flag Engine
- Permission Engine
- Access Engine
- Plans Engine
- Billing Resolver
- Subscription Resolver
- Usage Limits Engine
- Provider Integration Engine
- Registry Engine

**Arquivos Envolvidos**:
- `src/lib/runtime.ts`
- `src/lib/tenant.ts`
- `src/lib/registry.ts`
- `src/lib/providers.ts`
- `src/lib/configuration.ts`
- `src/lib/identity.ts`
- `src/lib/theme.ts`
- `src/lib/brand-assets.ts`
- `src/lib/design-tokens.ts`
- `src/lib/motion.ts`
- `src/lib/fonts.ts`
- `src/lib/spacing.ts`
- `src/lib/layout.ts`
- `src/lib/navigation.ts`
- `src/lib/modules.ts`
- `src/lib/feature-flags.ts`
- `src/lib/permissions.ts`
- `src/lib/access.ts`
- `src/lib/plans.ts`
- `src/lib/billing.ts`
- `src/lib/subscription.ts`
- `src/lib/usage-limits.ts`
- `src/lib/supabase-settings-connector.ts`
- `src/lib/settings-adapter.ts`
- `src/lib/use-rbac.ts`
- `src/lib/types.ts`
- `src/hooks/useRuntime*.ts` (todos os hooks de runtime)
- `src/components/ThemeProvider.tsx`

---

## Fase 6: Runtime Bootstrap

**Status**: ✅ Concluída  
**Objetivo**: Integrar o Runtime com o restante da plataforma, criar hooks e garantir que tudo funcione corretamente.

**Funcionalidades Implementadas**:
- Hooks de Runtime:
  - `useRuntimeAccess`
  - `useRuntimeBilling`
  - `useRuntimeBrandAssets`
  - `useRuntimeConfiguration`
  - `useRuntimeCurrentUser`
  - `useRuntimeDesignTokens`
  - `useRuntimeEnvironment`
  - `useRuntimeFeatureFlags`
  - `useRuntimeFonts`
  - `useRuntimeIdentity`
  - `useRuntimeLayout`
  - `useRuntimeModules`
  - `useRuntimeMotion`
  - `useRuntimeNavigation`
  - `useRuntimePermissions`
  - `useRuntimePlans`
  - `useRuntimeProviders`
  - `useRuntimeSpacing`
  - `useRuntimeSubscription`
  - `useRuntimeUsageLimits`
- Integração com o ThemeProvider
- Auditoria final e validação de build

---

## Fase 7: Runtime Hooks e Finalização

**Status**: ✅ Concluída  
**Objetivo**: Finalizar o Runtime, garantir que todos os hooks funcionem, build limpo e deploy funcionando.

**Funcionalidades Implementadas**:
- Todos os hooks de Runtime implementados e funcionando
- Validação de build, TypeScript e lint
- Git limpo e sincronizado
- Deploy Vercel funcionando

---

## Fase 8: Dashboard Foundation / CRM Base

**Status**: ⏳ Pendente  
**Objetivo**: Implementar o dashboard base da empresa e o CRM básico.

**Funcionalidades Planejadas**:
- Dashboard com métricas e gráficos
- CRM com funis de venda
- Integração com o Motor de Oportunidades™

---

## Fase 9: Notificações

**Status**: ⏳ Pendente  
**Objetivo**: Implementar sistema de notificações (push, email, WhatsApp).

**Funcionalidades Planejadas**:
- Templates de notificações
- Envio automático de lembretes
- Campanhas de marketing
- Integração com WhatsApp e email providers

---

## Fase 10: Analytics

**Status**: ⏳ Pendente  
**Objetivo**: Implementar analytics avançados para as empresas.

**Funcionalidades Planejadas**:
- Dashboard de analytics
- Conversões
- Acessos
- Pré-visitas
- Cliques
- Indicadores de performance

---

## Fase 11: Marketplace de Módulos

**Status**: ⏳ Pendente  
**Objetivo**: Preparar arquitetura para marketplace de módulos adicionais.

**Funcionalidades Planejadas**:
- Módulos adicionais
- Integrações com ERPs
- IA
- Automações avançadas
