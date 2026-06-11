
-- ============================================
-- 0. Função utilitária para atualizar updated_at automaticamente
-- ============================================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 1. Habilitar extensão necessária
-- ============================================
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================
-- 2. Criar tabelas (na ordem correta para FK)
-- ============================================

-- Tabela: companies (Empresas/Marcas Clientes da Plataforma Prévisita)
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na companies
DROP TRIGGER IF EXISTS set_companies_updated_at ON companies;
CREATE TRIGGER set_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: stores (Lojas/Unidades)
CREATE TABLE IF NOT EXISTS stores (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  address TEXT,
  phone TEXT,
  whatsapp TEXT,
  email TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na stores
DROP TRIGGER IF EXISTS set_stores_updated_at ON stores;
CREATE TRIGGER set_stores_updated_at
  BEFORE UPDATE ON stores
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: roles (Perfis de Acesso)
CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_role_name_per_company UNIQUE (company_id, name)
);

-- Tabela: users (Usuários Base: clientes, admins, vendedores)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id) ON DELETE SET NULL,
  store_id UUID REFERENCES stores(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT,
  birth_date DATE,
  avatar_url TEXT,
  last_login TIMESTAMPTZ,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na users
DROP TRIGGER IF EXISTS set_users_updated_at ON users;
CREATE TRIGGER set_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: user_roles (Atribuição de Perfis)
CREATE TABLE IF NOT EXISTS user_roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role_id UUID NOT NULL REFERENCES roles(id) ON DELETE CASCADE,
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_user_role_per_context UNIQUE (user_id, role_id, company_id, store_id)
);

-- Tabela: product_categories (Categorias de Produto)
CREATE TABLE IF NOT EXISTS product_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_category_slug_per_company UNIQUE (company_id, slug)
);

-- Tabela: products (Catálogo de Produtos)
CREATE TABLE IF NOT EXISTS products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  category_id UUID REFERENCES product_categories(id) ON DELETE SET NULL,
  brand TEXT,
  name TEXT NOT NULL,
  model TEXT,
  description TEXT,
  warranty_months INTEGER,
  estimated_lifespan_months INTEGER,
  image_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na products
DROP TRIGGER IF EXISTS set_products_updated_at ON products;
CREATE TRIGGER set_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: user_products (Produtos Comprados pelo Cliente)
CREATE TABLE IF NOT EXISTS user_products (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id) ON DELETE SET NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  product_id UUID NOT NULL REFERENCES products(id) ON DELETE CASCADE,
  seller_id UUID REFERENCES users(id) ON DELETE SET NULL,
  purchase_date DATE,
  serial_number TEXT,
  warranty_months INTEGER,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na user_products
DROP TRIGGER IF EXISTS set_user_products_updated_at ON user_products;
CREATE TRIGGER set_user_products_updated_at
  BEFORE UPDATE ON user_products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: wallets (Carteira do Cliente)
CREATE TABLE IF NOT EXISTS wallets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  points_balance NUMERIC DEFAULT 0,
  credits_balance NUMERIC DEFAULT 0,
  cashback_balance NUMERIC DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_wallet_per_user_company UNIQUE (user_id, company_id)
);

-- Trigger para atualizar updated_at na wallets
DROP TRIGGER IF EXISTS set_wallets_updated_at ON wallets;
CREATE TRIGGER set_wallets_updated_at
  BEFORE UPDATE ON wallets
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: documents (Documentos e Arquivos)
CREATE TABLE IF NOT EXISTS documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  user_product_id UUID REFERENCES user_products(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  document_type TEXT NOT NULL,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT,
  mime_type TEXT,
  file_size_bytes INTEGER,
  expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: settings (Configurações por Empresa)
CREATE TABLE IF NOT EXISTS settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE UNIQUE,
  app_name TEXT DEFAULT 'Prévisita',
  company_name TEXT,
  logo_url TEXT,
  favicon_url TEXT,
  primary_color TEXT DEFAULT '#2563eb',
  secondary_color TEXT DEFAULT '#1e40af',
  whatsapp TEXT,
  instagram TEXT,
  facebook TEXT,
  youtube TEXT,
  website TEXT,
  previsita_url TEXT,
  loyalty_program_name TEXT DEFAULT 'Clube do Sono',
  wallet_name TEXT DEFAULT 'Carteira',
  points_name TEXT DEFAULT 'Pontos',
  welcome_message TEXT,
  mattress_rotation_interval_days INTEGER DEFAULT 90,
  reminder_days_before INTEGER DEFAULT 3,
  support_email TEXT,
  support_phone TEXT,
  privacy_policy_url TEXT,
  terms_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para atualizar updated_at na settings
DROP TRIGGER IF EXISTS set_settings_updated_at ON settings;
CREATE TRIGGER set_settings_updated_at
  BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: notification_templates (Templates de Notificações por Empresa)
CREATE TABLE IF NOT EXISTS notification_templates (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  type TEXT NOT NULL DEFAULT 'email',
  subject TEXT,
  body TEXT NOT NULL,
  variables TEXT[],
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_template_slug_per_company UNIQUE (company_id, slug)
);

-- Trigger para atualizar updated_at na notification_templates
DROP TRIGGER IF EXISTS set_notification_templates_updated_at ON notification_templates;
CREATE TRIGGER set_notification_templates_updated_at
  BEFORE UPDATE ON notification_templates
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- Tabela: audit_logs (Logs de Auditoria)
CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id) ON DELETE SET NULL,
  user_id UUID REFERENCES users(id) ON DELETE SET NULL,
  action TEXT NOT NULL,
  entity TEXT,
  entity_id UUID,
  old_data JSONB,
  new_data JSONB,
  ip_address TEXT,
  user_agent TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela: customer_timeline (Linha do Tempo do Cliente)
CREATE TABLE IF NOT EXISTS customer_timeline (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID NOT NULL REFERENCES companies(id) ON DELETE CASCADE,
  store_id UUID REFERENCES stores(id) ON DELETE SET NULL,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  metadata JSONB,
  created_by UUID REFERENCES users(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- 3. Criar índices para performance
-- ============================================
CREATE INDEX IF NOT EXISTS idx_stores_company_id ON stores(company_id);
CREATE INDEX IF NOT EXISTS idx_roles_company_id ON roles(company_id);
CREATE INDEX IF NOT EXISTS idx_users_company_id ON users(company_id);
CREATE INDEX IF NOT EXISTS idx_users_store_id ON users(store_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_user_id ON user_roles(user_id);
CREATE INDEX IF NOT EXISTS idx_user_roles_role_id ON user_roles(role_id);
CREATE INDEX IF NOT EXISTS idx_product_categories_company_id ON product_categories(company_id);
CREATE INDEX IF NOT EXISTS idx_products_company_id ON products(company_id);
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_brand ON products(brand);
CREATE INDEX IF NOT EXISTS idx_user_products_user_id ON user_products(user_id);
CREATE INDEX IF NOT EXISTS idx_user_products_product_id ON user_products(product_id);
CREATE INDEX IF NOT EXISTS idx_user_products_company_id ON user_products(company_id);
CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_wallets_company_id ON wallets(company_id);
CREATE INDEX IF NOT EXISTS idx_documents_user_id ON documents(user_id);
CREATE INDEX IF NOT EXISTS idx_documents_user_product_id ON documents(user_product_id);
CREATE INDEX IF NOT EXISTS idx_documents_company_id ON documents(company_id);
CREATE INDEX IF NOT EXISTS idx_documents_expires_at ON documents(expires_at);
CREATE INDEX IF NOT EXISTS idx_settings_company_id ON settings(company_id);
CREATE INDEX IF NOT EXISTS idx_notification_templates_company_id ON notification_templates(company_id);
CREATE INDEX IF NOT EXISTS idx_notification_templates_slug ON notification_templates(slug);
CREATE INDEX IF NOT EXISTS idx_audit_logs_company_id ON audit_logs(company_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_user_id ON audit_logs(user_id);
CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_customer_timeline_company_id ON customer_timeline(company_id);
CREATE INDEX IF NOT EXISTS idx_customer_timeline_user_id ON customer_timeline(user_id);
CREATE INDEX IF NOT EXISTS idx_customer_timeline_event_type ON customer_timeline(event_type);
CREATE INDEX IF NOT EXISTS idx_customer_timeline_created_at ON customer_timeline(created_at DESC);

-- ============================================
-- 4. Habilitar Row Level Security (RLS)
-- ============================================
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE stores ENABLE ROW LEVEL SECURITY;
ALTER TABLE roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE product_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_products ENABLE ROW LEVEL SECURITY;
ALTER TABLE wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE notification_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE customer_timeline ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 5. Criar políticas RLS básicas e seguras para MVP
-- ============================================

-- Políticas para companies
CREATE POLICY IF NOT EXISTS "Companies: authenticated users can read"
  ON companies FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Políticas para stores
CREATE POLICY IF NOT EXISTS "Stores: authenticated users can read"
  ON stores FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Políticas para roles
CREATE POLICY IF NOT EXISTS "Roles: authenticated users can read"
  ON roles FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Políticas para users
CREATE POLICY IF NOT EXISTS "Users: can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY IF NOT EXISTS "Users: can update own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- Políticas para user_roles
CREATE POLICY IF NOT EXISTS "User Roles: can read own roles"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- Políticas para product_categories
CREATE POLICY IF NOT EXISTS "Product Categories: authenticated users can read"
  ON product_categories FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Políticas para products
CREATE POLICY IF NOT EXISTS "Products: authenticated users can read active products"
  ON products FOR SELECT
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- Políticas para user_products
CREATE POLICY IF NOT EXISTS "User Products: can read own products"
  ON user_products FOR SELECT
  USING (auth.uid() = user_id);

-- Políticas para wallets
CREATE POLICY IF NOT EXISTS "Wallets: can read own wallet"
  ON wallets FOR SELECT
  USING (auth.uid() = user_id);

-- Políticas para documents
CREATE POLICY IF NOT EXISTS "Documents: can read own documents"
  ON documents FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() IN (SELECT user_id FROM user_products WHERE user_products.id = documents.user_product_id));

-- Políticas para settings
CREATE POLICY IF NOT EXISTS "Settings: authenticated users can read company settings"
  ON settings FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- Políticas para notification_templates
CREATE POLICY IF NOT EXISTS "Notification Templates: authenticated users can read active templates"
  ON notification_templates FOR SELECT
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- Políticas para audit_logs (apenas admins podem ler, por enquanto nenhum acesso para MVP)
CREATE POLICY IF NOT EXISTS "Audit Logs: no public access"
  ON audit_logs FOR ALL
  USING (false);

-- Políticas para customer_timeline
CREATE POLICY IF NOT EXISTS "Customer Timeline: can read own timeline"
  ON customer_timeline FOR SELECT
  USING (auth.uid() = user_id);

-- ============================================
-- 6. Criar função e trigger para criar usuário automaticamente
-- ============================================

-- Função para criar usuário na tabela users e carteira padrão após cadastro no Auth
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_company_id UUID;
  v_client_role_id UUID;
  v_store_id UUID;
BEGIN
  -- Busca a primeira empresa cadastrada (para MVP Dr. Sleep)
  v_company_id := (SELECT id FROM companies LIMIT 1);

  -- Se não existir empresa ainda, não faz nada (evita erro)
  IF v_company_id IS NULL THEN
    RETURN new;
  END IF;

  -- Insere na tabela users com dados do Auth
  INSERT INTO public.users (id, company_id, name, email, phone, birth_date, last_login)
  VALUES (
    new.id,
    v_company_id,
    COALESCE(new.raw_user_meta_data->>'name', new.email),
    new.email,
    new.raw_user_meta_data->>'phone',
    (new.raw_user_meta_data->>'birth_date')::DATE,
    NOW()
  );

  -- Busca o role 'cliente' para a empresa
  v_client_role_id := (SELECT id FROM public.roles WHERE company_id = v_company_id AND name = 'cliente' LIMIT 1);

  -- Se existir o role, atribui ao usuário
  IF v_client_role_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role_id, company_id)
    VALUES (new.id, v_client_role_id, v_company_id);
  END IF;

  -- Cria carteira para o usuário na empresa
  INSERT INTO public.wallets (user_id, company_id)
  VALUES (new.id, v_company_id);

  -- Adiciona evento de cadastro na linha do tempo
  INSERT INTO public.customer_timeline (company_id, user_id, event_type, title, description, metadata)
  VALUES (
    v_company_id,
    new.id,
    'cadastro_realizado',
    'Cadastro realizado!',
    'Bem-vindo à plataforma!',
    jsonb_build_object('email', new.email)
  );

  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger que executa a função após novo cadastro no Auth
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- ============================================
-- 7. Inserir dados iniciais necessários (Dr. Sleep na Plataforma Prévisita)
-- ============================================

-- Inserir empresa Dr. Sleep
INSERT INTO companies (name, slug)
VALUES ('Dr. Sleep', 'dr-sleep')
ON CONFLICT (slug) DO NOTHING;

-- Inserir loja padrão Dr. Sleep Francisco Junqueira
INSERT INTO stores (company_id, name)
SELECT id, 'Loja Francisco Junqueira' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT DO NOTHING;

-- Inserir roles padrão
INSERT INTO roles (company_id, name, description)
SELECT id, 'super_admin', 'Super administrador global da Plataforma Prévisita' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, name) DO NOTHING;

INSERT INTO roles (company_id, name, description)
SELECT id, 'admin_empresa', 'Administrador da empresa' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, name) DO NOTHING;

INSERT INTO roles (company_id, name, description)
SELECT id, 'gerente_loja', 'Gerente da loja' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, name) DO NOTHING;

INSERT INTO roles (company_id, name, description)
SELECT id, 'vendedor', 'Vendedor da loja' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, name) DO NOTHING;

INSERT INTO roles (company_id, name, description)
SELECT id, 'cliente', 'Cliente da loja' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, name) DO NOTHING;

-- Inserir categorias padrão
INSERT INTO product_categories (company_id, name, slug)
SELECT id, 'Colchões', 'colchoes' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, slug) DO NOTHING;

INSERT INTO product_categories (company_id, name, slug)
SELECT id, 'Travesseiros', 'travesseiros' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, slug) DO NOTHING;

INSERT INTO product_categories (company_id, name, slug)
SELECT id, 'Protetores', 'protetores' FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, slug) DO NOTHING;

-- Inserir produto exemplo (Dr. Sleep Infinity)
INSERT INTO products (company_id, category_id, brand, name, model, description, warranty_months, estimated_lifespan_months)
SELECT
  c.id,
  pc.id,
  'Dr. Sleep',
  'Dr. Sleep Infinity',
  'Modelo Premium',
  'Colchão de molas ensacadas com tecnologia avançada para um sono profundo e reparador.',
  120,
  120
FROM companies c
CROSS JOIN product_categories pc
WHERE c.slug = 'dr-sleep' AND pc.slug = 'colchoes'
ON CONFLICT DO NOTHING;

-- Inserir configurações padrão para Dr. Sleep
INSERT INTO settings (company_id, app_name, company_name, loyalty_program_name, wallet_name, points_name, mattress_rotation_interval_days, reminder_days_before)
SELECT
  id,
  'Dr. Sleep + Sono',
  'Dr. Sleep',
  'Clube do Sono',
  'Carteira',
  'Pontos',
  90,
  3
FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id) DO NOTHING;

-- Inserir template de notificação exemplo (lembrete de giro de colchão)
INSERT INTO notification_templates (company_id, name, slug, type, subject, body, variables)
SELECT
  id,
  'Lembrete de Giro de Colchão',
  'mattress_rotation_reminder',
  'email',
  'Hora de girar seu colchão! 😴',
  'Olá {{user_name}}! Passando para lembrar que já está na hora de girar seu colchão {{product_name}}. Isso ajuda a manter a durabilidade e o conforto!',
  ARRAY['user_name', 'product_name', 'rotation_date']
FROM companies WHERE slug = 'dr-sleep'
ON CONFLICT (company_id, slug) DO NOTHING;
