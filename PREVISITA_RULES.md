# PREVISITA PLATFORM — REGRAS OFICIAIS

## Visão

A Plataforma Prévisita NÃO é um aplicativo específico.

Ela é uma plataforma SaaS White Label destinada a atender centenas ou milhares de empresas.

A Dr. Sleep é apenas o primeiro cliente da plataforma (Cliente Fundador).

Nenhuma implementação deve ser criada pensando apenas na Dr. Sleep.

Sempre pensar na Plataforma como produto principal.

---

## Arquitetura

Nunca alterar a arquitetura sem aprovação.

Nunca quebrar compatibilidade.

Toda implementação deve ser escalável.

Toda funcionalidade deve ser reutilizável.

Sempre priorizar arquitetura limpa.

---

## Banco de Dados

Nunca criar tabelas duplicadas.

Sempre utilizar a estrutura multiempresa existente.

Toda tabela nova deve possuir:

- RLS
- Policies
- Índices quando necessário
- updated_at
- created_at

Nunca remover colunas existentes sem aprovação.

---

## Multiempresa

Toda funcionalidade deve respeitar:

Company

↓

Store

↓

User

Nenhuma empresa poderá visualizar dados de outra empresa.

Toda consulta deve considerar company_id.

---

## White Label

Toda identidade visual deverá ser configurável.

Exemplos:

- Logo
- Nome do aplicativo
- Nome da empresa
- Nome do programa de fidelidade
- Nome da carteira
- Nome dos pontos
- Cores
- Links
- Redes sociais

Nunca deixar informações fixas da Dr. Sleep.

---

## Administração

Sempre existirão níveis de acesso:

- Super Admin Prévisita
- Admin Empresa
- Gerente Loja
- Vendedor
- Cliente

Nunca misturar permissões.

Sempre utilizar RBAC.

---

## Interface

Priorizar experiência Premium.

Mobile First.

Interface limpa.

Poucos cliques.

Sem excesso de informações.

Design elegante.

Animações suaves.

---

## Código

Sempre utilizar TypeScript.

Sempre manter organização.

Nunca duplicar código.

Criar componentes reutilizáveis.

Manter tipagens.

Evitar gambiarra.

Priorizar legibilidade.

---

## Desenvolvimento

Antes de alterar qualquer módulo:

Verificar impacto na arquitetura.

Sempre preservar compatibilidade.

Nunca alterar funcionalidades existentes sem necessidade.

Sempre validar build.

Sempre validar TypeScript.

Sempre validar deploy.

---

## Git

Commits pequenos.

Mensagens claras.

Nunca fazer push sem verificar build.

Nunca utilizar --force sem necessidade.

Sempre preservar histórico.

---

## Documentação

Sempre manter atualizados:

ARCHITECTURE_FREEZE.md

PROJECT_STATE.md

BACKUP_SCHEMA.md

PREVISITA_RULES.md

Sempre documentar novas funcionalidades importantes.

---

## Objetivo Final

Construir a Plataforma Prévisita como um SaaS White Label de alto padrão.

Todo desenvolvimento deve priorizar:

- Escalabilidade
- Segurança
- Performance
- Organização
- Reutilização
- Facilidade de implantação
- Facilidade para novos clientes

Nenhuma decisão deve ser tomada pensando apenas no cliente atual.

Sempre pensar na Plataforma Prévisita como produto principal.