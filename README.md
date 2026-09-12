# 🖤 TREDICI — Studio di Tatuaggi

Demo multi-pagina — fascia **Sito Vetrina (600€)** del listino. Ora in
**Angular 22** (standalone, zoneless, routing, SSR + prerendering di
tutte le 6 pagine), non più HTML puro.

Uno studio di tatuaggi indipendente a Cosenza. La pagina è un foglio
flash vero — carta chiara, inchiostro nero, e un solo colore d'accento: il
viola da stencil transfer, quello del ricalco sulla pelle prima di
tatuare.

## Stack

- **Angular 22**, componenti standalone, **zoneless**, `@angular/router`
  con **lazy loading** per pagina (`loadComponent`)
- **SSR + prerendering** di tutte e 6 le route in build
- **Reactive Forms** per la scheda di prenotazione
- **Structured data** (schema.org `TattooParlor`) iniettato nell'`<head>`
  per la ricerca locale — indirizzo e orari leggibili da Google
- **Title/Meta per pagina**: ogni route ha il suo `<title>` e la sua
  `description`, impostati dal componente della pagina stessa

## Struttura

```
src/app/
  app.ts / app.html            Header + <router-outlet/> + Footer, LD+JSON
  app.routes.ts                 6 route, tutte lazy-loaded
  components/
    header/ footer/              Condivisi su tutte le pagine
    flash-icon/                  Wrapper <svg><use> per le icone flash
    flash-card/                  Una card del foglio, riusata in Home e Galleria
  data/flash-items.ts           I 12 pezzi flash — un'unica fonte dati
  pages/
    home/ galleria/ artisti/
    stili-prezzi/ prenota/ contatti/
public/assets/flash-icons.svg   Sprite SVG con le icone disegnate a mano
```

Il filtro della galleria (Tutti/Blackwork/Fineline/Tradizionale) è un
signal (`selected`), non manipolazione diretta del DOM: `FlashCardComponent`
riceve `[hidden]` calcolato e lo riflette come attributo HTML — **occhio**,
se aggiungi un giorno uno stile con `display` sul selettore `.flash-card`,
verifica che resti definita la regola `.flash-card[hidden] { display:
none }`, altrimenti l'attributo perde contro la classe per specificità/
ordine di sorgente (ci sono già passato, vedi commit di questo progetto).

## Sviluppo in locale

```bash
npm install
npm start        # ng serve, http://localhost:4200
```

## Build e deploy

```bash
npm run build
```

Genera `dist/tredici-tattoo/browser/` con **6 pagine già statiche**
(`ng build` stampa "Prerendered 6 static routes"). Su Vercel:

1. Import del repo
2. Framework Preset: **Angular** (rilevato automaticamente) oppure
   **Other** con output directory `dist/tredici-tattoo/browser`
3. Deploy

Anche qui, zero server Node necessario: è tutto pre-renderizzato in
build, hosting statico con lo stesso beneficio SEO della SSR.

## Personalizzare per un cliente reale

| Cosa | Dove |
|---|---|
| Nome studio, indirizzo, orari | `components/footer/footer.html`, `pages/contatti/contatti.html`, e lo schema in `app.ts` (`LOCAL_BUSINESS_JSON_LD`) |
| Colori | `src/styles.css`, blocco `:root` (in particolare `--stencil`) |
| Flash e prezzi | `data/flash-items.ts` — un array solo, usato sia in Home sia in Galleria |
| Icone | `public/assets/flash-icons.svg` — aggiungi un nuovo `<symbol>` e referenzialo con `<app-flash-icon name="...">` |
| Form | `pages/prenota/prenota.ts` — al momento è solo una demo (non invia nulla, nemmeno il file). Per un cliente vero, [Formspree](https://formspree.io) gestisce anche gli allegati |
| SEO per pagina | ogni file in `pages/*/[nome].ts`, nel costruttore (`Title`/`Meta`) |

## Nota

La versione HTML/CSS/JS pura di partenza resta archiviata in
`../tredici-tattoo-static-legacy/` per riferimento.

---

*Progetto dimostrativo — realizzato da Dario Elia.*
