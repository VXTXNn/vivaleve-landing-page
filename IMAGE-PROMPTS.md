# VivaLeve — Biblioteca de Prompts de Imagem

Prompts para gerar uma família de fotografias coerente para a landing page. Os prompts estão em inglês porque os modelos de imagem costumam interpretar com mais precisão vocabulário fotográfico nesse idioma. Os nomes e a intenção de cada ativo permanecem em português.

## DNA visual obrigatório

Use estas decisões em todas as imagens:

- Fotografia gastronômica editorial, natural e premium, sem aparência de publicidade genérica.
- Atmosfera inspirada no Noroeste Pacífico: luz de janela difusa em dia nublado, madeira clara, cerâmica artesanal, linho e vegetação discreta.
- Paleta visual: creme mineral `#F3ECDF`, verde-floresta `#173F35`, laranja queimado `#D76F3E` e carvão esverdeado `#263A34`.
- Comida crível e servível: porções reais, cortes imperfeitos, marcas de cocção, molhos com textura e folhas sem brilho plástico.
- Mesma família de louças em todas as fotos: pratos baixos de cerâmica fosca creme, com pequenas pintas minerais e borda orgânica sutil.
- Luz lateral suave, contraste moderado, sombras abertas, balanço de branco levemente quente e granulação fina de filme.
- Nenhuma tipografia, logotipo, rótulo, marca-d'água ou embalagem com texto.

Se a ferramenta permitir, mantenha a mesma seed, referência de estilo ou imagem aprovada para toda a série. Gere primeiro o **Prato 01** e use-o como referência estética dos demais.

## Restrições negativas compartilhadas

Acrescente este bloco ao campo de “negative prompt”, quando existir:

> oversaturated colors, glossy commercial stock photography, hard flash, clinical white background, rustic cabin cliché, dark moody underexposure, artificial plastic food, raw chicken, burnt food, excessive garnish, microgreens covering the meal, floating ingredients, impossible food geometry, perfectly symmetrical plating, tiny tasting-menu portions, oversized portions, messy sauce splashes, duplicated ingredients, deformed utensils, warped plate, visible text, letters, logo, watermark, branded packaging, hands, people, steam obscuring the food, motion blur, extreme shallow depth of field, CGI, 3D render, illustration

## 01 — Hero principal: salmão, cevada e legumes

**Uso:** abertura do site.  
**Formato:** horizontal `16:10`, idealmente 2400 × 1500 px.  
**Composição:** o prato deve ficar centralizado no terço direito, completamente visível; preserve espaço negativo calmo no terço esquerdo para o texto do site.

```text
Create a premium editorial food photograph for the hero section of VivaLeve, a healthy weekly meal subscription brand. A complete, believable lunch plate: a gently roasted salmon fillet with a lightly caramelized edge, pearl barley with fresh herbs, charred broccolini, roasted orange carrots, small seasonal green vegetables, a restrained lemon and herb dressing, and a few toasted seeds. Serve it on a wide matte cream artisan ceramic plate with subtle mineral speckles and a softly irregular rim.

Place the full plate in the center-right third of a pale natural oak table, viewed from a refined 35-degree overhead angle. Keep generous, uncluttered negative space across the left third for a large website headline. The food must remain the unmistakable focal point and no part of the plate may be cropped. Add only a folded cream linen napkin and one small deep-forest-green ceramic detail near the far edge, both quiet and secondary.

Pacific Northwest atmosphere, soft overcast daylight entering from the left, open natural shadows, gentle cinematic depth, subtle warm film grain, restrained contrast, realistic food texture and moisture, natural imperfections, quiet luxury rather than fine-dining spectacle. Color story limited to mineral cream, deep forest green, burnt orange accents and green-charcoal. Full-frame food photography, 50mm lens look, f/4.5, crisp focus across the complete meal, photorealistic, high detail.

No text, logo, label, packaging, hands or people. Avoid glossy stock-photo lighting, excessive garnish, artificial steam, clinical white surfaces, dramatic black shadows, rustic props, perfect symmetry and CGI appearance.
```

## 02 — Frango na brasa

**Uso:** card do menu.  
**Formato:** vertical `4:5`, idealmente 1600 × 2000 px.  
**Composição:** prato inteiro, centro ligeiramente abaixo do quadro; folga nas bordas para cortes responsivos.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Feature a realistic healthy meal of sliced flame-grilled chicken breast with distinct golden-brown grill marks and a juicy interior, set over a smooth white bean purée. Add charred broccolini, roasted orange baby carrots, a measured drizzle of deep-green herb oil and a small scattering of toasted pumpkin seeds. The portion should feel generous enough for lunch but nutritionally balanced, with each component clearly identifiable.

Use a matte cream artisan ceramic plate with subtle mineral speckles and an organic rounded rim, placed on pale oak with a softly folded cream linen partially visible. Frame the complete plate at a refined 40-degree overhead angle, centered slightly below the midpoint, leaving comfortable breathing room on every side for responsive cropping. Soft cloudy window light from the upper left, open shadows, moderate contrast, true food color, visible grill texture, fine film grain and quiet Pacific Northwest warmth. Palette limited to mineral cream, forest green, burnt orange and green-charcoal. Full-frame camera, 70mm lens look, f/5, realistic editorial food photography, highly detailed but never hyper-sharp.

No text, logo, packaging, cutlery crossing the plate, hands or people. Avoid raw-looking chicken, oily shine, excessive microgreens, tiny fine-dining portions, perfect symmetry, hard flash, stock-photo gloss and CGI.
```

## 03 — Abóbora, lentilha e tahine

**Uso:** card vegetariano do menu.  
**Formato:** vertical `4:5`.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Present a satisfying plant-based meal with caramelized roasted kabocha pumpkin wedges, glossy but natural black lentils, a small bed of wild rice, gently wilted dark greens, thin pickled red-onion petals and a restrained ribbon of citrus tahini sauce. Finish with toasted sesame and a few torn flat-leaf herbs. Show real roasted edges, intact lentils and creamy tahini texture; the meal should look nourishing and substantial, not like a decorative salad.

Serve on the same matte cream artisan ceramic plate with mineral speckles and softly irregular rim, on pale natural oak with a quiet deep-forest-green linen accent in the background. Photograph the complete plate from a 40-degree overhead angle, centered slightly low with generous safe space around it for card cropping. Soft overcast side light from the upper left, gentle open shadows, nuanced warm film grain, restrained contrast and believable color. Use mineral cream and forest green as the visual base, with the pumpkin supplying the burnt-orange accent and green-charcoal in the lentils. Full-frame camera, 70mm lens look, f/5, photorealistic natural editorial food photography.

No text, logo, packaging, hands or people. Avoid an overly tidy Buddha-bowl layout, excessive ingredients, neon orange pumpkin, wet salad shine, floating garnish, hard flash, perfect symmetry and CGI.
```

## 04 — Peixe, ervas e limão

**Uso:** card do menu.  
**Formato:** vertical `4:5`.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Feature a pan-seared white fish fillet with a delicate herb crust, moist flakes visible at one natural edge, served with rustic crushed baby potatoes, sautéed kale, sweet peas and a restrained roasted red-pepper sauce. Add lemon zest and a few fresh herb leaves with intention, never covering the fish. The plate should communicate a balanced everyday lunch through texture, color and portion rather than decorative excess.

Use the same matte cream artisan ceramic plate with subtle mineral speckles and an organic rim, resting on pale oak. Frame the entire plate at a refined 40-degree overhead angle, centered slightly below the frame with clear breathing room around it. Soft cloudy daylight from the upper left, open shadows, a gentle cinematic falloff and fine warm film grain. Keep the palette restrained: mineral cream, deep forest greens, muted burnt-orange pepper sauce and green-charcoal shadows. Full-frame camera, 70mm lens look, f/5, natural photorealistic editorial food image with convincing fish, potato and sauce textures.

No text, logo, packaging, hands or people. Avoid dry fish, raw translucent fish, heavy sauce, excessive garnish, clinical plating, blue shadows, dramatic restaurant darkness, hard flash, perfect symmetry and CGI.
```

## 05 — Carne lenta e raízes

**Uso:** novo item de cardápio; opção reconfortante.  
**Formato:** vertical `4:5`.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Show tender slow-braised lean beef in two or three natural pieces with a reduced savory cooking jus, served beside a silky cassava purée, roasted beetroot and golden carrot, plus sautéed kale finished with a fresh parsley-and-lemon gremolata. Keep the sauce controlled and glossy only where it naturally coats the beef. The portion must feel balanced, comforting and appropriate for a healthy weekly meal, not a heavy steakhouse dish.

Plate it on the same matte cream artisan ceramic plate with mineral speckles and a subtly irregular edge, placed on pale oak with a distant folded cream linen. Photograph the whole plate from the established 40-degree overhead angle, centered slightly low and surrounded by safe negative space. Soft overcast daylight from the upper left, natural open shadows, moderate contrast, subtle film grain and precise realistic textures in the braised fibers, purée and roasted roots. Restrained VivaLeve palette of cream, forest green, muted burnt orange and green-charcoal. Full-frame camera, 70mm lens look, f/5, quiet-luxury editorial food photography.

No text, logo, packaging, hands or people. Avoid fatty meat, oversized steak portions, thick brown gravy, greasy shine, rustic cast-iron props, excessive garnish, hard flash, perfect symmetry and CGI.
```

## 06 — Cogumelos, cevada e couve-flor

**Uso:** novo item vegetariano premium.  
**Formato:** vertical `4:5`.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Present a substantial vegetarian meal of deeply roasted mixed mushrooms with caramelized edges, pearl barley folded with herbs, smooth cauliflower cream, wilted spinach and a small amount of toasted hazelnut crumble. Add a restrained burnt-orange roasted pepper oil as a visual accent. Preserve varied mushroom shapes and genuine roasted texture; the dish should feel satisfying and protein-conscious, not like a side dish.

Serve it on the same matte cream artisan ceramic plate with fine mineral speckles and an organic rounded rim, on pale natural oak. Use the consistent 40-degree overhead camera angle, showing the full plate centered slightly below the midpoint with generous crop-safe space. Soft cloudy window light from the upper left, open shadows, gentle cinematic depth, warm fine film grain and subdued natural colors. Mineral cream and forest green dominate, with muted burnt orange and green-charcoal details. Full-frame camera, 70mm lens look, f/5, realistic premium editorial food photography.

No text, logo, packaging, hands or people. Avoid gray lifeless mushrooms, wet rubbery texture, a bowl-shaped grain pile, excessive nuts, decorative flower garnish, hard flash, perfect symmetry and CGI.
```

## 07 — Peru, tomate assado e quinoa

**Uso:** novo item de cardápio; opção leve e familiar.  
**Formato:** vertical `4:5`.

```text
Create a vertical premium editorial product photograph for VivaLeve's weekly menu. Feature four small oven-roasted turkey meatballs with naturally browned surfaces, a concentrated roasted tomato and red-pepper sauce, fluffy herbed quinoa, ribbons of grilled zucchini and a spoonful of lemony yogurt with fresh parsley. Keep every component distinct and the sauce restrained. The serving should read as a complete, balanced weekday lunch with believable homemade precision.

Plate it on the same matte cream artisan ceramic plate with subtle mineral speckles and a softly irregular rim, set on pale oak with a minimal forest-green linen detail out of focus. Maintain the established 40-degree overhead perspective, full plate visible, centered slightly low, with comfortable negative space on all sides. Soft overcast light from the upper left, natural open shadows, moderate contrast, warm subtle film grain and realistic browned, creamy and grilled textures. Restrained palette of mineral cream, deep forest green, burnt orange and green-charcoal. Full-frame camera, 70mm lens look, f/5, photorealistic editorial food photography.

No text, logo, packaging, hands or people. Avoid red spaghetti-sauce appearance, oversized meatballs, pale raw-looking turkey, excessive dairy, garnish clutter, hard flash, perfect symmetry and CGI.
```

## 08 — Coleção semanal com seis pratos

**Uso:** seção de planos ou transição para o cardápio.  
**Formato:** horizontal `3:2`, idealmente 2400 × 1600 px.

```text
Create a wide premium editorial photograph showing a curated weekly collection of six VivaLeve healthy meals together: grilled chicken with white bean purée and carrots; roasted pumpkin with black lentils and tahini; herb-crusted white fish with crushed potatoes and peas; slow-braised beef with cassava purée and roots; roasted mushrooms with pearl barley and cauliflower cream; turkey meatballs with quinoa and roasted tomato-pepper sauce. Each meal must remain visually distinct, realistic and consistent with its individual product photograph.

Arrange the six matching matte cream artisan ceramic plates in a relaxed editorial grid across a pale oak table, photographed from directly overhead. Let a few plates extend slightly toward the frame edges, but keep all food identifiable. Create deliberate visual rhythm rather than perfect symmetry. Add only two folded linen napkins, one cream and one deep forest green, plus minimal natural cutlery in green-charcoal. Soft diffuse daylight from a large window, open shadows, restrained contrast, subtle warm film grain and a calm Pacific Northwest mood. Limit the scene to mineral cream, forest green, burnt orange food accents and green-charcoal. High-resolution full-frame photography, 50mm overhead look, f/6.3, consistent focus across the table.

No text, logo, labels, packaging, hands or people. Avoid buffet clutter, repeated or duplicated food, floating objects, perfectly aligned plates, excessive props, glossy stock photography, hard flash and CGI.
```

## 09 — Caixa semanal aberta

**Uso:** seção de planos; mostrar assinatura e entrega sem depender de textos impressos.  
**Formato:** horizontal `4:3` ou vertical `4:5`, conforme o bloco escolhido.

```text
Create a premium editorial lifestyle-product photograph for VivaLeve's healthy weekly meal subscription. Show an unbranded recyclable kraft delivery box opened on a pale oak kitchen island, containing four neatly fitted reusable meal trays with transparent lids. Through the lids, reveal believable versions of the grilled chicken, pumpkin and lentil, herb-crusted fish and mushroom-barley meals. Include one folded cream linen and a small loose sprig of rosemary beside the box. Packaging must look practical, food-safe, compact and genuinely deliverable, with no printed words or invented labels.

Photograph from a natural 45-degree angle with the open box in the center-right and calm negative space on the left for website copy. Contemporary Pacific Northwest kitchen in the soft background: cream plaster, pale wood and a single deep-forest-green cabinet plane, no visual clutter. Cloudy daylight from a side window, soft open shadows, gentle cinematic depth, restrained contrast and subtle warm film grain. Palette strictly mineral cream, forest green, muted kraft/burnt orange and green-charcoal. Full-frame camera, 50mm lens look, f/4, photorealistic premium editorial photography with realistic recyclable materials and fresh food.

No text, logo, label, barcode, hands or people. Avoid luxury gift-box styling, excessive plastic, black meal-prep containers, sterile studio background, fake condensation, floating objects, hard flash and CGI.
```

## 10 — Mãos finalizando o prato

**Uso:** seção “Sobre nós”.  
**Formato:** vertical `4:5`.

```text
Create a candid premium editorial photograph for VivaLeve's about section. Close view of a cook's clean hands finishing the grilled chicken meal with a small spoonful of green herb oil, while the complete matte cream ceramic plate rests on a pale oak worktop. The hands should feel skilled and calm, with natural skin texture and no jewelry or visible tattoos. In the softly blurred background, suggest a modern Pacific Northwest kitchen using cream plaster, pale wood and a restrained deep-forest-green cabinet. Include a folded linen, a small bowl of herbs and one roasted carrot, all naturally placed.

Frame vertically from a 35-degree angle, keeping the plated meal in the lower center and the finishing gesture in the upper center. Soft overcast window light from the left, open shadows, cinematic but honest depth of field, subtle warm film grain and quiet human warmth. Color palette limited to mineral cream, forest green, burnt orange and green-charcoal. Full-frame documentary food photography, 50mm lens look, f/3.5, sharp focus on the hand-to-plate interaction with recognizable food texture.

No face, text, logo, packaging or chef costume. Avoid staged hand poses, manicured advertising hands, latex gloves, busy commercial kitchen, rustic cabin styling, hard flash, dramatic darkness and CGI.
```

## Ordem recomendada de geração

1. Gere três variações do **Prato 01 — Frango na brasa**.
2. Escolha uma como referência-mestra de luz, louça e acabamento.
3. Gere os pratos 02 a 07 usando essa imagem como referência de estilo, se a ferramenta permitir.
4. Gere o hero e as cenas coletivas por último, já com a linguagem visual estabilizada.
5. Envie os arquivos originais, sem compressão ou screenshots, preferencialmente em PNG, WebP de alta qualidade ou JPEG qualidade 90+.

## Critérios para aprovação

- O prato parece uma refeição que poderia realmente ser entregue?
- Ingredientes, técnicas e porção correspondem ao nome do produto?
- A foto continua atraente sem saturação exagerada ou brilho artificial?
- Louça, luz e cenário pertencem à mesma família das outras imagens?
- Há área segura suficiente para o recorte usado no site?
- Não há texto falso, deformações, repetições ou objetos impossíveis?

As imagens são conceituais. Antes da publicação comercial, cada composição deve ser revisada para representar fielmente o produto que será entregue.
