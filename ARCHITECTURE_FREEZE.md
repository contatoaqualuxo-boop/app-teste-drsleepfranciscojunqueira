
# Plataforma Prévisita - v1.0-foundation

## Arquitetura Adotada
- **Framework**: Next.js 16 + TypeScript
- **Banco de Dados**: PostgreSQL via Supabase
- **Autenticação**: Supabase Auth
- **Armazenamento de Arquivos**: Supabase Storage
- **Design System**: Tailwind CSS
- **Ícones**: Lucide React

## Estrutura de Pastas
```
dr-sleep-app/
├── public/
│   └── (arquivos estáticos)
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   └── (páginas públicas: login, cadastro, welcome)
│   │   ├── (client)/
│   │   │   └── (páginas do cliente autenticado)
│   │   ├── (admin)/
│   │   │   └── (páginas do admin autenticado)
│   │   └── layout.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── features/
│   ├── hooks/
│   ├── lib/
│   │   ├── supabase/
│   │   ├── constants/
│   │   ├── types/
│   │   └── utils/
│   ├── services/
│   ├── store/ (Zustand)
│   └── middleware.ts
├── .env.local
├── package.json
└── (outros arquivos de config)
```

## Modelagem do Banco de Dados

### Tabelas Principais

#### 1. `companies`
Armazena informações das empresas/marcas clientes da Plataforma Prévisita.
- **Campos**: `id` (uuid), `name` (text), `slug` (text, único), `logo_url` (text), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Autenticados podem ler.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 2. `stores`
Armazena unidades/lojas vinculadas a uma empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `name` (text), `address` (text), `phone` (text), `whatsapp` (text), `email` (text), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Autenticados podem ler.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 3. `roles`
Armazena perfis de acesso (super_admin, admin_empresa, gerente_loja, vendedor, cliente).
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies, nullable), `name` (text), `description` (text), `created_at` (timestamptz)
- **RLS**: Autenticados podem ler.
- **Restrição**: `unique_role_name_per_company` (nome único por empresa).

#### 4. `users`
Tabela base de usuários (clientes, admins, vendedores).
- **Campos**: `id` (uuid, PK → auth.users), `company_id` (uuid, FK → companies, nullable), `store_id` (uuid, FK → stores, nullable), `name` (text), `email` (text, único), `phone` (text), `birth_date` (date), `avatar_url` (text), `last_login` (timestamptz), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Usuários podem ler/atualizar seus próprios dados.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 5. `user_roles`
Vincula usuários a perfis de acesso.
- **Campos**: `id` (uuid), `user_id` (uuid, FK → users), `role_id` (uuid, FK → roles), `company_id` (uuid, FK → companies, nullable), `store_id` (uuid, FK → stores, nullable), `is_active` (bool), `created_at` (timestamptz)
- **RLS**: Usuários podem ler seus próprios roles.
- **Restrição**: `unique_user_role_per_context` (role única por usuário/empresa/loja).

#### 6. `product_categories`
Categorias de produtos por empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `name` (text), `slug` (text), `description` (text), `is_active` (bool), `created_at` (timestamptz)
- **RLS**: Autenticados podem ler.
- **Restrição**: `unique_category_slug_per_company`.

#### 7. `products`
Catálogo de produtos por empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `category_id` (uuid, FK → product_categories, nullable), `brand` (text), `name` (text), `model` (text), `description` (text), `warranty_months` (int), `estimated_lifespan_months` (int), `image_url` (text), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Autenticados podem ler produtos ativos.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 8. `user_products`
Produtos comprados por clientes (vinculados a uma loja e empresa).
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `store_id` (uuid, FK → stores, nullable), `user_id` (uuid, FK → users), `product_id` (uuid, FK → products), `seller_id` (uuid, FK → users, nullable), `purchase_date` (date), `serial_number` (text), `warranty_months` (int), `status` (text), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Usuários podem ler seus próprios produtos.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 9. `wallets`
Carteira do cliente (pontos, créditos, cashback) por empresa.
- **Campos**: `id` (uuid), `user_id` (uuid, FK → users), `company_id` (uuid, FK → companies), `points_balance` (numeric), `credits_balance` (numeric), `cashback_balance` (numeric), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Usuários podem ler sua própria carteira.
- **Triggers**: Atualiza `updated_at` automaticamente.
- **Restrição**: `unique_wallet_per_user_company` (carteira única por usuário/empresa).

#### 10. `documents`
Arquivos/documentos vinculados a produtos ou usuários.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `user_product_id` (uuid, FK → user_products, nullable), `user_id` (uuid, FK → users, nullable), `document_type` (text), `file_name` (text), `file_path` (text), `file_url` (text), `mime_type` (text), `file_size_bytes` (int), `expires_at` (timestamptz), `created_at` (timestamptz)
- **RLS**: Usuários podem ler seus próprios documentos.

#### 11. `settings`
Configurações white-label por empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies, único), `app_name` (text), `company_name` (text), `logo_url` (text), `favicon_url` (text), `primary_color` (text), `secondary_color` (text), `whatsapp` (text), `instagram` (text), `facebook` (text), `youtube` (text), `website` (text), `previsita_url` (text), `loyalty_program_name` (text), `wallet_name` (text), `points_name` (text), `welcome_message` (text), `mattress_rotation_interval_days` (int), `reminder_days_before` (int), `support_email` (text), `support_phone` (text), `privacy_policy_url` (text), `terms_url` (text), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Autenticados podem ler configurações da empresa.
- **Triggers**: Atualiza `updated_at` automaticamente.

#### 12. `notification_templates`
Templates de notificações por empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `name` (text), `slug` (text), `type` (text), `subject` (text), `body` (text), `variables` (text[]), `is_active` (bool), `created_at` (timestamptz), `updated_at` (timestamptz)
- **RLS**: Autenticados podem ler templates ativos.
- **Triggers**: Atualiza `updated_at` automaticamente.
- **Restrição**: `unique_template_slug_per_company`.

#### 13. `audit_logs`
Logs de auditoria das ações dos administradores.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies, nullable), `store_id` (uuid, FK → stores, nullable), `user_id` (uuid, FK → users, nullable), `action` (text), `entity` (text), `entity_id` (uuid), `old_data` (jsonb), `new_data` (jsonb), `ip_address` (text), `user_agent` (text), `created_at` (timestamptz)
- **RLS**: Nenhum acesso público (apenas admin via service role).

#### 14. `customer_timeline`
Linha do tempo completa do relacionamento do cliente com a marca/empresa.
- **Campos**: `id` (uuid), `company_id` (uuid, FK → companies), `store_id` (uuid, FK → stores, nullable), `user_id` (uuid, FK → users), `event_type` (text), `title` (text), `description` (text), `metadata` (jsonb), `created_by` (uuid, FK → users, nullable), `created_at` (timestamptz)
- **RLS**: Usuários podem ler sua própria linha do tempo.

## Row Level Security (RLS) e Policies
Todas as tabelas possuem RLS HABILITADO. As policies são básicas para o MVP, com foco em segurança inicial:
- `companies`, `stores`, `roles`, `product_categories`, `settings`, `notification_templates`: Autenticados podem ler.
- `users`: Usuários podem ler/atualizar seus próprios dados.
- `user_roles`, `wallets`, `user_products`, `documents`, `customer_timeline`: Usuários podem ler seus próprios registros.
- `products`: Autenticados podem ler produtos ativos.
- `audit_logs`: Nenhum acesso público.

## Triggers
1. `handle_updated_at`: Função genérica que atualiza automaticamente o campo `updated_at` sempre que um registro é modificado (aplicada nas tabelas com `updated_at`).
2. `on_auth_user_created`: Trigger que, ao criar um usuário via Supabase Auth, cria automaticamente:
   - Registro na tabela `users`
   - Atribuição do role `cliente`
   - Carteira padrão na tabela `wallets`
   - Evento de cadastro na `customer_timeline`

## Buckets (Supabase Storage)
Planejados (não configurados no MVP):
- `company-assets`: Logos, favicons, assets de marca
- `user-avatars`: Avatares dos usuários
- `product-photos`: Fotos dos produtos comprados
- `product-documents`: Notas fiscais, certificados, manuais

## Serviços (Planejados)
- `authService`: login, logout, cadastro, recuperação de senha
- `userService`: CRUD de usuários
- `productService`: CRUD de catálogo e produtos do cliente
- `walletService`: transações de pontos/créditos/cashback
- `referralService`: programa de indicações
- `documentService`: upload/download de arquivos
- `notificationService`: envio de notificações via templates

## Hooks (Planejados)
- `useAuth`: gerenciamento de autenticação
- `useCurrentUser`: dados do usuário logado
- `useCompany`: configurações da empresa
- `useStore`: loja selecionada (admin/gerente)
- `useWallet`: dados da carteira
- `useProducts`: lista de produtos do cliente
- `useTimeline`: linha do tempo do cliente

## Fluxo de Autenticação Planejado
1. **Cadastro**: Usuário se registra via `auth.signUp`, trigger cria registros complementares.
2. **Login**: Usuário se autentica via `auth.signInWithPassword`.
3. **Middleware Next.js**: Valida sessão, bloqueia rotas protegidas, redireciona conforme role.
4. **Logout**: Usuário sai via `auth.signOut`, limpa sessão.

## Arquitetura Multiempresa
- Tabelas com chave estrangeira `company_id` para isolamento por empresa.
- RLS garante que usuários de uma empresa não vejam dados de outra.
- Configurações white-label por empresa via tabela `settings`.

## Estratégia Multi-Loja
- Lojas vinculadas a empresas via `store_id`.
- Produtos/compras vinculados a lojas.
- Roles podem ser atribuídos por loja (gerente_loja, vendedor).

## Estratégia White-Label
- Tabela `settings` armazena cores, textos, links, redes sociais por empresa.
- App carrega configurações da empresa baseada no domínio ou slug.

## Convenções Utilizadas
- Nomenclatura de tabelas em snake_case, plural.
- Nomenclatura de campos em snake_case.
- `id` como UUID primary key em todas as tabelas.
- `created_at` e `updated_at` (quando aplicável) com TIMESTAMPTZ.
- Soft delete não implementado no MVP (usar `is_active` onde necessário).
- Arquitetura modular para crescimento.
