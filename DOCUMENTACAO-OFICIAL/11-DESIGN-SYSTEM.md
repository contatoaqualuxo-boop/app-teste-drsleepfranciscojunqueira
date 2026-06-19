
# 11 - Design System

## Visão Geral

A Plataforma Prévisita utiliza um **Design System** moderno, premium e dark mode-first, construído com **Tailwind CSS**.

## Cores

A cor primária padrão é azul (#2563eb), mas cada empresa pode personalizar suas cores via white label (configurações na tabela `settings`).

### Cores Padrão

| Cor | Valor Hex | Descrição |
|-----|-----------|-----------|
| Primária | #2563eb | Azul padrão |
| Secundária | #1e40af | Azul escuro |
| Acento | #f59e0b | Âmbar |
| Background | #020617 | Azul muito escuro (dark mode) |
| Surface | #020617 | Mesmo que background |
| Texto Principal | #ffffff | Branco |
| Texto Secundário | #9ca3af | Cinza claro |
| Borda | #1f2937 | Cinza escuro |

## Tipografia

A tipografia padrão utiliza fontes do sistema, mas cada empresa pode personalizar via white label.

## Tokens de Design

Os tokens de design são gerenciados pelo **Design Tokens Engine** no Runtime. Eles incluem:
- Cores
- Tipografia
- Espaçamento
- Bordas
- Raio de borda
- Sombras
- Opacidade
- Índice z (z-index)
- Breakpoints
- Animações
- Elevação
- Contêineres

## Glass Effect

Muitos componentes utilizam o **glass effect** (fundo transparente com desfoque), como:
- Cards
- Sidebar
- Header
- Etc.

Exemplo de classe Tailwind para glass effect:
```tsx
<div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
  Conteúdo
</div>
```

## Responsividade

A plataforma é **mobile-first** e utiliza os breakpoints padrão do Tailwind CSS:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Dark Mode

A plataforma utiliza **dark mode por padrão**, mas pode ser personalizado via Runtime.

## Componentes de UI

A plataforma possui componentes de UI básicos em `src/components/ui/`:
- `Button.tsx`
- `Input.tsx`
- `Card.tsx`
- `Badge.tsx`
- `Container.tsx`
- `EmptyState.tsx`
- `LoadingState.tsx`
- `SectionHeader.tsx`

Esses componentes são reutilizáveis e seguem o design system.

## Ícones

Todos os ícones são da biblioteca **Lucide React**. Sempre usar ícones do Lucide, não misturar bibliotecas.

## Padrões de Estilo

- Sempre usar Tailwind CSS para estilos
- Evitar CSS customizado sempre que possível
- Manter a consistência visual
- Usar glass effect em cards e componentes
- Usar bordas sutis (`border-white/10`)
- Usar fundos semi-transparentes (`bg-white/5`, `bg-white/10`)
- Usar animações suaves (do Motion Resolver)
