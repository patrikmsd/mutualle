# Landing Page Única — Mutualle

Recriação do site mutualle.com como uma landing page única, institucional, com navegação por âncoras, mantendo a identidade visual atual (logo, paleta azul, tipografia, padrão premium).

## Identidade visual

- Reaproveitar logo, paleta (tons de azul institucional + neutros claros), tipografia e estilo premium do site atual.
- Tom institucional, sóbrio, focado em governança, segurança regulatória e escala. Sem aparência B2C.
- Em nenhum lugar afirmar que a Mutualle é autorizada pela SUSEP — usar sempre "preparada para pleitear autorização".

## Estrutura (single page com âncoras)

Menu fixo no topo, com scroll suave e estado ativo conforme a seção visível. Itens:
Início · Contexto · Diferenciais · Proposta · Modelo · Números · Custos · Governança · Conteúdo · Contato

Seções, na ordem:

1. **Hero** — logo Mutualle + headline "União estratégica para associações que querem entrar no mercado regulado", parágrafos institucionais (incluindo vínculo com Grupo ARX, GPTW, ISO 9001, e ressalva sobre SUSEP). CTAs: "Quero fazer parte do grupo" (rola até formulário) e "Conheça a proposta" (rola até seção 4).
2. **Contexto regulatório** — bloco compacto com ícone, citando LC 213/2025 e a exigência da Susep de contratar administradora autorizada.
3. **A grande virada do setor** — duas colunas de cards: "A Mutualle já possui" × "Com a Mutualle sua associação não precisa".
4. **Proposta Mutualle** — lista visual do que está sendo construído (Mutualle S.A, diretoria, conselho, grupo fundador, modelo operacional, parcerias).
5. **Modelo operacional** — timeline vertical (desktop horizontal) com 5 etapas, do termo de intenção até a operação pós-credenciamento.
6. **Números do grupo** — bloco com mapa do Brasil estilizado em SVG (contorno azul claro, divisórias internas suaves, fundo integrado, sem imagem de fundo branco). Cards premium sobrepostos com contadores animados (CountUp ao entrar no viewport): 43 associações, 44 associados representados, 4 estados, 167.350 associados, 316.500 placas, arrecadação mensal estimada (R$ —), R$ 6 mi em fundo/reserva. Disclaimer abaixo.
7. **Custos e estrutura financeira** — texto explicativo + destaque pricing-style com a faixa "R$9,90 (5,5%) — R$14,76 (8,2%) por veículo".
8. **Estrutura e Governança** — Diretoria em blocos horizontais institucionais (foto, nome, cargo, currículo, função em box destacado) para Wederson Viana, Marcos Henrique, Isabella Capuzzo, Fábio da Silva Teixeira. Conselheiros consultivos abaixo, em cards no padrão atual.
9. **Conteúdo / Blog** — 3 cards de artigos externos (Susep R$ 68,32 bi, novo regimento Susep, governança no novo mercado mutualista). Todos `target="_blank" rel="noopener"`.
10. **Chamada final** — título de impacto + dois CTAs ("Quero conversar com a Mutualle" / "Solicitar apresentação institucional"), ambos rolam até o formulário.
11. **Formulário "Fale com a Mutualle"** — campos: Nome do Presidente, Nome da Associação, Cidade/Estado sede, Estados com associados ativos (multi-select), Quantidade de associados, Quantidade de veículos por tipo (linhas dinâmicas: tipo + quantidade), Telefone/WhatsApp, E-mail, "A associação já realizou cadastro/adequação?" (sim/não), "Deseja participar do grupo?" (sim/não/quero saber mais). Validação com mensagens claras. Envio por e-mail (ver seção técnica).
12. **Rodapé** — frase institucional final + logo + links de âncora + dados de contato.

## UX e responsividade

- Header fixo translúcido com blur, encolhe ao rolar, menu hamburguer no mobile.
- Scroll suave, offset do header considerado nas âncoras, indicador de seção ativa.
- Animações sutis ao entrar no viewport (fade/slide curtos), contadores animados nos números.
- Layout responsivo (mobile-first): timeline vira vertical, diretoria empilha, mapa adapta.
- Acessibilidade: contraste, foco visível, `aria-label` nos botões de âncora, alt nas imagens.
- Performance: imagens otimizadas, mapa em SVG inline, sem libs pesadas.

## Detalhes técnicos

- Stack atual: TanStack Start + React + Tailwind v4 + shadcn/ui.
- Toda a página vive em `src/routes/index.tsx` (substituindo o placeholder), com componentes de seção em `src/components/sections/` (`Hero`, `RegulatoryContext`, `Differentiators`, `Proposal`, `OperationalModel`, `GroupNumbers`, `Costs`, `Governance`, `Content`, `FinalCta`, `ContactForm`, `SiteFooter`) e um `SiteHeader` em `src/components/layout/`.
- Tokens de cor da Mutualle adicionados em `src/styles.css` (`:root` com a paleta azul + neutros) e mapeados no `@theme inline`. Tipografia institucional carregada via `<link>` em `__root.tsx` `head()`.
- Mapa do Brasil: SVG inline com paths dos estados, stroke azul claro no contorno externo e divisórias internas com baixa opacidade; cards posicionados absolutamente sobre o SVG em desktop e empilhados em mobile.
- Contadores: hook `useCountUp` próprio acionado por `IntersectionObserver` (sem dependência extra).
- Formulário: validação com `zod` + `react-hook-form`. Envio via server function (`src/lib/contact.functions.ts`) usando `createServerFn` que enfileira o e-mail. Para isso é necessário habilitar Lovable Cloud + domínio de e-mail (passo solicitado após aprovação do plano).
- SEO/`head()` da rota com `title`, `description`, `og:title`, `og:description` e `og:image` (logo Mutualle).
- Sem afirmações de autorização Susep em copy, meta tags ou alt-texts.

## Pendências a confirmar durante a implementação

- Fotos e currículos exatos dos diretores e conselheiros: usaremos os já presentes no site atual (download do mutualle.com). Se algum não estiver disponível publicamente, deixamos placeholder com nome/cargo/currículo textual fornecido.
- Logo em alta resolução: extraída do site atual.
- Endereço de e-mail destinatário do formulário: a definir antes do deploy.
