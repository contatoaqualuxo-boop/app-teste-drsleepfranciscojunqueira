
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { autoRefreshToken: false, persistSession: false }
});

interface ValidationResult {
  section: string;
  check: string;
  status: 'ok' | 'error' | 'warning';
  message: string;
  data?: any;
}

const results: ValidationResult[] = [];

async function main() {
  console.log('🔍 Iniciando validação do banco de dados...\n');

  // --- 1. Verificar tabelas existentes ---
  const expectedTables = [
    'companies', 'stores', 'roles', 'users', 'user_roles',
    'product_categories', 'products', 'user_products', 'wallets',
    'documents', 'settings', 'notification_templates', 'audit_logs',
    'customer_timeline'
  ];

  console.log('📋 1. Verificando tabelas...');
  try {
    const { data: tables, error } = await supabase.rpc('exec_sql', {
      sql_query: `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_type = 'BASE TABLE'`
    });
    
    if (error) {
      console.log('⚠️ Não foi possível consultar via RPC, tentando via tabela simulada...');
      // Como alternativa, vamos tentar consultar cada tabela individualmente
      for (const tableName of expectedTables) {
        try {
          const { error: testError } = await supabase.from(tableName).select('*').limit(1);
          if (testError) {
            if (testError.code === '42P01') { // Relation does not exist
              results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'error', message: 'Tabela não encontrada' });
            } else {
              results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'ok', message: 'Tabela existe' });
            }
          } else {
            results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'ok', message: 'Tabela existe' });
          }
        } catch (err) {
          results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'warning', message: 'Verificação inconclusiva' });
        }
      }
    } else {
      const existingTables = tables.map((t: any) => t.table_name);
      for (const tableName of expectedTables) {
        if (existingTables.includes(tableName)) {
          results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'ok', message: 'Tabela existe' });
        } else {
          results.push({ section: '1. Tabelas', check: `Tabela "${tableName}"`, status: 'error', message: 'Tabela não encontrada' });
        }
      }
    }
  } catch (err) {
    results.push({ section: '1. Tabelas', check: 'Verificação geral', status: 'error', message: `Erro: ${(err as Error).message}` });
  }

  // --- 2. Verificar dados iniciais ---
  console.log('📊 2. Verificando dados iniciais...');

  // Verificar empresa
  try {
    const { data: company } = await supabase.from('companies').select('*').eq('slug', 'dr-sleep').single();
    if (company) {
      results.push({ section: '2. Dados iniciais', check: 'Empresa "Dr. Sleep"', status: 'ok', message: 'Inserida', data: company });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Empresa "Dr. Sleep"', status: 'error', message: 'Não encontrada' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Empresa "Dr. Sleep"', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // Verificar loja
  try {
    const { data: store } = await supabase.from('stores').select('*').single();
    if (store) {
      results.push({ section: '2. Dados iniciais', check: 'Loja padrão', status: 'ok', message: 'Inserida', data: store });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Loja padrão', status: 'warning', message: 'Não encontrada (ou RLS bloqueando)' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Loja padrão', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // Verificar roles
  try {
    const { data: roles } = await supabase.from('roles').select('*');
    if (roles && roles.length > 0) {
      results.push({ section: '2. Dados iniciais', check: 'Roles padrão', status: 'ok', message: `Inseridas: ${roles.length}`, data: roles.map(r => r.name) });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Roles padrão', status: 'warning', message: 'Não encontradas (ou RLS bloqueando)' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Roles padrão', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // Verificar categorias
  try {
    const { data: categories } = await supabase.from('product_categories').select('*');
    if (categories && categories.length > 0) {
      results.push({ section: '2. Dados iniciais', check: 'Categorias padrão', status: 'ok', message: `Inseridas: ${categories.length}`, data: categories.map(c => c.name) });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Categorias padrão', status: 'warning', message: 'Não encontradas (ou RLS bloqueando)' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Categorias padrão', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // Verificar settings
  try {
    const { data: settings } = await supabase.from('settings').select('*').single();
    if (settings) {
      results.push({ section: '2. Dados iniciais', check: 'Configurações padrão', status: 'ok', message: 'Inseridas', data: settings });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Configurações padrão', status: 'warning', message: 'Não encontradas (ou RLS bloqueando)' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Configurações padrão', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // Verificar notification templates
  try {
    const { data: templates } = await supabase.from('notification_templates').select('*');
    if (templates && templates.length > 0) {
      results.push({ section: '2. Dados iniciais', check: 'Templates de notificação', status: 'ok', message: `Inseridos: ${templates.length}`, data: templates.map(t => t.name) });
    } else {
      results.push({ section: '2. Dados iniciais', check: 'Templates de notificação', status: 'warning', message: 'Não encontrados (ou RLS bloqueando)' });
    }
  } catch (err) {
    results.push({ section: '2. Dados iniciais', check: 'Templates de notificação', status: 'warning', message: `Verificação inconclusiva: ${(err as Error).message}` });
  }

  // --- 3. Gerar relatório ---
  console.log('\n📋 RELATÓRIO DE VALIDAÇÃO:');
  console.log('='.repeat(80));
  for (const result of results) {
    const statusIcon = result.status === 'ok' ? '✅' : result.status === 'error' ? '❌' : '⚠️';
    console.log(`\n[${result.section}] ${statusIcon} ${result.check}`);
    console.log(`   ${result.message}`);
    if (result.data) {
      console.log(`   Dados: ${JSON.stringify(result.data, null, 2).replace(/\n/g, '\n   ')}`);
    }
  }
  console.log('\n' + '='.repeat(80));

  const errors = results.filter(r => r.status === 'error');
  const warnings = results.filter(r => r.status === 'warning');
  
  console.log(`\n🔍 Resumo: ${results.length} verificações, ${errors.length} erros, ${warnings.length} avisos`);
}

main().catch(console.error);
