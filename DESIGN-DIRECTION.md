# Direção de Design — VivaLeve

## Visão central

A experiência deve transmitir **alimentação saudável como um prazer simples, desejável e possível de manter na rotina**. O resultado combina clareza comercial, composição editorial e energia gastronômica, sem parecer uma clínica, uma academia ou uma marca infantil.

Palavras-chave: **fresco, natural, apetitoso, humano, confiável, contemporâneo e leve**.

Referência atmosférica adicional: **Noroeste Pacífico**, traduzido por verdes profundos, creme mineral, luz difusa, madeira clara, pedra, linho, vegetação e uma sensação de abrigo contemporâneo. A aplicação deve ser sutil; não usar clichês literais de floresta, cabana ou estética rústica.

## Essência das referências

### Referência 1 — tipografia e hierarquia

O que aproveitar:

- Títulos grandes, compactos e muito legíveis.
- Sans-serif geométrica de peso alto, com aparência direta e contemporânea.
- Quebras de linha intencionais, transformando o título no principal elemento visual.
- Corpo de texto menor, simples e arejado, criando contraste claro com o título.
- Preços e informações decisivas com destaque tipográfico próprio.
- Hierarquia enxuta: marca, navegação, título, descrição e ação.

Como aplicar:

- Usar uma sans-serif expressiva e encorpada nos títulos, preferencialmente **Manrope**, **Sora** ou **Plus Jakarta Sans**.
- Usar a mesma família em peso regular no corpo para preservar unidade e velocidade de carregamento.
- Hero com título entre 56–88 px no desktop e 40–52 px no mobile, sempre com quebra editorial controlada.
- Corpo entre 16–18 px, line-height de 1.5 a 1.65 e linhas curtas.
- Evitar reproduzir logotipo, composição ou identidade proprietária do Starbucks.

### Referência 2 — estrutura de grid e ritmo editorial

O que aproveitar:

- Página longa dividida em blocos claros, como uma revista gastronômica.
- Grid modular que alterna áreas amplas, colunas, cards e composições assimétricas.
- Hero dominante seguido por prova de confiança, diferenciais, narrativa do produto, catálogo e conversão final.
- Alternância entre texto e imagens recortadas para criar movimento mesmo quando a página está parada.
- Linhas divisórias discretas e alinhamentos rigorosos que conectam as seções.
- Repetição de módulos com pequenas variações, mantendo unidade sem monotonia.

Como aplicar:

- Grid desktop de **12 colunas**, container máximo entre 1200–1280 px e gutters de 24 px.
- Tablet com 8 colunas; mobile com 4 colunas e margens de 20–24 px.
- Escala vertical baseada em 8 px, com seções amplas de 80–128 px no desktop e 56–80 px no mobile.
- Intercalar módulos: hero assimétrico, faixa de confiança, três benefícios, seção dividida 6/6, cardápio em três colunas, planos e CTA final imersivo.
- Usar imagens de refeições recortadas sobre fundos limpos e fotografias maiores para cenas de rotina.
- Manter o grid respirado; evitar bordas pesadas, excesso de cards flutuantes e densidade de e-commerce tradicional.

### Referência 3 — tom de voz e conteúdo

O que aproveitar:

- Linguagem próxima, positiva e centrada no prazer de comer.
- Headline emocional combinada com explicação funcional curta.
- Conteúdo que mostra variedade e descoberta, não apenas nutrição.
- Chamadas simples e verbos ativos.
- Produto apresentado de forma generosa e apetitosa.

Como aplicar:

- Falar de sabor, tempo ganho e bem-estar cotidiano antes de falar de calorias.
- Usar frases curtas, acolhedoras e confiantes.
- Evitar culpa, restrição, terrorismo alimentar e promessas de emagrecimento.
- Traduzir benefícios técnicos em resultados concretos para a rotina.

Exemplos de linguagem:

- **Sua semana mais leve começa pelo prato.**
- Refeições frescas, equilibradas e prontas para acompanhar o seu ritmo.
- **Escolha. Receba. Aproveite.**
- Um cardápio novo toda semana, sem complicar a sua rotina.
- **Comida de verdade, pronta quando você precisa.**

## Sistema de cores — paleta premium reduzida

O sistema utiliza exatamente quatro cores-base. Variações de opacidade podem ser usadas para linhas e estados, mas não introduzem novas matizes.

| Papel | Cor sugerida | Uso |
|---|---|---|
| Creme mineral | `#F3ECDF` | Fundo, superfícies, cards claros e áreas de respiro |
| Verde floresta | `#173F35` | Marca, botões, blocos institucionais e plano destacado |
| Laranja queimado | `#D76F3E` | CTA pontual, palavras-chave e pequenos acentos |
| Carvão esverdeado | `#263A34` | Texto, footer, linhas e elementos de precisão |

Regras:

- O verde profundo ancora confiança e natureza, sem criar versões claras ou secundárias.
- O creme mineral substitui branco, bege e verde-claro em todas as superfícies.
- O laranja aparece em pequena proporção para comunicar sabor, energia e ação.
- O carvão esverdeado substitui preto, cinza e verdes usados apenas para texto.
- Validar contraste mínimo de 4.5:1 para textos comuns e nunca depender apenas da cor para comunicar estado.

## Direção tipográfica

- Família principal recomendada: **Manrope**.
- Alternativas: **Sora** ou **Plus Jakarta Sans**.
- Display: 700–800, tracking levemente negativo e line-height compacto.
- Subtítulos: 600–700.
- Corpo: 400–500, line-height confortável.
- Labels e navegação: 500–600, sem excesso de caixa alta.
- Um detalhe manuscrito ou itálico pode aparecer em uma única palavra de destaque, mas não deve competir com a sans-serif principal.

### Logotipo textual

- Escrita principal: **VivaLeve**, sem espaço, preservando as duas iniciais maiúsculas.
- Construção simples e profissional, baseada na família sans-serif do projeto.
- Preferir peso 600–700, tracking levemente negativo e ajustes óticos entre `aL` e `aV`.
- Não adicionar folha, talher ou prato como símbolo genérico.
- Pode receber um detalhe tipográfico proprietário discreto, como terminal suavizado ou ligatura específica, sem comprometer legibilidade.

## Movimento e animação

A linguagem de movimento deve ser **suave, cinematográfica e subordinada ao conteúdo**.

- Fade-in com deslocamento vertical curto de 16–28 px.
- Duração de entrada entre 600–900 ms, com desaceleração suave.
- Stagger discreto de 60–100 ms em grupos de cards.
- Parallax leve apenas em imagens grandes ou elementos decorativos, com deslocamento máximo aproximado de 4–8%.
- Crossfade em trocas de cardápio ou filtros.
- Hover de botões com mudança de cor, sombra ou deslocamento interno sutil, sem alterar o layout.
- Animar apenas `transform` e `opacity` sempre que possível.
- Respeitar `prefers-reduced-motion`, removendo parallax e reduzindo entradas a transições rápidas de opacidade.

Evitar:

- Bounce, elasticidade caricata e pulos.
- Rotações decorativas exageradas.
- Parallax forte que prejudique leitura ou cause enjoo.
- Animações automáticas que atrasem o acesso ao conteúdo.
- Movimento simultâneo em muitos elementos.

## Arquitetura visual confirmada

1. **Header enxuto:** marca, Como funciona, Cardápio, Planos, FAQ e CTA.
2. **Hero assimétrico:** headline forte à esquerda; refeição recortada e prova rápida à direita.
3. **Menu:** seleção curta de pratos com fotos dominantes e informações essenciais.
4. **Sobre nós:** narrativa da cozinha e da relação entre comida, tempo e rotina.
5. **Depoimentos:** prova social real, com contexto suficiente para transmitir confiança.
6. **Contato e cardápio:** CTA final imersivo, acesso ao cardápio completo e canal de atendimento.
7. **Footer:** navegação, contato, redes e informações legais.

O projeto não terá blog ou loja virtual.

### Navegação

- Navbar flutuante em formato cápsula, afastada 10–16 px do topo.
- Fundo carvão esverdeado, marca creme, links centrais discretos e CTA creme encaixado à direita.
- CTA com cantos totalmente arredondados e inversão para laranja no hover.
- No mobile, a cápsula preserva marca e botão de menu; os links abrem em painel escuro arredondado.
- A forma vem da referência fornecida, mas a palavra-marca, a paleta e as proporções permanecem próprias da VivaLeve.
- Links e CTA usam 16 px para leitura confortável e presença mais sofisticada.
- No topo da página, a navegação ocupa toda a largura como uma faixa escura sólida.
- Após o scroll, ela se contrai, desce 10 px e assume a forma de cápsula flutuante.
- O CTA acompanha a altura interna da navbar para preservar alinhamento óptico e não ultrapassar o contorno.
- Quando a navbar atravessa uma seção com o mesmo fundo verde, ela inverte para creme com texto carvão e CTA verde. A mudança usa somente a paleta oficial.

### Sistema de cantos

- Cápsula (`999px`): botões e CTA da navegação.
- Grande (`28px`): fotografias, blocos institucionais, CTA final e footer.
- Médio (`22px`): cards de planos e módulos de conteúdo.
- Pequeno (`14px`): campos, notas e itens auxiliares.
- O arredondamento deve acompanhar a hierarquia; não misturar valores arbitrários.

### Movimento perceptível

- Conteúdos entram com fade, deslocamento vertical de 54 px e desfoque inicial de 7 px.
- Fotografias abrem com máscara vertical e escala de 1.045 para 1.
- Parallax de fundo pode atingir aproximadamente 44 px ao atravessar a viewport.
- Duração entre 850–1450 ms, sempre com desaceleração suave e sem bounce.
- Com `prefers-reduced-motion`, máscara, deslocamento, escala, desfoque e parallax são removidos.

## Tecnologia

- HTML semântico.
- CSS moderno com custom properties, Grid e Flexbox.
- JavaScript vanilla para navegação mobile, revelações no scroll e parallax.
- `IntersectionObserver` para fade-ins eficientes.
- Parallax com `requestAnimationFrame`, aplicado apenas quando necessário.
- Hospedagem estática, sem Node.js ou backend obrigatório.
- Degradação elegante: todo o conteúdo permanece acessível sem JavaScript.

## Linha-mestra do grid

- Todas as seções usam a mesma margem responsiva: `max(clamp(20px, 5vw, 72px), (viewport - 1280px) / 2)`.
- O conteúdo tem largura máxima efetiva de 1280 px.
- Blocos com moldura externa compensam sua margem de 8–12 px para que o conteúdo interno permaneça na mesma linha-mestra.
- Hero, menu, depoimentos, planos, contato, footer e estado inicial da navbar compartilham as mesmas bordas de conteúdo.
- Colunas utilizam `minmax(0, ...)` para impedir que textos ou formulários ampliem o grid.

## Princípios de conteúdo

- Uma ideia principal por seção.
- Um CTA primário visível por tela; ações secundárias subordinadas.
- Benefícios antes de detalhes operacionais.
- Preço acompanhado de contexto: quantidade, frequência e flexibilidade.
- Fotografias devem mostrar comida real, variedade de cores e porções críveis.
- Textos nunca devem prometer resultados médicos ou estéticos sem evidência.

## Resumo da combinação

**A referência 1 dá a voz visual forte; a referência 2 organiza a narrativa em um grid editorial; a referência 3 humaniza a mensagem e coloca o apetite no centro.** A paleta natural e o movimento cinematográfico unem essas influências em uma identidade própria para um serviço de refeições saudáveis por assinatura.
