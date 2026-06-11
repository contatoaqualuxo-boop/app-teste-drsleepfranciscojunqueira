
# Plataforma Prévisita - Backup do Schema do Banco de Dados (v1.0-foundation)

Este documento contém a estrutura completa do banco de dados da Plataforma Prévisita, versão 1.0-foundation.

## Extensões Habilitadas
- `uuid-ossp`: Para geração de UUIDs.

## Estrutura das Tabelas

### 1. `companies`
```sql
CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_companies_updated_at ON companies;
CREATE TRIGGER set_companies_updated_at
  BEFORE UPDATE ON companies
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 2. `stores`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_stores_updated_at ON stores;
CREATE TRIGGER set_stores_updated_at
  BEFORE UPDATE ON stores
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 3. `roles`
```sql
CREATE TABLE IF NOT EXISTS roles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_id UUID REFERENCES companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT unique_role_name_per_company UNIQUE (company_id, name)
);
```

### 4. `users`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_users_updated_at ON users;
CREATE TRIGGER set_users_updated_at
  BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 5. `user_roles`
```sql
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
```

### 6. `product_categories`
```sql
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
```

### 7. `products`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_products_updated_at ON products;
CREATE TRIGGER set_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 8. `user_products`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_user_products_updated_at ON user_products;
CREATE TRIGGER set_user_products_updated_at
  BEFORE UPDATE ON user_products
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 9. `wallets`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_wallets_updated_at ON wallets;
CREATE TRIGGER set_wallets_updated_at
  BEFORE UPDATE ON wallets
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 10. `documents`
```sql
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
```

### 11. `settings`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_settings_updated_at ON settings;
CREATE TRIGGER set_settings_updated_at
  BEFORE UPDATE ON settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 12. `notification_templates`
```sql
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

-- Trigger para updated_at
DROP TRIGGER IF EXISTS set_notification_templates_updated_at ON notification_templates;
CREATE TRIGGER set_notification_templates_updated_at
  BEFORE UPDATE ON notification_templates
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();
```

### 13. `audit_logs`
```sql
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
```

### 14. `customer_timeline`
```sql
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
```

## Índices Criados
```sql
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
```

## Funções e Triggers Customizadas
### 1. `handle_updated_at`
```sql
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;
```

### 2. `handle_new_user` e `on_auth_user_created`
```sql
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
DECLARE
  v_company_id UUID;
  v_client_role_id UUID;
  v_store_id UUID;
BEGIN
  v_company_id := (SELECT id FROM companies LIMIT 1);
  
  IF v_company_id IS NULL THEN
    RETURN new;
  END IF;
  
  INSERT INTO public.users (id, company_id, name, email, phone, birth_date, last_login)
  VALUES (
    new.id,
    v_company_id,
    COALESCE(new.raw_user_meta_data-&gt;&gt;'name', new.email),
    new.email,
    new.raw_user_meta_data-&gt;&gt;'phone',
    (new.raw_user_meta_data-&gt;&gt;'birth_date')::DATE,
    NOW()
  );
  
  v_client_role_id := (SELECT id FROM public.roles WHERE company_id = v_company_id AND name = 'cliente' LIMIT 1);
  
  IF v_client_role_id IS NOT NULL THEN
    INSERT INTO public.user_roles (user_id, role_id, company_id)
    VALUES (new.id, v_client_role_id, v_company_id);
  END IF;
  
  INSERT INTO public.wallets (user_id, company_id)
  VALUES (new.id, v_company_id);
  
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

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
```

## Row Level Security (RLS) e Policies
Todas as tabelas possuem RLS HABILITADO. As policies são:
```sql
-- companies
DROP POLICY IF EXISTS "Companies: authenticated users can read" ON companies;
CREATE POLICY "Companies: authenticated users can read"
  ON companies FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- stores
DROP POLICY IF EXISTS "Stores: authenticated users can read" ON stores;
CREATE POLICY "Stores: authenticated users can read"
  ON stores FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- roles
DROP POLICY IF EXISTS "Roles: authenticated users can read" ON roles;
CREATE POLICY "Roles: authenticated users can read"
  ON roles FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- users
DROP POLICY IF EXISTS "Users: can read own data" ON users;
CREATE POLICY "Users: can read own data"
  ON users FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users: can update own data" ON users;
CREATE POLICY "Users: can update own data"
  ON users FOR UPDATE
  USING (auth.uid() = id);

-- user_roles
DROP POLICY IF EXISTS "User Roles: can read own roles" ON user_roles;
CREATE POLICY "User Roles: can read own roles"
  ON user_roles FOR SELECT
  USING (auth.uid() = user_id);

-- product_categories
DROP POLICY IF EXISTS "Product Categories: authenticated users can read" ON product_categories;
CREATE POLICY "Product Categories: authenticated users can read"
  ON product_categories FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- products
DROP POLICY IF EXISTS "Products: authenticated users can read active products" ON products;
CREATE POLICY "Products: authenticated users can read active products"
  ON products FOR SELECT
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- user_products
DROP POLICY IF EXISTS "User Products: can read own products" ON user_products;
CREATE POLICY "User Products: can read own products"
  ON user_products FOR SELECT
  USING (auth.uid() = user_id);

-- wallets
DROP POLICY IF EXISTS "Wallets: can read own wallet" ON wallets;
CREATE POLICY "Wallets: can read own wallet"
  ON wallets FOR SELECT
  USING (auth.uid() = user_id);

-- documents
DROP POLICY IF EXISTS "Documents: can read own documents" ON documents;
CREATE POLICY "Documents: can read own documents"
  ON documents FOR SELECT
  USING (auth.uid() = user_id OR auth.uid() IN (SELECT user_id FROM user_products WHERE user_products.id = documents.user_product_id));

-- settings
DROP POLICY IF EXISTS "Settings: authenticated users can read company settings" ON settings;
CREATE POLICY "Settings: authenticated users can read company settings"
  ON settings FOR SELECT
  USING (auth.uid() IS NOT NULL);

-- notification_templates
DROP POLICY IF EXISTS "Notification Templates: authenticated users can read active templates" ON notification_templates;
CREATE POLICY "Notification Templates: authenticated users can read active templates"
  ON notification_templates FOR SELECT
  USING (auth.uid() IS NOT NULL AND is_active = true);

-- audit_logs
DROP POLICY IF EXISTS "Audit Logs: no public access" ON audit_logs;
CREATE POLICY "Audit Logs: no public access"
  ON audit_logs FOR ALL
  USING (false);

-- customer_timeline
DROP POLICY IF EXISTS "Customer Timeline: can read own timeline" ON customer_timeline;
CREATE POLICY "Customer Timeline: can read own timeline"
  ON customer_timeline FOR SELECT
  USING (auth.uid() = user_id);
```

## Dados Iniciais Inseridos
1. Empresa: `Dr. Sleep`, slug: `dr-sleep`
2. Loja: `Loja Francisco Junqueira`
3. Roles: `super_admin`, `admin_empresa`, `gerente_loja`, `vendedor`, `cliente`
4. Categorias: `Colchões`, `Travesseiros`, `Protetores`
5. Produto exemplo: `Dr. Sleep Infinity`
6. Configurações padrão da Dr. Sleep
7. Template de notificação exemplo: `Lembrete de Giro de Colchão`
