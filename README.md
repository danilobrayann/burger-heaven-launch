# Burger Heaven — Frontend

**Resumo rápido**
- Projeto: SPA React + TypeScript usando Vite, Tailwind e primitives Radix/shadcn.
- Entrada: `src/main.tsx` monta o `App.tsx`.

**Quick start**
Instale dependências e rode em modo de desenvolvimento:

```bash
npm install
npm run dev
```

Build para produção e preview do build:

```bash
npm run build
npm run preview
```

Scripts úteis
- `npm run dev` — inicia Vite (dev server).
- `npm run build` — gera build de produção.
- `npm run build:dev` — build em modo `development`.
- `npm run preview` — serve o build localmente.
- `npm run lint` — executa o ESLint no projeto.

Estrutura e convenções
- `src/pages`: rotas/telas (ex.: `Index.tsx`, `NotFound.tsx`).
- `src/components`: componentes de domínio — seções da página (ex.: `Header.tsx`, `HeroSection.tsx`).
- `src/components/ui`: primitives e wrappers (Radix + padrões shadcn). Exemplos: `button.tsx`, `input.tsx`, `toast.tsx`.
- `src/hooks`: hooks reutilizáveis (ex.: `use-mobile.tsx`, `use-toast.ts`).
- `src/lib/utils.ts`: utilitários compartilhados.
- `src/assets` e `public/`: recursos estáticos.

Principais padrões do projeto
- UI composition: componentes em `src/components/ui` passam props adiante e compõem primitives Radix — seguir o mesmo padrão ao criar novos primitives.
- Estilização: Tailwind + `class-variance-authority` + `clsx` para variantes. Evite substituir classes globais; prefira variantes.
- Navegação: `react-router-dom` gerencia rotas; adicione novas páginas em `src/pages`.
- State & data: `@tanstack/react-query` disponível para cache/queries; revise uso antes de introduzir outra abordagem.

Integrações notáveis
- Toasts: `sonner` integrado em `src/components/ui/toast.tsx` e hook `use-toast.ts`.
- Carrossel e UI avançada: `embla-carousel-react`, `recharts`, `react-day-picker` já estão nas dependências.

Tecnologias
- Vite — bundler e dev server (veja `package.json` scripts).
- React 18 + React DOM — UI principal (`src/`).
- TypeScript — tipagem estática (`tsconfig.json`).
- Tailwind CSS (+ `tailwindcss-animate`) — utilitários de estilo (`tailwind.config.ts`).
- Radix UI primitives (usadas em `src/components/ui`) e padrões shadcn-like para composição.
- `class-variance-authority` + `clsx` — construção de variantes e classes dinâmicas.
- `@tanstack/react-query` — cache e data fetching.
- `react-router-dom` — roteamento (`src/pages`).
- `sonner` — sistema de toasts/notifications.
- UI & utilitários adicionais: `embla-carousel-react`, `recharts`, `react-day-picker`, `lucide-react`.
- Form & validação: `react-hook-form`, `zod`, `@hookform/resolvers`.
- Dev tools: `eslint`, `typescript`, `@vitejs/plugin-react-swc`, `tailwindcss` (ver `devDependencies` em `package.json`).

Checklist para PR
- Rode `npm run dev` e verifique visualmente as mudanças.
- Rode `npm run lint` e corrija avisos relevantes.
- Preserve API pública dos componentes (props) ao refatorar.
- Para mudanças de estilo, prefira adicionar variantes via `class-variance-authority` em vez de alterar classes base.

Notas de deploy e CI
- Projeto é uma SPA estática (sem servidor local embutido). Deploy típico: gerar `dist` com `npm run build` e hospedar em Netlify/Vercel/GitHub Pages.
- Se houver workflows em `.github/workflows`, siga as etapas definidas lá (não há workflows padrão neste repositório).

Contato / feedback
Se quiser que eu ajuste o tom, adicione seções de testes, ou gere instruções de CI, diga quais detalhes prefere incluir.
