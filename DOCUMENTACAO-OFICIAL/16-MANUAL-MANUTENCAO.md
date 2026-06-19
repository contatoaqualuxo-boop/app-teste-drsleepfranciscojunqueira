
# 16 - Manual de Manutenção

## Como Atualizar o Projeto

1. Atualize as dependências: `npm update`
2. Verifique se o build funciona: `npm run build`
3. Resolva quaisquer erros
4. Commit as alterações
5. Push para o repositório

## Como Publicar (Deploy)

O deploy é feito automaticamente via Vercel quando você push para o branch `main`.

Para fazer deploy manualmente:
1. Certifique-se de que o build funciona: `npm run build`
2. Commit as alterações
3. Push para o branch `main`
4. Acesse o painel do Vercel para verificar o deploy

## Como Usar o Git

### Fluxo de Trabalho

1. Sempre trabalhe em branches para features/bugfixes (não trabalhe diretamente no `main`)
2. Crie um branch: `git checkout -b feature/minha-feature`
3. Faça commits pequenos e frequentes
4. Push o branch para o repositório
5. Abra um Pull Request
6. Merge o PR para o `main` após aprovação

### Comandos Comuns

- `git status`: Verifica o status do repositório
- `git add .`: Adiciona todos os arquivos para commit
- `git commit -m "Mensagem do commit"`: Cria um commit
- `git push origin main`: Push o branch `main` para o repositório
- `git pull origin main`: Atualiza o branch `main` local com o remoto
- `git log`: Verifica o histórico de commits
- `git checkout -b [nome-do-branch]`: Cria um novo branch

## Como Usar o GitHub

- Repositório: [URL do repositório]
- Issues: Use para reportar bugs e solicitar features
- Pull Requests: Use para enviar alterações para revisão
- Actions: (se configurado)

## Como Usar o Vercel

- Painel: [URL do painel do Vercel]
- Deploy automático: Sempre que push para o branch `main`, o Vercel faz deploy automaticamente
- Preview Deploy: Sempre que você abre um PR, o Vercel cria um preview deploy
- Domínios: Configure domínios no painel do Vercel

## Como Usar o Supabase

- Painel: [URL do painel do Supabase]
- Banco de Dados: Gerencie tabelas, dados, RLS, triggers, etc.
- Auth: Gerencie usuários e autenticação
- Storage: Gerencie arquivos
- Functions: (se usar) Gerencie Edge Functions

## Como Fazer Backup

1. Acesse o painel do Supabase
2. Vá para Database → Backups
3. Crie um backup manualmente (ou use os backups automáticos)
4. Para backups locais, use `pg_dump`

## Como Restaurar Backup

1. Acesse o painel do Supabase
2. Vá para Database → Backups
3. Selecione o backup que deseja restaurar
4. Confirme a restauração

## Como Verificar Logs

- Vercel: Acesse o painel do Vercel → Your Project → Functions → Logs
- Supabase: Acesse o painel do Supabase → Database → Logs
- Local: Use o terminal onde você executou `npm run dev`

## Como Corrigir Erros Comuns

### Erro de Build

1. Verifique o log do build para identificar o erro
2. Resolva o erro
3. Execute `npm run build` novamente para confirmar
4. Commit e push

### Erro de TypeScript

1. Verifique o log do `npx tsc --noEmit`
2. Resolva os erros de tipo
3. Execute `npx tsc --noEmit` novamente para confirmar
4. Commit e push

### Erro de Lint

1. Verifique o log do `npm run lint`
2. Resolva os erros de lint
3. Execute `npm run lint` novamente para confirmar
4. Commit e push
