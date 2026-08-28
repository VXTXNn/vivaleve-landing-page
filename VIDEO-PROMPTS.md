# VivaLeve — Prompts de Vídeo

## Hero — prato chegando à mesa

**Imagem de referência:** `assets/hero-vivaleve.png`  
**Uso:** vídeo principal da hero  
**Duração recomendada:** 6 a 8 segundos  
**Formato:** 16:9, 1920 × 1080 ou superior  
**Movimento:** câmera lenta, aproximação sutil, sem cortes  
**Loop:** opcional; usar o último quadro como pôster do vídeo

### Prompt principal

```text
Use the supplied image as the exact visual reference and first frame. Preserve the original composition, food styling, ceramic plate, pale oak table, soft natural lighting, shallow depth of field, muted Pacific Northwest kitchen and generous negative space on the left.

A pair of natural adult hands, wearing the same soft gray knitted sleeves visible in the reference, gently carries the warm ceramic plate into the scene from the right and places it on the table in the exact final position shown in the reference image. The movement is calm, precise and unhurried. The plate remains level, the food does not slide, deform or change, and the hands interact with its rim using believable weight and contact.

As the plate settles on the table, the camera performs a very slow, smooth cinematic push-in toward the salmon and roasted vegetables, approximately a 5 to 7 percent zoom over the full shot. Keep the camera almost locked, with only subtle natural parallax. Thin, delicate wisps of real steam rise continuously from the salmon, barley and roasted vegetables, curling softly upward and fading naturally into the cooler air. The steam must remain translucent and refined, never thick enough to hide the meal.

Soft overcast daylight continues to enter from the left. Preserve the warm highlights on the salmon, restrained forest-green background, mineral cream ceramic, burnt-orange vegetables and green-charcoal shadows. Maintain realistic food texture, subtle film grain, open shadows and quiet premium editorial styling. The final moment holds briefly on the complete meal, inviting and still, with the plate fully visible and centered in the right half of the frame.

One continuous shot, photorealistic cinematic food film, natural physics, restrained movement, 24 fps film look, realistic motion blur, smooth ease-in and ease-out, no camera shake. No text, logo, music, cuts or additional objects.
```

### Negative prompt

```text
Do not alter the recipe, ingredients, portion, plate, table, background or color palette. No food morphing, melting or sliding. No warped fingers, extra fingers, duplicated hands, changing sleeves, deformed plate, levitating plate, abrupt placement, impact, bounce, rotation, camera shake, handheld movement, fast zoom, dolly whip, focus hunting, heavy steam, smoke cloud, boiling food, artificial particles, flickering light, exposure shift, changing background, new props, text, letters, logo, watermark, CGI, 3D-rendered look or oversaturated colors.
```

### Direção temporal

- **0–2,5 s:** as mãos conduzem o prato suavemente da direita até a posição final.
- **2,5–4 s:** o prato toca a mesa e as mãos o soltam sem girá-lo; a câmera inicia a aproximação.
- **4–7 s:** push-in cinematográfico de 5–7%; fios finos de vapor ganham visibilidade.
- **7–8 s:** breve pausa estável no prato, adequada para transição ou loop.

### Enquadramento seguro para o site

- Manter o prato dentro da metade direita durante todo o vídeo.
- Preservar o lado esquerdo limpo para o título e os CTAs da hero.
- Não aproximar além de 7%, evitando cortar a borda do prato em telas largas.
- Para mobile, gerar uma versão adicional em `4:5`, mantendo o prato centralizado e eliminando o espaço destinado ao texto desktop.

### Versão curta para geradores com limite de prompt

```text
Use the supplied image as the exact first-frame and visual reference. Natural adult hands in soft gray knitted sleeves gently bring the warm ceramic plate in from the right and place it in the same position on the pale oak table. Preserve the meal, plate, background, lighting, color palette and clean negative space on the left. After the plate settles, perform a slow smooth 5–7% cinematic push-in toward the salmon. Thin translucent wisps of real steam rise from the hot food and fade naturally. One continuous 7-second shot, calm premium editorial food film, soft overcast daylight from the left, realistic physics, subtle film grain, 24 fps look, smooth ease-in and ease-out. No food morphing, deformed hands, extra fingers, plate rotation, bounce, camera shake, fast zoom, heavy smoke, flicker, new objects, text, logo or CGI.
```
