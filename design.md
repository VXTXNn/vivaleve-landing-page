---
name: VivaLeve
description: Design editorial gastronômico, orgânico e acolhedor para refeições por assinatura.
colors:
  green: "#173f35"
  orange: "#ce6838"
  cream: "#f3ecdf"
  ink: "#122019"
  line: "rgba(18,32,25,.2)"
typography:
  display:
    fontFamily: '"Manrope", sans-serif'
    fontSize: "clamp(56px,6.4vw,94px)"
    fontWeight: 800
    lineHeight: 0.93
    letterSpacing: "-.04em"
  headline:
    fontFamily: '"Manrope", sans-serif'
    fontSize: "clamp(48px,5.3vw,78px)"
    fontWeight: 800
    lineHeight: 0.93
    letterSpacing: "-.04em"
  editorial-emphasis:
    fontFamily: '"Newsreader", serif'
    fontSize: "1.08em"
    fontWeight: 500
    lineHeight: 0.9
    letterSpacing: "-.04em"
  title:
    fontFamily: '"Newsreader", serif'
    fontSize: "34px"
    fontWeight: 500
    lineHeight: 1
  body:
    fontFamily: '"Manrope", sans-serif'
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: '"Manrope", sans-serif'
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: ".18em"
  navigation:
    fontFamily: '"Manrope", sans-serif'
    fontSize: "16px"
    fontWeight: 500
    letterSpacing: "-.02em"
rounded:
  sm: "14px"
  md: "22px"
  lg: "28px"
  pill: "999px"
spacing:
  grid-edge: "max(clamp(20px,5vw,72px),calc((100vw - 1280px)/2))"
  shell: "12px"
  shell-mobile: "8px"
components:
  button-primary:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-light:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.green}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 24px"
  header-cta:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "12px 24px"
  contact-input:
    backgroundColor: "rgba(243,236,223,.2)"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "52px"
    padding: "0 14px"
  plan-featured:
    backgroundColor: "{colors.green}"
    textColor: "{colors.cream}"
    rounded: "{rounded.md}"
    padding: "38px"
---

# Design System: VivaLeve

## Overview

**Creative North Star: "A mesa devolve o tempo."**

A VivaLeve combina a clareza de uma landing page comercial com o ritmo de uma publicação gastronômica. Títulos compactos e encorpados organizam a leitura; frases em serifada, fotografias de comida e superfícies quentes aproximam a interface do momento de sentar à mesa.

A direção já estabelecida é orgânica, acolhedora e moderna, com influência do Noroeste Pacífico: luz difusa, cerâmica, madeira clara, linho e verdes profundos. A sensação premium depende do espaço, das imagens e da consistência, não de ornamentos ou sinais literais de luxo. As referências rejeitadas no briefing são o aspecto clínico, fitness agressivo, infantil e rústico caricato.

**Key Characteristics:**

- Quatro cores-base, com transparências para bordas, sombras e estados.
- Manrope para estrutura; Newsreader para a voz editorial.
- Fotografia gastronômica protagonista e cantos arredondados.
- Blocos amplos alternando creme, verde, laranja e carvão.
- Navegação fixa que se transforma em cápsula ao rolar.
- Revelações reversíveis, parallax discreto e vídeo controlado pelo scroll.

### Escopo e fontes

Registro do estado local em **30/08/2026**, baseado em `index.html`, `styles.css`, `script.js`, nos arquivos de `assets/` e na direção registrada em `DESIGN-DIRECTION.md`. A implementação prevalece sobre propostas antigas: o CSS tem várias camadas de sobrescrita, portanto a primeira ocorrência de uma regra nem sempre é o valor vigente.

Documento atualizado após o refinamento de 30/08/2026, orientado pela crítica Impeccable. Foram inspecionados desktop de 1440 px, tablet de 768 px e celular de 390 px no navegador integrado. A identidade e a arquitetura da página foram preservadas. O formulário continua local, sem serviço de envio; relatos e dados comerciais ainda exigem validação antes de uma operação real.

## Colors

Uma base mineral quente sustenta o contraste entre natureza, alimento e texto. Os valores normativos da paleta estão no frontmatter.

### Primary

- **Verde floresta — `green`:** botões principais, seção Sobre e plano central. Estabelece as grandes áreas de contraste com texto creme.

### Secondary

- **Laranja queimado — `orange`:** palavras em destaque, nota da hero, terceiro depoimento, contato, cursor complementar e estados de interação. Não é uma cor de erro.

### Neutral

- **Creme mineral — `cream`:** fundo geral, planos externos, botões claros e texto sobre superfícies escuras.
- **Carvão esverdeado — `ink`:** corpo de texto, navbar inicial e rodapé. Evita preto puro como cor central da interface.
- **Linha translúcida — `line`:** divisórias e contornos; deriva do carvão, não constitui uma quinta cor-base.

### Aliases existentes e exceções

No CSS final, `--paper` e `--sage` repetem o creme; `--green-2` repete o verde; `--orange-soft` repete o laranja; `--muted` repete o carvão. São aliases de compatibilidade, não variantes cromáticas independentes.

Há resíduos fora da paleta nos estilos ativos: algumas divisórias antigas usam branco translúcido. O texto institucional agora usa creme; fotos responsivas substituem os fundos ativos antigos. Essa distinção é importante: a intenção é uma paleta de quatro bases, mas o código ainda não está inteiramente normalizado.

Não há tema escuro global. A inversão da navbar depende de sua posição sobre seções marcadas para contraste, e não da preferência de cor do sistema operacional.

## Typography

**Display Font:** Manrope, fallback sans-serif. **Editorial Font:** Newsreader, fallback serif. Não há família monoespaçada ou tipografia de ícones.

Manrope traz peso e leitura direta; Newsreader suaviza a linguagem sem substituir a hierarquia principal. Os destaques semânticos em `em` usam Newsreader em estilo normal pela declaração abreviada de fonte: não pressupor itálico só porque a tag é `em`.

As fontes são carregadas por Google Fonts, com `display=swap` e preconnect. O HTML solicita Manrope 400–800 em pesos enumerados e Newsreader 500/600 com eixo óptico. O efeito de peso na navegação depende da fonte efetivamente entregue; o código declara `font-variation-settings`, mas isso não garante interpolação contínua em uma fonte estática.

### Hierarchy

| Papel | Aplicação atual |
|---|---|
| Display | Hero, com escala fluida definida no frontmatter; destaque serifado proporcional ao título. |
| Headline | Menu e planos usam a escala `headline`; contato usa `clamp(48px,5.5vw,82px)`. |
| Sobre | `clamp(44px,4.75vw,70px)`, entrelinha `.96`, com regra prioritária. “quer viver.” fica unido acima de 600 px. |
| Depoimentos | Título `clamp(46px,5vw,72px)`, entrelinha `.98`; relatos em Newsreader 500, `clamp(24px,2.25vw,34px)/1.18`. |
| Títulos de produto | Papel `title` do frontmatter; planos usam Newsreader 500, 36 px e entrelinha 1.1. |
| Preços | Manrope 800, 58 px, tracking `-.07em`; moeda em 16 px e frequência em 11 px. |
| Corpo | Base no frontmatter; lead da hero 18 px/1.65, descrição dos pratos 15 px, institucional 19 px. |
| Labels | Eyebrows em caixa alta; metadados dos pratos e plano 11 px, ambos com tracking aberto. |
| Navegação | Links desktop no papel `navigation`; CTA 16 px; marca do cabeçalho 19 px. |

**Mobile:** até 600 px, h1 e os principais h2 recebem 36 px e tracking `-.04em`. A entrelinha geral desses títulos é 1.02; o título Sobre usa 1.05 no mobile. O destaque em Newsreader continua com `1.08em`: o limite de 36 px não significa que todos os glifos do título tenham exatamente esse tamanho. A hero reduz o lead para 16 px.

## Layout

### Estrutura da página

A sequência implementada é: hero → três diferenciais → menu com três pratos → Sobre → três depoimentos → três planos → formulário de contato → rodapé. A navegação usa âncoras na mesma página. Não há blog, catálogo completo, carrinho ou checkout.

### Grid e alinhamentos

- Hero desktop: 12 colunas, gap de 24 px; texto ocupa as primeiras seis e mídia as últimas seis. Altura mínima de uma viewport (`100svh`).
- As bordas principais seguem `grid-edge`, com referência de conteúdo máximo de 1280 px. Vários grids recebem também `width:100%` e `max-width:1280px`.
- Cabeçalho de seção: proporção 2:1, gap de 80 px. O título dos planos ocupa as duas colunas após a remoção do texto lateral.
- Menu: três colunas e gap de 24 px. Depoimentos: três colunas e gap de 16 px. Planos: três colunas e gap de 14 px.
- Sobre e contato: proporção 5:7 com `minmax(0, ...)`. O padding lateral considera a moldura externa.
- Rodapé: quatro colunas assimétricas; marca e contato recebem mais espaço.
- Sobre, planos, contato e rodapé usam moldura externa e cantos arredondados. Regras tardias fixam margens em 12 px, com reduções em breakpoints; não tratar `shell` como controlador único de todas as margens atuais.

### Ritmo e responsividade

No celular, as seções genéricas foram compactadas para 60 px de padding vertical. O espaçamento é amplo, mas não segue uma escala única estrita: coexistem 14, 18, 20, 24, 28, 34, 38, 52, 60, 64, 72, 76, 88 e 128 px. Não inventar uma escala de tokens de 8 px como se já estivesse aplicada.

| Faixa | Comportamento observado no código |
|---|---|
| Acima de 1000 px | Rodapé em quatro colunas; demais estruturas de desktop. |
| Até 1000 px | Rodapé em três colunas; contato passa para a linha seguinte. |
| Até 900 px | Hero empilhada, vídeo oculto, navbar com hambúrguer, Sobre e contato em uma coluna, depoimentos empilhados; menu com duas colunas e terceiro item com meia largura. |
| Até 680 px | Rodapé em duas colunas; marca e contato ocupam a largura completa; faixas inferiores empilhadas. |
| Até 600 px | Títulos principais reduzidos, ações da hero empilhadas, menu em uma coluna, nota da hero escondida e links do rodapé com alvo mínimo de 44 px. |

As seções genéricas têm padding vertical de 128 px no desktop, 88 px até 900 px e 60 px até 600 px. Contato usa 110 px no desktop e 60 px até 600 px.

**Planos no mobile:** permanecem lado a lado dentro de um trilho horizontal, não comprimidos para caber os três simultaneamente. Colunas `minmax(280px,min(82vw,350px))`, gap de 14 px, scroll-snap obrigatório por card e altura mínima de 490 px. Trata-se de uma exceção deliberada ao fluxo vertical geral.

## Elevation & Depth

A profundidade combina superfícies tonais, bordas finas e sombras difusas. Fotografias têm volume próprio; a interface usa elevação para diferenciar ação, camada flutuante e resposta ao hover. Não há um sistema de níveis numerados de elevação.

| Uso | Sombra atual |
|---|---|
| Botão em repouso | `0 7px 20px rgba(18,32,25,.1)` |
| Botão no hover | `0 12px 28px rgba(18,32,25,.16)` |
| Navbar flutuante | `0 14px 38px rgba(18,32,25,.18)` |
| Menu mobile | `0 20px 50px rgba(18,32,25,.28)` |
| Nota da hero | `0 14px 34px rgba(18,32,25,.18)` |
| Plano no hover | `0 22px 48px rgba(18,32,25,.12)` |

A navbar não tem sombra no topo. Ao rolar, ganha sombra e `backdrop-filter:blur(18px)`. O estado claro sobre áreas escuras também declara uma sombra mais leve, mas a regra posterior de `.scrolled` pode prevalecer; a cascata precisa ser preservada na reprodução.

## Shapes

O vocabulário principal usa os raios `sm`, `md`, `lg` e `pill` do frontmatter: campos e nota da hero usam `sm`; planos e cartões de depoimento usam `md`; imagens e grandes superfícies usam `lg`; ações e indicador de navegação usam `pill`.

O painel móvel mantém um raio próprio de 24 px. O cursor complementar é circular (`50%`). Imagens e planos usam recorte por overflow; imagens dos pratos têm proporção 4:5 no desktop e 1:1 até 600 px. A hero usa preenchimento `cover` e foco horizontal em 68% no desktop, 64% até 900 px.

As linhas são normalmente de 1 px. O input em foco muda para borda de 2 px. O foco global usa contorno laranja de 3 px afastado 4 px; inputs substituem esse contorno pela borda escura.

## Components

### Marca e navegação

Logo textual `VivaLeve`, sem símbolo. “Viva” usa peso 800 e “Leve” usa peso 500, com espaçamento compacto. No rodapé a marca tem 28 px.

- **Topo desktop:** navbar fixa, largura total, altura 78 px, fundo carvão e cantos retos.
- **Após scroll desktop:** deslocamento superior de 10 px, largura `min(1240px,calc(100% - 40px))`, altura 64 px e cápsula. O alinhamento usa `left/right:0`, margens automáticas e nenhum translate horizontal.
- **Gatilho:** entra no estado flutuante acima de 32 px de scroll e sai abaixo de 8 px; na inicialização, o limiar é 24 px. Essa histerese evita oscilações perto do topo.
- **Contraste:** passa a creme translúcido sobre Sobre e rodapé; texto escuro e CTA verde. Não amostra pixels: usa os limites das seções com `data-nav-contrast`.
- **Itens:** Menu, Sobre nós e Depoimentos, mais o CTA separado “Ver os planos”. Não existe link “Planos” redundante nessa navegação.
- **Indicador:** cápsula translúcida de 40 px de altura, movida para hover, foco ou seção ativa; deslocamento e largura transitam em `.42s`. A seção ativa é calculada na marca de 38% da altura da viewport e recebe `aria-current="location"`.
- **Morph:** largura `.68s`, posição e raio `.62s`, altura e padding `.58s`, fundo `.48s`; easing principal `cubic-bezier(.22,1,.36,1)`.

**Mobile até 900 px:** marca à esquerda e hambúrguer de 48 × 48 px à direita. Cabeçalho inicial de 70 px; estado flutuante de 60 px. O CTA do cabeçalho fica oculto e reaparece somente no painel aberto, ancorado embaixo com altura mínima de 54 px. Painel escuro, rolagem interna e animação de opacidade/translação/escala; links entram com atrasos até `.12s`.

O botão atualiza `aria-expanded`, nome acessível, `aria-hidden`, `inert` e bloqueio do scroll do body. Clicar em um link fecha o painel. Escape fecha o painel e devolve o foco ao botão. Tab/Shift+Tab circulam entre botão e links, enquanto o conteúdo externo fica inerte. Selecionar uma âncora transfere o foco para a seção; ampliar para desktop fecha o menu.

### Botões e links

As três variantes são verde preenchido, creme preenchido e contorno verde. Botões comuns têm altura mínima de 52 px, texto Manrope 700 de 14 px e geometria do frontmatter. Hover eleva 2 px e amplia a sombra. O hover primário não muda realmente o tom de verde, porque `green-2` é um alias da mesma cor.

O CTA desktop tem texto de 16 px, largura mínima de 164 px e altura por stretch: a regra final zera `min-height`, portanto não documentá-lo como botão fixo de 52 px. Hover laranja, texto carvão e deslocamento horizontal de −2 px. O CTA de contato, apesar do nome de classe “orange”, é visualmente verde.

O link secundário da hero é sublinhado por borda inferior e tem texto de 14 px. As setas da hero são caracteres tipográficos; os ícones do rodapé são SVG inline, sem preenchimento e com traço de 1.7.

### Fotografias e hero em vídeo

As cinco fotografias servidas agora são `hero`, `frango`, `abobora`, `peixe` e `cozinha`, em WebP com variantes `-640.webp` e `-1280.webp`. `srcset`/`sizes` escolhem a resolução; abaixo da hero há carregamento lazy. As maiores variantes somam 899.440 bytes, contra 13.427.075 bytes dos originais (redução de 93,3%). Os originais abaixo continuam preservados como fontes, não como downloads da página.

Direção: alimento em primeiro plano, marcas de cocção, luz suave, superfícies materiais e saturação contida. Os arquivos efetivamente conectados são:

| Uso | Arquivo em `assets/` |
|---|---|
| Hero estática e poster | `hero-vivaleve.png` |
| Vídeo da hero | `Hands_placing_ceramic_plate_202608270639.mp4` |
| Frango | `Grilled_chicken_meal_on_plate_202608270624.jpeg` |
| Abóbora e lentilha | `Plant-based_meal_on_plate_2K_202608270624.jpeg` |
| Peixe | `Fish_fillet_with_potatoes_and_202608270624.jpeg` |
| Cozinha | `cozinha-vivaleve.png` |

Os PNGs antigos de menu e outros JPEGs no diretório não integram automaticamente a página. Preservar o mapeamento, não supor que toda imagem disponível seja exibida.

O vídeo é mudo, inline e com preload de metadados; não toca em loop autônomo. O JavaScript pausa a reprodução e vincula o tempo ao scroll, começando aproximadamente em 2.35 s e terminando antes do final do arquivo. Usa interpolação de `.24` e seeks espaçados em pelo menos 32 ms. Voltar a página também retrocede o vídeo.

O endereço do vídeo só é conectado pelo JavaScript acima de 900 px e sem preferência por movimento reduzido. Mudanças dessas condições removem/reconectam o source. A foto é visível desde o início; o vídeo aparece após o primeiro seek. No mobile, o source permanece sem endereço e a imagem estática ocupa a hero.

### Cards de pratos, depoimentos e planos

Os planos apresentam os mesmos critérios na mesma ordem: cardápio, entrega e frete. Cada preço semanal tem valor por refeição calculado a partir da quantidade. Dados não definidos no conteúdo original ficam “a confirmar”; não foram inventadas novas condições. O trilho mobile indica que há três planos e permite apenas scroll horizontal. A indicação “Mais escolhido” foi substituída por “Almoço e jantar”, sem alegação de popularidade.

- **Pratos:** foto vertical, linha de metadados, nome serifado e descrição. Padding final de 10 px nas bordas e 24 px embaixo; até 600 px, 7 px e 20 px. Hover tonal com borda e elevação de 5 px.
- **Depoimentos:** três superfícies, respectivamente creme translúcido, verde e laranja; autor separado por linha. Altura mínima de 340 px, 260 px até 900 px e 240 px até 600 px. Blockquotes sem fundo, padding ou borda próprios: somente o card externo define a superfície. A avaliação 4,9 foi removida por não ter base verificável.
- **Planos:** cards com preço dominante, lista de benefícios e ação no final por organização flex. Card central verde. Padding de 38 px, reduzido para 28 px até 600 px. As regras de entrada `.reveal.visible` anulam o translate de repouso do plano destacado; o hover específico ainda pode deslocá-lo 22 px no desktop. Abaixo de 900 px essa elevação destacada é desligada.

### Formulário e rodapé

Formulário com seletor de plano, nome e e-mail, seguido do botão “Revisar minha solicitação”. Os CTAs “Tenho interesse” preservam o plano ao chegar ao formulário. Não se trata de checkout. Inputs com raio pequeno, fundo creme translúcido, altura definida no frontmatter e fonte de 18 px. O espaçamento entre campos é de 20 px. Há autocomplete, required, mensagens por campo associadas por aria-describedby, aria-invalid, foco no primeiro campo inválido e região de status aria-live. A revisão exibe texto via textContent, mantém os campos e permite voltar à edição.

**Limite funcional atual:** a solicitação é apenas revisada localmente. A interface avisa antes e depois da revisão que nenhum dado foi enviado ou salvo e nenhuma assinatura foi contratada. Não existe endpoint, checkout ou confirmação por e-mail; integrar isso exige destino de contato real e decisão de serviço.

Rodapé carvão com marca, links existentes, planos e contatos; duas faixas inferiores organizam cobertura e copyright. Não há botão de WhatsApp, newsletter, selos de pagamento ou links para páginas inexistentes. Contatos, preços e depoimentos são conteúdo da interface, não tokens de design nem métricas verificadas por esta documentação.

### Movimento transversal e acessibilidade existente

- Revelações via IntersectionObserver, limiar `.08` e margens `0px 0px -4% 0px`; a classe visível é removida quando o elemento sai da área observada. Não é uma timeline contínua de opacidade proporcional ao scroll.
- Entrada padrão: opacidade e deslocamento vertical de 24 px em .7 s. Blur e recorte animado foram retirados para reduzir trabalho por frame. O observer só ativa ocultação depois de inicializado; o conteúdo é visível por padrão.
- Parallax desloca a imagem interna por transform, limitado a ±12 px e escala 1.06, atualizado por requestAnimationFrame. Desativado até 900 px e com movimento reduzido.
- Cursor complementar: círculo de 30 px, 54 px sobre controles e 22 px pressionado; muda de cor conforme a superfície. Usa movimento elástico, não intercepta cliques e não substitui o cursor nativo. Ausente em toque, telas até 900 px e movimento reduzido. O loop de frames para quando o cursor se estabiliza.
- `prefers-reduced-motion` reduz transições e remove transformações, blur e recortes dos reveals; imagens ficam disponíveis. O cabeçalho ainda muda de estado, sem animação longa.
- Link de pular conteúdo, nomes acessíveis de imagens, ícones decorativos ocultos de leitores de tela e estados acessíveis do menu estão implementados.
- Até 900 px, marca e links do rodapé têm mínimo de 44 px; não generalizar essa garantia a todo elemento interativo em todas as larguras.
- Sem JavaScript, os reveals permanecem visíveis. A preferência por movimento reduzido mantém o conteúdo acessível. Contraste calculado: creme/laranja 3,16:1 (títulos grandes); carvão/laranja 4,54:1; creme/verde 9,94:1. Isso não equivale a certificação integral WCAG ou teste em aparelhos físicos.

## Do's and Don'ts

### Do:

- **Do** preservar as quatro cores-base e reutilizar os aliases existentes em manutenção localizada.
- **Do** verificar a cascata completa antes de extrair um valor ou acrescentar uma regra.
- **Do** manter Manrope na estrutura e Newsreader na ênfase editorial.
- **Do** alinhar novos elementos às bordas de conteúdo existentes, com espaço suficiente para títulos e imagens.
- **Do** manter CTAs principais direcionados aos planos e ações dos planos ao contato, enquanto essa for a arquitetura do site.
- **Do** respeitar a imagem estática no mobile e as alternativas para movimento reduzido.
- **Do** separar o que está implementado, o que foi pedido no briefing e o que ainda não foi validado.

### Don't:

- **Don't** acrescentar cores-base, fontes ou raios arbitrários para variações pontuais.
- **Don't** introduzir bounce, rotação exagerada ou movimento que bloqueie a leitura; essas rejeições foram estabelecidas no briefing.
- **Don't** transformar a estética orgânica em cenário clínico, academia ou rusticidade caricata.
- **Don't** comprimir os três planos dentro da largura de um celular: o padrão atual é um trilho horizontal legível.
- **Don't** restaurar no cabeçalho um link “Planos” duplicado ao lado do CTA.
- **Don't** tratar comentários antigos do CSS ou documentos de intenção como prova do estado final.
- **Don't** afirmar envio de formulário, compra, métricas reais ou conformidade de acessibilidade sem implementação ou verificação correspondente.
