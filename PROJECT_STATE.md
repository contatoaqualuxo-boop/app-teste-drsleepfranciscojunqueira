
# Plataforma Prévisita - Estado do Projeto (v1.0-foundation)

## Tudo que já foi implementado

### 1. Arquitetura e Configuração Inicial
- Projeto Next.js 16 + TypeScript criado.
- Integração com Supabase configurada (client e server).
- Arquivo .env.local com credenciais do Supabase.

### 2. Banco de Dados
- Todas as tabelas criadas e configuradas no Supabase.
- RLS habilitado em todas as tabelas.
- Policies básicas implementadas.
- Triggers `handle_updated_at` e `on_auth_user_created` configurados.
- Dados iniciais inseridos:
  - Empresa Dr. Sleep
  - Loja padrão Francisco Junqueira
  - Roles padrão (super_admin, admin_empresa, gerente_loja, vendedor, cliente)
  - Categorias de produtos (Colchões, Travesseiros, Protetores)
  - Produto exemplo (Dr. Sleep Infinity)
  - Configurações padrão
  - Template de notificação exemplo

### 3. Estrutura de Pastas
- Estrutura organizada para escalabilidade.
- Pasta `src/lib/supabase` para integração com o Supabase.
- Pasta `src/lib/types` para tipos TypeScript.

### 4. Páginas e Componentes
- Páginas publicas e privadas criadas (apenas visual, sem lógica).
- Componentes básicos existentes (`ClientWrapper`, `PlaceholderPage`).
- Layout principal configurado.

## Tudo que falta implementar

### 1. Autenticação
- Implementar login real na página `/login`.
- Implementar cadastro real na página `/cadastro`.
- Implementar logout real na página `/minha-conta`.
- Criar middleware Next.js para proteção de rotas.
- Criar hook `useAuth`.

### 2. Gerenciamento de Estado
- Instalar e configurar Zustand.
- Criar store de autenticação.
- Criar stores para dados do usuário, carteira, etc.

### 3. Integração das Páginas do Cliente
- Conectar `/home` com dados reais.
- Conectar `/minha-conta` com dados reais e funcionalidades.
- Conectar `/meu-colchao` com dados reais e upload de arquivos.
- Conectar `/cuidados` com tarefas e lembretes.
- Conectar `/clube-do-sono` com pontos e recompensas.
- Conectar `/indique-ganhe` com programa de indicações.
- Conectar `/previsita` com link dinâmico da empresa.

### 4. Integração do Painel Admin
- Conectar `/admin/dashboard` com métricas.
- Implementar CRUD de clientes (admin).
- Implementar CRUD de produtos do catálogo (admin).
- Implementar registro de vendas (admin).
- Implementar gerenciamento de indicações (admin).
- Implementar gerenciamento de recompensas (admin).
- Implementar envio de notificações (admin).

### 5. Supabase Storage
- Configurar buckets no Supabase.
- Implementar upload de fotos de produtos.
- Implementar upload/download de documentos.
- Criar policies para o Storage.

### 6. Notificações
- Implementar envio de e-mails via Supabase ou integração externa.
- Implementar envio de WhatsApp (opcional).
- Implementar notificações push (opcional).
- Usar templates da tabela `notification_templates`.

### 7. Logs e Auditoria
- Implementar log de ações dos admins na tabela `audit_logs`.
- Criar página de logs no painel admin.

### 8. Testes e Validação
- Testar RLS e políticas.
- Testar autenticação e middleware.
- Testar fluxo completo do cliente.
- Testar fluxo completo do admin.

## Ordem Correta das Próximas Etapas
1. **Autenticação**: Implementar login, cadastro, logout e middleware.
2. **Gerenciamento de Estado**: Configurar Zustand e stores básicas.
3. **Dados do Cliente**: Conectar `/home`, `/minha-conta`, `/meu-colchao`.
4. **Storage**: Configurar buckets e upload/download de arquivos.
5. **Cuidados**: Conectar `/cuidados` com tarefas e lembretes.
6. **Clube do Sono e Indique e Ganhe**: Conectar essas páginas.
7. **Painel Admin**: Implementar as funcionalidades do admin.
8. **Notificações**: Implementar envio de notificações.
9. **Auditoria**: Implementar logs de ações dos admins.
10. **Testes e Otimizações**: Testar tudo e otimizar performance.

## Dependências
- Node.js
- Next.js 16
- React 19
- TypeScript
- @supabase/supabase-js
- @supabase/ssr
- lucide-react
- tailwindcss
- zustand (a instalar)

## Decisões Arquiteturais Tomadas (NÃO ALTERAR)
1. **Framework**: Usar Next.js 16 com App Router (não voltar para Pages Router).
2. **Banco de Dados**: Usar PostgreSQL via Supabase (não trocar de banco).
3. **Autenticação**: Usar Supabase Auth (não implementar autenticação própria).
4. **Armazenamento**: Usar Supabase Storage (não usar S3 ou outro).
5. **Gerenciamento de Estado**: Usar Zustand (não usar Redux ou Context API complexa).
6. **Arquitetura Multiempresa**: Isolamento por `company_id` e RLS (não mudar).
7. **Nomenclatura**: Manter snake_case para tabelas/campos do banco, camelCase para código TypeScript.
8. **RLS**: Sempre manter RLS HABILITADO em todas as tabelas (não desativar).
9. **Triggers**: Manter triggers `handle_updated_at` e `on_auth_user_created` (não remover).
