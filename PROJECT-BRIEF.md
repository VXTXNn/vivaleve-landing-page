# VivaLeve — Landing Page de Delivery Saudável

## Objetivo

Criar uma landing page para um serviço de refeições saudáveis por assinatura, com foco em clareza, confiança e conversão.

## Contexto inicial

- Marca: **VivaLeve**.
- Assinatura: **A semana corre. A mesa devolve o tempo.**
- Produto: delivery de refeições saudáveis por assinatura.
- Público inicial: profissionais com rotina corrida que querem comer melhor sem cozinhar ou planejar o cardápio.
- Proposta de valor inicial: refeições saudáveis entregues semanalmente, com cardápios variados e planos adaptados à rotina do cliente.
- CTA principal sugerido: **Escolher meu plano**.
- CTA secundário sugerido: **Ver cardápio da semana**.

## Direção preliminar

- Tom: leve, acolhedor, confiável e motivador.
- Visual: inspirado na atmosfera orgânica, acolhedora e moderna do Noroeste Pacífico.
- Cores iniciais: fundo creme, verde profundo e laranja suave para destaques.
- Imagens: fotografias reais de refeições, com boa iluminação e ingredientes visíveis.
- Experiência: mobile-first, acessível e com uma ação principal clara por seção.

## Estrutura confirmada da página

1. Hero com proposta de valor, imagem principal e CTA.
2. Menu com alguns itens selecionados.
3. Sobre nós.
4. Depoimentos.
5. Contato e acesso ao cardápio.
6. Footer.

Não haverá blog, loja virtual ou dependência de servidor nesta fase.

## Referências e inspirações

Três referências visuais foram analisadas:

- Referência 1: tipografia sans-serif forte, compacta e com hierarquia direta.
- Referência 2: grid editorial modular, página longa e alternância entre imagens, colunas e blocos narrativos.
- Referência 3: tom próximo, positivo, apetitoso e centrado no prazer de comer.

A síntese completa e as regras de aplicação estão registradas em `DESIGN-DIRECTION.md`.

Para cada nova referência, registrar:

- Origem ou nome da referência.
- Elementos que devem ser aproveitados.
- Elementos que devem ser evitados.
- Aplicação sugerida no site.

## Decisões confirmadas

- Manter documentos Markdown no projeto como memória compartilhada.
- Consolidar neste arquivo o briefing, as referências e as decisões principais.
- Adotar fundo creme, verde profundo como cor principal e laranja suave como destaque.
- Limitar toda a identidade a quatro cores-base: creme mineral, verde floresta, laranja queimado e carvão esverdeado. Linhas e estados usam apenas opacidades dessas cores.
- Usar tipografia sans-serif expressiva e pesada nos títulos, com corpo limpo e legível.
- Construir a página sobre grid editorial responsivo de 12/8/4 colunas.
- Usar fade-ins, crossfades e parallax leve como linguagem de movimento.
- Não usar bounce, rotações exageradas ou animações que bloqueiem o conteúdo.
- Manter um tom de voz próximo, positivo e centrado em sabor, praticidade e bem-estar cotidiano.
- Usar a marca textual **VivaLeve**, com desenho sutil, moderno e profissional.
- Adotar atmosfera do Noroeste Pacífico: materialidade natural, luz suave, composição orgânica e acabamento contemporâneo.
- Produzir textos sensoriais baseados em verbos, ingredientes, técnica, temperatura e textura.
- Evitar adjetivos vazios e promessas genéricas.
- Construir o site em HTML, CSS e JavaScript puros para hospedagem estática, rápida e econômica.
- Não incluir blog ou loja.

## Pendências

- Refinar público, diferenciais e proposta de valor.
- Definir cidade e área de entrega.
- Definir itens reais do menu, ingredientes e preços.
- Definir o destino do CTA: WhatsApp, formulário, ligação ou link externo.
- Definir quais dados de contato serão publicados.
- Selecionar imagens coerentes com os pratos e com a identidade da marca.
- Reunir depoimentos que representem situações reais de uso.

## Conteúdo da experiência

- Criar pratos coerentes com a proposta nutricional da marca.
- Estruturar planos, preços e área de entrega com linguagem clara.
- Criar depoimentos com tom humano e situações reconhecíveis.
- Produzir imagens próprias para o site.
- O CTA principal deve levar à seção de planos de marmitas.

## Histórico

### 2026-08-27

- Briefing inicial criado.
- Estrutura preliminar e direção visual registradas.
- Três referências visuais analisadas e combinadas em uma direção coesa.
- Criado o documento `DESIGN-DIRECTION.md` como fonte de verdade visual.
- Marca **VivaLeve**, assinatura, escopo de seções e stack estática confirmados.
- Criado `CONTENT-VOICE.md` com princípios de redação e conteúdo inicial.
- Conteúdo da experiência definido e CTA principal direcionado à seção de planos.
- Implementação inicial do site criada em HTML, CSS e JavaScript vanilla.
- Paleta visual condensada em quatro cores-base para um acabamento mais premium.
- Assinatura verbal refinada para uma construção mais autoral e memorável.
- Navbar reformulada como cápsula flutuante escura, com CTA claro integrado e comportamento mobile acessível.
- Links e CTA da navbar ajustados para 16 px.
- Botões unificados no formato cápsula e demais componentes organizados em um sistema de cantos de 14/22/28 px.
- Fade-ins, abertura de imagens e parallax reforçados para uma presença cinematográfica perceptível, preservando redução de movimento.
- Navbar configurada em dois estados: faixa preenchida no topo e cápsula flutuante após o scroll.
- CTA da navbar realinhado ao espaço interno e foco da fotografia principal deslocado para centralizar o prato.
- Navbar ganhou contraste contextual ao atravessar blocos verde-escuros.
- Título da seção Sobre refinado para manter “quer viver” unido.
- Seção de depoimentos ampliada para três relatos, com pontuação mais natural e sem travessões.
- Grid global unificado em uma linha-mestra responsiva, com largura máxima de 1280 px e compensação para molduras externas.
- Criada `IMAGE-PROMPTS.md`, biblioteca de prompts fotográficos para o hero, seis pratos, coleção semanal, embalagem e cena de cozinha, com regras de consistência e aprovação.
- Criada `VIDEO-PROMPTS.md` com a direção de image-to-video da hero: mãos trazendo o prato, vapor natural e aproximação cinematográfica suave.
- Vídeo da hero conectado ao progresso do scroll, com avanço e retrocesso reversíveis; revelações de conteúdo também passam a entrar e sair conforme a viewport.
- Cards atuais do menu atualizados com as novas fotografias de frango, prato vegetal e peixe adicionadas a `assets/`.
- Adicionado seguidor de mouse elástico em JavaScript e CSS puros, inspirado na referência do 21st.dev e contextualizado pelas quatro cores da VivaLeve; desativado em toque e movimento reduzido.
- Hero passa a usar apenas o trecho final do vídeo, a partir de 2,35 s, concentrado no vapor e no zoom; navbar estática corrigida para preencher integralmente o viewport no topo.
- Navbar recebeu indicador em cápsula que desliza no hover/foco e permanece na seção selecionada, inspirado na referência do 21st.dev, sem setas ou dropdowns e implementado em JavaScript/CSS puros.
- Rodapé reorganizado em colunas editoriais com marca, navegação, planos, contatos e cobertura nos estados AL, ES, GO, MG, MT, PB, PR, RJ, RS e SP; sem WhatsApp ou funcionalidades externas ao site.
- Referência a Curitiba removida da hero; identificação passa a exibir somente “Refeições por assinatura”.
- Pipeline de scroll otimizado: limites das seções em cache, navbar atualizada uma vez por frame e vídeo interpolado com seeks limitados a aproximadamente 30 fps para reduzir travamentos.
- Link “Planos” removido da navegação desktop e móvel para evitar redundância com o CTA “Ver os planos”.
- Mobile otimizado com imagem estática na hero no lugar do vídeo, navbar fixa em menu hambúrguer com abertura suave e títulos principais reduzidos para 36px em telas de até 600px.
- Cabeçalho mobile corrigido: logo isolada à esquerda, hambúrguer no extremo direito e CTA “Ver os planos” exibido somente como última ação dentro do menu aberto.
- Corrigido o contexto de posicionamento do menu mobile: a transformação herdada da navbar desktop foi removida no breakpoint, permitindo que o painel de navegação ocupe toda a altura disponível da viewport.
- Painel mobile separado estruturalmente do cabeçalho para impedir o recorte causado pelo `backdrop-filter` da cápsula e garantir que links e CTA permaneçam visíveis e clicáveis.
- Planos mantidos lado a lado no mobile em uma faixa horizontal nativa, com cartões legíveis, rolagem por toque e encaixe suave em cada opção.
- Auditoria mobile de usabilidade: marca e links do rodapé ampliados para alvos mínimos de 44px, nota decorativa da hero ocultada em telas pequenas e blocos de texto protegidos contra cortes por palavras longas.
- Transição da navbar refinada: eixo central unificado entre os estados cheio e flutuante, duração cinematográfica por propriedade e histerese no gatilho de scroll para eliminar saltos e oscilações próximos ao topo.
- Centralização da navbar refeita com `left/right: 0` e margens automáticas, eliminando frestas laterais causadas pela diferença entre viewport e largura útil da página sem perder a transição de largura.

### 2026-08-28

- Criado `CASE-STUDY.md` com contexto, processo, síntese da primeira pesquisa qualitativa, aprendizados e prioridades para uma nova iteração; o principal ponto de melhoria identificado foi humanizar o conteúdo verbal.

### 2026-08-30 — Refinamento após a crítica

- Corrigida a sobreposição de estilos nos depoimentos; textos mais diretos, sem caixa dentro de caixa. Removidos a nota 4,9 e o rótulo “Mais escolhido”, sem evidência de avaliação/popularidade.
- Quatro cores mantidas, ajustando laranja para #ce6838 e carvão para #122019 para melhorar contraste. Descrições, metadados e textos de apoio ampliados.
- Planos com critérios comparáveis, preço por refeição e CTA “Tenho interesse”. A escolha segue para o formulário; não há checkout nem envio real. A revisão local não apaga os campos e informa explicitamente que nada foi enviado.
- Menu mobile com Escape, ciclo de foco, retorno ao botão e fechamento ao entrar no breakpoint desktop. Alvos de toque ampliados também no tablet.
- Imagens WebP responsivas: cinco versões maiores totalizam 899.440 bytes; originais preservados. Vídeo sem source no mobile/movimento reduzido. Revelações mais leves e conteúdo visível sem JavaScript.
- Verificação no navegador em 1440, 768 e 390 px: seleção de planos, formulário vazio/válido, Escape e alvos de toque. Trilho horizontal dos planos mantido, sem scroll vertical interno. JavaScript passou em `node --check`.
- Detector Impeccable operou em fallback por ausência dos parsers; não é certificação de acessibilidade. Não houve teste em aparelho físico ou integração de e-mail. Depoimentos, dados nutricionais e contatos seguem como conteúdo de estudo, não evidências comerciais verificadas; revisar antes de lançar uma operação real.
- Alterações locais; nenhuma publicação no GitHub nesta etapa.
