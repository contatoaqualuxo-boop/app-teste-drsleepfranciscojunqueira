
# 05 - Runtime

## O Que É o Runtime?

O **Runtime** é o núcleo da Plataforma Prévisita. Ele é responsável por gerenciar todas as configurações, identidade visual, permissões, módulos e integrações de forma dinâmica e white label.

Cada empresa tem seu próprio Runtime configurado, garantindo que a plataforma se adapte completamente à identidade e necessidades da empresa.

## Principais Componentes do Runtime

### 1. Tenant Engine (`src/lib/tenant.ts`)
Gerencia o tenant (empresa) atual.

### 2. Identity Resolver (`src/lib/identity.ts`)
Resolve a identidade da empresa (nome, slug, etc.).

### 3. Theme Engine (`src/lib/theme.ts`)
Gera e gerencia o tema da empresa (cores, modo claro/escuro).

### 4. Brand Assets Resolver (`src/lib/brand-assets.ts`)
Resolve os assets de marca da empresa (logo, favicon, imagens, etc.).

### 5. Design Tokens Engine (`src/lib/design-tokens.ts`)
Gerencia os design tokens (cores, tipografia, espaçamento, bordas, raio, sombras, etc.).

### 6. Motion Resolver (`src/lib/motion.ts`)
Gerencia as animações e microinterações.

### 7. Fonts Resolver (`src/lib/fonts.ts`)
Gerencia as fontes da plataforma.

### 8. Spacing Resolver (`src/lib/spacing.ts`)
Gerencia os espaçamentos do design system.

### 9. Layout Resolver (`src/lib/layout.ts`)
Gerencia o layout da plataforma.

### 10. Navigation Engine (`src/lib/navigation.ts`)
Gerencia a navegação do sidebar para cada área (super admin, empresa, cliente).

### 11. Module Engine (`src/lib/modules.ts`)
Gerencia os módulos ativos para a empresa.

### 12. Feature Flag Engine (`src/lib/feature-flags.ts`)
Gerencia as feature flags (funcionalidades que podem ser ativadas/desativadas).

### 13. Permission Engine (`src/lib/permissions.ts`)
Gerencia as permissões do usuário atual (RBAC).

### 14. Access Engine (`src/lib/access.ts`)
Gerencia o contexto de acesso do usuário.

### 15. Plans Engine (`src/lib/plans.ts`)
Gerencia os planos da plataforma.

### 16. Billing Resolver (`src/lib/billing.ts`)
Gerencia o billing da empresa.

### 17. Subscription Resolver (`src/lib/subscription.ts`)
Gerencia a assinatura da empresa.

### 18. Usage Limits Engine (`src/lib/usage-limits.ts`)
Gerencia os limites de uso da empresa (número de usuários, clientes, etc.).

### 19. Provider Integration Engine (`src/lib/providers.ts`)
Gerencia as integrações com provedores (email, WhatsApp, pagamento, etc.).

### 20. Registry Engine (`src/lib/registry.ts`)
Registra módulos e funcionalidades da plataforma.

### 21. Configuration Engine (`src/lib/configuration.ts`)
Gerencia as configurações gerais.

## Interface do Runtime (`src/lib/runtime.ts`)

```typescript
export interface Runtime {
  tenant: Tenant | null;
  identity: RuntimeIdentity;
  theme: RuntimeTheme;
  brandAssets: RuntimeBrandAssets;
  designTokens: RuntimeDesignTokens;
  motion: RuntimeMotion;
  fonts: RuntimeFonts;
  spacing: RuntimeSpacing;
  layout: RuntimeLayout;
  navigation: RuntimeNavigation;
  domain: Record<string, any>;
  plan: RuntimePlan;
  subscription: RuntimeSubscriptionState | null;
  limits: RuntimeUsageLimitsState;
  access: RuntimeAccess;
  modules: string[];
  features: string[];
  providers: Providers;
  registry: Registry;
  currentUser: RuntimeCurrentUser;
  environment: RuntimeEnvironment;
}
```

## Como Funciona o Runtime?

1. **Bootstrap**: Quando o app carrega, o Runtime é inicializado
2. **Resolução**: O Runtime resolve todas as configurações da empresa (via Supabase Settings Connector ou configuração padrão)
3. **Cache**: As configurações são cacheadas para performance
4. **Acesso via Hooks**: Os componentes acessam o Runtime via hooks (`useRuntime*`)

## Como Adicionar Novos Módulos?

1. Adicione o novo módulo no `ModuleEngine` em `src/lib/modules.ts`
2. Adicione o hook `useRuntimeModuleName.ts` em `src/hooks/`
3. Adicione a integração no Runtime em `src/lib/runtime.ts`
4. Atualize a documentação

## Como Criar Novos Hooks?

1. Crie o arquivo `useRuntimeMyHook.ts` em `src/hooks/`
2. Use o Runtime para obter os dados necessários
3. Exporte o hook
4. Atualize a documentação

## Como Adicionar Empresas White Label?

1. Adicione a empresa na tabela `companies` do banco
2. Adicione as configurações na tabela `settings`
3. Adicione as roles na tabela `roles`
4. Adicione as lojas na tabela `stores`
5. O Runtime se encarregará de carregar as configurações automaticamente

## White Label com o Runtime

Todas as configurações de white label são gerenciadas pelo Runtime:
- Nome do app
- Logo
- Cores
- Fontes
- Nomes de programas (fidelidade, pontos, carteira)
- Redes sociais
- Links de contato
- Imagens de login/signup
- Etc.

As configurações são armazenadas na tabela `settings` e carregadas via `SupabaseSettingsConnector`.

## Cache do Runtime

Para garantir performance, o Runtime cacheia todas as configurações. Os métodos de cache são:
- `createRuntimeIdentitySnapshot()`
- `createRuntimeThemeSnapshot()`
- `createRuntimeBrandAssetsSnapshot()`
- Etc.

Para limpar o cache:
- `clearRuntimeIdentityCache()`
- `clearRuntimeThemeCache()`
- `clearRuntimeBrandAssetsCache()`
- Etc.
