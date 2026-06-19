
# 00 - Leia Primeiro

## Bem-vindo à Plataforma Prévisita

Essa documentação oficial serve como guia completo para qualquer desenvolvedor que assuma o projeto. Ela contém todas as informações necessárias para entender a arquitetura, o estado atual, como desenvolver e como manter a plataforma.

## Navegação Rápida

| Arquivo | Objetivo |
|---------|----------|
| 01-VISAO-GERAL.md | Visão geral do projeto, filosofia, público-alvo e diferenciais |
| 02-ROADMAP.md | Roadmap completo do projeto, fases e status |
| 03-ESTADO-ATUAL.md | Estado atual do projeto, o que está implementado e o que falta |
| 04-ARQUITETURA.md | Arquitetura técnica completa |
| 05-RUNTIME.md | Runtime da plataforma, White Label e configurações |
| 06-BANCO.md | Banco de dados, schema, tabelas e integração |
| 07-AREA-EMPRESA.md | Área administrativa da empresa (painel) |
| 08-AREA-CLIENTE.md | Área do cliente final |
| 09-ADMIN.md | Área do super admin da Plataforma Prévisita |
| 10-MOTORES.md | Motores da plataforma (oportunidades, score sono, etc.) |
| 11-DESIGN-SYSTEM.md | Design system, cores, componentes e padrões |
| 12-CONVENCOES.md | Convenções de código, organização e nomenclatura |
| 13-HISTORICO.md | Histórico técnico, decisões importantes e evolução |
| 14-PENDENCIAS.md | Pendências restantes por prioridade |
| 15-MANUAL-DESENVOLVEDOR.md | Como criar novas funcionalidades, páginas e módulos |
| 16-MANUAL-MANUTENCAO.md | Como manter, deployar e atualizar a plataforma |
| 17-CHECKPOINT-OFICIAL.md | Checkpoint oficial do projeto |
| 18-CHECKLIST.md | Checklist para deploy e lançamento de funcionalidades |

## Primeiros Passos

1. **Leia esse arquivo completo**
2. **Leia 01-VISAO-GERAL.md** para entender o propósito da plataforma
3. **Leia 03-ESTADO-ATUAL.md** para saber o que já está implementado
4. **Leia 17-CHECKPOINT-OFICIAL.md** para o último checkpoint oficial
5. **Leia 12-CONVENCOES.md** para seguir os padrões do projeto
6. **Comece a trabalhar** sempre seguindo as regras definidas

## Regras Fundamentais (Não Negociáveis)

1. **Arquitetura Congelada**: Não altere a arquitetura sem aprovação explícita
2. **Banco Congelado**: Não altere o schema do banco sem aprovação
3. **Multiempresa**: Todo código deve respeitar o isolamento por `company_id`
4. **RLS**: Sempre manter RLS HABILITADO em todas as tabelas
5. **TypeScript**: Sempre utilizar TypeScript, tipagens completas
6. **Build e Testes**: Sempre executar `npm run build` e `npx tsc --noEmit` antes de commit
7. **Git**: Commits pequenos, mensagens claras, nunca push sem build válido
8. **White Label**: Nenhuma funcionalidade deve ser exclusiva da Dr. Sleep

## Cliente Fundador

A **Dr. Sleep – Francisco Junqueira** é oficialmente reconhecida como o Cliente Fundador da Plataforma Prévisita. Ela representa a primeira implementação completa da plataforma e serve como referência histórica da evolução do produto.

Essa informação é documental. **Nenhuma funcionalidade pode ser criada exclusivamente para a Dr. Sleep**. Toda implementação deve ser reutilizável para qualquer empresa.

## Contato e Suporte

Se houver dúvidas sobre a documentação, verifique o histórico do git e os arquivos do projeto antes de fazer suposições.
