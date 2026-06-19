
# 10 - Motores da Plataforma

A Plataforma Prévisita possui vários motores especializados para diferentes funcionalidades.

## 1. Motor de Oportunidades™

**Objetivo**: Identificar oportunidades de venda com base nos dados do cliente.  
**Responsabilidade**: Analisar o comportamento do cliente, produtos comprados, garantias, timeline e identificar chances de venda (cross-sell, up-sell, manutenção, etc.).  
**Entradas**:
- Dados do cliente
- Produtos comprados
- Garantias
- Timeline do cliente
- Histórico de compras
- Interações

**Saídas**:
- Lista de oportunidades de venda
- Prioridade de cada oportunidade
- Sugestões de ações

**Status**: ⏳ Pendente (foundation preparada)  
**Arquivos**: (a criar)  
**Integrações Futuras**: Integração com o CRM e Dashboard da empresa.

---

## 2. Score Sono™

**Objetivo**: Avaliar a "saúde do sono" do cliente e fornecer dicas personalizadas.  
**Responsabilidade**: Coletar dados sobre o sono do cliente (se disponíveis), produtos comprados, garantias e gerar um score.  
**Entradas**:
- Dados do cliente
- Produtos comprados
- Garantias
- Dados de sono (se disponíveis)
- Interações

**Saídas**:
- Score Sono™ do cliente
- Dicas personalizadas de cuidados do sono
- Sugestões de produtos

**Status**: ⏳ Pendente (foundation preparada)  
**Arquivos**: (a criar)  
**Integrações Futuras**: Integração com a área do cliente e área da empresa.

---

## 3. Cuidados do Sono™

**Objetivo**: Fornecer conteúdos e dicas de cuidados do sono personalizadas para cada cliente.  
**Responsabilidade**: Gerenciar conteúdos de cuidados do sono e personalizar de acordo com o perfil do cliente.  
**Entradas**:
- Perfil do cliente
- Score Sono™
- Produtos comprados
- Preferências

**Saídas**:
- Conteúdos personalizados
- Dicas de cuidados do sono
- Sugestões de produtos

**Status**: ⏳ Pendente (foundation preparada)  
**Arquivos**: (a criar)  
**Integrações Futuras**: Integração com a área do cliente e área da empresa.

---

## 4. Indicou Ganhou™

**Objetivo**: Gerenciar o programa de indicações da empresa.  
**Responsabilidade**: Gerenciar indicações, recompensas, pontos, etc.  
**Entradas**:
- Dados do cliente
- Indicações realizadas
- Conversões de indicações
- Regras do programa

**Saídas**:
- Lista de indicações
- Recompensas a atribuir
- Pontos a adicionar na wallet

**Status**: ⏳ Pendente (foundation preparada)  
**Arquivos**: (a criar)  
**Integrações Futuras**: Integração com a wallet do cliente e área da empresa.

---

## 5. CRM

**Objetivo**: Gerenciar o relacionamento com o cliente, funis de venda, etc.  
**Responsabilidade**: Gerenciar funis de venda, acompanhamento de leads, interações com o cliente, etc.  
**Entradas**:
- Dados do cliente
- Interações
- Leads
- Oportunidades

**Saídas**:
- Funis de venda
- Acompanhamento de leads
- Histórico de interações

**Status**: ⏳ Pendente (foundation preparada)  
**Arquivos**: (a criar)  
**Integrações Futuras**: Integração com o Motor de Oportunidades™ e Dashboard da empresa.

---

## 6. Timeline

**Objetivo**: Gerenciar a linha do tempo do relacionamento do cliente com a marca.  
**Responsabilidade**: Registrar e exibir todos os eventos do relacionamento do cliente (compras, visitas, interações, etc.).  
**Entradas**:
- Eventos do cliente
- Compras
- Visitas
- Interações
- Garantias

**Saídas**:
- Linha do tempo completa do cliente
- Visualização dos eventos

**Status**: ✅ Foundation implementada (tabela `customer_timeline` criada)  
**Arquivos**:
- Tabela `customer_timeline` no banco
- `src/app/empresa/timeline/page.tsx`

**Integrações Futuras**: Integração com a área do cliente e área da empresa.

---

## 7. Documentos

**Objetivo**: Gerenciar documentos do cliente e da empresa (contratos, garantias, manuais, etc.).  
**Responsabilidade**: Armazenar e gerenciar documentos vinculados a clientes e produtos.  
**Entradas**:
- Arquivos de documentos
- Dados do cliente
- Dados do produto

**Saídas**:
- Lista de documentos
- URLs para download
- Status dos documentos

**Status**: ✅ Foundation implementada (tabela `documents` criada, página implementada com dados mockados)  
**Arquivos**:
- Tabela `documents` no banco
- `src/app/empresa/documentos/page.tsx`

**Integrações Futuras**: Integração com Supabase Storage para armazenamento de arquivos.

---

## 8. Programa de Fidelidade (Wallet)

**Objetivo**: Gerenciar o programa de fidelidade da empresa (pontos, créditos, cashback).  
**Responsabilidade**: Gerenciar a wallet do cliente, pontos, créditos, cashback, recompensas, etc.  
**Entradas**:
- Compras do cliente
- Indicações
- Interações
- Regras do programa

**Saídas**:
- Saldo da wallet do cliente
- Histórico de transações
- Recompensas

**Status**: ✅ Foundation implementada (tabela `wallets` criada)  
**Arquivos**:
- Tabela `wallets` no banco
- `src/app/empresa/programa-fidelidade/page.tsx`

**Integrações Futuras**: Integração com a área do cliente e área da empresa.
