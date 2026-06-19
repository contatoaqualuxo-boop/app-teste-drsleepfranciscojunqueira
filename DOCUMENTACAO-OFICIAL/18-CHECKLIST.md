
# 18 - Checklist

## Checklist Antes de Commit e Push

- [ ] `npm run lint` — passou sem erros?
- [ ] `npx tsc --noEmit` — passou sem erros?
- [ ] `npm run build` — passou sem erros?
- [ ] Git status — working tree limpo?
- [ ] Todos os arquivos relevantes adicionados?
- [ ] Mensagem do commit clara e em português?

## Checklist Antes de Deploy

- [ ] Todos os checks anteriores passaram?
- [ ] Testou as funcionalidades principais localmente?
- [ ] Verificou o preview deploy (se houver)?
- [ ] Atualizou a documentação (se necessário)?
- [ ] Commit no branch `main`?
- [ ] Push para o repositório?

## Checklist para Nova Funcionalidade

- [ ] Seguiu a arquitetura existente?
- [ ] Respeitou o isolamento por `company_id`?
- [ ] Usou TypeScript com tipagens completas?
- [ ] Usou o design system e Tailwind CSS?
- [ ] Usou ícones do Lucide React?
- [ ] Atualizou a documentação?
- [ ] Testou a funcionalidade?
- [ ] Passou por lint, typecheck e build?

## Checklist para Nova Página na Área da Empresa

- [ ] Usou o `DashboardLayout`?
- [ ] Incluiu o menu padronizado completo?
- [ ] Manteve a ordem exata do menu?
- [ ] Renomeou "Pré-visitas" para "Visitas à Loja" (se aplicável)?
- [ ] Usou o design system?
- [ ] Passou por lint, typecheck e build?

## Checklist para White Label

- [ ] Todas as configurações são carregadas via Runtime?
- [ ] Não há informações hardcoded da Dr. Sleep?
- [ ] Todas as cores, fontes, etc., são personalizáveis?
- [ ] Passou por lint, typecheck e build?
