# AFT Håndbok — Fase 1: Kjerne og tiltaksløp

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rydde tutorial-innhold, opprette full mappestruktur med stubs, og skrive kjerne-sidene i håndboken: intro, leseveileder, alle 6 SE-faser i tiltaksløpet, planseksjonen og SE/MI-metodikk.

**Architecture:** Docusaurus v3 MDX med autogenerert sidebar (`mainSidebar`). Mappehierarki speiler SE-fasene direkte. Hvert innholdsdokument er selvstendig lesbart men bygger på SE-logikken som bærende struktur. MI er grunnholdningen i alt relasjonsarbeid — ikke en teknikk-seksjon.

**Tech Stack:** Docusaurus 3.10.1 · MDX · TypeScript · pnpm · norsk bokmål

**Utenfor scope (Plan 2):** `metodikk/` (karriereveiledning, GAP, LØFT, styrkebasert), `samarbeid/`, `verktoy/`, `regelverk/`, `fordypning/`

**Primærkilder for innhold:**
- `knowledge_base/SPS - Løsningsbeskrivelse 2026_rev080426.pdf` — autoritativ for SPSs praksis
- `knowledge_base/SE_oppsummering_jobbkonsulenter.md` — SE-metodikk med SPS-kontekst
- `knowledge_base/Ny kravspesifikasjon for Arbeidsforberedende trening.pdf` — NAVs krav
- `knowledge_base/aft_ny_spec (orig fonts).pptx` — hva er nytt, prioriteringer nå

---

## Filstruktur

**Slettes:**
```
docs/tutorial-basics/   (hele mappen)
docs/tutorial-extras/   (hele mappen)
```

**Opprettes/overskrives:**
```
docs/intro.mdx
docs/kom-i-gang/index.md
docs/kom-i-gang/jobbkonsulentens-rolle.md
docs/tiltakslopet/index.md
docs/tiltakslopet/fase-1-innledende-kontakt.md
docs/tiltakslopet/fase-2-yrkeskartlegging.md
docs/tiltakslopet/fase-2b-intern-arena.md
docs/tiltakslopet/fase-3-finne-jobb.md
docs/tiltakslopet/fase-4-arbeidsgiver.md
docs/tiltakslopet/fase-5-oppfolging.md
docs/tiltakslopet/avslutning.md
docs/plan/index.md
docs/plan/utarbeide-plan.md
docs/plan/oppdatere-og-dele.md
docs/plan/forlengelse-og-avslutning.md
docs/metodikk/supported-employment.md
docs/metodikk/motiverende-intervju.md
```

**Stub-filer (Plan 2 — opprettes nå men fylles ut senere):**
```
docs/metodikk/styrkebasert.md
docs/metodikk/karriereveiledning-metode.md
docs/metodikk/gap-modellen.md
docs/metodikk/loft.md
docs/samarbeid/nav-samarbeid.md
docs/samarbeid/arbeidsgiversamarbeid.md
docs/samarbeid/andre-aktorer.md
docs/verktoy/karriereverktoy.md
docs/verktoy/livshjulet.md
docs/verktoy/observasjon.md
docs/verktoy/grunnleggende-ferdigheter.md
docs/verktoy/dokumentasjonsmaler.md
docs/regelverk/kravspesifikasjonen.md
docs/regelverk/varighet-og-deltakelse.md
docs/regelverk/personvern.md
docs/fordypning/psykisk-helse.md
docs/fordypning/autistisk-utbrenthet.md
docs/fordypning/epistemic-trust.md
docs/fordypning/sosialt-arbeid.md
```

---

## Task 1: Rydde tutorial-innhold og opprette mappestruktur

**Files:**
- Delete: `docs/tutorial-basics/` (hele mappen)
- Delete: `docs/tutorial-extras/` (hele mappen)
- Create: alle mapper listet over

- [ ] **Steg 1: Slett tutorial-mappene**

```powershell
Remove-Item -Recurse -Force "docs/tutorial-basics"
Remove-Item -Recurse -Force "docs/tutorial-extras"
```

- [ ] **Steg 2: Opprett mappehierarkiet**

```powershell
$dirs = @(
  "docs/kom-i-gang",
  "docs/tiltakslopet",
  "docs/plan",
  "docs/metodikk",
  "docs/samarbeid",
  "docs/verktoy",
  "docs/regelverk",
  "docs/fordypning"
)
$dirs | ForEach-Object { New-Item -ItemType Directory -Force $_ }
```

- [ ] **Steg 3: Opprett stub-filer for Plan 2**

Opprett følgende filer med minimalt innhold (erstatt `TITTEL` og `BESKRIVELSE` for hvert):

For `docs/metodikk/styrkebasert.md`:
```mdx
---
title: Styrkebasert tilnærming
description: Fokus på ressurser, ferdigheter og mestring fremfor mangler og begrensninger.
sidebar_label: Styrkebasert tilnærming
sidebar_position: 2
tags: [innføring]
---

# Styrkebasert tilnærming

*Denne siden er under utarbeidelse.*
```

Gjenta mønsteret for alle resterende stub-filer:

| Fil | title | sidebar_label | sidebar_position |
|---|---|---|---|
| `metodikk/karriereveiledning-metode.md` | Karriereveiledning | Karriereveiledning | 3 |
| `metodikk/gap-modellen.md` | GAP-modellen | GAP-modellen | 4 |
| `metodikk/loft.md` | LØFT | LØFT | 5 |
| `samarbeid/nav-samarbeid.md` | Samarbeid med Nav | Samarbeid med Nav | 1 |
| `samarbeid/arbeidsgiversamarbeid.md` | Arbeidsgiversamarbeid | Arbeidsgiversamarbeid | 2 |
| `samarbeid/andre-aktorer.md` | Andre aktører | Andre aktører | 3 |
| `verktoy/karriereverktoy.md` | Karriereverktøy | Karriereverktøy | 1 |
| `verktoy/livshjulet.md` | Livshjulet | Livshjulet | 2 |
| `verktoy/observasjon.md` | Systematisk observasjon | Observasjon | 3 |
| `verktoy/grunnleggende-ferdigheter.md` | Grunnleggende ferdigheter | Grunnl. ferdigheter | 4 |
| `verktoy/dokumentasjonsmaler.md` | Dokumentasjonsmaler | Maler | 5 |
| `regelverk/kravspesifikasjonen.md` | Kravspesifikasjonen | Kravspesifikasjonen | 1 |
| `regelverk/varighet-og-deltakelse.md` | Varighet og deltakelse | Varighet og deltakelse | 2 |
| `regelverk/personvern.md` | Personvern og taushetsplikt | Personvern | 3 |
| `fordypning/psykisk-helse.md` | Psykisk helse i arbeidsrettet kontekst | Psykisk helse | 1 |
| `fordypning/autistisk-utbrenthet.md` | Autistisk utbrenthet og masking | Autistisk utbrenthet | 2 |
| `fordypning/epistemic-trust.md` | Epistemic trust | Epistemic trust | 3 |
| `fordypning/sosialt-arbeid.md` | Fagtradisjonen sosialt arbeid | Sosialt arbeid | 4 |

- [ ] **Steg 4: Verifiser bygg**

```powershell
pnpm build 2>&1 | Select-String -Pattern "error|broken|warn" -CaseSensitive:$false
```

Forventet: ingen feil. Eventuelle advarsler om tomme sider er OK.

- [ ] **Steg 5: Commit**

```powershell
git add docs/
git commit -m "chore: rydd tutorial-innhold, opprett mappestruktur og stubs"
```

---

## Task 2: intro.mdx

**Files:**
- Modify: `docs/intro.mdx`

**Kilde:** Løsningsbeskrivelse kap. 1 (Om virksomheten, Faglig plattform), PPTX slide 9 (Hva er nytt)

- [ ] **Steg 1: Skriv intro.mdx**

```mdx
---
title: Hva er AFT hos SPS?
description: En introduksjon til Sandnes Pro-Service, AFT-tiltaket og hvordan du bruker denne håndboken.
sidebar_label: Introduksjon
sidebar_position: 1
tags: [innføring]
---

# Hva er AFT hos SPS?

Sandnes Pro-Service (SPS) leverer Arbeidsforberedende trening (AFT) på oppdrag fra Nav.
Vi jobber etter visjonen **«Vi skaper muligheter»** — en løsningsfokusert tilnærming med
tro på menneskers potensiale for endring uansett utgangspunkt.

## Om denne håndboken

Håndboken er et faglig referanseverk for deg som er jobbkonsulent hos SPS.
Den gir deg felles språk, rammer og verktøy for arbeidshverdagen.

**For deg som er ny:** Start med [Kom i gang](./kom-i-gang/index.md) og les
tiltaksløpet fase for fase. Du får en sekvensiell innføring i metodikk og arbeidsgang.

**For deg som er erfaren:** Bruk håndboken som oppslagsverk. Hopp direkte til
det temaet du trenger. Metodikkseksjonen gir faglig fordypning.

## Hva er AFT?

AFT er et heltidstilbud på 37,5 timer per uke, rettet mot personer med sammensatte
utfordringer og lav yrkesdeltakelse. Målet er **stabil tilknytning til arbeidslivet**
gjennom en kombinasjon av kartlegging, karriereveiledning, arbeidstrening og oppfølging.

:::note[Regelverksforankring]
AFT er hjemlet i kapittel 13 i forskrift om arbeidsmarkedstiltak.
SPS leverer 48 AFT-plasser etter avtale med Nav Rogaland.
:::

## Vårt faglige fundament

Arbeidet vårt bygger på fire bærende tilnærminger:

**Supported Employment (SE)** er det strukturelle rammeverket for alt vi gjør.
Tiltaksløpet — fra første kontakt til jobb — følger EUSEs femtrinnsmodell.
Grunnlogikken er *place–train–maintain*: rask plassering i ordinært arbeidsliv,
opplæring i kontekst, og tett oppfølging så lenge det er behov.

**Motiverende intervju (MI)** er grunnholdningen i all kontakt med deltaker.
Partnerskap, aksept, medfølelse og nysgjerrighet styrer samtalen — ikke bare
i strukturerte samtaler, men i enhver interaksjon.

**Styrkebasert tilnærming** betyr at vi tar utgangspunkt i deltakers ressurser,
ferdigheter og interesser — ikke mangler og begrensninger.

**Karriereveiledning** er en gjennomgående prosess, forankret i Nasjonalt
kvalitetsrammeverk. Vi støtter deltaker til informerte og selvstendige valg
om arbeid og utdanning.

## Hva forventes av oss nå?

Ny kravspesifikasjon (19.12.2025) strammet inn kravene. Det viktigste å huske:

- Ordinært arbeidsliv er **hovedregel** — ikke et alternativ
- Deltaker skal ha forsøkt ekstern arbeidstrening **innen tre måneder**
- Tett og faglig oppfølging — ansvaret skal ikke legges på arbeidsgiver
- 50 % av deltakere skal gå over til arbeid eller utdanning ved avsluttet tiltak

:::tip[Kom i gang]
Er du ny? Gå til [Leseveileder for nyansatte](./kom-i-gang/index.md) for en
anbefalt leserekkefølge gjennom håndboken.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/intro.mdx
git commit -m "docs: skriv intro-side for AFT-håndboken"
```

---

## Task 3: kom-i-gang/index.md — Leseveileder for nyansatte

**Files:**
- Create: `docs/kom-i-gang/index.md`

**Kilde:** Løsningsbeskrivelse kap. 1.1–1.2, SE_oppsummering_jobbkonsulenter.md seksjon «Hvordan bruke dette dokumentet»

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Kom i gang
description: Leseveileder for nyansatte jobbkonsulenter hos SPS — anbefalt rekkefølge og hva du trenger å vite først.
sidebar_label: Kom i gang
sidebar_position: 1
tags: [innføring]
---

# Kom i gang

Velkommen som jobbkonsulent hos Sandnes Pro-Service.

Denne siden gir deg en anbefalt rekkefølge for å lese håndboken og bli kjent
med jobben. Du trenger ikke lese alt på én gang — start med fundamentet,
og bygg videre etter hvert som du får deltakere og erfaring.

## Anbefalt leserekkefølge

### 1. Forstå rammeverket (dag 1–3)

Start med å forstå hva vi gjør og hvorfor:

1. **Denne siden** — du er allerede her
2. [Jobbkonsulentens rolle](./jobbkonsulentens-rolle.md) — hva rollen innebærer,
   hvilke ferdigheter du trenger, og de etiske prinsippene som styrer arbeidet
3. [Supported Employment](../metodikk/supported-employment.md) — det strukturelle
   rammeverket for alt vi gjør
4. [Motiverende intervju](../metodikk/motiverende-intervju.md) — grunnholdningen
   i all kontakt med deltaker

### 2. Forstå arbeidsgang (uke 1)

Gå gjennom tiltaksløpet fase for fase. Les dem i rekkefølge:

5. [Tiltaksløpet — oversikt](../tiltakslopet/index.md)
6. [Fase 1: Innledende kontakt](../tiltakslopet/fase-1-innledende-kontakt.md)
7. [Fase 2: Yrkeskartlegging](../tiltakslopet/fase-2-yrkeskartlegging.md)
8. [Fase 3: Finne jobb](../tiltakslopet/fase-3-finne-jobb.md)
9. [Fase 4: Samarbeid med arbeidsgiver](../tiltakslopet/fase-4-arbeidsgiver.md)
10. [Fase 5: Opplæring og oppfølging](../tiltakslopet/fase-5-oppfolging.md)

### 3. Forstå planarbeidet (uke 1–2)

Planen er bindeleddet til Nav og styringsverktøyet ditt:

11. [Utarbeide plan](../plan/utarbeide-plan.md)
12. [Oppdatere og dele med Nav](../plan/oppdatere-og-dele.md)

### 4. Lær spesialtilfellene (etter hvert)

Disse trenger du når situasjonen oppstår:

- [Intern arena](../tiltakslopet/fase-2b-intern-arena.md) — når og hvorfor
- [Forlengelse og avslutning](../plan/forlengelse-og-avslutning.md)
- [Avslutning av tiltaket](../tiltakslopet/avslutning.md)

## Tre ting å huske fra dag én

:::tip
**1. Ordinært arbeidsliv er målet — og arenaen.**
Deltaker skal som hovedregel være i ekstern arbeidstrening innen tre måneder.
Intern arena er et midlertidig unntak, ikke normen.
:::

:::tip
**2. Planen tilhører deltaker.**
Deltaker skal ha reelt eierskap til mål og aktiviteter. Planen er ikke et
Nav-dokument du fyller ut — det er et felles prosjekt.
:::

:::tip
**3. Oppfølgingsansvaret er ditt.**
Tett oppfølging er kjernen i SE. «Place-pray» — plassere deltaker og håpe
på det beste — er ikke god praksis. Du er til stede, du støtter, du justerer.
:::

## Hvem kan du spørre?

- **Avdelingsleder sosialfag** har personalansvar og fagansvar
- **Kollegene dine** er din viktigste ressurs — bruk dem aktivt
- Håndboken er tilgjengelig når du trenger å slå opp noe

:::note
Har du spørsmål som håndboken ikke svarer på? Ta det opp med avdelingsleder
eller i fagmøte. Det kan bety at håndboken mangler viktig innhold.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/kom-i-gang/index.md
git commit -m "docs: skriv leseveileder for nyansatte"
```

---

## Task 4: kom-i-gang/jobbkonsulentens-rolle.md

**Files:**
- Create: `docs/kom-i-gang/jobbkonsulentens-rolle.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 5 (Rollen som jobbkonsulent), Løsningsbeskrivelse kap. 1.1, NAV kravspesifikasjon kap. 8

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Jobbkonsulentens rolle
description: Hva rollen innebærer, hvilke ferdigheter du trenger, og de etiske prinsippene som styrer arbeidet.
sidebar_label: Jobbkonsulentens rolle
sidebar_position: 2
tags: [innføring]
---

# Jobbkonsulentens rolle

I Supported Employment kalles rollen *arbeidstilrettelegger* — en betegnelse
som dekker hele prosessen fra første kontakt til selvstendig arbeid. Hos SPS
bruker vi tittelen **jobbkonsulent**.

Rollen er bred: du er samtalepartner, karriereveileder, arbeidsgiverkontakt,
støttespiller og dokumentasjonsansvarlig — alt på én gang, og tilpasset den
enkelte deltaker.

## To kunder, ikke én

SE har to nøkkelkunder: **deltaker** og **arbeidsgiver**. Begges behov må
tilfredsstilles for at inkluderingen skal lykkes. Hvis du ikke har overblikk
over begge sider, leverer du ikke SE.

Dette betyr at du ikke bare jobber *for* deltaker — du jobber *med* deltaker
og arbeidsgiver, og sikrer at begge opplever samarbeidet som verdifullt.

## Sju ferdighetsområder

Nav krever kompetanse på seks individuelle områder og fire områder som dekkes
samlet i teamet. EUSE beskriver sju ferdighetsområder for rollen:

| Ferdighetsområde | Hva det innebærer i praksis |
|---|---|
| **Salg og markedsføring** | Presentere SE overfor arbeidsgivere og samarbeidspartnere på en måte som skaper tillit og interesse |
| **Forhandling og megling** | Balansere interesser mellom deltaker, arbeidsgiver og kolleger |
| **Informasjon, rådgivning og veiledning** | Kunnskap om arbeid, rettigheter, ytelser og opplæringsmuligheter |
| **Arbeidsmarkedslovgivning** | Arbeidsmiljøloven, tilretteleggingsplikt, diskrimineringsforbud, HMS |
| **Dokumentasjon** | Rapportering, planer, observasjoner, evalueringer |
| **Evaluering og planlegging** | Vurdere progresjon og justere kurs |
| **Nettverk og relasjoner** | Bygge og vedlikeholde kontakt med arbeidsgivere og samarbeidspartnere |

:::info
EUSE understreker: **holdninger og innstilling veier tyngst**. Faglig
spesialistkunnskap kan læres. Verdier og menneskesyn er vanskeligere å endre.
:::

## Etiske prinsipper

Disse prinsippene gjelder på alle trinn i prosessen. De er ikke en åpningsritual
— de er en levende standard.

| Prinsipp | Hva det betyr |
|---|---|
| **Selvbestemmelse** | Deltaker uttrykker selv sine ønsker og beslutter over egen prosess |
| **Informerte valg** | Vi gjør informasjon tilgjengelig og forståelig — vi bestemmer ikke |
| **Verdighet** | Måten vi snakker om, til og rundt deltaker på, er en del av dette |
| **Konfidensialitet** | Personopplysninger videreformidles kun etter avtale med deltaker |
| **Empowerment** | Vi myndiggjør deltaker — vi gjør ikke ting for hen som hen kan gjøre selv |
| **Fleksibilitet** | Prosessen tilpasses den enkelte — ikke omvendt |

:::warning[Vær oppmerksom]
- Aldri snakk over hodet på deltaker når andre er til stede
- Aldri formidle informasjon uten eksplisitt samtykke
- Aldri la egne fordommer styre hva som «er realistisk» for deltaker
- Aldri lov mer enn du kan holde — overfor deltaker eller arbeidsgiver
:::

## Grenser i rollen

Jobbkonsulenten har tett kontakt med deltaker over lang tid. Det krever
bevissthet om egne grenser:

- Deltaker har et privatliv. Du er ikke deltakers bestevenn.
- Følelser og engasjement må tøyles i forhold til rollen.
- Det kan være en krevende og til tider ensom jobb. Bruk kollegaveiledning aktivt.
- Vær oppmerksom på utnytting, trakassering og diskriminering på arbeidsplassen.
  Du har et særlig ansvar her.

## Spørsmål til selvrefleksjon

Disse spørsmålene egner seg godt til kollegaveiledning og fagmøter:

- Hvordan bygger jeg tillit og respekt med denne deltakeren?
- Hva ville jeg ønsket meg hvis jeg var deltakeren?
- Når lar jeg være å gjøre noe selv, for at deltaker skal lære det?
- Hvordan takler jeg interessekonflikter mellom deltaker, arbeidsgiver og SPS?
- Når jeg er på arbeidsplassen: er jeg der av nødvendighet eller av vane?
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/kom-i-gang/jobbkonsulentens-rolle.md
git commit -m "docs: skriv side om jobbkonsulentens rolle"
```

---

## Task 5: tiltakslopet/index.md — Oversikt over tiltaksløpet

**Files:**
- Create: `docs/tiltakslopet/index.md`

**Kilde:** PPTX slide 20 (6 faser, 4 spor), SE_oppsummering_jobbkonsulenter.md seksjon 4 (Femtrinnsmodellen)

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Tiltaksløpet
description: Oversikt over de seks fasene i AFT hos SPS — basert på EUSEs femtrinnsmodell for Supported Employment.
sidebar_label: Oversikt
sidebar_position: 1
tags: [innføring]
---

# Tiltaksløpet

Tiltaksløpet hos SPS er strukturert etter **EUSEs femtrinnsmodell for Supported
Employment**, koblet til innholdselementene (4a–4f) i NAVs kravspesifikasjon.

Fasene er ikke strengt sekvensielle — flere pågår parallelt, og vektingen
forskyves etter hvert som deltaker beveger seg mot arbeid.

## De seks fasene

| Fase | Navn | SE-trinn | Kravspek |
|---|---|---|---|
| **1** | [Innledende kontakt](./fase-1-innledende-kontakt.md) | Trinn 1 | 4a (del) |
| **2** | [Yrkeskartlegging](./fase-2-yrkeskartlegging.md) | Trinn 2 | 4a |
| **2.5** | [Intern arena](./fase-2b-intern-arena.md) | *SPS-tilpasning* | 4b (unntak) |
| **3** | [Finne jobb / utdanning](./fase-3-finne-jobb.md) | Trinn 3 | 4d |
| **4** | [Samarbeid med arbeidsgiver](./fase-4-arbeidsgiver.md) | Trinn 4 | 4d–4e |
| **5** | [Opplæring og oppfølging](./fase-5-oppfolging.md) | Trinn 5 | 4c, 4e–4f |

Fase 2.5 (intern arena) er et SPS-spesifikt virkemiddel som avviker fra ren
SE-logikk. Det brukes unntaksvis, er alltid tidsavgrenset og krever faglig
begrunnelse i deltakers plan.

## Fire spor gjennom hele tiltaket

Parallelt med fasene pågår fire spor gjennom hele tiltaksperioden:

- **Kvalifisering** — kompetansebygging, opplæring, grunnleggende ferdigheter
- **Karriere** — kartlegging, karriereveiledning, yrkesmål
- **Mestring** — motivasjon, selvtillit, jobbfastholdelse
- **Struktur og rammer** — plan, fraværsoppfølging, Nav-samarbeid

## Grunnlogikken: place–train–maintain

Tradisjonell attføring fulgte *train-then-place*: forberedelse i skjermede
omgivelser, så plassering. Erfaringen viste at dette sjelden førte til ordinær
jobb.

SE snur dette til **place–train–maintain**:

1. **Place** — plassering i ordinært arbeidsliv så raskt som hensiktsmessig
2. **Train** — opplæring skjer i reell arbeidskontekst
3. **Maintain** — bistand fortsetter så lenge det er behov

:::note[Regelverksforankring]
Nav forventer at deltaker har forsøkt eller er i arbeidstrening i ordinært
arbeidsliv **innen tre måneder** etter oppstart. Avvik skal begrunnes faglig
i planen.
:::

## Tidslinje

```
Oppstart → 4 uker: Første plan
         → 3 mnd:  Ekstern praksis (forventning)
         → 3 mnd:  Plan deles med Nav (deretter hver 3. mnd)
         → 12 mnd: Vurdering forlengelse
         → 2 år:   Maksimal varighet (3 år ved lærekontrakt)
```

Alle deltakere registreres med **100 % deltakelse de første tre månedene**,
uavhengig av faktisk aktivitetsnivå. Etter tre måneder justeres deltakelsen,
men den settes aldri lavere enn 40 %.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/index.md
git commit -m "docs: skriv oversiktsside for tiltaksløpet"
```

---

## Task 6: fase-1-innledende-kontakt.md

**Files:**
- Create: `docs/tiltakslopet/fase-1-innledende-kontakt.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.1, Løsningsbeskrivelse kap. 2.1–2.2, `knowledge_base/Forhåndssamtale v0.1.pdf`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 1: Innledende kontakt"
description: Mottak av bestilling, forhåndssamtale, oppstartssamtale og de første ukene — å bygge tillit og legge grunnlaget for et felles prosjekt.
sidebar_label: "Fase 1: Innledende kontakt"
sidebar_position: 2
tags: [innføring]
---

# Fase 1: Innledende kontakt

**SE-trinn 1 — Innledende kontakt og samarbeidsavtale**

Formålet med denne fasen er å etablere en relasjon basert på tillit, respekt og
konfidensialitet, og gi grunnlag for at deltaker kan ta et informert valg om
å bruke AFT for å finne jobb.

Et godt første møte bærer hele resten av prosessen.

## Mottak av bestilling

SPS mottar innsøking via Navs digitale deltakerlister. Avdelingsleder bekrefter
mottak og registrerer kandidaten i oppfølgingssystemet.

Dersom bestillingen mangler opplysninger eller er uklar, kontakter avdelingsleder
Nav-veileder for avklaring. Avdelingsleder tildeler jobbkonsulent basert på
ledig kapasitet og match mellom deltakers behov og jobbkonsulentens kompetanse.

## Forhåndssamtale

I ventetiden inviteres deltaker til en forhåndssamtale. Samtalen:

- Gjennomgår bestillingen og gir deltaker informasjon om AFT og hva de kan forvente
- Fanger opp ny informasjon som er relevant for oppstart
- Sikrer at deltaker forstår rammene og er innstilt på å delta

:::warning[Vær oppmerksom]
Dersom det framkommer opplysninger som tilsier at AFT ikke er hensiktsmessig,
kontaktes Nav-veileder for å avtale veien videre — før oppstart.
:::

## Oppstartsfasen

### Inntakssamtale

Jobbkonsulent kaller inn deltaker til inntakssamtale og melder avtalt startdato
til avdelingsleder, som registrerer oppstart i Navs systemer.

De første samtalene handler om å **bli kjent, bygge tillit og legge grunnlaget
for et felles prosjekt**. Deltaker får blant annet informasjon om:

- Rettigheter og klageadgang
- Taushetsplikt og personvern
- Rammer, forventninger og rolleavklaring
- Samarbeid med Nav

Jobbkonsulent tilpasser oppstarten etter deltakers behov og kan spre informasjonen
over flere samtaler. En god start handler om mer enn registrering og formaliteter
— det handler om å vekke nysgjerrighet og bygge motivasjon.

### Oppstartsamtale med Nav

Som hovedregel gjennomføres en oppstartsamtale mellom Nav-veileder, deltaker
og jobbkonsulent innen fire uker. Jobbkonsulent tar initiativ til å avtale
tidspunkt kort etter inntak.

I samtalen gjøres nødvendige avklaringer rundt bestilling og mål for
tiltaksperioden. Tett dialog med Nav fra start er viktig for felles forståelse
av situasjon og mål.

## Kjernehandlinger

| Når | Hva |
|---|---|
| Bestilling mottas | Bekreft mottak, registrer, tildel jobbkonsulent |
| I ventetid | Forhåndssamtale med deltaker |
| Oppstart | Inntakssamtale — bli kjent, informer om rammer |
| Innen 4 uker | Oppstartsamtale med Nav-veileder og deltaker |
| Innen 4 uker | Første versjon av plan utarbeides |

## Fallgruver

- Å samle inn informasjon før du har bygget relasjon
- Å la egne fordommer styre hva som «virker realistisk» for deltaker
- Å starte som en utspørring i stedet for en dialog
- Å avslutte møter uten konkret handlingsplan eller neste steg

## Refleksjonsspørsmål

- Har deltaker reelt forstått hva AFT innebærer — ikke bare nikket?
- Har jeg forstått hva deltaker faktisk vil?
- Er valgene reelle, eller har jeg snevret dem inn?
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-1-innledende-kontakt.md
git commit -m "docs: skriv fase 1 — innledende kontakt"
```

---

## Task 7: fase-2-yrkeskartlegging.md

**Files:**
- Create: `docs/tiltakslopet/fase-2-yrkeskartlegging.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.2, Løsningsbeskrivelse kap. 4a, verktøytabell (s. 11–12)

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 2: Yrkeskartlegging"
description: Helhetlig kartlegging av deltakers ressurser og situasjon, karriereveiledning og utarbeidelse av yrkesmål — grunnlaget for plan og videre tiltaksløp.
sidebar_label: "Fase 2: Yrkeskartlegging"
sidebar_position: 3
tags: [innføring]
---

# Fase 2: Yrkeskartlegging

**SE-trinn 2 — Yrkeskartlegging og karriereplanlegging**

Formålet er å identifisere deltakers ønsker, preferanser, ferdigheter, ressurser,
mestringserfaringer og bistandsbehov — som grunnlag for jobbmatch, plan og
videre tiltaksløp.

Kartlegging og karriereveiledning er en **integrert og kontinuerlig prosess**
gjennom hele tiltaket. De to henger tett sammen: kartleggingen informerer
karriereveiledningen, og ny innsikt fra utprøving justerer begge fortløpende.

## Kartlegging som relasjonsbygging

Vi starter alltid der deltaker er. Samtalen er på deltakers premisser — de
styrer selv hva de ønsker å dele.

Grunnverdiene i MI — partnerskap, aksept, medfølelse og nysgjerrighet — styrer
gjennomføringen. Noen i målgruppen har negative erfaringer med hjelpeapparatet.
Trygghet, forutsigbarhet og valgfrihet er særlig viktig. Kartleggingsprosessen
skal være meningsfull og brukerstyrt — ikke en utspørring.

## Hva kartlegger vi?

Vi er interessert i **sammenhengen mellom person og situasjon** — ikke bare
diagnoser eller arbeidshistorikk alene.

- Arbeids- og aktivitetshistorikk, inkludert mestringsopplevelser
- Helse og funksjon i et funksjonsorientert perspektiv
- Økonomi, gjeld og forsørgeransvar som belastningsfaktorer
- Nettverk, sosiale relasjoner og bosituasjon
- Mestring og ressurser — hva gir energi, hva er deltaker flink til
- Motivasjon og mål — hvor er deltaker i endringsprosessen
- Tidligere erfaringer med hjelpeapparatet

:::warning[Vær oppmerksom]
Kartleggingen er ikke en test. Hent ikke inn informasjon «for sikkerhets skyld»
— kun det som er relevant for arbeidsforholdet og tiltaksløpet.
Helsetilstand kartlegges kun i den grad det har relevans for arbeid, og
videreformidles bare med deltakers samtykke.
:::

## Karriereveiledning

Karriereveiledning er forankret i Nasjonalt kvalitetsrammeverk fra HK-dir.
Målet er at deltaker blir bedre i stand til å håndtere overganger og ta
meningsfulle valg knyttet til arbeid og utdanning.

Vi bruker **Karriereverktøy** (RIASEC) som primærplattform — en anerkjent plattform
for karrierelæring og utforsking av interesser og yrker. Resultatene kobles til
arbeidsmarkedskunnskap og videreutvikles gjennom utprøving.

**Tre nøkkelspørsmål** (etter Leach, 2002):
1. Hva er deltakers generelle mål for arbeid?
2. Hva slags jobb og arbeidsmiljø ønsker deltaker — og hva er realistisk?
3. Hva slags bistand trenger deltaker for å finne, få og beholde lønnet arbeid?

## Kartlegging av ferdigheter og kompetanse

Parallelt kartlegger vi formell og uformell kompetanse: utdanning, fagbrev, kurs
og arbeidserfaring — inkludert kompetanse som ikke er formelt godkjent.

Vi kartlegger også **grunnleggende ferdigheter** (lesing, skriving, regning,
digitale og muntlige ferdigheter). Dette er et sårbart tema, og vi legger vekt
på en praksisnær tilnærming fremfor formelle tester.

Der kartleggingen avdekker kompetanse som kan gi uttelling i en
realkompetansevurdering, tilrettelegger jobbkonsulent for dette i samarbeid
med Rogaland fylkeskommune.

## Kartlegging gjennom aktivitet

I tråd med SE-prinsippet søker vi å få deltaker raskt i arbeidspraksis.
Den viktigste informasjonen om ressurser og utviklingsmuligheter får vi gjennom
**systematiske observasjoner i reelle arbeidssituasjoner** — fortrinnsvis i
ordinært arbeidsliv.

Kartlegging er dynamisk og pågående — ikke et engangsskjema. Yrkesprofilen er
et levende dokument som deltaker eier selv.

## Verktøy vi bruker

| Verktøy | Formål |
|---|---|
| Karriereverktøy / RIASEC | Interessekartlegging, yrkesutforsking |
| Karrierestyrker | Myke ferdigheter og jobbfastholdelse |
| ASIAS | Karriereveiledning tilpasset autismespekteret |
| JobPics | Bildebasert RIASEC — for deltakere med lite yrkeserfaring eller lese-/skrivevansker |
| SCI (Structured Career Interview) | Strukturert karrieresamtale |
| Livshjulet | Kartlegge livssituasjon og belastningsfaktorer |
| Systematisk observasjon | Strukturert observasjon i arbeidssituasjoner |

## Fallgruver

- Bruke for lang tid på kontorbasert kartlegging før noe skjer i ordinært arbeidsliv
- La kartleggingsskjemaet bli målet i seg selv
- Samle subjektiv eller stigmatiserende informasjon om deltaker
- La fagsjargong dominere — informasjon skal være åpen, konkret og forståelig

## Overgang til neste fase

Kartleggingen er ferdig når deltaker har oversikt over egne forutsetninger og
kjenner valgmulighetene sine. Da er det tid for å finne en konkret jobb eller
utdanningsvei (fase 3) — parallelt med at arbeidstrening starter.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-2-yrkeskartlegging.md
git commit -m "docs: skriv fase 2 — yrkeskartlegging"
```

---

## Task 8: fase-2b-intern-arena.md

**Files:**
- Create: `docs/tiltakslopet/fase-2b-intern-arena.md`

**Kilde:** Løsningsbeskrivelse kap. 4b, PPTX slide 13–14

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 2.5: Intern arena"
description: Når og hvorfor intern arbeidstrening er aktuelt, hvilken risiko det medfører, og hva som kreves for å bruke det faglig forsvarlig.
sidebar_label: "Fase 2.5: Intern arena"
sidebar_position: 4
tags: [innføring]
---

# Fase 2.5: Intern arena

Intern arena er **ikke et eget SE-trinn** — det er en SPS-spesifikk tilpasning
for tilfeller der ekstern plassering ikke er et realistisk første steg.

:::warning[Vær oppmerksom]
Intern arena er et midlertidig virkemiddel, ikke en destinasjon. Bruk av intern
arena skal alltid begrunnes i deltakers plan med tydelig formål og tidsramme.
:::

## Hva er intern arena?

SPS tilbyr tilrettelagte arbeidstreningsarenaer med tett oppfølging:
kantine, sjåfør/transport, pakkeoppdrag, renhold, søm- og tekstilarbeid,
treproduksjon og mekanisk industri.

Arenaene er primært VTA-arbeidsplasser. Bredden gjør det mulig å matche
utprøvingen med deltakers interesser og yrkesmål.

## Når er intern arena aktuelt?

Intern arena brukes hovedsakelig når vi har behov for konkret kartlegging
eller avklaring som ikke lar seg gjøre gjennom samtaler alene:

- Avdekke tilretteleggingsbehov som er vanskelig å vurdere på kontoret
- Kartlegge grunnleggende arbeidslivsferdigheter (oppmøte, samhandling, tempo)
- Bygge tilstrekkelig trygghet til at deltaker kan ta steget ut i ordinært arbeidsliv
- For noen er det et nødvendig første steg — å erfare at man mestrer oppmøte
  og arbeidsoppgaver, før man kjenner seg klar for ekstern praksis

## Hva kreves?

- **Tydelig formål** — hva skal vi avdekke eller oppnå?
- **Tidsavgrensning** — konkret sluttdato eller milepæl mot ekstern arena
- **Forankring i planen** — Nav skal forstå hvorfor intern arena er valgt
- **Aktiv fremdrift** — jobbkonsulent har ansvar for å holde progresjonen
  mot ordinær arbeidstrening levende gjennom hele perioden

Arbeidsoppgavene på intern arena skal være relevante for deltakers yrkesmål.
Der det er aktuelt, tas utgangspunkt i kompetansemål fra relevante læreplaner,
slik at erfaringen kan bygge mot fagbrev eller realkompetansevurdering.

## Risiko vi må være bevisste på

Intern arena kan bli en **komfortsone** — for deltaker, for jobbkonsulent og
for organisasjonen. Forskning gir liten støtte til intern arbeidstrening som
virkemiddel for overgang til ordinært arbeidsliv.

- Jo lengre intern periode, desto vanskeligere kan overgangen bli
- Forlengelse utover opprinnelig avtalt periode krever tungtveiende grunner
- Dersom deltaker ikke viser progresjon mot ekstern arbeidstrening, tas dette
  opp med Nav for å vurdere om videre tiltaksdeltakelse er hensiktsmessig

:::info
«Place–pray» — plassere internt og håpe på det beste — er ikke akseptabel
praksis. Intern arena er et steg på veien, ikke et svar i seg selv.
:::

## Observasjoner og dokumentasjon

Vi følger de samme prinsippene for kartlegging og observasjon som beskrevet
i fase 2. Erfaringer dokumenteres løpende og brukes aktivt i:
- Planarbeid og dialog med Nav
- Valg av ekstern arbeidsplass og tilrettelegging der
- Vurdering av progresjon og deltakelsesprosent
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-2b-intern-arena.md
git commit -m "docs: skriv fase 2.5 — intern arena"
```

---

## Task 9: fase-3-finne-jobb.md

**Files:**
- Create: `docs/tiltakslopet/fase-3-finne-jobb.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.3, Løsningsbeskrivelse kap. 4d

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 3: Finne jobb"
description: Jobbmatch, jobbutvikling og bistand til å finne passende arbeidstrening i ordinære virksomheter — med mål om ansettelse.
sidebar_label: "Fase 3: Finne jobb"
sidebar_position: 5
tags: [innføring]
---

# Fase 3: Finne jobb

**SE-trinn 3 — Finne en passende jobb**

Formålet er å etablere en **jobbmatch** mellom deltakers ferdigheter, ønsker og
bistandsbehov, og arbeidsplassens krav og arbeidsgivers behov.

SE-prosessen er forskjellig fra ordinær rekruttering: vi leter etter rett jobb
til en spesifikk person — ikke rett person til en gitt stilling.

## Jobbutvikling parallelt med kartlegging

I tråd med SE-prinsippet driver vi **jobbutvikling parallelt med kartlegging**
og karriereveiledning. Vi venter ikke til kartleggingen er «ferdig» — vi søker
etter relevante arbeidsmuligheter fra starten.

Jobbkonsulent oppsøker og etablerer dialog med arbeidsgivere, og jobber aktivt
med dem for å skape muligheter for arbeidstrening som kan lede til ansettelse.

## Jobbmatch

En god jobbmatch er avgjørende for varig tilknytning. Vi ser etter arbeidsplasser
der deltaker kan stå i arbeid over tid — ikke bare en midlertidig praksisplass.

Sentrale vurderinger:
- Er arbeidsoppgavene i tråd med deltakers yrkesmål?
- Er arbeidsplassen tilgjengelig? Har deltaker behov for tilrettelegging?
- Passer deltaker inn i arbeidsmiljøet?
- Hvilke utviklingsmuligheter finnes?

## Metoder for å finne jobb

| Type | Eksempler |
|---|---|
| **Formelle** | Stillingsannonser, Nav stillingsregister, CV-arbeid, intervjutrening |
| **Uformelle** | Nettverk, referanser, jobbsnekring, direkte henvendelse |

Begge er nødvendige. Hvilken vekt de skal ha, avhenger av deltaker,
arbeidsmarkedet og den konkrete situasjonen.

## Jobbsnekring (Customized Employment)

Der det er hensiktsmessig, bruker vi elementer fra Customized Employment (CE):
vi skreddersyr arbeidsoppgaver eller utvikler nye roller basert på deltakers
styrker og virksomhetens behov. Dette kan senke terskelen for inkludering og
skape muligheter som ikke finnes i ordinære stillingsutlysninger.

:::info
Jobbsnekring gir skreddersydde løsninger, men bær en risiko: oppgavene som
velges kan være enkle og miste relevans over tid. For deltakere med formelle
kvalifikasjoner kan jobbsnekring snevre inn snarere enn utvide. Vurder nøye.
:::

## Jobbsøkerkompetanse

Målgruppen stiller ofte med et annet utgangspunkt enn ordinære jobbsøkere.
Formidling skjer som hovedregel gjennom arbeidspraksis og tett samarbeid med
arbeidsgiver — men det er likevel viktig at deltaker deltar aktivt:

- CV-arbeid og intervjutrening
- Finne og vurdere aktuelle stillingsannonser
- Gradvis trene på ordinære søknads- og ansettelsesprosesser

## Avtaler og informasjonsplikt

Ved oppstart i arbeidstrening inngås en **skriftlig avtale** mellom deltaker,
arbeidsgiver og SPS. Avtalen skal angi formål, opplæring, oppfølging, arbeidstid,
arbeidsoppgaver, varighet og eventuelle tilretteleggingsbehov, samt bestemmelser
om taushetsplikt og personvern.

:::note[Regelverksforankring]
Jobbkonsulent opplyser arbeidsgiver om at deltakere i arbeidstrening anses
som arbeidstakere etter lov om yrkesskadeforsikring. Det skal dokumenteres at
informasjonen er gitt.
:::

## Fallgruver

- Fokusere kun på deltakers behov uten å forstå arbeidsgivers
- Overlate deltaker passivt til prosessen — deltaker skal være aktiv
- Henvende seg til arbeidsgivere kun når man har en deltaker som trenger plass
- Love for mye overfor arbeidsgiver — det undergraver tilliten over tid
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-3-finne-jobb.md
git commit -m "docs: skriv fase 3 — finne jobb"
```

---

## Task 10: fase-4-arbeidsgiver.md

**Files:**
- Create: `docs/tiltakslopet/fase-4-arbeidsgiver.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.4, Løsningsbeskrivelse kap. 4d–4e

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 4: Samarbeid med arbeidsgiver"
description: Etablere og vedlikeholde profesjonelle relasjoner med arbeidsgivere — jobbutvikling, jobbanalyse og aktiv relasjonsbygging for å skape varige arbeidsforhold.
sidebar_label: "Fase 4: Samarbeid med arbeidsgiver"
sidebar_position: 6
tags: [innføring]
---

# Fase 4: Samarbeid med arbeidsgiver

**SE-trinn 4 — Samarbeid med arbeidsgivere**

Formålet er å etablere og vedlikeholde profesjonelle relasjoner med arbeidsgivere
som gjør at SPS har et reelt arbeidsmarked å koble deltakere til — og at
arbeidsgivere får en god opplevelse av samarbeidet.

## Kjerneprinsipp: To kunder

Arbeidsgivere ansetter ikke gjennom SE av samvittighet alene. Vi må vise at
rekrutteringsprosessen gir **verdi også fra arbeidsgivers perspektiv**.

Det betyr at vi møter arbeidsgiver som en likeverdig partner — vi forstår
bedriftens prosesser, behov og krav, og vi kommuniserer på deres premisser.

## Hva arbeidsgiver får

Dette skal kommuniseres tydelig i all kontakt med arbeidsgivere:

- Gratis, konfidensiell rekrutteringstjeneste
- Kvalifisert formidling: kun deltakere som faktisk kan utføre arbeidet
- Vedvarende bistand fra erfaren jobbkonsulent
- Råd om finansiering, lønnstilskudd, tilretteleggingsplikt og hjelpemidler
- Koordinering og bistand til opplæring
- Styrking av bedriftens profil og samfunnsansvar

## Jobbanalyse

Når en konkret stilling er identifisert, gjøres en jobbanalyse:

- Hvilke arbeidsoppgaver kreves? Oppgaveanalyse for komplekse oppgaver
- Fysiske, kognitive og emosjonelle krav til stillingen
- Produktivitets- og kvalitetskrav
- Arbeidsmiljø og bedriftskultur
- Mulighet for naturlig bistand fra kolleger
- Tilretteleggingsmuligheter og eventuelle hjelpemidler
- Transport og praktiske forhold

## Aktiv relasjonsbygging

SPS har gjennom mange år bygget et bredt nettverk av virksomheter. Jobbutvikling
fortsetter etter at deltaker er plassert — jobbkonsulent arbeider løpende med
å tilpasse arbeidsoppgaver og utvikle ansettelsesmuligheter.

:::tip[Praktisk tips]
Bruk forretningsspråk overfor arbeidsgivere. Unngå fagsjargong som
«yrkeskartlegging», «naturlig bistand» og «jobbmatch» — disse begrepene
er meningsfulle internt, men kan virke fremmede i en arbeidsgiversamtale.
:::

## Håndtere innvendinger

Arbeidsgivere kan ha forbehold mot SE. Disse handler ofte om manglende kunnskap
snarere enn motvilje. Forberedt og profesjonell respons kan endre holdninger.

Husk å nevne at bistanden gjelder kolleger og ledere — ikke bare deltaker.

## Virkemidler du kan informere om

- **Lønnstilskudd** — kan redusere risiko for arbeidsgiver i en oppstartsfase
- **Tilretteleggingsplikt** (aml. § 4-6) — arbeidsgivers plikt og dine muligheter
- **Hjelpemidler** — via Nav Hjelpemiddelsentral
- **IA-samarbeid** — for virksomheter med IA-avtale

## Fallgruver

- Henvende seg til arbeidsgivere kun når man trenger en plass til en bestemt deltaker
- Overdrive hva SPS kan tilby — det undergraver tilliten over tid
- Betrakte arbeidsgiver kun som mottaker, ikke som partner
- Komme uanmeldt på arbeidsplassen — respekter bedriften
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-4-arbeidsgiver.md
git commit -m "docs: skriv fase 4 — samarbeid med arbeidsgiver"
```

---

## Task 11: fase-5-oppfolging.md

**Files:**
- Create: `docs/tiltakslopet/fase-5-oppfolging.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.5, Løsningsbeskrivelse kap. 4e–4f

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: "Fase 5: Opplæring og oppfølging"
description: Tett oppfølging i arbeidstrening, gradvis overføring av ansvar, og oppfølging etter ansettelse — kjernen i SE-metoden.
sidebar_label: "Fase 5: Opplæring og oppfølging"
sidebar_position: 7
tags: [innføring]
---

# Fase 5: Opplæring og oppfølging

**SE-trinn 5 — Opplæring og trening på og/eller utenom arbeidsplassen**

Tett og god oppfølging etter plassering hos arbeidsgiver er i kjernen av vår
tilnærming. Det er her den reelle læringen, tilpasningen og utviklingen skjer.

«Place-pray» — plassere deltaker og håpe på det beste — er dårlig praksis.
**Oppfølgingsansvaret ligger alltid hos SPS og skal ikke overføres til arbeidsgiver.**

## Fem faser i oppfølgingen

| Fase | Innhold |
|---|---|
| **1. Introduksjon** | Deltaker introduseres for kolleger og ledere. Tydelige opplæringsbehov kartlegges. Mentorordning kan settes opp. |
| **2. Lære arbeidet** | Oppgaveanalyse. Opplæring gjennom bedriftens egne prosedyrer. Observasjon er jobbkonsulentens viktigste verktøy. |
| **3. Stabilisering** | Deltaker mestrer oppgavene. Fokus skifter til videreutvikling og relasjoner. Tidlig identifisering av gryende problemer. |
| **4. Nedtrapping** | Ekstern bistand reduseres gradvis. Naturlig bistand fra kolleger styrkes. |
| **5. Oppfølging** | Tilgjengelig ved behov. Jevnlig kontakt opprettholdes. |

## Tett oppfølging i praksis

Tett oppfølging handler om hyppighet, form, kontekst og kvalitet. Jobbkonsulent:

- Er tilgjengelig der deltaker befinner seg
- Gjør seg kjent med arbeidsplassen — arbeidsoppgaver, miljø og bedriftskultur
- Bistår med opplæring i nødvendige arbeidsferdigheter
- Identifiserer behov for tilrettelegging og tilpasning
- Tilrettelegger for lærekontrakt der det er aktuelt

Tilrettelegging av arbeidsoppgaver, arbeidstid og arbeidssituasjon gjøres i
samråd med arbeidsgiver og deltaker — i tråd med **GAP-modellen**.

## Oppfølging av arbeidsgiver

Jobbkonsulent bygger relasjon med arbeidsgiver gjennom faste kontaktpunkter
og forventningsavklaringer. Arbeidsgiver deltar i samarbeidet, men har ikke
veilederansvar.

Jobbkonsulent bistår arbeidsgiver med å støtte deltaker og bidrar til sosial
inkludering på arbeidsplassen. Jobbutvikling fortsetter etter oppstart —
jobbkonsulent arbeider med arbeidsgiver om tilpasning av oppgaver og utvikling
av ansettelsesmuligheter.

## Gradvis overføring av ansvar

Målet er at deltaker gradvis overtar mer ansvar for egen arbeidssituasjon.
Oppfølgingen skal styrke selvstendighet — ikke skape avhengighet.

:::tip[Praktisk tips]
«Den beste støtten er usynlig.» Vurder alltid om naturlig bistand fra
kolleger kan dekke behovet — og om veiledning best gis utenfor arbeidsplassen.
Ikke stol blindt på naturlig bistand ved komplekse behov; det kan bli en
urimelig belastning for kolleger.
:::

## Oppfølging ved lærekontrakt

Deltakere som inngår lærekontrakt eller blir lærekandidater i ordinært arbeidsliv,
får tett og tilpasset oppfølging i en overgangsperiode — i samarbeid med
lærebedrift, fylkeskommune og opplæringskontor.

Vår rolle er å bistå i overgangen — ikke å overta ansvar fra lærebedrift
eller fylkeskommune. Vi avklarer forventninger i forkant og tilpasser
oppfølgingen til det deltaker allerede mottar, slik at innsatsen utfyller
heller enn overlapper.

## Oppfølging etter ansettelse

Ved overgang til ordinært arbeid vurderes behovet for videre oppfølging i
en overgangsperiode — i samarbeid med Nav, arbeidsgiver og deltaker. Formålet
er å sikre stabil tilknytning og støtte i kritiske faser.

Oppfølgingen forankres i planen og dokumenteres, slik at Nav har grunnlag for
å vurdere deltakelsesgrad og eventuell avslutning av tiltaket.

## Risiko ved jobbkonsulentens tilstedeværelse

Tilstedeværelse på arbeidsplassen kan stigmatisere deltaker eller skape
forvirring blant kolleger. Vurder alltid:
- Kan naturlig bistand dekke behovet?
- Er veiledning bedre gitt utenfor arbeidsplassen?
- Kommer jeg av nødvendighet — eller av vane?

## Fallgruver

- Gjøre ting for deltaker som hen kan gjøre selv
- Komme uanmeldt på arbeidsplassen
- Forveksle opplæring med terapi — opplæring er ikke terapi
- Gi råd direkte når et spørsmål ville la deltaker finne svaret selv
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/fase-5-oppfolging.md
git commit -m "docs: skriv fase 5 — opplæring og oppfølging"
```

---

## Task 12: tiltakslopet/avslutning.md

**Files:**
- Create: `docs/tiltakslopet/avslutning.md`

**Kilde:** Løsningsbeskrivelse kap. 5.2 og 5.3, NAV kravspesifikasjon kap. 5

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Avslutning av tiltaket
description: Når og hvordan AFT avsluttes — overgang til arbeid, utdanning eller annen hensiktsmessig aktivitet, og sluttrapport til Nav.
sidebar_label: Avslutning
sidebar_position: 8
tags: [innføring]
---

# Avslutning av tiltaket

Avslutning av AFT kan skje på ulike måter, avhengig av deltakers utvikling
og situasjon.

## Planmessig avslutning

Den planmessige avslutningen skjer når:
- Deltaker har fått ordinært arbeid eller inngått lærekontrakt
- Deltaker har startet i utdanning som gir formell kompetanse
- Maksimal varighet er nådd (normalt 1 år, inntil 3 år ved lærekontrakt)

Jobbkonsulent kontakter Nav-veileder i god tid før sluttdato for å vurdere
behovet for videre oppfølging etter avsluttet tiltak.

## Avslutning uten planmessig mål

Dersom AFT ikke lenger er hensiktsmessig for en deltaker — fordi tiltaket
ikke bidrar til progresjon mot arbeid eller utdanning — skal Nav varsles
**snarest**. Nav vurderer om tiltaket skal avsluttes.

Dette er ikke et nederlag. For noen deltakere er andre typer bistand mer
riktig på det aktuelle tidspunktet.

## Sluttrapport

Ved avslutning sendes sluttrapport til Nav-veileder på Navs mal. Sluttrapporten
skal dokumentere:
- Deltakers utvikling gjennom tiltaksperioden
- Aktiviteter og resultater
- Begrunnelse for utfallet
- Eventuelle anbefalinger for videre oppfølging

:::note[Regelverksforankring]
Sluttrapport ved endt tiltak er nå tatt inn i tiltaksforskriften (høringsnotat
27.06.2025). Det er ikke et valgfritt supplement — det er en del av leveransen.
:::

## Overgang til arbeid

Ved overgang til ordinært arbeid vurderes behovet for videre oppfølging i
en overgangsperiode. Se [Fase 5: Oppfølging etter ansettelse](./fase-5-oppfolging.md).

Tilskuddssats og deltakelse settes til 50 % ved ansettelse, lærekontrakt
eller opplæringskontrakt.

## Registrering

Når deltaker og SPS er enige om oppstartsdato for arbeid eller utdanning,
registreres avslutning i Navs systemer på den måten Nav til enhver tid angir.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/tiltakslopet/avslutning.md
git commit -m "docs: skriv side om avslutning av tiltaket"
```

---

## Task 13: plan/utarbeide-plan.md

**Files:**
- Create: `docs/plan/index.md` (intro for planseksjonen)
- Create: `docs/plan/utarbeide-plan.md`

**Kilde:** Løsningsbeskrivelse kap. 5.1 og 5.3, NAV kravspesifikasjon kap. 5

- [ ] **Steg 1: Skriv plan/index.md**

```mdx
---
title: Plan for tiltaksgjennomføring
description: Planen er bindeleddet til Nav og jobbkonsulentens viktigste styringsverktøy gjennom hele tiltaksløpet.
sidebar_label: Om planen
sidebar_position: 1
tags: [innføring]
---

# Plan for tiltaksgjennomføring

Planen er **det sentrale dokumentet** i samarbeidet mellom deltaker, SPS og Nav.
Den har to funksjoner:

1. **For deltaker og jobbkonsulent** — sikrer kontinuitet og retning i tiltaket
2. **For Nav** — grunnlag for å vurdere deltakelsesgrad, behov for justeringer
   og eventuell forlengelse

En god plan skal til enhver tid kunne svare på tre spørsmål:
- Hva er målet med tiltaksløpet?
- Hvilke aktiviteter gjennomføres nå for å nå dette målet?
- Hva er endret siden forrige vurdering — og hvorfor?

Se undersidene for detaljer om utarbeidelse, oppdatering og forlengelse.
```

- [ ] **Steg 2: Skriv plan/utarbeide-plan.md**

```mdx
---
title: Utarbeide plan
description: Hvordan lage en god plan for tiltaksgjennomføring — eierskap, SMART-mål og praktisk struktur.
sidebar_label: Utarbeide plan
sidebar_position: 2
tags: [innføring]
---

# Utarbeide plan

Første versjon av planen utarbeides i løpet av de første fire ukene,
i tett samarbeid med deltaker.

## Deltakers eierskap

Deltaker skal ha **reelt eierskap** til planen — ikke være en passiv mottaker.
Det betyr at:

- Deltaker er med på å definere yrkesmål, delmål og aktiviteter
- Planen er skrevet på et språk deltaker forstår
- Deltaker kan gjenkjenne seg selv og sine ønsker i planen
- Planen ikke er et Nav-dokument SPS fyller ut — det er et felles prosjekt

## Innhold i planen

Navs mal for plan benyttes. En god plan inneholder:

- **Yrkesmål** — konkret og realistisk, forankret i kartlegging og karriereveiledning
- **Delmål** — steg på veien mot yrkesmålet
- **Aktiviteter** — hva som gjøres, av hvem, og når
- **Tidsfrister og ansvarsfordeling** — tydelig og konkret
- **Begrunnelse for eventuell intern arena** — dersom relevant
- **Status og progresjon** — brukes aktivt i oppfølgingssamtaler

## SMART-mål i planarbeidet

Gode mål er:

| Bokstav | Kriterium | Eksempel |
|---|---|---|
| **S** — Spesifikt | Konkret og avgrenset | «Jobbpraksis i bakeri» ikke «arbeid med mat» |
| **M** — Målbart | Kan vi se om vi er i rute? | «3 dager/uke» ikke «noe praksis» |
| **A** — Attraktivt | Deltaker vil dette | Forankret i interesser og yrkesmål |
| **R** — Realistisk | Oppnåelig gitt ressurser og tid | Tilpasset deltakers situasjon |
| **T** — Tidsavgrenset | Konkret frist | «Innen uke 8» |

:::tip[Praktisk tips]
Kombiner kortsiktige, oppnåelige delmål med mer langsiktige yrkesmål. Kortsiktige
mål gir synlig progresjon og mestring; langsiktige mål holder retningen.
:::

## Oppstartsamtalen

Første plan presenteres i oppstartsamtalen med Nav-veileder innen fire uker.
Jobbkonsulent tar initiativ til å avtale dette møtet kort etter inntak.

Planen er det sentrale innholdet i samtalen — bestilling og målsetting
gjennomgås og justeres om nødvendig.
```

- [ ] **Steg 3: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 4: Commit**

```powershell
git add docs/plan/
git commit -m "docs: skriv planseksjon — intro og utarbeidelse"
```

---

## Task 14: plan/oppdatere-og-dele.md og plan/forlengelse-og-avslutning.md

**Files:**
- Create: `docs/plan/oppdatere-og-dele.md`
- Create: `docs/plan/forlengelse-og-avslutning.md`

**Kilde:** Løsningsbeskrivelse kap. 5.2–5.3, NAV kravspesifikasjon kap. 5

- [ ] **Steg 1: Skriv plan/oppdatere-og-dele.md**

```mdx
---
title: Oppdatere og dele med Nav
description: Syklusen for planoppdatering, når planen sendes til Nav og hva som er viktig å dokumentere.
sidebar_label: Oppdatere og dele
sidebar_position: 3
tags: [innføring]
---

# Oppdatere og dele med Nav

Planen er et levende dokument — ikke noe som lages én gang og arkiveres.

## Syklusen

| Tidspunkt | Handling |
|---|---|
| Innen 4 uker | Første plan sendes Nav (presenteres i oppstartsamtalen) |
| Hver 3. måned | Oppdatert plan sendes Nav i god tid før Nav-veileders vurdering |
| Ved endringer | Planen oppdateres ved fullførte aktiviteter, nye delmål eller endret situasjon |

Planen sendes til Nav **i forkant** av 3-månedersfristene, slik at Nav-veileder
har tilstrekkelig tid til vurdering.

## Hva Nav bruker planen til

Nav bruker planen som grunnlag for å vurdere:
- Deltakers status, progresjon og utvikling
- Behov for justering av deltakelsesprosent
- Eventuell forlengelse av tiltaksperioden

:::note
Nav justerer deltakelsesprosenten hver tredje måned basert på dokumentasjon
fra jobbkonsulent, primært gjennom planen.
:::

## Hva planen bør dokumentere

For å gi Nav et godt beslutningsgrunnlag bør avsnittet om status og progresjon
inkludere:

- Hva har skjedd siden forrige plan?
- Hvilke mål er nådd, hvilke er justert og hvorfor?
- Hva er neste steg?
- Er deltakelsesprosenten fortsatt riktig — og hva begrunner en eventuell justering?

## Fraværsoppfølging og varsling

Jobbkonsulent registrerer fravær løpende. Ved umeldt fravær kontaktes deltaker
samme dag for å avklare årsaken.

Ugyldig fravær eller uteblivelse varsles Nav innen **to virkedager**.

Når deltaker er i praksis hos arbeidsgiver, melder deltaker fravær til
arbeidsgiver etter arbeidsplassens rutiner — i tillegg til å informere
jobbkonsulent.
```

- [ ] **Steg 2: Skriv plan/forlengelse-og-avslutning.md**

```mdx
---
title: Forlengelse og avslutning
description: Vilkår for forlengelse av AFT, hva som kreves av dokumentasjon, og jobbkonsulentens ansvar ved avslutning.
sidebar_label: Forlengelse og avslutning
sidebar_position: 4
tags: [innføring]
---

# Forlengelse og avslutning

## Forlengelse

AFT kan vare inntil ett år, med mulighet for forlengelse i ytterligere ett år.
Deltakere som gjennomfører opplæring med sikte på formell kompetanse, kan
få forlenget varigheten med ytterligere ett år (maks 3 år totalt).

**Forlengelse er et faglig virkemiddel — ikke en rettighet.**

For å søke forlengelse:
1. Jobbkonsulent kontakter Nav-veileder i forkant av sluttdato
2. Planen dokumenterer utvikling, mål og begrunnelse for forlengelsen
3. Eventuelle endringer i bestilling eller formål skal fremgå av planen
4. Nav godkjenner forlengelsen

:::warning[Vær oppmerksom]
Forlengelse er bare aktuelt dersom videre tiltaksdeltakelse aktivt bidrar til
progresjon mot arbeid eller utdanning. Dersom deltaker er i stabil jobb med
minimal bistand, er avslutning mer riktig enn forlengelse.
:::

## Vurdering av hensiktsmessighet

Dersom jobbkonsulent vurderer at AFT ikke lenger er hensiktsmessig for en
deltaker — fordi progresjon uteblir eller situasjonen har endret seg — skal
Nav varsles snarest.

Jobbkonsulent tar raskt kontakt med Nav-veileder og holder tett dialog om
videre tiltaksdeltakelse er hensiktsmessig. Vurderingen baseres primært på
deltakers utvikling og måloppnåelse, ikke på fraværet alene.

## Sluttrapport

Ved avslutning sendes sluttrapport til Nav-veileder på Navs mal.
Se [Avslutning av tiltaket](../tiltakslopet/avslutning.md) for detaljer.
```

- [ ] **Steg 3: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 4: Commit**

```powershell
git add docs/plan/oppdatere-og-dele.md docs/plan/forlengelse-og-avslutning.md
git commit -m "docs: skriv planseksjon — oppdatering, forlengelse og avslutning"
```

---

## Task 15: metodikk/supported-employment.md

**Files:**
- Create: `docs/metodikk/supported-employment.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 1–4 og 7

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Supported Employment
description: Det teoretiske og historiske grunnlaget for SE — EUSEs femtrinnsmodell, place-train-maintain og forholdet til SPS' praksis.
sidebar_label: Supported Employment
sidebar_position: 1
tags: [innføring, fordypning]
---

# Supported Employment

Supported Employment (SE) er det **strukturelle rammeverket for hele
tiltaksløpet hos SPS**. Fasene i tiltaksforløpet er direkte oversettelser av
EUSEs femtrinnsmodell — SE er ikke én metodikk blant flere, det er
arbeidsgangens grunnleggende logikk.

## Definisjon

EUSE definerer SE som: *å gi bistand til mennesker med funksjonsnedsettelse
eller fra andre marginaliserte grupper, slik at de kan få og beholde lønnet
arbeid i det ordinære arbeidsmarkedet.*

## Tre grunnsteiner

For at noe er SE, må tre kriterier oppfylles:

1. **Lønnet arbeid** — arbeidstaker mottar lønn etter gjeldende sats for
   arbeidet som utføres. Øvrige vilkår er likt som for andre ansatte.
2. **Ordinært arbeidsmarked** — målet er ordinær ansettelse i privat eller
   offentlig sektor.
3. **Tidsubegrenset bistand** — bistanden er individuelt tilpasset og
   tilgjengelig så lenge det er behov — overfor arbeidstaker, arbeidsgiver
   og kolleger — før, under og etter ansettelse.

Tiltak som ikke oppfyller alle tre, er ikke SE. Arbeidspraksis i skjermet
virksomhet, VTA og frivillig arbeid *kan* være nyttige verktøy underveis,
men er ikke SE i seg selv.

## Historikk

SE oppsto i Nord-Amerika på 1970-tallet, basert på erkjennelsen om at
mennesker med store lærevansker kunne utføre komplekse arbeidsoppgaver i
ordinære arbeidsmiljøer — gitt systematisk bistand. Modellen kom til Europa
på slutten av 1980-tallet. EUSE ble etablert i 1993 og har siden utvidet
SE til å omfatte alle med sammensatte bistandsbehov.

## Inntakskriterium

Det er **ett kriterium** for SE: at arbeidssøkeren ønsker bistand til å
få og/eller beholde ordinært arbeid.

*Enhver som ønsker å jobbe, kan jobbe — gitt at nødvendig og hensiktsmessig
bistand er tilgjengelig.* Ingen skal avvises på bakgrunn av antakelser om
arbeidsevne, forhistorie eller forutsetninger.

## Place–train–maintain

Tradisjonell attføring fulgte *train-then-place*: forberedelse i skjermede
omgivelser, deretter plassering. Erfaring viste at dette sjelden førte til
ordinær jobb.

SE snur dette til **place–train–maintain**:

- **Place** — plassering i ordinært arbeidsliv så raskt som hensiktsmessig
- **Train** — opplæring skjer i reell arbeidskontekst
- **Maintain** — bistand fortsetter så lenge det er behov

Konsekvensen: vi unngår å bygge ut lange forberedelsesfaser. Samtidig betyr
ikke *place* tilfeldig plassering — uten yrkeskartlegging og jobbmatch øker
risikoen for dårlig match og mislykket arbeidsforhold.

## Femtrinnsmodellen og SPS

| SE-trinn | SPS-fase |
|---|---|
| 1. Innledende kontakt og samarbeidsavtale | Fase 1: Innledende kontakt |
| 2. Yrkeskartlegging og karriereplanlegging | Fase 2: Yrkeskartlegging |
| 3. Finne en passende jobb | Fase 3: Finne jobb |
| 4. Samarbeid med arbeidsgivere | Fase 4: Samarbeid med arbeidsgiver |
| 5. Opplæring og trening | Fase 5: Opplæring og oppfølging |

Fase 2.5 (intern arena) er SPS' eneste avvik fra ren SE-logikk — et
tidsavgrenset virkemiddel som alltid krever faglig begrunnelse.

## SE i AFT-kontekst

AFT er ikke ren SE — tiltaket har flere virkemidler tilgjengelig enn ren SE
(inkludert intern arbeidstrening og tilrettelagt opplæring). Men det er
**forankret i SE** og skal følge SE-prinsippene.

Tre prinsipper å holde i hodet samtidig:
1. AFT er ikke ren SE — det har flere virkemidler
2. Men det er forankret i SE og følger SE-prinsippene
3. Avvik fra place–train–maintain skal begrunnes faglig

:::info[Fordypning]
For en grundigere innføring, se `knowledge_base/SE_oppsummering_jobbkonsulenter.md`
og `knowledge_base/SE Verktøykasse - av EUSE og SENO.pdf`.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Commit**

```powershell
git add docs/metodikk/supported-employment.md
git commit -m "docs: skriv SE-metodikk — grunnlag, femtrinn og SPS-kontekst"
```

---

## Task 16: metodikk/motiverende-intervju.md

**Files:**
- Create: `docs/metodikk/motiverende-intervju.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2 (MI-avsnitt), `knowledge_base/MI....pdf`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Motiverende intervju
description: MI som primærrammeverk for all veiledning og relasjonsarbeid — grunnverdier, samtaleprinsipper og praktisk bruk i AFT.
sidebar_label: Motiverende intervju (MI)
sidebar_position: 2
tags: [innføring, fordypning]
---

# Motiverende intervju (MI)

Motiverende intervju (MI) er **primærrammeverk for all veiledning og
relasjonsarbeid** hos SPS. Det er ikke en teknikk du bruker i bestemte samtaler
— det er en grunnholdning som preger enhver interaksjon med deltaker.

## Fire grunnverdier (PACE)

| Verdi | Hva det betyr i praksis |
|---|---|
| **Partnerskap** | Samtalen skjer *med* deltaker, ikke *til* deltaker. Vi er sidestilte parter som utforsker sammen. |
| **Aksept** | Vi aksepterer deltaker som den personen de er — inkludert ambivalens og motstand. Ikke det samme som å godkjenne all atferd. |
| **Medfølelse** | Vi handler aktivt i deltakers interesse, ikke vår egen. Medfølelse er ikke medlidenhet. |
| **Nysgjerrighet (Evocation)** | Vi er genuint nysgjerrige på deltakers perspektiv, ressurser og motivasjon — vi henter det frem, vi legger det ikke inn. |

## Ånden i MI

MI-ånden er ikke en teknikk som kan kobles av og på. En jobbkonsulent som
bruker MI-verktøy uten MI-ånden, driver ikke MI.

En trygg relasjon preget av gjensidig tillit og åpen kommunikasjon er
avgjørende for å støtte deltakere gjennom krevende endringsprosesser.

## Ambivalens er normalt

De fleste i målgruppen er ambivalente til endring. Det er ikke motstand —
det er et naturlig og forventet trekk ved all menneskelig endring.

Vår oppgave er ikke å *overvinne* ambivalensen, men å *utforske* den: hva
trekker i retning av endring? Hva holder igjen? Hvem eier denne beslutningen?

:::tip[Praktisk tips]
Når du møter motstand — ta et skritt tilbake. Motstand er ofte et signal om
at vi presser for hardt, eller at relasjonen trenger mer arbeid. Rull med
motstanden i stedet for å konfrontere den.
:::

## Åpne spørsmål, refleksjoner og oppsummeringer

Tre sentrale ferdigheter i MI:

**Åpne spørsmål** inviterer til refleksjon og gir deltaker rom til å uttrykke
seg. «Hva er viktig for deg i jobben?» fremfor «Liker du å jobbe med folk?»

**Refleksjoner** viser at du har hørt og forstått — og hjelper deltaker å
høre seg selv. Enkle refleksjoner gjengir innhold; doble refleksjoner løfter
frem følelsen bak ordene.

**Oppsummeringer** samler tråder, bekrefter forståelse og gir deltaker mulighet
til å korrigere.

## Endringssnakk

I MI leter vi aktivt etter **endringssnakk** — utsagn fra deltaker som peker
i retning av endring. Vi styrker dette ved å reflektere det tilbake, utforske
det, og spørre etter mer.

Motsetningen er *opprettholdelsessnakk* — utsagn som forsvarer status quo.
Vi konfronterer ikke opprettholdelsessnakk; vi utforsker det med nysgjerrighet.

## MI og asymmetri

Vi anerkjenner asymmetrien i relasjonen — vi er hjelpere med makt til å
påvirke deltakers situasjon. MI er delvis en metode for å håndtere denne
asymmetrien: vi søker å redusere den gjennom åpenhet og reell medvirkning.

## MI i AFT-praksis

MI brukes aktivt i alle faser:
- I oppstartssamtaler — for å bli kjent og bygge tillit
- I kartleggingssamtaler — for å utforske ressurser og motivasjon
- I planarbeid — for å sikre at deltaker eier målene
- Ved tilbakegang — for å utforske hva som skjer uten å dømme
- I samarbeid med arbeidsgiver — som grunnholdning i møter og forhandlinger

:::info[Fordypning]
For grundigere innføring: `knowledge_base/MI....pdf` (Helsedirektoratet, 2017).
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

- [ ] **Steg 3: Final bygg av hele prosjektet**

```powershell
pnpm build 2>&1
```

Forventet: Vellykket bygg uten feil. Antall sider generert skal være vesentlig
høyere enn ved start (mål: 20+ sider). Advarsel om tomme stub-sider er akseptabelt.

- [ ] **Steg 4: Commit**

```powershell
git add docs/metodikk/motiverende-intervju.md
git commit -m "docs: skriv MI-metodikk — grunnverdier, ferdigheter og AFT-kontekst"
```

---

## Selvgjennomgang

### Spec coverage

| Krav fra CLAUDE.md | Task |
|---|---|
| Rydde tutorial-innhold | Task 1 |
| intro.mdx | Task 2 |
| kom-i-gang/index.md | Task 3 |
| kom-i-gang/jobbkonsulentens-rolle.md | Task 4 |
| tiltakslopet/index.md | Task 5 |
| fase-1–fase-5 + avslutning | Task 6–12 |
| plan/ (3 sider) | Task 13–14 |
| metodikk/supported-employment.md | Task 15 |
| metodikk/motiverende-intervju.md | Task 16 |
| Stub-filer for Plan 2 | Task 1 |

### Viktige hensyn for executor

- **SE = struktur, ikke metodikk.** Fasene i tiltakslopet/ ER SE-trinnene.
  Ikke behandle dem som separate ting.
- **MI = grunnholdning.** Ikke reduser til teknikker eller verktøy.
- **Fase 2.5 er avvik fra SE** — alltid tidsavgrenset, alltid begrunnet.
- **Norsk bokmål** i alt synlig innhold. Props og filnavn på engelsk.
- **Ingen inline kommentarer** i MDX med mindre strengt nødvendig.
- Sjekk at alle interne lenker (relative) peker til eksisterende filer.
