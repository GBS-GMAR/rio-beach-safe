# Rio Beach Safe · CBMERJ

Web app do **Projeto Rio Beach Safe** – Corpo de Bombeiros Militar do Estado do Rio de Janeiro (GOESP).
Informação, prevenção e segurança para todos nas praias do Rio, em 12 idiomas + Libras.

Acessado por QR Code em banners (praias, hotéis, aeroportos, restaurantes da orla).

## Conteúdo

| Tela | Rota |
|---|---|
| Seleção de idioma | `#/lang` |
| Menu | `#/menu` |
| Bandeiras de sinalização | `#/flags` |
| Correntes de retorno | `#/rip` |
| Saúde e bem-estar | `#/health` |
| Segurança infantil (pulseira) | `#/kids` |
| Emergência (193 · 192 · 190 · 199 + app 193RJ) | `#/emergency` |

Idiomas: Português, Español, English, Deutsch, Français, 中文, Italiano, 日本語, العربية, Русский, हिन्दी, 한국어. Libras via widget oficial VLibras (gov.br).

## Tecnologia

Site estático: HTML + CSS + JavaScript puro, sem build e sem dependências.
Funciona em qualquer hospedagem de arquivos estáticos (GitHub Pages, servidor Apache/Nginx, etc.).

- `index.html` – página única
- `css/style.css` – identidade visual
- `js/i18n.js` – todos os textos, por idioma
- `js/app.js` – navegação e lógica
- `manifest.webmanifest` + `sw.js` – PWA (instalável e offline)
- `assets/img/` – imagens

## Como editar textos

Edite `js/i18n.js`. Cada idioma tem as mesmas chaves. Não é preciso tocar no HTML.

## Como publicar

Copie a pasta inteira para o servidor. Precisa ser servida por **HTTPS** (para o PWA e para o botão de ligar funcionarem em todos os celulares).
Ao atualizar arquivos, troque o número em `CACHE = 'rio-beach-safe-v1'` no `sw.js` para forçar a atualização nos celulares.

## Links úteis no app

- App 193RJ (Android): https://play.google.com/store/apps/details?id=br.gov.rj.cbmerj.rj193android
- App 193RJ (iOS): https://apps.apple.com/br/app/193rj/id6742510233

## QR Code em idioma fixo

A URL aceita `?lang=xx`, por exemplo `.../?lang=en` abre já em inglês (útil para QR Codes em hotéis).
