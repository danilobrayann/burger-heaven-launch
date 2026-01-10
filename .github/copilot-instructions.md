Este repositório usa Vite + React + TypeScript + Tailwind com componentes Radix/shadcn.

**Big Picture**
- **Arquitetura**: SPA React com roteamento em `src/pages` e componentes em `src/components`.
- **Entrada**: a aplicação inicia em `src/main.tsx` e monta `App.tsx`.
- **UI primitives**: wrappers e componentes reutilizáveis ficam em `src/components/ui` (Radix + utilidades).

**Scripts e fluxos de desenvolvimento**
- **Dev**: rode `npm run dev` (executa `vite`).
- **Build**: `npm run build` para produção; `npm run build:dev` para build em modo development.
- **Preview**: `npm run preview` para servir o build localmente.
- **Lint**: `npm run lint` (usa ESLint configurado no projeto).

Arquivos importantes para checar antes de fazer mudanças:
- **Tailwind**: `tailwind.config.ts` — as classes utilitárias são centrais no styling.
- **Vite**: `vite.config.ts` — ajustes de bundler/aliases.
- **TypeScript**: `tsconfig.json` e `tsconfig.app.json` — paths e target.
- **Assets públicos**: `public/` e `src/assets/`.

Padrões e convenções do projeto
- **Componentes**: componentes de domínio (ex.: `Header.tsx`, `HeroSection.tsx`) em `src/components`; primitives e wrappers em `src/components/ui`.
- **Pages**: telas/rotas em `src/pages` (ex.: `Index.tsx`, `NotFound.tsx`). Use `react-router-dom` para navegação.
- **Hooks**: hooks compartilhados ficam em `src/hooks` (ex.: `use-mobile.tsx`, `use-toast.ts`). Prefira reutilizar os hooks existentes.
- **Utils/library**: funções utilitárias em `src/lib/utils.ts`.

Integrações e dependências notáveis
- **Radix + shadcn-like patterns**: componentes em `src/components/ui` são adaptações dos primitives do Radix; observe props pass-through e composição.
- **State / Data fetching**: `@tanstack/react-query` está disponível — veja padrões de cache/queries no projeto antes de adicionar outra solução.
- **Toasts/UX**: `sonner` é usado para notificações (ver `src/components/ui/toast.tsx` / `use-toast.ts`).

Práticas específicas observadas
- **Classes utilitárias e variantes**: o projeto usa `class-variance-authority` e `clsx` para construir classes dinâmicas; siga esse padrão para componentes estilizados.
- **Sem backend local**: não há scripts de servidor; o projeto é uma SPA estática. Confirme integrações externas (APIs) antes de alterar chamadas de rede.

Onde procurar exemplos
- Componente de UI base: `src/components/ui/button.tsx` e `src/components/ui/input.tsx` — copie a abordagem de composição.
- Páginas: `src/pages/Index.tsx` demonstra layout e uso de seções em `src/components`.

Checklist rápido para PRs automáticos
- Rode `npm run dev` e verifique a UI localmente.
- Execute `npm run lint` e corrija avisos relevantes.
- Evite alterar padrões de classe/Tailwind sem motivos; prefira compor variantes com `class-variance-authority`.

Seções que um agente AI pode ajudar imediatamente
- Refatorar componentes UI mantendo API pública (props) e testes visuais locais.
- Adicionar pequenas rotas/páginas seguindo `src/pages/Index.tsx` como exemplo.
- Atualizar texto/conteúdo em `src/components/*` e assets estáticos em `public/`.

Se algo não for detectável aqui
- Se precisar de comandos de CI, hooks de precommit ou regras internas, verifique se há arquivos em `.github/workflows` ou solicite acesso/descrição do fluxo de CI.

Se preferir, posso adaptar essas instruções em inglês ou incorporar trechos do `README.md` existente.
