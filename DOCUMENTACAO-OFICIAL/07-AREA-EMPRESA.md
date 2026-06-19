
# 07 - Área da Empresa

## Visão Geral

A **Área da Empresa** é o painel administrativo para as empresas clientes da Plataforma Prévisita. Ela permite gerenciar clientes, produtos, garantias, documentos, configurações e muito mais.

## Menu Padronizado

Todas as páginas da área da empresa usam o mesmo menu na sidebar, na seguinte ordem exata:
1. Dashboard
2. Clientes
3. Consultores
4. CRM
5. Produtos
6. Garantias
7. Lojas
8. Indicou Ganhou
9. Cuidados do Sono
10. Score Sono™
11. Motor de Oportunidades™
12. Documentos
13. Visitas à Loja
14. Configurações

## Páginas da Área da Empresa

### 1. Dashboard (`src/app/empresa/dashboard/page.tsx`)
**Objetivo**: Página inicial do painel da empresa, com métricas e cards principais.  
**Status**: ✅ Implementado (com dados mockados)  
**Funcionalidades**:
- Cards com métricas: Clientes, Vendas, Leads, Conversão
- Cards de atalhos: Clientes, CRM, Financeiro, Agenda, IA, Programa de Fidelidade, Visitas à Loja, Campanhas
- Gráfico de desempenho de vendas (mockado)
- Próximas tarefas
- Atividades recentes
- Saúde comercial
- Performance das lojas
- Produtos mais vendidos
- Alertas inteligentes
- Ranking dos consultores
- Resumo financeiro

**Arquivos**:
- `src/app/empresa/dashboard/page.tsx`

**Dependências**:
- `lucide-react`
- `DashboardLayout`

---

### 2. Clientes (`src/app/empresa/clientes/page.tsx`)
**Objetivo**: Gerenciar a lista de clientes da empresa.  
**Status**: ✅ Implementado (com dados mockados)  
**Funcionalidades**:
- Cards com métricas: Total de clientes, Clientes ativos, Clientes com pré-visita, Clientes fidelidade
- Barra de busca
- Filtros (Todos, Ativos, Inativos, Fidelidade)
- Botão "Novo Cliente"
- Tabela com lista de clientes: Cliente, Telefone, Produto, Última Compra, Status, Potencial
- Sidebar com perfil do cliente e ações rápidas

**Arquivos**:
- `src/app/empresa/clientes/page.tsx`
- `src/app/empresa/clientes/[id]/page.tsx`
- `src/app/empresa/clientes/[id]/editar/page.tsx`
- `src/app/empresa/clientes/novo/page.tsx`

**Dependências**:
- `lucide-react`
- `DashboardLayout`
- `Link` do Next.js

---

### 3. Consultores (`src/app/empresa/consultores/page.tsx`)
**Objetivo**: Gerenciar consultores/vendedores da empresa.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Listagem de consultores (a implementar com dados reais)

**Arquivos**:
- `src/app/empresa/consultores/page.tsx`
- `src/app/empresa/consultores/[id]/page.tsx`
- `src/app/empresa/consultores/[id]/editar/page.tsx`
- `src/app/empresa/consultores/novo/page.tsx`

---

### 4. CRM (`src/app/empresa/crm/page.tsx`)
**Objetivo**: Gerenciar funis de venda e relacionamento com clientes.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- CRM básico (a implementar)

**Arquivos**:
- `src/app/empresa/crm/page.tsx`

---

### 5. Produtos (`src/app/empresa/produtos/page.tsx`)
**Objetivo**: Gerenciar o catálogo de produtos da empresa.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Listagem de produtos (a implementar com dados reais)

**Arquivos**:
- `src/app/empresa/produtos/page.tsx`
- `src/app/empresa/produtos/[id]/page.tsx`
- `src/app/empresa/produtos/[id]/editar/page.tsx`

---

### 6. Garantias (`src/app/empresa/garantias/page.tsx`)
**Objetivo**: Gerenciar garantias de produtos comprados pelos clientes.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Listagem de garantias (a implementar com dados reais)

**Arquivos**:
- `src/app/empresa/garantias/page.tsx`

---

### 7. Lojas (`src/app/empresa/lojas/page.tsx`)
**Objetivo**: Gerenciar as lojas/unidades da empresa.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Listagem de lojas (a implementar com dados reais)

**Arquivos**:
- `src/app/empresa/lojas/page.tsx`
- `src/app/empresa/lojas/[id]/page.tsx`
- `src/app/empresa/lojas/[id]/editar/page.tsx`
- `src/app/empresa/lojas/nova/page.tsx`

---

### 8. Indicou Ganhou (`src/app/empresa/indicou-ganhou/page.tsx`)
**Objetivo**: Gerenciar o programa de indicações da empresa.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Programa de indicações (a implementar)

**Arquivos**:
- `src/app/empresa/indicou-ganhou/page.tsx`

---

### 9. Cuidados do Sono (`src/app/empresa/cuidados-sono/page.tsx`)
**Objetivo**: Gerenciar conteúdos e dicas de cuidados do sono para os clientes.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Cuidados do Sono™ (a implementar)

**Arquivos**:
- `src/app/empresa/cuidados-sono/page.tsx`

---

### 10. Score Sono™ (`src/app/empresa/score-sono/page.tsx`)
**Objetivo**: Gerenciar o Score Sono™ dos clientes.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Score Sono™ (a implementar)

**Arquivos**:
- `src/app/empresa/score-sono/page.tsx`

---

### 11. Motor de Oportunidades™ (`src/app/empresa/oportunidades/page.tsx`)
**Objetivo**: Gerenciar e visualizar oportunidades de venda identificadas pelo motor.  
**Status**: ✅ Implementado (placeholder com menu padronizado)  
**Funcionalidades**:
- Motor de Oportunidades™ (a implementar)

**Arquivos**:
- `src/app/empresa/oportunidades/page.tsx`

---

### 12. Documentos (`src/app/empresa/documentos/page.tsx`)
**Objetivo**: Gerenciar documentos da empresa (contratos, manuais, garantias).  
**Status**: ✅ Implementado (com dados mockados premium)  
**Funcionalidades**:
- Cards: Documentos ativos, Contratos, Manuais, Garantias
- Tabela com lista de documentos: Documento, Tipo, Data, Tamanho, Status, Ação (Baixar)
- Barra de busca
- Botão "Novo Documento"

**Arquivos**:
- `src/app/empresa/documentos/page.tsx`

**Dependências**:
- `lucide-react`
- `DashboardLayout`

---

### 13. Visitas à Loja (`src/app/empresa/previsitas/page.tsx`)
**Objetivo**: Gerenciar visitas à loja (anteriormente pré-visitas).  
**Status**: ✅ Implementado (com dados mockados, renomeado de "Pré-visitas" para "Visitas à Loja")  
**Funcionalidades**:
- Cards com métricas
- Listagem de visitas à loja

**Arquivos**:
- `src/app/empresa/previsitas/page.tsx`

**Dependências**:
- `lucide-react`
- `DashboardLayout`

---

### 14. Configurações (`src/app/empresa/configuracoes/page.tsx`)
**Objetivo**: Gerenciar configurações da empresa (dados, identidade visual, preferências, permissões, segurança).  
**Status**: ✅ Implementado (com conteúdo premium mockado)  
**Funcionalidades**:
- Seções: Dados da empresa, Identidade visual, Preferências do sistema, Permissões, Segurança
- Ações rápidas: Alterar senha, Verificar autenticação, Configurar backup
- Status de segurança: "Seu painel está seguro e atualizado"

**Arquivos**:
- `src/app/empresa/configuracoes/page.tsx`

**Dependências**:
- `lucide-react`
- `DashboardLayout`

---

## Integrações Futuras

Todas as páginas da área da empresa serão integradas com o Supabase para:
- Carregar dados reais do banco
- Salvar alterações
- Gerenciar permissões via RBAC
- Carregar configurações white label via Runtime
