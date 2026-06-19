
# 14 - Pendências

## Prioridade Alta

### 1. Integrar Runtime com Supabase Settings
**Descrição**: Conectar o Runtime com a tabela `settings` do Supabase para carregar configurações reais das empresas.  
**Arquivos**:
- `src/lib/supabase-settings-connector.ts`
- `src/lib/runtime.ts`

**Status**: ⏳ Pendente

---

### 2. Implementar Dashboard Foundation / CRM Base (Fase 8)
**Descrição**: Implementar o dashboard base da empresa e o CRM básico.  
**Arquivos**:
- `src/app/empresa/dashboard/page.tsx`
- `src/app/empresa/crm/page.tsx`

**Status**: ⏳ Pendente

---

### 3. Implementar Autenticação Real nas Páginas
**Descrição**: Garantir que todas as páginas autenticadas usem o AuthProvider e middleware corretamente.  
**Arquivos**:
- `src/components/AuthProvider.tsx`
- `middleware.ts`
- Todas as páginas autenticadas

**Status**: ⏳ Pendente

---

### 4. Integração Real com o Supabase nas Páginas
**Descrição**: Substituir dados mockados por dados reais do Supabase em todas as páginas.  
**Arquivos**:
- Todas as páginas da área da empresa, área do cliente e área do admin
- `src/lib/supabase.ts`
- `src/lib/supabase-server.ts`

**Status**: ⏳ Pendente

---

## Prioridade Média

### 5. Implementar Notificações (Fase 9)
**Descrição**: Implementar sistema de notificações (push, email, WhatsApp).  
**Arquivos**: (a criar)  
**Status**: ⏳ Pendente

---

### 6. Implementar Analytics (Fase 10)
**Descrição**: Implementar analytics avançados para as empresas.  
**Arquivos**: (a criar)  
**Status**: ⏳ Pendente

---

### 7. Implementar Motores Especializados
**Descrição**: Implementar:
- Motor de Oportunidades™
- Score Sono™
- Cuidados do Sono™
- Indicou Ganhou™

**Arquivos**: (a criar)  
**Status**: ⏳ Pendente

---

## Prioridade Baixa

### 8. Marketplace de Módulos (Fase 11)
**Descrição**: Preparar arquitetura para marketplace de módulos adicionais.  
**Arquivos**: (a criar)  
**Status**: ⏳ Pendente

---

### 9. Testes Automatizados
**Descrição**: Implementar testes unitários e de integração.  
**Arquivos**: (a criar)  
**Status**: ⏳ Pendente

---

### 10. Documentação de API
**Descrição**: Escrever documentação de API (se houver APIs públicas).  
**Arquivos**: (a criar)  
**Status**: ⏳ Pendente
