# Sandnes Pro-Service AS — Brand Guidelines for Developers

> Referansedokument for utvikling av nettsider, applikasjoner og dokumenter.  
> Sist oppdatert fra profilhåndboken (Rev 2, 2022) og SVG-logokildefiler.

---

## Selskap

| | |
|---|---|
| **Navn** | Sandnes Pro-Service AS |
| **Slagord** | *Vi skaper muligheter* |
| **Nettside** | www.sanpro.no |
| **Adresse** | Skippergata 121/123, 4327 Sandnes |
| **Telefon** | 51 97 14 00 |
| **E-post (eks.)** | fornavn@sanpro.no |

---

## Logoer

Alle logofiler ligger i undermappen `./logo/`. Bruk SVG for skjerm og web.

### Filkatalog

| Fil | Beskrivelse | Bruksområde |
|-----|-------------|-------------|
| `SPS_logo_farge.svg` | SPS-ikon kvadratisk, oransje/hvit | Favicon, app-ikon, avatar, profilbilde |
| `SPS_logo_vannrett.svg` | Ikon + tekst vannrett, oransje ikon + mørk tekst | Header lyse bakgrunner, e-post, dokumenter |
| `SPS_logo_vannrett_hvit.svg` | Ikon + tekst vannrett, alt hvit/lysgrå | Header mørke/oransje bakgrunner |
| `SPS_logo.svg` | Ikon + "Sandnes Pro-Service" + "Vi skaper muligheter" | Presentasjoner, forsider |
| `SandnesPro-service_m_ikon_undertekst_svart_30mmV.svg` | Stående, svart, med undertekst | Dokumenthoder, svart-hvitt trykk |
| `hvit_logo.svg` | SPS-ikon kun, hvit (`#fafafa`) | Mørk/oransje bakgrunn, overlay |
| `sort_logo.svg` | SPS-ikon kun, svart (`#231f20`) | Trykk, enfarget bakgrunn |

### Logoregler

- Bruk alltid logoen i sin helhet — ikke beskjær, forvreng eller refarger
- Minimumsklarering: logoens høyde × 0.25 på alle sider
- Ikke plasser logoikon alene i kontekster der merkevaren er ukjent
- Foretrekk SVG for web; bruk PNG-eksport (≥ 2×) der SVG ikke støttes

### Kodeeksempel

```jsx
// Fargelogo vannrett — lys bakgrunn
<img src="./logo/SPS_logo_vannrett.svg" alt="Sandnes Pro-Service" height="40" />

// Hvit logo — mørk/oransje bakgrunn
<img src="./logo/SPS_logo_vannrett_hvit.svg" alt="Sandnes Pro-Service" height="40" />

// Kun ikon — favicon / avatar
<img src="./logo/SPS_logo_farge.svg" alt="SPS" width="32" height="32" />
```

### Theming av inline SVG

```css
/* Skift oransje til CSS-variabel i inline SVG */
svg path[fill="#e86e24"] { fill: var(--color-brand); }

/* Hvit logo på farget bakgrunn via filter */
.header-dark .logo img { filter: brightness(0) invert(1); }
```

---

## Farger

Hex-verdier er hentet direkte fra SVG-kildefilene.

### Primærfarger

```css
:root {
  --sps-orange:    #e86e24;  /* Oransje — fra SVG (PMS 021 trykkversjon) */
  --sps-black:     #231f20;  /* Nesten-sort — logotekst, brødtekst */
  --sps-white:     #ffffff;
  --sps-off-white: #fafafa;  /* Hvit logo-variant, bakgrunner */
}
```

> **NB:** `#e86e24` er eksakt fra SVG-kildefilene og er skjermversjonen av PMS 021.

### Støttefarger (skjermtilpasset fra håndbokens PMS/NCS)

```css
:root {
  --sps-gray:          #8a7a6e;  /* Sober 6303-Y43R — varm grå */
  --sps-red:           #c0392b;  /* S1580-Y80R — dempet for skjerm */
  --sps-blue:          #4a6fa5;  /* S4040-R80B — dempet for skjerm */
  --sps-driftwood:     #c4a882;  /* Drivved 9041 — varm nøytral */
  --sps-driftwood-bg:  #f5ede3;  /* Drivved lys — subtil varm bakgrunn */
}
```

> Støttefargene er tonet ned fra håndbokverdiene (PMS/NCS) da de originale er skarpe trykk-farger som kan bli brutale på skjerm. Juster etter behov.

### Semantiske tokens

```css
:root {
  --color-brand:          var(--sps-orange);
  --color-brand-hover:    #d15e18;     /* Mørkere oransje til hover */
  --color-brand-light:    #fce8d8;     /* Lys oransje — badges, highlights */

  --color-text-primary:   var(--sps-black);
  --color-text-secondary: var(--sps-gray);
  --color-text-inverse:   var(--sps-white);

  --color-bg-default:     var(--sps-white);
  --color-bg-subtle:      var(--sps-off-white);
  --color-bg-warm:        var(--sps-driftwood-bg);

  --color-border:         #e0d6cc;
  --color-border-focus:   var(--sps-orange);
}
```

### Fargebruk

- **Oransje** er primæraksentfargen — knapper, aktive lenker, ikoner, highlights
- **Lys oransje** (`--color-brand-light`) til badges, tags, subtile bakgrunner
- Bruk **rød** kun til feil/advarsler — ikke som dekorativ farge
- Blå egner seg til informasjon og sekundære lenker

---

## Typografi

Håndboken spesifiserer ikke digital font. Følgende fonter er valgt for å matche profilens uttrykk: moderne, profesjonell og varm.

### Anbefalt (to fonter)

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,600;1,400&display=swap');

:root {
  --font-ui:      'Plus Jakarta Sans', system-ui, sans-serif;
  --font-body:    'Plus Jakarta Sans', system-ui, sans-serif;
  --font-display: 'Lora', Georgia, serif;
}
```

- **Plus Jakarta Sans** — moderne, human geometrisk sans-serif; varm og tilgjengelig for UI og brødtekst
- **Lora** — elegant serif for headings og markedsmateriell; gir karakter og kontrast

### Alternativ (én font, enklere stack)

```css
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap');

:root {
  --font-ui:   'DM Sans', system-ui, sans-serif;
  --font-body: 'DM Sans', system-ui, sans-serif;
}
```

**DM Sans** er en solid enkelt-font-løsning — moderne, lesbar, og passer godt i sosialsektor-kontekst.

### Typografiskala

```css
:root {
  --text-xs:   0.75rem;    /* 12px — labels, meta */
  --text-sm:   0.875rem;   /* 14px — sekundær tekst */
  --text-base: 1rem;       /* 16px — brødtekst */
  --text-lg:   1.125rem;   /* 18px — ingress */
  --text-xl:   1.25rem;    /* 20px — section-titler */
  --text-2xl:  1.5rem;     /* 24px — h3 */
  --text-3xl:  1.875rem;   /* 30px — h2 */
  --text-4xl:  2.25rem;    /* 36px — h1 */
}
```

---

## Tone of Voice

| Kanal | Tone |
|-------|------|
| Nettside / app | Profesjonell, varm, moderne, inkluderende |
| Sosiale medier | Engasjerende, positiv, menneskenær — gjerne "glimt i øyet" |
| E-post / brev | Profesjonell og tydelig, skriftlig bokmål |
| Interndokumenter | Informativ, ryddig, direkte |

**Språk:** Bokmål i all ekstern kommunikasjon.

---

## UI-komponenter

### Knapper

```css
.btn-primary {
  background-color: var(--color-brand);   /* #e86e24 */
  color: white;
  border-radius: 6px;
  font-family: var(--font-ui);
  font-weight: 600;
  padding: 0.625rem 1.25rem;
}
.btn-primary:hover { background-color: var(--color-brand-hover); }

.btn-secondary {
  border: 2px solid var(--color-brand);
  color: var(--color-brand);
  background: transparent;
}
```

### Lenker og fokus

```css
a { color: var(--sps-blue); text-underline-offset: 3px; }
a:hover { color: var(--color-brand); }

:focus-visible {
  outline: 2px solid var(--color-brand);
  outline-offset: 3px;
}
```

---

## Sosiale medier

| Kanal | Formål |
|-------|--------|
| Facebook | Gladsaker, folk i arbeid, spesielle hendelser |
| Instagram | Merkevarebevissthet og engasjement |
| LinkedIn | Næringsliv, samarbeidspartnere, arbeidsgiver-profil |

**Bilder:** Prosesser og arbeidssituasjoner — folk i arbeid, ikke generiske stockbilder.

---

## Sjekkliste for utviklere

- [ ] Primæroransje `#e86e24` brukt som aksentfarge
- [ ] Korrekt logofil valgt for kontekst (lys/mørk bakgrunn, ikon vs. full)
- [ ] Logo brukt i sin helhet — ikke modifisert
- [ ] Bokmål i alt brukervendt innhold
- [ ] WCAG AA kontrast på tekst mot bakgrunn
- [ ] `focus-visible` bruker `--color-border-focus` (`#e86e24`)
- [ ] Fonter lastet fra Google Fonts eller self-hosted
- [ ] Bilder viser mennesker i reelle arbeidssituasjoner

---

*Kilde: Profil håndbok Sandnes Pro-Service AS, JE/Rev 2, 2022. Farger og logodetaljer verifisert mot SVG-kildefiler.*