
-- ============================================
-- 1. VERIFICAR TABELAS EXISTENTES
-- ============================================
SELECT 'TABELAS EXISTENTES' AS categoria, table_name AS nome
FROM information_schema.tables
WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
ORDER BY table_name;

-- ============================================
-- 2. VERIFICAR RLS HABILITADO
-- ============================================
SELECT 'RLS HABILITADO' AS categoria, tablename AS tabela, rowsecurity::text AS rls_ativado
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename;

-- ============================================
-- 3. VERIFICAR POLÍTICAS RLS CRIADAS
-- ============================================
SELECT 'POLÍTICAS RLS' AS categoria, tablename AS tabela, policyname AS politica, cmd AS comando
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname;

-- ============================================
-- 4. VERIFICAR DADOS INICIAIS: COMPANIES
-- ============================================
SELECT 'DADOS - EMPRESAS' AS categoria, name AS nome, slug AS identificador
FROM companies
ORDER BY name;

-- ============================================
-- 5. VERIFICAR DADOS INICIAIS: STORES
-- ============================================
SELECT 'DADOS - LOJAS' AS categoria, name AS nome
FROM stores
ORDER BY name;

-- ============================================
-- 6. VERIFICAR DADOS INICIAIS: ROLES
-- ============================================
SELECT 'DADOS - ROLES' AS categoria, name AS nome, description AS descricao
FROM roles
ORDER BY name;

-- ============================================
-- 7. VERIFICAR DADOS INICIAIS: PRODUCT CATEGORIES
-- ============================================
SELECT 'DADOS - CATEGORIAS' AS categoria, name AS nome, slug AS identificador
FROM product_categories
ORDER BY name;

-- ============================================
-- 8. VERIFICAR DADOS INICIAIS: SETTINGS
-- ============================================
SELECT 'DADOS - CONFIGURAÇÕES' AS categoria, app_name AS nome_app, company_name AS nome_empresa
FROM settings;

-- ============================================
-- 9. VERIFICAR DADOS INICIAIS: NOTIFICATION TEMPLATES
-- ============================================
SELECT 'DADOS - TEMPLATES NOTIFICAÇÕES' AS categoria, name AS nome, slug AS identificador
FROM notification_templates
ORDER BY name;
