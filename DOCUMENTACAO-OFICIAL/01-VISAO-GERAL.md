
# 01 - Visão Geral

## Objetivo da Plataforma

A **Plataforma Prévisita** é um SaaS White Label de alto padrão, projetado para atender empresas de qualquer segmento, inicialmente focado no mercado de colchões e sono.

Seu propósito é:
- Proporcionar uma experiência premium para os clientes finais
- Oferecer ferramentas de CRM e gestão para as empresas
- Automatizar o relacionamento com o cliente
- Gerenciar garantias, documentos e timeline do cliente
- Incentivar fidelidade e indicações
- Proporcionar insights e oportunidades de venda

## Filosofia do Projeto

1. **Escalabilidade em Primeiro Lugar**: Toda decisão arquitetônica deve permitir o crescimento para centenas ou milhares de empresas
2. **Reutilização**: Nenhuma funcionalidade deve ser criada exclusivamente para um cliente
3. **White Label Total**: Toda identidade visual e configuração deve ser customizável por empresa
4. **Segurança**: Isolamento completo dos dados entre empresas, RLS ativado em todas as tabelas
5. **Performance**: Otimizações constantes para garantir velocidade e qualidade de experiência
6. **Simplicidade**: Interface limpa, poucos cliques, sem excesso de informações

## Público-Alvo

### Principal
Empresas de varejo, especialmente do segmento de colchões e sono, que desejam:
- Melhorar o relacionamento com o cliente
- Gerenciar garantias e documentos
- Criar programa de fidelidade
- Automatizar notificações e lembretes
- Aumentar a fidelidade e indicações

### Secundário
Qualquer empresa que precise de:
- CRM e gestão de clientes
- Gestão de garantias e documentos
- Programa de fidelidade
- Automação de comunicações

## Diferenciais

1. **White Label Completo**: Identidade visual 100% customizável
2. **Multiempresa e Multiloja**: Suporta várias empresas, cada uma com várias lojas
3. **Motores Específicos**:
   - Motor de Oportunidades™ (identifica chances de venda)
   - Score Sono™ (avalia a saúde do sono do cliente)
   - Cuidados do Sono™ (conteúdos e dicas personalizadas)
4. **Arquitetura Moderna**: Next.js 16, TypeScript, Supabase
5. **Foco em UX Premium**: Design elegante, animações suaves, experiência mobile first
6. **Segurança Avançada**: RLS em todas as tabelas, RBAC completo

## Estratégia

### Fase de Validação (Atual)
- Cliente Fundador: Dr. Sleep
- Implementar todas as funcionalidades básicas
- Validar com uso real
- Ajustar conforme feedback

### Fase de Escala
- Onboarding de novas empresas
- Marketplace de módulos
- Integrações com ERPs e outros sistemas
- Analytics avançados

## White Label

A plataforma oferece white label completo, permitindo que cada empresa customize:
- Nome do aplicativo
- Logo e favicon
- Cores primárias e secundárias
- Nomes de programas (fidelidade, pontos, carteira)
- Redes sociais e links de contato
- Imagens de login/signup
- Mensagens de boas-vindas
- Intervalos de lembretes (giro de colchão, etc.)

As configurações são armazenadas na tabela `settings` e carregadas via Runtime.

## Escalabilidade

A arquitetura foi projetada para escalar:
- Isolamento por `company_id` em todas as tabelas
- RLS garante segurança e isolamento
- Next.js e Vercel permitem escalabilidade automática
- Supabase gerencia banco e autenticação de forma escalável
- Runtime modular permite adicionar novas funcionalidades sem quebrar compatibilidade
