
-- ============================================
-- RELATÓRIO DE VALIDAÇÃO DO BANCO DE DADOS
-- ============================================

-- 1. Verificar tabelas existentes
SELECT 'TABELAS EXISTENTES' AS tipo, table_name AS valor, NULL AS extra
FROM information_schema.tables
WHERE table_schema = 'public' AND table_type = 'BASE TABLE'
ORDER BY table_name

UNION ALL

-- 2. Verificar se RLS está habilitado nas tabelas
SELECT 'RLS HABILITADO' AS tipo, tablename AS valor, rowsecurity::text AS extra
FROM pg_tables
WHERE schemaname = 'public'
ORDER BY tablename

UNION ALL

-- 3. Verificar políticas RLS criadas
SELECT 'POLÍTICAS RLS' AS tipo, tablename || ' - ' || policyname AS valor, cmd AS extra
FROM pg_policies
WHERE schemaname = 'public'
ORDER BY tablename, policyname

UNION ALL

-- 4. Verificar dados iniciais: companies
SELECT 'DADOS - EMPRESAS' AS tipo, name AS valor, slug AS extra
FROM companies
ORDER BY name

UNION ALL

-- 5. Verificar dados iniciais: stores
SELECT 'DADOS - LOJAS' AS tipo, name AS valor, NULL AS extra
FROM stores
ORDER BY name

UNION ALL

-- 6. Verificar dados iniciais: roles
SELECT 'DADOS - ROLES' AS tipo, name AS valor, description AS extra
FROM roles
ORDER BY name

UNION ALL

-- 7. Verificar dados iniciais: product_categories
SELECT 'DADOS - CATEGORIAS' AS tipo, name AS valor, slug AS extra
FROM product_categories
ORDER BY name

UNION ALL

-- 8. Verificar dados iniciais: settings
SELECT 'DADOS - CONFIGURAÇÕES' AS tipo, app_name AS valor, company_name AS extra
FROM settings

UNION ALL

-- 9. Verificar dados iniciais: notification_templates
SELECT 'DADOS - TEMPLATES NOTIFICAÇÕES' AS tipo, name AS valor, slug AS extra
FROM notification_templates
ORDER BY name;
