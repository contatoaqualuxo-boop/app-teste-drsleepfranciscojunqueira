
# 06 - Banco de Dados

## Visão Geral

O banco de dados da Plataforma Prévisita é um **PostgreSQL** hospedado no **Supabase**.

## Schema Completo

O schema completo está no arquivo `supabase-schema-final.sql`.

## Tabelas Principais

### 1. `companies`
Armazena informações das empresas/marcas clientes da Plataforma Prévisita.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `name` | TEXT | Nome da empresa |
| `slug` | TEXT | Slug único da empresa |
| `logo_url` | TEXT | URL do logo |
| `is_active` | BOOLEAN | Se a empresa está ativa |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Autenticados podem ler.  
**Trigger**: `set_companies_updated_at` para atualizar `updated_at`.

---

### 2. `stores`
Armazena unidades/lojas vinculadas a uma empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `name` | TEXT | Nome da loja |
| `address` | TEXT | Endereço |
| `phone` | TEXT | Telefone |
| `whatsapp` | TEXT | WhatsApp |
| `email` | TEXT | Email |
| `is_active` | BOOLEAN | Se a loja está ativa |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Autenticados podem ler.  
**Trigger**: `set_stores_updated_at` para atualizar `updated_at`.  
**Índice**: `idx_stores_company_id`.

---

### 3. `roles`
Armazena perfis de acesso (super_admin, admin_empresa, gerente_loja, vendedor, cliente).

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `name` | TEXT | Nome do role |
| `description` | TEXT | Descrição |
| `created_at` | TIMESTAMPTZ | Data de criação |

**Restrição**: `unique_role_name_per_company` (nome único por empresa).  
**RLS**: Autenticados podem ler.  
**Índice**: `idx_roles_company_id`.

---

### 4. `users`
Tabela base de usuários (clientes, admins, vendedores).

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key → auth.users |
| `company_id` | UUID | FK → companies |
| `store_id` | UUID | FK → stores |
| `name` | TEXT | Nome do usuário |
| `email` | TEXT | Email único |
| `phone` | TEXT | Telefone |
| `birth_date` | DATE | Data de nascimento |
| `avatar_url` | TEXT | URL do avatar |
| `last_login` | TIMESTAMPTZ | Último login |
| `is_active` | BOOLEAN | Se o usuário está ativo |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Usuários podem ler/atualizar seus próprios dados.  
**Trigger**: `set_users_updated_at` para atualizar `updated_at`.  
**Índices**: `idx_users_company_id`, `idx_users_store_id`.

---

### 5. `user_roles`
Vincula usuários a perfis de acesso.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `user_id` | UUID | FK → users |
| `role_id` | UUID | FK → roles |
| `company_id` | UUID | FK → companies |
| `store_id` | UUID | FK → stores |
| `is_active` | BOOLEAN | Se o vínculo está ativo |
| `created_at` | TIMESTAMPTZ | Data de criação |

**Restrição**: `unique_user_role_per_context` (role única por usuário/empresa/loja).  
**RLS**: Usuários podem ler seus próprios roles.  
**Índices**: `idx_user_roles_user_id`, `idx_user_roles_role_id`.

---

### 6. `product_categories`
Categorias de produtos por empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `name` | TEXT | Nome da categoria |
| `slug` | TEXT | Slug único |
| `description` | TEXT | Descrição |
| `is_active` | BOOLEAN | Se a categoria está ativa |
| `created_at` | TIMESTAMPTZ | Data de criação |

**Restrição**: `unique_category_slug_per_company`.  
**RLS**: Autenticados podem ler.  
**Índice**: `idx_product_categories_company_id`.

---

### 7. `products`
Catálogo de produtos por empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `category_id` | UUID | FK → product_categories |
| `brand` | TEXT | Marca |
| `name` | TEXT | Nome do produto |
| `model` | TEXT | Modelo |
| `description` | TEXT | Descrição |
| `warranty_months` | INTEGER | Meses de garantia |
| `estimated_lifespan_months` | INTEGER | Vida útil estimada em meses |
| `image_url` | TEXT | URL da imagem |
| `is_active` | BOOLEAN | Se o produto está ativo |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Autenticados podem ler produtos ativos.  
**Trigger**: `set_products_updated_at` para atualizar `updated_at`.  
**Índices**: `idx_products_company_id`, `idx_products_category_id`, `idx_products_brand`.

---

### 8. `user_products`
Produtos comprados por clientes (vinculados a uma loja e empresa).

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `store_id` | UUID | FK → stores |
| `user_id` | UUID | FK → users |
| `product_id` | UUID | FK → products |
| `seller_id` | UUID | FK → users |
| `purchase_date` | DATE | Data da compra |
| `serial_number` | TEXT | Número de série |
| `warranty_months` | INTEGER | Meses de garantia |
| `status` | TEXT | Status |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Usuários podem ler seus próprios produtos.  
**Trigger**: `set_user_products_updated_at` para atualizar `updated_at`.  
**Índices**: `idx_user_products_user_id`, `idx_user_products_product_id`, `idx_user_products_company_id`.

---

### 9. `wallets`
Carteira do cliente (pontos, créditos, cashback) por empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `user_id` | UUID | FK → users |
| `company_id` | UUID | FK → companies |
| `points_balance` | NUMERIC | Saldo de pontos |
| `credits_balance` | NUMERIC | Saldo de créditos |
| `cashback_balance` | NUMERIC | Saldo de cashback |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**Restrição**: `unique_wallet_per_user_company` (carteira única por usuário/empresa).  
**RLS**: Usuários podem ler sua própria carteira.  
**Trigger**: `set_wallets_updated_at` para atualizar `updated_at`.  
**Índices**: `idx_wallets_user_id`, `idx_wallets_company_id`.

---

### 10. `documents`
Arquivos/documentos vinculados a produtos ou usuários.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `user_product_id` | UUID | FK → user_products |
| `user_id` | UUID | FK → users |
| `document_type` | TEXT | Tipo de documento |
| `file_name` | TEXT | Nome do arquivo |
| `file_path` | TEXT | Caminho no storage |
| `file_url` | TEXT | URL do arquivo |
| `mime_type` | TEXT | Tipo MIME |
| `file_size_bytes` | INTEGER | Tamanho em bytes |
| `expires_at` | TIMESTAMPTZ | Data de expiração |
| `created_at` | TIMESTAMPTZ | Data de criação |

**RLS**: Usuários podem ler seus próprios documentos.  
**Índices**: `idx_documents_user_id`, `idx_documents_user_product_id`, `idx_documents_company_id`, `idx_documents_expires_at`.

---

### 11. `settings`
Configurações white-label por empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies (único) |
| `app_name` | TEXT | Nome do app |
| `company_name` | TEXT | Nome da empresa |
| `logo_url` | TEXT | URL do logo |
| `favicon_url` | TEXT | URL do favicon |
| `primary_color` | TEXT | Cor primária |
| `secondary_color` | TEXT | Cor secundária |
| `whatsapp` | TEXT | WhatsApp |
| `instagram` | TEXT | Instagram |
| `facebook` | TEXT | Facebook |
| `youtube` | TEXT | YouTube |
| `website` | TEXT | Website |
| `previsita_url` | TEXT | URL da pré-visita |
| `loyalty_program_name` | TEXT | Nome do programa de fidelidade |
| `wallet_name` | TEXT | Nome da carteira |
| `points_name` | TEXT | Nome dos pontos |
| `welcome_message` | TEXT | Mensagem de boas-vindas |
| `mattress_rotation_interval_days` | INTEGER | Intervalo de giro de colchão em dias |
| `reminder_days_before` | INTEGER | Dias de antecedência para lembretes |
| `support_email` | TEXT | Email de suporte |
| `support_phone` | TEXT | Telefone de suporte |
| `privacy_policy_url` | TEXT | URL da política de privacidade |
| `terms_url` | TEXT | URL dos termos de uso |
| `is_active` | BOOLEAN | Se as configurações estão ativas |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**RLS**: Autenticados podem ler configurações da empresa.  
**Trigger**: `set_settings_updated_at` para atualizar `updated_at`.  
**Índice**: `idx_settings_company_id`.

---

### 12. `notification_templates`
Templates de notificações por empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `name` | TEXT | Nome do template |
| `slug` | TEXT | Slug único |
| `type` | TEXT | Tipo (email, whatsapp, push) |
| `subject` | TEXT | Assunto |
| `body` | TEXT | Corpo |
| `variables` | TEXT[] | Variáveis disponíveis |
| `is_active` | BOOLEAN | Se o template está ativo |
| `created_at` | TIMESTAMPTZ | Data de criação |
| `updated_at` | TIMESTAMPTZ | Data de última atualização |

**Restrição**: `unique_template_slug_per_company`.  
**RLS**: Autenticados podem ler templates ativos.  
**Trigger**: `set_notification_templates_updated_at` para atualizar `updated_at`.  
**Índices**: `idx_notification_templates_company_id`, `idx_notification_templates_slug`.

---

### 13. `audit_logs`
Logs de auditoria das ações dos administradores.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `store_id` | UUID | FK → stores |
| `user_id` | UUID | FK → users |
| `action` | TEXT | Ação realizada |
| `entity` | TEXT | Entidade afetada |
| `entity_id` | UUID | ID da entidade |
| `old_data` | JSONB | Dados antigos |
| `new_data` | JSONB | Dados novos |
| `ip_address` | TEXT | Endereço IP |
| `user_agent` | TEXT | User Agent |
| `created_at` | TIMESTAMPTZ | Data de criação |

**RLS**: Nenhum acesso público.  
**Índices**: `idx_audit_logs_company_id`, `idx_audit_logs_user_id`, `idx_audit_logs_created_at`.

---

### 14. `customer_timeline`
Linha do tempo completa do relacionamento do cliente com a marca/empresa.

| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | UUID | Primary Key |
| `company_id` | UUID | FK → companies |
| `store_id` | UUID | FK → stores |
| `user_id` | UUID | FK → users |
| `event_type` | TEXT | Tipo de evento |
| `title` | TEXT | Título |
| `description` | TEXT | Descrição |
| `metadata` | JSONB | Metadados |
| `created_by` | UUID | FK → users |
| `created_at` | TIMESTAMPTZ | Data de criação |

**RLS**: Usuários podem ler sua própria linha do tempo.  
**Índices**: `idx_customer_timeline_company_id`, `idx_customer_timeline_user_id`, `idx_customer_timeline_event_type`, `idx_customer_timeline_created_at`.

---

## Row Level Security (RLS)

Todas as tabelas têm **RLS HABILITADO**. As policies são básicas para o MVP, com foco em segurança inicial. Para mais detalhes, veja o arquivo `supabase-schema-final.sql`.

## Triggers

### `handle_updated_at()`
Função genérica que atualiza automaticamente o campo `updated_at` sempre que um registro é modificado. Aplicada nas tabelas:
- `companies`
- `stores`
- `users`
- `products`
- `user_products`
- `wallets`
- `settings`
- `notification_templates`

### `on_auth_user_created`
Trigger que, ao criar um usuário via Supabase Auth, cria automaticamente:
1. Registro na tabela `users`
2. Atribuição do role `cliente`
3. Carteira padrão na tabela `wallets`
4. Evento de cadastro na `customer_timeline`

## Dados Iniciais Inseridos

- Empresa Dr. Sleep
- Loja "Loja Francisco Junqueira"
- Roles padrão (super_admin, admin_empresa, gerente_loja, vendedor, cliente)
- Categorias de produtos (Colchões, Travesseiros, Protetores)
- Produto exemplo (Dr. Sleep Infinity)
- Configurações padrão para Dr. Sleep
- Template de notificação exemplo (lembrete de giro de colchão)

## Como Será Feita a Integração Futura?

A integração do banco com a plataforma já está feita via `supabase.ts` e `supabase-server.ts`. As configurações de white label são carregadas via `SupabaseSettingsConnector`.
