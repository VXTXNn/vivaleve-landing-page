# VivaLeve — Base de Case Study

## Visão geral

A VivaLeve apresenta um serviço de refeições saudáveis por assinatura. A experiência foi criada para comunicar a proposta com rapidez, apresentar cardápio e benefícios e conduzir o visitante até a escolha de um plano.

O site foi desenvolvido em HTML, CSS e JavaScript puro, priorizando carregamento leve, hospedagem econômica, responsividade e uma experiência visual orgânica e premium.

## O desafio

Pessoas com rotinas corridas querem comer melhor, mas cozinhar, planejar compras e organizar refeições exige tempo. O desafio de design foi apresentar a assinatura como uma forma de devolver tempo à rotina sem reduzir a alimentação a uma promessa genérica de praticidade.

A experiência precisava responder rapidamente a três perguntas:

1. O que a VivaLeve oferece?
2. Que tipo de refeição será entregue?
3. Como escolher um plano?

## Objetivos do projeto

- Tornar a categoria do serviço compreensível nos primeiros segundos.
- Conduzir o usuário naturalmente até os planos.
- Transmitir cuidado, sabor e confiança sem recorrer à estética clínica comum ao mercado fitness.
- Criar uma experiência consistente entre celular e computador.
- Manter interações acessíveis, fluidas e leves em uma stack estática.

## Público considerado

Profissionais e famílias com rotina corrida que desejam refeições equilibradas sem precisar planejar, comprar ingredientes e cozinhar todos os dias.

## Processo de design

### 1. Direção visual

As referências foram combinadas em uma linguagem única:

- Tipografia sans-serif expressiva para mensagens diretas.
- Grid editorial para organizar conteúdo, fotografias e planos.
- Paleta limitada a creme, verde profundo, laranja suave e carvão esverdeado.
- Fotografias com luz natural, ingredientes reconhecíveis e atmosfera acolhedora.
- Cantos arredondados e botões em cápsula para um acabamento sofisticado.

### 2. Arquitetura da informação

A página foi organizada na seguinte sequência:

1. Proposta de valor e CTA.
2. Diferenciais do serviço.
3. Menu da semana.
4. História e princípios da marca.
5. Depoimentos.
6. Planos de assinatura.
7. Contato e rodapé.

Essa ordem aproxima o usuário do produto antes de apresentar preço e conversão.

### 3. Interação e movimento

- Navbar fixa que muda de faixa preenchida para cápsula flutuante.
- Fade-ins e revelações reversíveis conforme o scroll.
- Parallax leve em fotografias.
- Vídeo controlado pelo scroll no desktop.
- Imagem estática no mobile para preservar desempenho.
- Planos lado a lado em uma faixa horizontal no celular.
- Menu hambúrguer com CTA apresentado como última ação.
- Suporte a `prefers-reduced-motion` e alvos de toque de pelo menos 44px.

## Teste de usabilidade

### Método

O protótipo foi compartilhado com amigos para navegação livre em celular e computador. Depois da experiência, foram feitas perguntas sobre compreensão da proposta, localização dos planos, uso da navegação, problemas de leitura e melhorias desejadas.

O estudo foi qualitativo e exploratório. Antes da publicação final do case, registrar:

- Quantidade de participantes.
- Faixa etária aproximada.
- Dispositivos e navegadores utilizados.
- Quantos testes foram feitos em celular e computador.
- Se os testes foram moderados ou realizados individualmente.

### Síntese das respostas

#### 1. Compreensão da proposta

**Resposta recorrente:** “Site de serviços de entrega de comida fit.”

**Leitura:** a categoria do produto foi compreendida rapidamente. Entretanto, “comida fit” é uma interpretação mais restrita do que a proposta desejada de refeições saudáveis para a rotina. Há espaço para reforçar assinatura, conveniência e experiência à mesa sem aproximar excessivamente a marca de dieta ou performance física.

#### 2. Descoberta dos planos

**Resposta recorrente:** o plano foi encontrado na parte inferior do site e o percurso pareceu fluido.

**Leitura:** a hierarquia longa da landing page funcionou e o fluxo de conteúdo conduziu o usuário até a conversão. O CTA e a sequência das seções cumpriram o papel de orientar a navegação.

#### 3. Uso do menu de navegação

**Resposta recorrente:** o menu foi aberto e as opções foram vistas, mas não houve clique.

**Leitura:** o menu é descoberto e compreendido, porém os rótulos não criaram motivação suficiente para interromper o scroll natural. Isso não representa necessariamente uma falha, já que a página é linear, mas indica que a navegação funciona mais como orientação do que como atalho ativo.

#### 4. Responsividade e legibilidade

**Resposta recorrente:** não foram relatadas dificuldades no celular ou no computador.

**Leitura:** a adaptação responsiva, o fluxo dos textos e os controles atenderam ao grupo testado. Esse resultado deve ser descrito como ausência de problemas relatados, não como garantia de compatibilidade universal.

#### 5. Tom de voz

**Resposta recorrente:** alguns textos poderiam ser mais humanos e certos trechos transmitem sensação de conteúdo produzido por IA.

**Leitura:** este é o principal ponto de melhoria identificado. Embora a escrita seja sensorial e autoral, algumas construções parecem excessivamente lapidadas ou abstratas. A próxima versão deve incorporar situações cotidianas, vocabulário mais espontâneo e benefícios concretos.

## Principais aprendizados

### O que funcionou

- A natureza do serviço foi reconhecida rapidamente.
- O usuário chegou aos planos sem dificuldade relatada.
- O scroll longo foi percebido como fluido.
- A experiência funcionou nos dispositivos testados.
- O menu mobile apresentou corretamente as informações disponíveis.

### O que precisa evoluir

- Diferenciar “refeições saudáveis por assinatura” de uma comunicação genérica de “comida fit”.
- Tornar a redação mais conversacional e menos construída.
- Avaliar se os itens da navbar precisam comunicar benefícios mais específicos.
- Investigar por que o menu é aberto, mas seus links não são utilizados.
- Coletar dados com tarefas observadas, além das respostas declaradas.

## Próxima iteração recomendada

### Prioridade 1 — Humanizar o conteúdo

Substituir frases excessivamente publicitárias por cenas reconhecíveis da rotina.

**Antes:** “A panela encontra a estação. A brasa sela os ingredientes.”

**Direção de teste:** “A gente cozinha durante a semana para que você só precise aquecer, sentar e comer com calma.”

Preservar alguns momentos poéticos como assinatura da marca, mas equilibrá-los com linguagem concreta.

### Prioridade 2 — Refinar o posicionamento

Testar uma frase que deixe explícitos assinatura e benefício sem depender do termo “fit”.

**Hipótese:** “Refeições prontas para uma semana mais leve” pode comunicar melhor o serviço do que mensagens centradas apenas na atmosfera gastronômica.

### Prioridade 3 — Testar a navegação com tarefas

Em uma nova rodada, pedir que cada participante execute ações específicas:

- Encontrar um prato vegetariano.
- Descobrir quantas refeições existem no plano intermediário.
- Voltar para a seção de depoimentos usando a navbar.
- Abrir o formulário de contato.

Registrar sucesso, hesitações, caminhos escolhidos e tempo aproximado — sem orientar durante a tarefa.

## Métricas para a próxima rodada

- Compreensão correta da proposta sem explicação prévia.
- Conclusão da tarefa de encontrar os planos.
- Uso espontâneo ou orientado da navbar.
- Erros de toque ou navegação no mobile.
- Trechos percebidos como artificiais ou pouco claros.
- Plano preferido e justificativa da escolha.

## Conclusão provisória

O primeiro teste indica que a estrutura e a responsividade da VivaLeve sustentam bem a descoberta do serviço e dos planos. O maior aprendizado não está no layout, mas na voz: a interface parece clara, enquanto o conteúdo ainda precisa soar mais próximo de uma conversa real.

A próxima iteração deve preservar o fluxo visual e concentrar esforço na diferenciação da proposta e na humanização da escrita. Essa conclusão permanece provisória até que o número e o perfil dos participantes sejam registrados e uma rodada orientada por tarefas seja realizada.
