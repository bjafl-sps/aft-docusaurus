---
unlisted: true
---

# AFT Håndbok — Fase 2: Metodikk, samarbeid, verktøy, regelverk og fordypning

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fylle alle 19 stub-sider med fullstendig innhold — metodikk, samarbeid, verktøy, regelverk og fordypning.

**Architecture:** 19 uavhengige MDX-filer er allerede opprettet som stubs. Innholdet skrives direkte inn i eksisterende filer. Bygg verifiseres etter hver seksjon (metodikk, samarbeid, verktøy, regelverk, fordypning).

**Tech Stack:** Docusaurus 3.10.1 · MDX · norsk bokmål · pnpm

---

## Filstruktur

**Modifiseres (alle er allerede stubs):**
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

**Viktige hensyn:**
- SE = strukturelt rammeverk — ikke bare en metodikkseksjon
- MI = grunnholdning gjennom hele forløpet — ikke bare teknikker
- Praksisrettet tone: «Hva gjør du når...»
- Fagbegreper forklares første gang de introduseres
- Ingen kjønnede pronomen
- Kildene i `knowledge_base/` er autoritativ bakgrunn — aldri lenke til dem fra MDX

---

## Task 1: metodikk/styrkebasert.md

**Files:**
- Modify: `docs/metodikk/styrkebasert.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2, SE_oppsummering_jobbkonsulenter.md seksjon 5

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Styrkebasert tilnærming
description: Fokus på ressurser, ferdigheter og mestring fremfor mangler og begrensninger — gjennomgående i alle faser av AFT.
sidebar_label: Styrkebasert tilnærming
sidebar_position: 2
tags: [innføring]
---

# Styrkebasert tilnærming

Styrkebasert tilnærming betyr at vi tar utgangspunkt i deltakers ressurser,
ferdigheter og mestringsopplevelser — ikke i diagnoser, mangler og problemer.

Det handler ikke om å ignorere utfordringer. Det handler om *rekkefølgen*:
vi starter med det som fungerer, og bygger videre derfra.

## Hvorfor styrkebasert?

Tradisjonell attføring har ofte hatt et sterkt fokus på hva deltaker ikke kan,
hva som mangler, og hva som må «fikses» før deltaker kan jobbe. Dette perspektivet
er både faglig utdatert og praktisk uheldig:

- Det plasserer deltaker i en passiv mottakerrolle
- Det forsterker opplevelsen av å ikke strekke til
- Det gir jobbkonsulenten et skjevt bilde av mulighetene

Styrkebasert tilnærming endrer dette. Deltaker er ikke et problem som skal løses
— deltaker er en person med ressurser som skal mobiliseres.

## Hva er en styrke?

Styrker er bredere enn formell kompetanse:

- **Formell kompetanse** — utdanning, sertifikater, fagbrev
- **Uformell kompetanse** — arbeidserfaring, frivillig arbeid, omsorg, hobby
- **Personlige egenskaper** — pålitelighet, nysgjerrighet, orden, empati
- **Interesser** — peker mot naturlig motivasjon og energi
- **Mestringsopplevelser** — situasjoner der deltaker har lyktes, uansett arena

:::tip[Praktisk tips]
Åpne kartleggingssamtalen med: «Fortell meg om noe du har gjort som du er
fornøyd med.» — ikke «Hva er utfordringene dine?»
:::

## Styrkebasert gjennom hele tiltaksløpet

Styrkebasert tilnærming er ikke forbeholdt yrkeskartleggingen. Den gjelder i
alle faser:

| Fase | Styrkebasert betyr... |
|---|---|
| Fase 1 (Innledende kontakt) | Møt deltaker med genuin nysgjerrighet, ikke saksinformasjon |
| Fase 2 (Kartlegging) | Utforsk ressurser og mestringsopplevelser, ikke bare begrensninger |
| Fase 3 (Finne jobb) | Match på interesser og styrker — ikke bare «hva deltaker kan klare» |
| Fase 4 (Arbeidsgiver) | Presenter deltaker med fokus på det de bringer, ikke det de trenger |
| Fase 5 (Oppfølging) | Bygg videre på mestring — ikke bare fiks det som ikke virker |

## Kobling til MI og LØFT

Styrkebasert tilnærming er forankret i de samme grunnverdiene som MI og LØFT:

- **MI** — nysgjerrighet og evocation: vi henter frem ressurser deltaker allerede har,
  vi legger dem ikke inn
- **LØFT** — unntaksspørsmål: «Fortell om en gang problemet ikke var der» avdekker
  eksisterende mestringsstrategier

De tre tilnærmingene utfyller hverandre og brukes gjerne i kombinasjon.

## Spørsmål som aktiverer styrker

:::tip[Praktisk tips]
Disse spørsmålene kan brukes i alle samtaler:
- «Hva er du god på?»
- «Fortell om en jobb eller aktivitet der du trivdes godt.»
- «Hva har du lært av å ha det vanskelig?»
- «Hvem ser ressursene i deg — og hva ser de?»
- «Hva ville folk som kjenner deg si er din beste egenskap?»
:::

## Vanlig fallgruve

Det styrkebaserte perspektivet kan misforstås som *positivitet til enhver pris* —
at vi ignorerer reelle utfordringer eller gir falskt håp.

Det er ikke styrkebasert. Det er faglig uforsvarlig.

Styrkebasert betyr at vi anerkjenner utfordringer *og* ressurser — med ressursene
som utgangspunkt for arbeidet.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 2: metodikk/karriereveiledning-metode.md

**Files:**
- Modify: `docs/metodikk/karriereveiledning-metode.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2 (karriereveiledning), HK-dir Nasjonalt kvalitetsrammeverk, Holland (1997)

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Karriereveiledning
description: Karriereveiledning som metodikk — Nasjonalt kvalitetsrammeverk, RIASEC-modellen og karriereveiledning som kontinuerlig prosess i AFT.
sidebar_label: Karriereveiledning
sidebar_position: 3
tags: [innføring, fordypning]
---

# Karriereveiledning

Karriereveiledning er en **gjennomgående prosess** gjennom hele tiltaksløpet,
med særlig tyngde i fase 2. Det er ikke en enkeltsamtale eller et verktøy —
det er en pågående støtte til deltaker i å ta informerte og selvstendige
valg om arbeid og utdanning.

## Hva er karriereveiledning?

Karriereveiledning er bistand til å forstå seg selv, utforske muligheter og
ta beslutninger om fremtid. Det handler om tre ting i kombinasjon:

1. **Selvforståelse** — hvem er jeg, hva er mine interesser, styrker og verdier?
2. **Mulighetsbevissthet** — hva finnes der ute, hvilke yrker og utdanninger?
3. **Beslutningskompetanse** — hvordan ta gode valg under usikkerhet?

:::note[Regelverksforankring]
Karriereveiledning i AFT er forankret i Nasjonalt kvalitetsrammeverk for
karriereveiledning (HK-dir, 2022), som definerer syv kompetanseområder for
karriereveiledere. Jobbkonsulentens veilederrolle dekker disse områdene.
:::

## Karriereveiledning som prosess

Karriereveiledning er ikke noe vi «gjennomfører» i kartleggingsfasen og avslutter.
Det er en pågående prosess som justeres fortløpende:

- Ny informasjon fra arbeidspraksis endrer selvforståelsen
- Arbeidsmarkedet endrer seg — mulighetsbildet oppdateres
- Deltakers motivasjon og mål endrer seg over tid

Yrkesprofilen er et *levende dokument* — ikke et engangsskjema.

## Holland/RIASEC-modellen

RIASEC er det faglige grunnlaget for karriereverktøyene vi bruker. Modellen
(Holland, 1997) deler interesser og arbeidsmiljøer inn i seks typer:

| Type | Norsk betegnelse | Kjennetegn |
|---|---|---|
| **R** — Realistic | Praktisk-teknisk | Praktiske oppgaver, bruke hender og verktøy |
| **I** — Investigative | Utforskende-analytisk | Forskning, analyse, problemløsning |
| **A** — Artistic | Kunstnerisk-kreativ | Kreativitet, uttrykk, estetikk |
| **S** — Social | Sosialt hjelpsomme | Undervise, veilede, hjelpe andre |
| **E** — Enterprising | Ledende-overtalende | Lede, selge, overtale |
| **C** — Conventional | Systematisk-ordnet | Ryddig, strukturert, detaljorientert |

Deltaker har gjerne en profil med 2-3 dominerende typer. En god jobbmatch finnes
i arbeidsmiljøer som samsvarer med profilen.

:::info
RIASEC er ingen fasit. Det er et utgangspunkt for utforsking og samtale —
ikke en kategorisering som begrenser mulighetene.
:::

## Tre nøkkelspørsmål i karriereveiledningen

Disse spørsmålene (etter Leach, 2002) er rettesnor gjennom hele prosessen:

1. **Hva er deltakers generelle mål for arbeid?**
   — Ønsker deltaker fulltid, deltid, arbeid eller utdanning? Hva betyr «jobb» for dem?

2. **Hva slags jobb og arbeidsmiljø ønsker deltaker — og hva er realistisk?**
   — Interesser, kompetanse og arbeidsmarked satt i sammenheng.

3. **Hva slags bistand trenger deltaker for å finne, få og beholde lønnet arbeid?**
   — Identifisere gap og planlegge for dem.

## Karrierelæring i AFT-praksis

Jobbkonsulenten er ikke en «karriererådgiver» som gir råd om hva deltaker bør
gjøre. Jobbkonsulenten er en *fasilitator* som støtter deltaker i å:

- Utforske egne interesser og styrker uten å konkludere for raskt
- Skaffe seg reell erfaring (arbeidspraksis) som justerer selvbildet
- Koble erfaringer til yrker og muligheter i arbeidsmarkedet
- Ta egne, informerte beslutninger

:::warning[Vær oppmerksom]
Unngå å «styre» deltaker mot det du tror er realistisk. Deltakers egne
preferanser skal veie tyngst — også når de virker ambisiøse. Rollen er
å gi informasjon og erfaringsmuligheter, ikke å begrense.
:::

## Karriereveiledning og arbeidsmarkedskunnskap

God karriereveiledning krever at jobbkonsulenten har oppdatert kunnskap om:

- Lokalt og regionalt arbeidsmarked (hva er etterspørselen i Rogaland?)
- Utdanningsveier (yrkesfag, høyere utdanning, kortere kurs)
- Jobbmuligheter for deltakere uten formell kompetanse
- Realkompetansevurdering (Rogaland fylkeskommune) og hva den kan gi

:::tip[Praktisk tips]
Bruk Nav Statistikk og Arbeidsmarkedsdata aktivt i samtaler med deltaker.
«Se her — det er 40 ledige stillinger innen dette yrket i Rogaland nå» er
mer motiverende enn abstrakte mulighetsdrøftinger.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 3: metodikk/gap-modellen.md

**Files:**
- Modify: `docs/metodikk/gap-modellen.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2, `knowledge_base/GAP.pdf`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: GAP-modellen
description: GAP-modellen som verktøy for å identifisere og lukke misforhold mellom krav i arbeidssituasjonen og deltakers forutsetninger.
sidebar_label: GAP-modellen
sidebar_position: 4
tags: [innføring]
---

# GAP-modellen

GAP-modellen er et verktøy for å forstå og håndtere **misforholdet** (gapet)
mellom kravene i en arbeidssituasjon og deltakers forutsetninger for å møte
dem. Den brukes særlig i fase 4 og 5 — når vi jobber med tilrettelegging på
arbeidsplassen.

## Hva er et gap?

Et gap oppstår der det er misforhold mellom:

- **Krav i arbeidssituasjonen** — tempo, sosiale forventninger, konsentrasjonskrav,
  fysiske belastninger, instruksjonskompleksitet
- **Deltakers forutsetninger** — funksjonsevne, ferdigheter, erfaring, tilpasningsbehov

Et gap kan være midlertidig (deltaker lærer seg oppgaven) eller permanent (krever
varig tilrettelegging). Jobbkonsulentens oppgave er å kartlegge gapet og planlegge
for å lukke det.

## To strategier for å lukke gapet

```
KR A V  ────────────────────────────┐
                                     ├── GAP
FO R U T S E T N I N G E R ─────────┘
```

Det er to veier å lukke et gap:

**1. Tilrettelegge arbeidssituasjonen** (redusere kravene)
- Dele opp oppgaver i mindre steg
- Justere tempo eller arbeidstid
- Tydeliggjøre instrukser
- Fjerne unødvendige sosiale krav
- Tilpasse fysisk arbeidsmiljø

**2. Styrke deltakers forutsetninger** (øke kapasiteten)
- Opplæring og øvelse
- Jobbkonsulents bistand på arbeidsplassen
- Hjelpemidler (via Nav Hjelpemiddelsentral)
- Kompensatoriske strategier

I praksis jobber vi som oftest begge veier *samtidig*.

## GAP-modellen i jobbanalysen

Før oppstart i arbeidspraksis gjøres en jobbanalyse (se fase 4). GAP-modellen
er det analytiske rammeverket for denne analysen:

1. Kartlegg kravene i stillingen — konkret og detaljert
2. Kartlegg deltakers forutsetninger — gjennom observasjon og samtale
3. Identifiser gap — hvem de er og om de er adresserbare
4. Planlegg tiltak — tilrettelegging og/eller kompetansebygging

:::tip[Praktisk tips]
Bruk GAP-modellen konkret i samtalene med arbeidsgiver: «Hva krever oppgaven?»
og «Hva trenger vi å tilrettelegge?» er spørsmål arbeidsgiver forstår og
engasjerer seg i.
:::

## GAP-modellen i oppfølgingen

I fase 5 brukes GAP-modellen løpende. Nye gap oppstår når:
- Arbeidsoppgaver endrer seg
- Deltakers situasjon endrer seg (helse, privatliv)
- Tempo eller volum økes

Jobbkonsulent observerer kontinuerlig og justerer tilretteleggingen.

## Hva et gap IKKE er

GAP-modellen kan misforstås som et argument for at deltaker er problemet
som skal tilpasses systemet. Det er en feillesning.

- Et gap sier ingenting om verdien av personen
- Et gap er kontekstuelt — det kan forsvinne i en annen jobb
- En god jobbmatch reduserer antall gap fra starten av

:::warning[Vær oppmerksom]
Unngå å bruke GAP-modellen til å lage lange lister over «problemer» med
deltaker. Fokuser på *spesifikke gap i spesifikke situasjoner* og *konkrete
tiltak* — ikke på deltakers personlighet som et gap i seg selv.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 4: metodikk/loft.md

**Files:**
- Modify: `docs/metodikk/loft.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2, `knowledge_base/LØFT.pdf`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: LØFT
description: Løsningsfokusert tilnærming — fra problemsnakk til løsningssnakk, med fokus på ressurser, unntak og neste steg.
sidebar_label: LØFT
sidebar_position: 5
tags: [innføring]
---

# LØFT — Løsningsfokusert tilnærming

LØFT (Løsningsfokusert tilnærming) er en samtalemetodikk og holdning som
setter løsninger og ressurser i sentrum — fremfor problemer og mangler.

LØFT er nært beslektet med styrkebasert tilnærming og MI, og brukes naturlig
i kombinasjon med begge.

## Tre grunnprinsipper

LØFT bygger på tre enkle prinsipper:

1. **Forstyrr det som ikke virker** — ikke gjenta det som ikke hjelper
2. **Gjør mer av det som virker** — finn og forsterke eksisterende mestringsstrategier
3. **Bruk det som fungerer** — ta utgangspunkt i deltakers egne ressurser

Prinsippene er enkle, men krever et bevisst skifte fra problemfokus til
løsningsfokus.

## Tre nøkkelteknikker

### 1. Unntaksspørsmål

Unntaket er situasjonen der problemet *ikke* er til stede — eller er mildere.
Unntaket avslører ressurser og mestringsstrategier deltaker allerede har.

> «Du forteller at det er vanskelig å komme deg av gårde om morgenen.
> Fortell meg om en gang det gikk bedre — hva var annerledes den dagen?»

Unntaket er kjernen i LØFT: løsningen finnes allerede delvis — jobbkonsulenten
hjelper deltaker å se den og bygge på den.

### 2. Mirakelspørsmål

Mirakelspørsmålet hjelper deltaker å beskrive et konkret, ønsket fremtidsbilde.
Det omgår begrensende «det er umulig»-tenkning.

> «Tenk deg at du sovner i kveld, og mens du sover skjer det et mirakel:
> problemet er borte. Hva er det første du legger merke til i morgen tidlig
> som viser at noe er annerledes?»

Bruk mirakelspørsmålet til å konkretisere mål — ikke som en fantasyøvelse.
Svarene viser hva deltaker faktisk ønsker seg, og åpner for å jobbe mot det.

### 3. Skaleringsspørsmål

Skaleringsspørsmål gjør fremgang synlig og konkret.

> «På en skala fra 0 til 10, der 10 er at du er i jobb og alt er slik du
> ønsker — hvor er du nå?»
> «Hva gjør at du er på 3 og ikke 0?» *(synliggjør ressurser)*
> «Hva skal til for å gå fra 3 til 4?» *(konkretiserer neste steg)*

Spørsmålet om *hva som gjør at du er på X og ikke lavere* er særlig kraftfullt
— det aktiverer deltakers egne ressurser og mestring.

## LØFT og MI

LØFT og MI deler mange grunnverdier, men har litt ulik vekt:

| | LØFT | MI |
|---|---|---|
| Fokus | Løsninger og fremtid | Ambivalens og motivasjon |
| Nøkkelteknikk | Unntaksspørsmål og skalering | Åpne spørsmål og refleksjon |
| Mål | Bygge på det som virker | Utforske og styrke endringsmotivasjon |

I praksis brukes de i kombinasjon — LØFT-teknikker kan brukes inne i en
MI-orientert samtale.

## Typisk brukskontekst

LØFT egner seg godt når:
- Samtalen har blitt fastlåst i problemsnakk
- Deltaker opplever seg som håpløs eller sitter fast
- Du vil konkretisere mål og neste steg
- Du vil synliggjøre fremgang deltaker ikke ser selv

:::warning[Vær oppmerksom]
LØFT skal ikke brukes til å avfeie reelle utfordringer med positivt snakk.
Unntaksspørsmål virker bare hvis du har lyttet nok til å forstå *hva* problemet er.
Gå ikke for raskt til løsning.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 5: Bygg-sjekk etter metodikk

- [ ] **Steg 1: Verifiser hele seksjonen**

```powershell
pnpm build 2>&1 | Select-String -Pattern "error|broken" -CaseSensitive:$false
```

Forventet: ingen feil. Alle fire metodikk-sider generert.

---

## Task 6: samarbeid/nav-samarbeid.md

**Files:**
- Modify: `docs/samarbeid/nav-samarbeid.md`

**Kilde:** Løsningsbeskrivelse kap. 5, NAV kravspesifikasjon kap. 5, plan-seksjonen i håndboken

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Samarbeid med Nav
description: Kommunikasjon med Nav-veileder, plan, rapportering, fraværsrutiner og samarbeidskultur — jobbkonsulentens ansvar i Nav-samarbeidet.
sidebar_label: Samarbeid med Nav
sidebar_position: 1
tags: [innføring]
---

# Samarbeid med Nav

Samarbeidet med Nav-veileder er ryggraden i tiltaksgjennomføringen. Planen er
bindeleddet — men bak planen ligger en løpende dialog som gjør at Nav og SPS
alltid er samkjørt.

## Rolleavklaring

| Aktør | Ansvar |
|---|---|
| **Nav-veileder** | Beslutter oppstart, forlengelse og avslutning. Godkjenner plan. Fastsetter deltakelsesprosent. |
| **Jobbkonsulent** | Gjennomfører tiltaket. Rapporterer progresjon. Varsler avvik. |
| **Avdelingsleder** | Mottar bestilling, registrerer i Navs systemer, følger opp administrative forhold |

Nav-veileder tar de formelle beslutningene. Jobbkonsulent leverer faglig grunnlag
for dem.

## Kommunikasjonsrytmen

| Tidspunkt | Hva skjer |
|---|---|
| Oppstart | Bekreft mottak og startdato til avdelingsleder |
| Innen 4 uker | Oppstartsamtale med Nav-veileder og deltaker |
| Innen 4 uker | Første plan sendes Nav |
| Hver 3. mnd | Oppdatert plan sendes Nav i forkant av Navs vurdering |
| Ved avvik | Varsling innen 2 virkedager (fravær, endret situasjon, hensiktsmessighetsvurdering) |
| Avslutning | Sluttrapport på Navs mal |

## Oppstartsamtalen

Oppstartsamtalen innen fire uker er et *felles* møte med Nav-veileder, deltaker
og jobbkonsulent. Jobbkonsulent tar initiativ til å avtale tidspunktet.

Formål:
- Gjennomgå bestilling og justere forståelse av mål for tiltaksperioden
- Etablere felles forventninger
- Gi deltaker direkte kontakt med begge hjelpere

:::tip[Praktisk tips]
Forbered deltaker på hva oppstartsamtalen handler om — det er ikke en
vurdering, det er en planleggingssamtale. Deltaker er hovedpersonen.
:::

## Planrapportering

Planen er primærkanalen for faglig informasjon til Nav.
Se [Plan for tiltaksgjennomføring](../plan/index.md) for full beskrivelse.

Noen viktige poenger om planrapportering:
- Send planen *i forkant* av Nav-veileders vurdering — ikke etter
- Planen skal gi Nav nok informasjon til å ta gode beslutninger
- Faglig begrunnelse for valg (f.eks. intern arena, lav deltakelse) skrives i planen
- Ikke bruk planen som et «alt går bra»-dokument — vær ærlig om utfordringer

## Fraværsoppfølging og varsling

Jobbkonsulent registrerer fravær løpende og kontakter deltaker same dag ved
umeldt fravær for å avklare årsaken.

**Varslingsplikten:**
- Ugyldig fravær eller uteblivelse varsles Nav innen **to virkedager**
- Dersom Nav-veileder ikke er tilgjengelig, sendes varsel skriftlig (e-post/melding)

:::warning[Vær oppmerksom]
Varslingsplikten gjelder uavhengig av årsaken til fraværet. Det er Navs
oppgave å vurdere konsekvensene — ikke jobbkonsulentens.
:::

## Hensiktsmessighetsvurdering

Dersom jobbkonsulent vurderer at AFT ikke lenger er hensiktsmessig for en
deltaker, skal Nav varsles snarest. Se [Forlengelse og avslutning](../plan/forlengelse-og-avslutning.md).

## Samarbeidskultur

Et godt Nav-samarbeid handler ikke bare om dokumentasjon og rutiner. Det
handler om tillit og åpenhet:

- Kontakt Nav-veileder tidlig når du er usikker — ikke etter at du har tatt
  en beslutning du skulle ha avklart
- Del faglige vurderinger — ikke bare administrative oppdateringer
- Anerkjenn at Nav-veileder kjenner deltaker fra en annen kontekst

:::note
Nav-veileder og jobbkonsulent ser deltaker fra ulike vinkler. Den informasjonen
Nav sitter på, kan supplere din forståelse. Be om relevant informasjon.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 7: samarbeid/arbeidsgiversamarbeid.md

**Files:**
- Modify: `docs/samarbeid/arbeidsgiversamarbeid.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.4, Løsningsbeskrivelse kap. 4d–4e

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Arbeidsgiversamarbeid
description: Strategisk og operativt samarbeid med arbeidsgivere — nettverksbygging, relasjonsvedlikehold og langsiktig jobbutvikling.
sidebar_label: Arbeidsgiversamarbeid
sidebar_position: 2
tags: [innføring]
---

# Arbeidsgiversamarbeid

Arbeidsgiversamarbeid handler om mer enn å skaffe praksisplasser. Det handler
om å bygge **varige relasjoner** med virksomheter som opplever samarbeidet med
SPS som verdifullt — og som derfor åpner dørene også neste gang.

:::note
Se [Fase 4: Samarbeid med arbeidsgiver](../tiltakslopet/fase-4-arbeidsgiver.md)
for det praktiske innholdet i fasen. Denne siden utdyper den strategiske og
langsiktige dimensjonen.
:::

## To nivåer av samarbeid

### Strategisk nivå — nettverksbygging

Strategisk arbeidsgiversamarbeid skjer kontinuerlig, uavhengig av enkeltdeltakere.
Det handler om å:

- Opprette og vedlikeholde kontakt med virksomheter SPS ikke har aktive
  samarbeidsavtaler med ennå
- Kartlegge arbeidsgiveres rekrutteringsbehov og langsiktige planer
- Presentere SE og SPS som en ressurs — ikke bare som et «inkluderingstiltak»
- Delta på lokale næringslivsmøter og bransjetreff der det er hensiktsmessig

**Du trenger ikke ha en konkret deltaker for å kontakte en arbeidsgiver.**
Faktisk er kald kanvassing mer effektiv uten at du trenger å matche noen
akkurat nå — du bygger en relasjon som kan gi frukt om seks måneder.

### Operativt nivå — oppfølging av aktive samarbeid

Operativt arbeidsgiversamarbeid er den løpende kontakten med arbeidsgivere
der deltakere allerede er i praksis:

- Regelmessig kontakt for å sikre at arbeidsgiver trives med samarbeidet
- Bistand ved utfordringer — tilretteleggingsbehov, misforståelser, konflikter
- Vurdering av ansettelsesmuligheter og lønnstilskudd
- Proaktiv justerer av oppgaver og arbeidsforhold

## Nøkkelprinsipp: kunnskap om bransjen

En jobbkonsulent som forstår arbeidsgiveres hverdag, utfordringer og behov,
er langt mer troverdig enn en som bare formidler «trenger du en person?»

Invester tid i å forstå bransjene du jobber mot:
- Hvilke perioder er travlest?
- Hva er typiske rekrutteringsbehov?
- Hva er bransjens krav til ferdigheter og atferd?

:::tip[Praktisk tips]
Spør arbeidsgiver: «Hva er den vanligste grunnen til at nyansatte ikke
fungerer hos dere?» Svaret gir deg verdifull innsikt i jobbkravene — og
viser arbeidsgiver at du er interessert i *deres* behov.
:::

## Lønnstilskudd og andre virkemidler

Lønnstilskudd er et sentralt virkemiddel for å senke risikoen for arbeidsgiver
ved ansettelse. Jobbkonsulent informerer om muligheten og bistår i søknadsprosessen.

Tidspunkt for å ta opp lønnstilskudd: *tidlig*, gjerne allerede ved etablering
av praksisavtalen — slik at det er en reell mulighet, ikke et desperat tilbud
i etterkant.

Andre virkemidler jobbkonsulent kan informere om:
- Hjelpemidler via Nav Hjelpemiddelsentral
- Tilretteleggingstilskudd (for arbeidsgivere med IA-avtale)
- Funksjonsassistanse
- Mentor-ordning

## Vedlikehold av arbeidsgiversnettverket

Relasjoner krever vedlikehold. Selv virksomheter der det ikke er aktive
samarbeid akkurat nå, bør holdes varm:

- Send en kort oppdatering om et vellykket samarbeid (anonymisert)
- Ta kontakt ved sesongskifter med spørsmål om rekrutteringsbehov
- Inviter til åpent hus eller fagdag hos SPS

## Arbeidsgiverperspektiv i kommunikasjonen

Alt vi kommuniserer til arbeidsgivere bør svare på ett spørsmål: **hva får
dere ut av dette?** Det inkluderer:

- Spart rekrutteringskostnad
- Fleksibel arbeidskraft i perioder med behov
- Støtte og bistand fra erfaren jobbkonsulent
- Bidrag til bedriftens mangfolds- og samfunnsansvarsprofil

:::warning[Vær oppmerksom]
Unngå å appellere til arbeidsgivers *velvilje* fremfor *interesse*. Velvilje
er et svakt grunnlag for samarbeid. Interesse er bærekraftig.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 8: samarbeid/andre-aktorer.md

**Files:**
- Modify: `docs/samarbeid/andre-aktorer.md`

**Kilde:** Løsningsbeskrivelse kap. 4f og 5, NAV kravspesifikasjon kap. 6

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Andre aktører
description: Samarbeid med helsetjenester, opplæringskontor, Rogaland fylkeskommune og andre relevante aktører i deltakers nettverk.
sidebar_label: Andre aktører
sidebar_position: 3
tags: [innføring]
---

# Andre aktører

AFT er ikke et isolert tilbud. Mange deltakere har kontakt med andre deler
av hjelpeapparatet, og et koordinert samarbeid er avgjørende for et godt utfall.

**Grunnregel:** Jobbkonsulent initierer samarbeid med andre aktører, men
*aldri uten deltakers samtykke*.

## Helse- og behandlingstjenester

### Fastlege

Fastlegen er primærkontakt for helserelaterte spørsmål og kan bidra med:
- Attestasjon av helsetilstand (ved Nav-behov)
- Koordinering av spesialisthelsetjeneste
- Tilretteleggingsanbefalinger

Jobbkonsulent kan be om møte med fastlege for å koordinere bistand, med
deltakers samtykke. Husk: vi er tjenester *for* deltaker — begge.

### Psykisk helsevern (DPS, BUP)

For deltakere med psykiske helseutfordringer kan det være aktuelt å koordinere
med distriktspsykiatrisk senter (DPS) eller barne- og ungdomspsykiatri (BUP).

:::warning[Vær oppmerksom]
Jobbkonsulent skal *ikke* overta behandlerrollens ansvar — og heller ikke
fungere som terapeut. Koordinering handler om å sikre at bistandene utfyller
hverandre, ikke at jobbkonsulent driver behandling.
:::

Typisk samarbeid:
- Orientere behandler om at deltaker er i AFT og hva det innebærer
- Få informasjon om hva behandler anbefaler for deltakers arbeidsevne
- Koordinere tidspunkt for samtaler slik at AFT og behandling ikke kolliderer

### IPS-team

For deltakere med alvorlige psykiske lidelser kan et IPS-team (Individual
Placement and Support) være en mer hensiktsmessig innsats. AFT-jobbkonsulent
bør kjenne til IPS og hva det tilbyr, slik at riktig bistand kan anbefales
til Nav dersom AFT ikke er hensiktsmessig.

## Opplæringssektoren

### Rogaland fylkeskommune — realkompetansevurdering

Deltakere med uformell kompetanse kan ha krav på realkompetansevurdering (RKV)
— en vurdering av om erfaringen tilsvarer læringsmål i videregående opplæring.

Jobbkonsulent kan:
- Identifisere kandidater der RKV er aktuelt
- Informere om prosessen og bistå med påmelding
- Koble deltaker med rådgiver hos fylkeskommunen

RKV gir ikke alltid formelt vitnemål, men kan gi *delkompetanse* som styrker
CV-en og åpner for fagbrev via praksis.

### Opplæringskontorer

For deltakere der fagbrev via lærekontrakt er et realistisk mål, er
opplæringskontoret en sentral samarbeidspartner. Jobbkonsulent:

- Kartlegger hvilke opplæringskontor som er relevante for aktuelle fag
- Etablerer kontakt og avklarer forventninger tidlig
- Koordinerer oppfølgingsansvaret mellom SPS og lærebedrift ved oppstart

### Voksenopplæring og kursplass

For deltakere med manglende grunnleggende ferdigheter kan kommunal
voksenopplæring eller kursplasser hos AOF, Folkeuniversitetet o.l. supplere
arbeidspraksis. Formell opplæring kan nå skje *parallelt* med AFT (høringsnotat
27.06.2025).

:::note[Regelverksforankring]
Ny kravspesifikasjon åpner for at formell opplæring kan skje parallelt med
AFT-deltakelse. Koordinering med opplæringsinstansen er jobbkonsulentens ansvar.
:::

## Koordinerte tjenester og ansvarsgruppe

Noen deltakere har behov for tjenester fra flere etater samtidig. Dersom det
allerede finnes en koordinator eller ansvarsgruppe, skal jobbkonsulent:

- Melde SPS inn som part
- Bidra inn i koordineringsmøter med arbeidsrettet perspektiv
- Ikke doble opp på bistand som andre allerede gir

Dersom det mangler koordinering, kan jobbkonsulent ta initiativ til å
etablere det — i samarbeid med Nav-veileder.

## Praktiske hensyn

- Bruk alltid signert samtykkeskjema før du kontakter andre aktører om deltaker
- Avtal med deltaker hva du kan dele — og ikke
- Notér i planen hvilke samarbeidspartnere som er aktive
- Kommuniser fra et *arbeidsrettet* perspektiv — du er ikke en del av
  behandlingsapparatet, men du kan koordinere med det
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 9: verktoy/karriereverktoy.md

**Files:**
- Modify: `docs/verktoy/karriereverktoy.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2 (verktøytabell), CLAUDE.md verktøytabell

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Karriereverktøy
description: Oversikt over verktøyene vi bruker i karriereveiledning — Karriereverktøy/RIASEC, Karrierestyrker, ASIAS, JobPics og SCI.
sidebar_label: Karriereverktøy
sidebar_position: 1
tags: [innføring]
---

# Karriereverktøy

Karriereverktøyene vi bruker, er hjelpemidler i karriereveiledningsprosessen —
ikke fasit på hvem deltaker er eller hva de bør gjøre. Brukt riktig gir de
et utgangspunkt for samtale og utforsking.

## Oversikt

| Verktøy | Formål | Passer for |
|---|---|---|
| **Karriereverktøy (RIASEC)** | Interessekartlegging og yrkesutforsking | Alle |
| **Karrierestyrker** | Myke ferdigheter og jobbfastholdelse | Alle |
| **ASIAS** | Karriereveiledning tilpasset autismespekteret | Autismespekter |
| **JobPics** | Bildebasert RIASEC | Liten yrkeserfaring, lese-/skrivevansker |
| **SCI** | Strukturert karrieresamtale | Supplement til RIASEC |

## Karriereverktøy (RIASEC-plattform)

**Karriereverktøy** er SPS' primærplattform for karriereveiledning. Den er
nettbasert og bygger på Holland/RIASEC-modellen (se [Karriereveiledning](./karriereveiledning-metode.md)).

**Hva det gir:**
- Interesseprofil i RIASEC-dimensjonene
- Kobling mot relevante yrker og utdanningsveier
- Oversikt over arbeidsmarked knyttet til yrker
- Mulighet for deltaker å utforske på egenhånd

**Bruk i praksis:**
- Deltaker gjennomfører interessetesten (20–30 min)
- Jobbkonsulent og deltaker gjennomgår resultatene *sammen*
- Fokus på: «Hva gjenkjenner du? Hva overrasket deg?»
- Ikke la profilen styre — bruk den som samtalegrunnlag

:::tip[Praktisk tips]
Unngå å si «Profilen din viser at du bør bli X». Si heller «Hva tenker du
om dette resultatet? Ser du deg selv her?» Deltaker eier profileringen.
:::

## Karrierestyrker

**Karrierestyrker** er et verktøy som kartlegger *myke ferdigheter* — egenskaper
som er avgjørende for jobbfastholdelse, men sjelden fanges opp av tradisjonell
kompetansekartlegging:

- Pålitelighet og stabilitet
- Samarbeidsevne
- Selvregulering og stressmestring
- Fleksibilitet og tilpasningsdyktighet

Brukes til å identifisere styrker som kan fremheves overfor arbeidsgiver,
og gap som kan adresseres i oppfølgingen.

## ASIAS

**ASIAS** (Autistic Spectrum Intelligence Assessment and Support) er et
karriereveiledningsverktøy spesielt tilpasset deltakere på autismespekteret.

RIASEC-modellen kan fungere dårlig for deltakere som har lite kjennskap til
sine egne interesser, eller som tolker spørsmål svært bokstavelig. ASIAS er
tilpasset disse utfordringene:

- Mer konkrete og situasjonsbeskrivende spørsmål
- Fokus på aktiviteter, ikke abstrakte interesser
- Tar hensyn til sensoriske preferanser og miljøbehov

Se [Autistisk utbrenthet og masking](../fordypning/autistisk-utbrenthet.md) for
utfyllende kontekst om autismespekteret og jobbkonsulentarbeid.

## JobPics

**JobPics** er en bildebasert variant av RIASEC-kartlegging, egnet for deltakere
som har liten yrkeserfaring eller vansker med å lese og skrive.

I stedet for tekstbaserte spørsmål velger deltaker mellom bilder av ulike
arbeidsoppgaver. Resultater oversettes til RIASEC-profil som kan kombineres
med Karriereverktøy.

## SCI — Structured Career Interview

**SCI** (Structured Career Interview) er en strukturert karrieresamtale som
samler informasjon om deltakers arbeidserfaring, interesser, verdier og mål
gjennom en semistrukturert intervjuguide.

SCI brukes som *supplement* — ikke erstatning — for RIASEC. Det er særlig
nyttig for deltakere som er reflekterte og kan ha en god samtale om karriere,
men der RIASEC alene ikke fanger nok.

## Viktige prinsipper ved bruk av verktøy

- **Verktøyene er for deltaker — ikke for dokumentasjonen.** Resultater
  tilhører deltaker og deles bare med samtykke.
- **Ikke begrens mulighetene.** RIASEC-profilen er ikke en diagnose. Deltaker
  kan jobbe i yrker som ikke «matcher» profilen.
- **Reell erfaring trumfer testresultater.** Det viktigste «verktøyet» er
  arbeidspraksis — der får vi informasjon ingen test kan gi.
- **Skill mellom verktøy og relasjon.** Et verktøy åpner en samtale. Relasjonen
  bærer prosessen.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 10: verktoy/livshjulet.md

**Files:**
- Modify: `docs/verktoy/livshjulet.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2, generell livskvalitetslitteratur

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Livshjulet
description: Livshjulet som kartleggingsverktøy — åtte livsområder, selvvurdering og identifisering av ubalanse og ressurser.
sidebar_label: Livshjulet
sidebar_position: 2
tags: [innføring]
---

# Livshjulet

Livshjulet er et refleksjonsverktøy som hjelper deltaker å få oversikt over
*livssituasjonen som helhet* — ikke bare arbeidsrelaterte forhold.

Det er særlig nyttig tidlig i fase 2, der vi trenger å forstå hvilke
belastningsfaktorer og ressurser som preger deltakers hverdag.

## Hva er livshjulet?

Livshjulet deler livet inn i åtte livsområder. Deltaker vurderer hvert
område på en skala fra 0 (ingen tilfredshet) til 10 (full tilfredshet):

| Livsområde | Hva det dekker |
|---|---|
| **Helse** | Fysisk og psykisk helse, energinivå |
| **Økonomi** | Inntekt, gjeld, ekonomisk trygghet |
| **Familie** | Relasjoner til nær familie, forsørgeransvar |
| **Sosialt nettverk** | Venner, sosial støtte, tilhørighet |
| **Personlig utvikling** | Læring, mestring, selvrealisering |
| **Jobb / aktivitet** | Arbeid, studier, meningsfull aktivitet |
| **Bolig** | Bosituasjon, stabilitet, trygghet |
| **Fritid** | Hobbyer, hvile, restitusjon |

*(Livsområdene kan tilpasses deltakers situasjon — legg til eller bytt ut ved behov.)*

## Slik bruker du det

**Trinn 1 — Selvvurdering**
Deltaker vurderer hvert av de åtte områdene på 0–10-skalaen.
Gjøres gjerne på egenhånd som forberedelse til samtale.

**Trinn 2 — Refleksjon i samtalen**
Jobbkonsulent og deltaker gjennomgår resultatene:
- Hva overrasket deg?
- Hvilke områder har lavest score — og hva ligger bak det?
- Hvilke områder har høyest score — hva er du fornøyd med?

**Trinn 3 — Prioritering**
Identifiser ett eller to områder der endring vil ha størst effekt på
deltakers situasjon og arbeidsliv.

:::tip[Praktisk tips]
Still spørsmålet: «Dersom ett av disse områdene ble bedre — hvilket ville
hatt størst betydning for muligheten til å komme i jobb?»

Det er ikke alltid det laveste tallet som er viktigst å jobbe med.
:::

## Hva livshjulet viser

Livshjulet gir et visuelt bilde av *ubalanse* — og av ressurser. Et lavt
tall er ikke alltid et problem som skal «fikses»; det kan være et område
som krever tilrettelegging, eller der deltaker trenger støtte fra andre.

Noen mønstre å legge merke til:

- **Lav score på økonomi** — kan det føre til fravær, stress eller manglende
  fokus i arbeidsrettet aktivitet? Bør kobles mot Nav-veileder.
- **Lav score på bolig** — ustabil bosituasjon påvirker evnen til å møte opp.
  Kartlegg om det trengs samarbeid med kommunal boligtjeneste.
- **Lav score på sosialt nettverk** — isolasjon kan gjøre arbeidspraksis
  mer krevende og viktigere på én gang. Jobb med arbeidsplassen som sosial arena.
- **Høy score på fritid** — ressurs! Interesser og hobbyer gir informasjon
  til yrkeskartleggingen.

## Etiske hensyn

Livshjulet inviterer til å dele sensitive opplysninger. Noen avklaringer:

- Deltaker bestemmer hva de vil dele
- Jobbkonsulent skal ikke utforske alle lave tall — kun de som er relevante
  for arbeidsrettingen
- Informasjon i livshjulet er ikke noe vi rapporterer til Nav uten samtykke

:::warning[Vær oppmerksom]
Livshjulet avdekker noen ganger alvorlige situasjoner (vold, rus, alvorlig
psykisk uhelse). Jobbkonsulent har ikke behandleransvar — men har plikt til
å veilede deltaker til riktig hjelp. Koordinér med avdelingsleder ved tvil.
:::

## Hvem passer det for?

Livshjulet passer de fleste deltakere. Det er særlig nyttig for:
- Deltakere med mange og sammensatte belastningsfaktorer
- Deltakere der det er uklart hva som gjør arbeidsliv vanskelig
- Som inngangsporten til en dypere kartleggingssamtale
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 11: verktoy/observasjon.md

**Files:**
- Modify: `docs/verktoy/observasjon.md`

**Kilde:** SE_oppsummering_jobbkonsulenter.md seksjon 4.5, Løsningsbeskrivelse kap. 4e

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Systematisk observasjon
description: Strukturert observasjon i arbeidssituasjoner — formål, gjennomføring, dokumentasjon og etiske hensyn.
sidebar_label: Observasjon
sidebar_position: 3
tags: [innføring]
---

# Systematisk observasjon

Systematisk observasjon er jobbkonsulentens viktigste kartleggingsverktøy
i fase 5 — og ett av de viktigste gjennom hele tiltaket. Det vi *ser* deltaker
gjøre i reelle arbeidssituasjoner, gir informasjon ingen samtale kan gi.

## Hva er systematisk observasjon?

Systematisk observasjon er **strukturert og målrettet** — i motsetning til
tilfeldig observasjon som skjer i bakgrunnen. Det innebærer:

- Bestemme *hva* vi skal observere, basert på konkrete spørsmål
- Dokumentere observasjonene fortløpende
- Skille mellom det vi *ser* og det vi *tolker*
- Dele observasjoner med deltaker som del av refleksjonsprosessen

## Hva observerer vi?

Observasjon dekker tre dimensjoner:

### Oppgaveutførelse
- Mestrer deltaker arbeidsoppgavene? Med hvilken nøyaktighet og hastighet?
- Hvilke oppgaver er enkle, hvilke er krevende?
- Bruker deltaker hensiktsmessige strategier?

### Sosial funksjon
- Hvordan samhandler deltaker med kolleger og ledere?
- Tar deltaker imot tilbakemelding?
- Søker deltaker hjelp når det trengs?
- Initierer deltaker kontakt, eller venter passivt?

### Generell arbeidsatferd
- Oppmøte og punktlighet
- Evne til å holde fokus over tid
- Respons på endringer og overraskelser
- Selvregulering ved stress

## Slik gjennomfører du observasjonen

**Forberedelse:**
1. Avklar med arbeidsgiver hva du skal observere og i hvilke situasjoner
2. Informer deltaker om at du observerer — og *hva* du observerer
3. Ha et strukturert notatskjema klart

**Under observasjonen:**
- Noter konkret atferd, ikke tolkninger: «Deltaker spurte ikke om hjelp da
  maskinen sluttet å virke» — ikke «Deltaker er passiv»
- Veksle mellom å observere og delta naturlig i rommet
- Notér tidspunkt og kontekst

**Etter observasjonen:**
- Refleksjon med deltaker: «Hva la du merke til selv?»
- Del observasjonene åpent og konkret
- Bruk observasjonene i planarbeidet

:::tip[Praktisk tips]
Del alltid observasjoner med deltaker *før* du rapporterer dem til Nav
eller arbeidsgiver. Deltaker kan korrigere feiltolkninger og eier sine egne
observasjoner.
:::

## Observasjon og dokumentasjon

Observasjoner dokumenteres i deltakers løpende journal og kan inngå i:
- Planen (ved behov for faglig begrunnelse av tilrettelegging)
- Dialog med Nav (ved justeringer av deltakelsesprosent)
- Kommunikasjon med arbeidsgiver (ved tilretteleggingsbehov)

Dokumenterte observasjoner skal:
- Beskrive atferd, ikke personlighet
- Knytte observasjoner til konkrete situasjoner
- Skille mellom observasjon («deltaker brukte 20 minutter på oppgaven») og
  tolkning («deltaker synes oppgaven er vanskelig»)

## Etiske hensyn

Observasjon er inngripende. Det krever:

- **Informert samtykke** — deltaker vet at de observeres og hva som observeres
- **Formål** — observasjonene brukes for å hjelpe, ikke for å kontrollere
- **Konfidensialitet** — sensitive observasjoner deles ikke uten avtale
- **Respekt** — observasjon skal ikke oppleves som overvåkning

:::warning[Vær oppmerksom]
Observasjon på arbeidsplassen kan påvirke deltakers naturlige atferd. Vær
oppmerksom på dette, og tilpass tilstedeværelsen din. Det er bedre å observere
kortere og sjeldnere, men i situasjoner der deltaker er komfortabel.
:::

## Naturlig bistand og observasjon

Et av formålene med observasjon er å vurdere om *naturlig bistand* fra kolleger
er tilstrekkelig — og om det er en urimelig belastning for dem.

Dersom kollegene tar for mye ansvar, er jobbkonsulentens tilstedeværelse
mer nødvendig. Dersom kollegene mestrer det naturlig, kan jobbkonsulent trappe ned.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 12: verktoy/grunnleggende-ferdigheter.md

**Files:**
- Modify: `docs/verktoy/grunnleggende-ferdigheter.md`

**Kilde:** Løsningsbeskrivelse kap. 1.2, HK-dir grunnleggende ferdigheter, NAV kravspesifikasjon 4a

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Grunnleggende ferdigheter
description: Kartlegging og styrking av de fem grunnleggende ferdighetene — lesing, skriving, regning, digitale og muntlige ferdigheter — i AFT-kontekst.
sidebar_label: Grunnl. ferdigheter
sidebar_position: 4
tags: [innføring]
---

# Grunnleggende ferdigheter

Grunnleggende ferdigheter — lesing, skriving, regning, digitale og muntlige
ferdigheter — er forutsetning for deltakelse i arbeidslivet og videre
utdanning. Mange i AFT-målgruppen har begrensninger på ett eller flere av
disse områdene.

Kartlegging og styrking av grunnleggende ferdigheter er en del av
yrkeskartleggingen (fase 2) og følger deltaker gjennom hele tiltaksperioden.

## De fem ferdighetene

| Ferdighet | Eksempler i arbeidslivet |
|---|---|
| **Lesing** | Lese instrukser, HMS-regler, beskjeder på tavle |
| **Skriving** | Fylle ut skjemaer, notere ordre, sende e-post |
| **Regning** | Måle, telle, håndtere kasse, beregne tid |
| **Digitale ferdigheter** | Bruke PC, telefon, scanner, bestillingssystem |
| **Muntlige ferdigheter** | Kommunisere med kolleger, kunder, ledere |

## HK-dir Grunnleggende ferdigheter

HK-dir tilbyr kartleggings- og læringsressurser for grunnleggende ferdigheter.
Ressursene er gratis og tilgjengelige digitalt. Jobbkonsulent kan bruke dem
som supplement i arbeidstrening:

- **Kartleggingsverktøy** — identifiserer ferdighetsområder og ferdighetsnivå
- **Læringsressurser** — tilpassede oppgaver på ulike nivåer
- **Veiledning** — støtte til jobbkonsulent i å tilrettelegge læring

Tilnærmingen skal være **praksisnær** — ikke klasseromsbasert. Opplæring
skjer fortrinnsvis i arbeidsoppgaver deltaker allerede utfører.

## Tilnærming: praksisnær og ikke-stigmatiserende

Grunnleggende ferdigheter er et **sårbart tema**. Mange deltakere har
negative erfaringer fra skole. Å bli kartlagt på lesing og skriving kan
oppleves som å bli «tatt» i noe skammelig.

Prinsipper for en god tilnærming:

- Forklar formålet konkret: «Jeg spør fordi vi vil finne en jobb som passer»
- Vær direkte, men ikke klinisk: «Er det noe med lesing eller skriving som
  gjør ting vanskeligere for deg?»
- Fokuser på *funksjonsevne i arbeidssituasjoner*, ikke på testresultater
- Unngå ord som «lese- og skrivevansker» tidlig — la deltaker definere selv

:::tip[Praktisk tips]
Mange med lese-/skrivevansker har utviklet gode kompensatoriske strategier
over år. Spør: «Har du noen måter å håndtere dette på som fungerer for deg?»
Det er ofte mer nyttig enn kartleggingsresultater.
:::

## Tilrettelegging i arbeidssituasjonen

Basert på kartleggingen tilrettelegger jobbkonsulent arbeidsoppgavene:

| Utfordring | Mulig tilrettelegging |
|---|---|
| Lese instrukser | Muntlig gjennomgang, bilder, video |
| Fylle ut skjemaer | Forhåndsutfylte maler, hjelp av kollega |
| Bruke PC | Opplæring i aktuelle systemer, tastaturforkorter |
| Kommunisere skriftlig | Taleskriving, maler for e-post |
| Regnestykker | Kalkulator, forhåndslaget oversikt |

Tilretteleggingen koordineres med arbeidsgiver og er en del av jobbanalysen
(se fase 4).

## Kobling til realkompetansevurdering

Dersom kartleggingen avdekker kompetanse tilsvarende læringsmål i videregående
opplæring, kan realkompetansevurdering (RKV) hos Rogaland fylkeskommune gi
formell anerkjennelse. Jobbkonsulent kan bistå i denne prosessen.

Se [Andre aktører](../samarbeid/andre-aktorer.md) for mer om RKV-prosessen.

## Grunnleggende ferdigheter og ny kravspesifikasjon

Ny kravspesifikasjon (19.12.2025) legger vekt på at formell opplæring kan
skje *parallelt* med AFT. Det åpner for at opplæring i grunnleggende
ferdigheter kan koordineres med deltakelse i voksenopplæring eller
kursarrangører — uten at det krever pause fra arbeidstrening.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 13: verktoy/dokumentasjonsmaler.md

**Files:**
- Modify: `docs/verktoy/dokumentasjonsmaler.md`

**Kilde:** Løsningsbeskrivelse kap. 5, NAV kravspesifikasjon kap. 5, internt praksiswissen

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Dokumentasjonsmaler
description: Oversikt over malene SPS bruker — plan, avtale om arbeidspraksis, observasjonsskjema og sluttrapport — med veiledning i bruk.
sidebar_label: Maler
sidebar_position: 5
tags: [innføring]
---

# Dokumentasjonsmaler

God dokumentasjon er en del av den faglige leveransen — ikke bare
administrativt papirarbeid. Malene beskrevet her er de sentrale
dokumentene i AFT-forløpet.

:::note
Selve malene (tomme skjemaer) finnes i SPS' interne systemer og Nav-portalen.
Denne siden beskriver formål, struktur og god bruk av dem.
:::

## Plan for tiltaksgjennomføring

**Hvem:** Deltaker og jobbkonsulent (Nav godkjenner)
**Format:** Navs mal for plan — digital i Navs oppfølgingssystem
**Se:** [Plan for tiltaksgjennomføring](../plan/index.md) for full beskrivelse

Planen inneholder:
- Yrkesmål og delmål
- Aktiviteter med ansvar og tidsfrister
- Status og progresjon (oppdateres fortløpende)
- Faglig begrunnelse for valg (intern arena, lav deltakelse)
- Deltakelsesprosent og begrunnelse

**God planpraksis:**
- Skriv planen *med* deltaker — ikke for dem
- Bruk konkrete, SMART-formulerte mål
- Oppdater status ved hvert milepæl, ikke bare ved 3-månedersfristen
- Sett neste oppdateringsdato øverst i planen

---

## Avtale om arbeidspraksis

**Hvem:** Deltaker, arbeidsgiver, SPS
**Format:** SPS-mal (tre parter signerer)
**Inngås:** Før oppstart i ekstern arbeidstrening

Avtalen skal inneholde:
- Navn på partene og virksomhetens kontaktperson
- Formål med praksisen — konkret, ikke generelt
- Arbeidsoppgaver og arbeidssted
- Arbeidstid (dager og timer per uke)
- Varighet (start- og sluttdato eller milepæl)
- Tilretteleggingsbehov og ansvarlig for dem
- Oppfølgingsform — hvem gjør hva og hvor ofte
- Bestemmelser om taushetsplikt og personvern
- Yrkesskadeforsikring (dokumentasjon at arbeidsgiver er informert)

**Viktig:**
- Avtalen undertegnes *før* første arbeidsdag — aldri i etterkant
- Kopi til alle tre parter

:::note[Regelverksforankring]
Det skal dokumenteres at arbeidsgiver er informert om at deltaker anses som
arbeidstaker etter lov om yrkesskadeforsikring. Dette skjer i praksisavtalen.
:::

---

## Observasjonsskjema

**Hvem:** Jobbkonsulent (deles med deltaker)
**Format:** SPS-mal for systematisk observasjon
**Brukes:** I arbeidspraksis (fase 5) og intern arena (fase 2.5)

Skjemaet inneholder:
- Observatør, dato, sted
- Hvilken situasjon/oppgave som ble observert
- Beskrivelse av atferd (hva skjedde, konkret)
- Vurdering (tolkning) — tydelig skilt fra observasjon
- Tiltak eller justeringer som anbefales

**Se:** [Systematisk observasjon](./observasjon.md) for prinsipper og etikk

---

## Sluttrapport

**Hvem:** Jobbkonsulent (til Nav-veileder)
**Format:** Navs mal for sluttrapport
**Sendes:** Ved avslutning av tiltaksperioden

Sluttrapporten skal dokumentere:
- Deltakers utvikling gjennom tiltaksperioden
- Gjennomførte aktiviteter og resultater
- Begrunnelse for utfallet (overgang til arbeid, avslutning uten mål, etc.)
- Eventuelle anbefalinger for videre oppfølging

:::note[Regelverksforankring]
Sluttrapport er nå tatt inn i tiltaksforskriften (høringsnotat 27.06.2025).
Det er et krav, ikke et valg.
:::

**God sluttrappportpraksis:**
- Skriv rapporten som om den skal leses av en ny Nav-veileder som ikke
  kjenner deltaker
- Vær konkret om hva som ble forsøkt og hva som virket
- Anonymiser ikke deltaker — rapporten er ment for Nav, ikke offentligheten
- Send rapporten innen avtalte frister

---

## Generelle prinsipper for dokumentasjon

- Skriv for *leseren*, ikke for deg selv — kan en ny jobbkonsulent forstå
  situasjonen bare av dokumentet?
- Skille mellom fakta og vurdering — «deltaker møtte ikke» vs. «deltaker
  vil ikke møte»
- Dato og kontekst alltid — når skjedde det, i hvilken situasjon?
- Konfidensialitet — ingen sensitive personopplysninger sendes på
  ukryptert e-post
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 14: Bygg-sjekk etter samarbeid og verktøy

- [ ] **Steg 1: Full bygg-sjekk**

```powershell
pnpm build 2>&1 | Select-String -Pattern "error|broken" -CaseSensitive:$false
```

Forventet: ingen feil. Alle 7 samarbeid- og verktøy-sider generert.

---

## Task 15: regelverk/kravspesifikasjonen.md

**Files:**
- Modify: `docs/regelverk/kravspesifikasjonen.md`

**Kilde:** NAV kravspesifikasjon 19.12.2025, `knowledge_base/Ny kravspesifikasjon for Arbeidsforberedende trening.pdf`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Kravspesifikasjonen
description: NAVs kravspesifikasjon for AFT (19.12.2025) — sammendrag av de ni kapitlene, innholdselementene 4a–4f og hva de krever i praksis.
sidebar_label: Kravspesifikasjonen
sidebar_position: 1
tags: [innføring, oppfriskning]
---

# Kravspesifikasjonen

NAVs kravspesifikasjon for Arbeidsforberedende trening (19.12.2025) er det
formelle grunnlaget for hva SPS forplikter seg til å levere. Håndboken er
bygget rundt kravene den stiller.

:::note[Regelverksforankring]
AFT er hjemlet i kapittel 13 i tiltaksforskriften. Kravspesifikasjonen
utfyller og konkretiserer forskriftens krav.
:::

## Ni kapitler

Kravspesifikasjonen er organisert i ni kapitler:

| Kapittel | Innhold |
|---|---|
| **1** | Formål og målgruppe |
| **2** | Inntak og tildeling |
| **3** | Tiltaksarrangørens ansvar og organisering |
| **4** | Innhold i tiltaket |
| **5** | Plan for tiltaksgjennomføring |
| **6** | Samarbeid og koordinering |
| **7** | Kompetansekrav |
| **8** | Kvalitet og dokumentasjon |
| **9** | Rapportering og tilskudd |

## Innholdselementer — kapittel 4

Kapittel 4 er kjernen i kravspesifikasjonen. Det beskriver seks
innholdselementer (4a–4f) som skal være til stede i tiltaket:

| Element | Innhold | Kobling til tiltaksløpet |
|---|---|---|
| **4a** | Kartlegging av ressurser, interesser og bistandsbehov. Karriereveiledning. | Fase 1–2 |
| **4b** | Arbeidstrening — primært i ordinær virksomhet. Intern arena kun unntaksvis. | Fase 2–5 |
| **4c** | Opplæring og kompetanseheving parallelt med arbeidstrening | Fase 5 |
| **4d** | Bistand til å finne jobb — jobbsøking, jobbmatch, samarbeid med arbeidsgiver | Fase 3–4 |
| **4e** | Tett og faglig oppfølging i arbeidssituasjon | Fase 5 |
| **4f** | Koordinering med andre tjenester | Hele forløpet |

## Hva kravspesifikasjonen sier om ordinært arbeidsliv

Kravspesifikasjonen er tydelig: **ordinær virksomhet er normen, ikke
unntaket**.

- Arbeidstrening skal «fortrinnsvis» skje i ordinær virksomhet
- Intern arbeidstrening er «kun unntaksvis» og skal begrunnes
- Deltaker skal ha «forsøkt arbeidstrening i ordinær virksomhet» innen tre måneder
- Nav kan stille krav om ekstern praksis dersom jobbkonsulent ikke oppnår dette

Høringsnotat 27.06.2025 forsterker dette: ordinær arbeidsutprøving går fra
«fortrinnsvis» til eksplisitt *krav*.

## Kompetansekrav — kapittel 7

Kravspesifikasjonen stiller krav til jobbkonsulentenes kompetanse. Individuelt
skal den enkelte jobbkonsulent dekke seks kompetanseområder. Fire ytterligere
kompetanseområder skal dekkes samlet av teamet.

SPS' fire metodiske bærebjelker (SE, MI, styrkebasert, karriereveiledning)
er direkte svar på disse kravene.

## Resultatkrav — kapittel 9

Kravspesifikasjonen setter krav til resultater:

- **50 %** av deltakere skal gå over til arbeid eller utdanning ved endt tiltak
- Avvik fra kravene kan påvirke tilskudd og kontraktforhold

:::warning[Vær oppmerksom]
Resultatkravet er ikke et mål om at *alle* skal lykkes. Det er et
systemnivå-krav. For den enkelte deltaker er målet alltid best mulig
utfall — uavhengig av om det teller som «overgang til arbeid».
:::

## Fem endringer fra høringsnotat 27.06.2025

Tiltaksforskriften er under revisjon. Disse endringene er varslet og
påvirker vår praksis allerede:

1. **Ordinær arbeidsutprøving som krav** — ikke bare «fortrinnsvis»
2. **Formell opplæring parallelt med AFT** — nå hjemlet
3. **Oppfølging etter ansettelse** — nå hjemlet
4. **Sluttrapport** — tas inn i forskriften (var allerede praksis)
5. **Differensierte satser** — tilskudd etter faktisk deltakelse, ikke flat sats
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 16: regelverk/varighet-og-deltakelse.md

**Files:**
- Modify: `docs/regelverk/varighet-og-deltakelse.md`

**Kilde:** NAV kravspesifikasjon kap. 9, `knowledge_base/aft_ny_spec (orig fonts).pptx`

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Varighet og deltakelse
description: Varighetsregler, 3-månedersfrist, deltakelsesprosent og tilskuddsmodell — det praktiske regelverket jobbkonsulenten trenger å kjenne.
sidebar_label: Varighet og deltakelse
sidebar_position: 2
tags: [innføring, oppfriskning]
---

# Varighet og deltakelse

## Varighet

AFT har følgende varighetesrammer:

| Situasjon | Maksimal varighet |
|---|---|
| Standard tiltaksperiode | 1 år |
| Med forlengelse (ett år ekstra) | 2 år |
| Med opplæring mot formell kompetanse | 3 år |

**Forlengelse er et faglig virkemiddel, ikke en rettighet.** Nav godkjenner
forlengelse basert på planen og dokumentert progresjon.

Se [Forlengelse og avslutning](../plan/forlengelse-og-avslutning.md) for krav til
dokumentasjon og prosess.

## 3-månedersfristen

:::warning[Viktig]
Deltaker skal ha *forsøkt* eller være i arbeidstrening i **ordinær virksomhet
innen tre måneder** etter oppstart.
:::

Tre måneder er ikke en frist for å ha jobb — det er en frist for å ha
*forsøkt ekstern arbeidspraksis*. Avvik skal begrunnes faglig i planen.

Nav kan stille krav om ekstern praksis dersom tre-månedersfristen nærmer seg
og intern arena fortsatt er eneste arena.

## Deltakelsesprosent

Deltakelsesprosenten er Nav og arbeidsgivers grunnlag for å beregne tilskudd
og registrere deltakelse.

**Reglene:**
- **De første tre månedene:** 100 % registreres, uavhengig av faktisk aktivitetsnivå
- **Fra og med 4. måned:** Justeres etter faktisk aktivitet og bistandsbehov
- **Minimum:** 40 % — under 40 % bør utløse en hensiktsmessighetsvurdering

Deltakelsesprosent settes av Nav-veileder basert på planen og jobbkonsulentens
faglige vurdering.

:::tip[Praktisk tips]
Ikke vent til 3-månedersgjennomgangen med å ta opp at deltakelsesprosenten
bør justeres. Varsle Nav-veileder fortløpende — særlig dersom det er store
avvik mellom registrert og reell deltakelse.
:::

## Tilskuddsmodell

SPS mottar tilskudd fra Nav for hver deltaker basert på:
- Avtalte plasser (kapasitetsbetaling)
- Faktisk deltakelse (resultattilskudd for overgang til arbeid/utdanning)

**Høringsnotat 27.06.2025 varsler:** Innføring av *differensierte satser*
etter faktisk deltakelsesprosent. Dette betyr at tilskuddet i større grad
vil speile reell deltakelse — og at systematisk overregistrering av
deltakelsesprosent vil få finansielle konsekvenser.

## Registrering av deltakelse

Jobbkonsulent registrerer:
- **Planlagt deltakelse** — per uke, i planen
- **Faktisk deltakelse** — oppmøte og aktivitet, dokumentert løpende
- **Fravær** — type, årsak og varsling til Nav

Fravær registreres fortløpende og meldes Nav ved ugyldig fravær eller
uteblivelse innen to virkedager.

## Spesielle situasjoner

| Situasjon | Deltakelse |
|---|---|
| Deltaker starter i jobb under AFT | 50 % (fra ansettelsesdato) |
| Deltaker inngår lærekontrakt | 50 % (fra kontraktdato) |
| Deltaker er syk (egenmelding) | Registreres som fravær, ikke ugyldig |
| Deltaker slutter frivillig | Avsluttes — Nav varsles |

:::note
Når deltaker er i ekstern arbeidspraksis, varsler deltaker *både* arbeidsgiver
og jobbkonsulent ved fravær.
:::
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 17: regelverk/personvern.md

**Files:**
- Modify: `docs/regelverk/personvern.md`

**Kilde:** GDPR (personopplysningsloven), forvaltningsloven §§ 13–13f, sosialtjenesteloven

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Personvern og taushetsplikt
description: Taushetsplikt, GDPR, samtykke og hva som kan deles med Nav, arbeidsgiver og andre — jobbkonsulentens ansvar i personvernarbeidet.
sidebar_label: Personvern
sidebar_position: 3
tags: [innføring]
---

# Personvern og taushetsplikt

Jobbkonsulenten behandler sensitive personopplysninger om deltakere. Det krever
kunnskap om taushetsplikten, GDPR og hva som kan deles med hvem.

## Taushetsplikten

Jobbkonsulenter har **taushetsplikt** etter forvaltningsloven §§ 13–13f.
Dette innebærer at opplysninger om deltakers personlige forhold ikke kan
videreformidles uten grunnlag.

Taushetsplikten gjelder:
- Personlige og familiemessige forhold
- Helse og diagnose
- Økonomi
- Andre sensitive opplysninger deltaker har delt

**Hvem taushetsplikten gjelder overfor:**
- Arbeidsgivere
- Andre etater og tjenester
- Kolleger (utenfor teamet)
- Familie og pårørende

:::warning[Vær oppmerksom]
Taushetsplikten gjelder selv om deltaker ikke eksplisitt har bedt om
konfidensialitet. Standardinnstillingen er taushet — ikke deling.
:::

## GDPR og behandling av personopplysninger

Som behandler av personopplysninger er SPS underlagt GDPR
(personvernforordningen, implementert i norsk lov som personopplysningsloven).

**Grunnleggende prinsipper:**
- **Formålsbegrensning** — opplysninger innhentes til et konkret formål
  og brukes ikke til noe annet
- **Dataminimering** — innhent kun det som er nødvendig
- **Lagringsbegrensning** — oppbevar ikke lenger enn nødvendig
- **Integritet og konfidensialitet** — sikker lagring og overføring

Jobbkonsulenter skal:
- Kun registrere opplysninger med faglig begrunnelse
- Ikke lagre sensitiv informasjon på private enheter
- Bruke godkjente systemer for dokumentasjon

## Samtykke

Samtykke er grunnlaget for de fleste opplysningene vi innhenter og deler
i AFT-forløpet.

**Et gyldig samtykke er:**
- Frivillig — deltaker kan si nei uten konsekvenser
- Informert — deltaker forstår hva de samtykker til
- Spesifikt — gjelder bestemte opplysninger til bestemte mottakere
- Aktivt — ikke forhåndsavkrysset

Bruk SPS' samtykkeskjema *før* du deler opplysninger med arbeidsgiver,
helsepersonell eller andre aktører.

## Hva kan deles med Nav?

Nav-veileder har tilgang til opplysninger som er nødvendige for å følge
opp tiltaksdeltakelsen. Jobbkonsulent deler:

- Planen (inkludert mål, aktiviteter og progresjon)
- Fravær og deltakelsesprosent
- Vurderinger av hensiktsmessighet
- Sluttrapport ved avslutning

Helseopplysninger og detaljert informasjon om private forhold deles
*ikke* med Nav — med mindre deltaker eksplisitt samtykker og det er
faglig begrunnet.

## Hva kan deles med arbeidsgiver?

Arbeidsgiver trenger informasjon for å tilrettelegge for deltaker. Det er
likevel deltakers valg hva de deler.

**Uten samtykke fra deltaker — ingenting utover det nødvendige:**
- At deltaker er i AFT-tiltak (ja, det kan deles)
- Tilretteleggingsbehov (ja, dersom deltaker samtykker)
- Diagnose eller helseopplysninger (nei, med svært få unntak)

**Med samtykke fra deltaker:**
- Hva slags bistandsbehov de har
- Relevante helseopplysninger dersom det er nødvendig for tilrettelegging

:::tip[Praktisk tips]
Snakk med deltaker om *disclosure* — hva ønsker de at arbeidsgiver skal
vite? Forbered gjerne hva deltaker kan si selv, fremfor at jobbkonsulent
forteller det for dem.
:::

## Praktiske regler

- Bruk alltid godkjent samtykkeskjema før deling
- Sensitiv kommunikasjon sendes på kryptert kanal — ikke ukryptert e-post
- Ikke ta bilder av dokumenter på privat telefon
- Makuler fysiske dokumenter med personopplysninger
- Spørsmål om taushetsplikt: ta opp med avdelingsleder

## Deltakers rettigheter

Deltaker har rett til:
- Innsyn i egne opplysninger
- Korrigering av feilaktige opplysninger
- Sletting (med visse begrensninger)
- Informasjon om hvem som behandler opplysningene

Dersom deltaker ønsker innsyn, koordineres dette med avdelingsleder.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 18: fordypning/psykisk-helse.md

**Files:**
- Modify: `docs/fordypning/psykisk-helse.md`

**Kilde:** IPS-litteratur, Haug et al. (2019), Løsningsbeskrivelse kap. 1.2

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Psykisk helse i arbeidsrettet kontekst
description: Psykisk helse og arbeid — funksjonsorientert perspektiv, IPS, disclosure og jobbkonsulentens rolle ved psykiske helseproblemer.
sidebar_label: Psykisk helse
sidebar_position: 1
tags: [fordypning]
---

# Psykisk helse i arbeidsrettet kontekst

:::info[Fordypning]
Denne siden er for erfarne jobbkonsulenter eller ved faglig fordypning.
Den gir bakgrunnskunnskap som utfyller, men ikke erstatter, god praksis
i de ordinære fasene.
:::

Psykiske helseproblemer er vanlig i AFT-målgruppen. Kunnskap om psykisk
helse i et arbeidsrettet perspektiv gjør jobbkonsulenten bedre rustet til
å støtte deltakere i møte med arbeidslivet.

## Funksjonsorientert perspektiv

I AFT-sammenheng er vi ikke opptatt av diagnose som sådan — vi er opptatt
av *funksjon i arbeidssituasjoner*.

To spørsmål er relevante:

1. **Hva kan deltaker gjøre?** — ikke hva er diagnosen
2. **Hva trenger deltaker for å fungere bedre?** — ikke hva er årsaken

Et funksjonsorientert perspektiv unngår stigma og begrensende antakelser:
en person med en psykoselidelse kan ha høy funksjon i arbeid gitt riktig
tilrettelegging og oppfølging.

:::warning[Vær oppmerksom]
Unngå å trekke konklusjoner om arbeidsevne basert på diagnose alene.
Diagnose og funksjon korrelerer svakt.
:::

## Vanlige utfordringer og implikasjoner for arbeid

| Utfordring | Vanlige implikasjoner for arbeid |
|---|---|
| Angst | Krevende sosiale situasjoner, unngåelse, redusert konsentrasjon |
| Depresjon | Redusert initiativ, energi og motivasjon, tristhet, konsentrasjonsvansker |
| ADHD | Vansker med vedvarende oppmerksomhet, impulsivitet, organisering |
| Bipolar lidelse | Ustabilt oppmøte, varierende energi, risiko ved mani |
| PTSD | Triggerreaksjoner, hypervigilans, konsentrasjonsvansker |
| Psykose (stabilisert) | Vansker med kompleks informasjon, sosial tilbaketrekking |

Tabellen er veiledende — individuell variasjon er stor.

## IPS — Individual Placement and Support

IPS er en evidensbasert tilnærming til arbeidsinkludering for personer med
alvorlige psykiske lidelser. Den bygger på SE-prinsippene, men er tilpasset
og forsterket for målgruppen:

- Rask plassering i ordinært arbeidsliv (place-then-train)
- Tett integrering med psykiatrisk behandling
- Ubegrenset varighet på oppfølging
- Jobbsøking basert på deltakers preferanser — ikke «hva som er realistisk»

**IPS og AFT:** AFT er ikke IPS — men deler de grunnleggende prinsippene.
For deltakere med alvorlige psykiske lidelser kan IPS være en mer
hensiktsmessig tjeneste. Jobbkonsulent bør kjenne til IPS og kunne anbefale
det overfor Nav der det er aktuelt.

## Disclosure — åpenhet om helseutfordringer

*Disclosure* er spørsmålet om, når og hvordan deltaker forteller arbeidsgiver
om psykiske helseproblemer.

**Det er alltid deltakers valg** — jobbkonsulent råder og støtter, men
bestemmer ikke.

**Hensyn for disclosure:**

| Argument for å fortelle | Argument for ikke å fortelle |
|---|---|
| Muliggjør tilrettelegging | Risiko for stigma og diskriminering |
| Gir forklaring ved atferd arbeidsgiver lurer på | Diagnose er ikke nødvendig for tilrettelegging |
| Kan styrke forholdet til arbeidsgiver | Kan påvirke karrieremuligheter |

**Jobbkonsulentens rolle:**
- Informer om fordeler og ulemper ved ulike nivåer av disclosure
- Diskuter hva som *faktisk* trengs for tilrettelegging
- Forbered deltaker på potensielle reaksjoner
- Bistå ved behov for å formulere hva de ønsker å si

:::tip[Praktisk tips]
Deltaker trenger ikke si «jeg har angst» for å få tilrettelegging. «Jeg
fungerer best i en stille del av kontorlandskapet» er tilstrekkelig og
personvernvennlig.
:::

## Jobbkonsulentens grenser

Jobbkonsulenten er ikke en terapeut. Det er viktig å kjenne grensene:

- Jobbkonsulent lytter, validerer og støtter — men behandler ikke
- Dersom deltaker er i krise: kontakt avdelingsleder og sikre at deltaker
  er i kontakt med behandler
- Dersom deltaker opplyser om selvmordsrisiko: ta det på alvor, kontakt
  avdelingsleder umiddelbart og sikre at deltaker er i kontakt med hjelp

Arbeidsrettet bistand og psykologisk behandling skal utfylle hverandre,
ikke forveksles.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 19: fordypning/autistisk-utbrenthet.md

**Files:**
- Modify: `docs/fordypning/autistisk-utbrenthet.md`

**Kilde:** Trondsen (2024), forskning på masking og autistisk utbrenthet, ASIAS-metodikk

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Autistisk utbrenthet og masking
description: Masking som kompensasjonsstrategi, autistisk utbrenthet som konsekvens, og hva dette betyr for jobbkonsulentarbeidet.
sidebar_label: Autistisk utbrenthet
sidebar_position: 2
tags: [fordypning]
---

# Autistisk utbrenthet og masking

:::info[Fordypning]
Denne siden er for erfarne jobbkonsulenter eller ved faglig fordypning.
Den er særlig relevant for jobbkonsulenter som arbeider med deltakere på
autismespekteret.
:::

## Hva er masking?

Masking (også kalt *camouflaging*) er en kompensasjonsstrategi der autistiske
personer undertrykker eller skjuler autistiske trekk for å passe inn i
neurotypiske sosiale normer.

Masking kan innebære:
- Tvinge øyekontakt selv om det er ubehagelig
- Imitere andres sosiale atferd bevisst
- Undertrykke stimming (gjentakende bevegelser som hjelper regulering)
- Skjule usikkerhet i sosiale situasjoner med innøvd «manus»
- Overvåke seg selv konstant for å unngå «å gjøre noe feil»

Masking kan gjøre autistiske personer svært vanskelig å identifisere —
de fremstår som «neurotypiske» i korte, avgrenset situasjoner. Prisen
er enorm energibruk.

## Autistisk utbrenthet

Autistisk utbrenthet er en tilstand av langvarig og gjennomgripende
utmattelse som følge av vedvarende masking og overbelastning.

**Kjennetegn:**
- Markert reduksjon i funksjonsnivå (regresjon i ferdigheter)
- Økt følsomhet for sanseinntrykk
- Sosial tilbaketrekking
- Tap av ferdigheter som tidligere var automatiserte
- Dyp, kronisk utmattelse som ikke bedres med hvile

**Utbrenthet vs. depresjon:**
Autistisk utbrenthet ligner depresjon, men skiller seg fra den på viktige
punkter:

| | Autistisk utbrenthet | Klinisk depresjon |
|---|---|---|
| Utløser | Sosial overbelastning og masking | Ofte livshendelser eller biokjemi |
| Bedres av | Redusert sosial eksponering, trygghet | Behandling, aktivitet, sosialt samvær |
| Ferdighetsregresjon | Vanlig | Sjelden |
| Respons på behandling | Tradisjonell depresjonsbehandling hjelper lite | God respons på antidepressiva og terapi |

Feildiagnosering som depresjon og tilhørende behandling kan forverre
autistisk utbrenthet.

## Implikasjoner for jobbkonsulentarbeidet

### Gjenkjenne masking

En deltaker som «virker OK» på korte møter kan være i en maskingperiode
som er enormt krevende. Tegn på masking:

- Ekstrem utmattelse etter sosiale aktiviteter
- Stor variasjon mellom «gode» og «dårlige» dager
- Vansker med å uttrykke egne behov direkte
- Perfeksjonistisk atferd som dekker over usikkerhet

### Tilpasse rammene

For å redusere maskingbehovet:

- Gi eksplisitt, tydelig informasjon — unngå subtile sosiale koder
- Tilby forutsigbarhet: fast tidspunkt, fast sted, klar agenda
- Aksepter alternative kommunikasjonsformer (skriftlig, via mellommann)
- La deltaker sette tempo — ikke press på sosial deltakelse
- Tillat stimming og andre selvregulerende atferder uten kommentar

:::tip[Praktisk tips]
Spør eksplisitt: «Er det noe i rammene rundt møtene våre som gjør det
vanskeligere for deg?» En autistisk deltaker vil sjelden si det selv.
:::

### Jobbmatch

Masking er sentralt i jobbmatchen. Riktig arbeidsmiljø kan redusere
maskingbehovet dramatisk:

- Tydelig struktur og forutsigbare oppgaver
- Begrenset sosial kompleksitet
- Mulighet for selvregulering (pauser, stille rom, bevegelse)
- Klar, direkte kommunikasjon fra kolleger og ledere
- Sansemessig tilpasset miljø (støy, lys, lukt)

ASIAS-verktøyet er designet for å kartlegge nettopp disse dimensjonene
(se [Karriereverktøy](../verktoy/karriereverktoy.md)).

### Disclosure på autismespekteret

Disclosure er særlig komplekst for autistiske deltakere:
- Sen diagnose er vanlig — mange vet ikke at de er autistiske
- Stigma rundt autisme er fremdeles høyt i arbeidslivet
- Fordelene ved åpenhet (tilrettelegging) og ulempene (stigma) er begge reelle

Jobbkonsulent bør hjelpe deltaker å formulere behov *uten* nødvendigvis
å måtte oppgi diagnose: «Jeg jobber best med klare instruksjoner og lite
bakgrunnsstøy» er nok.

## Referanser

Trondsen, M.V. (2024). *Autistisk utbrenthet og masking i voksen alder*.
Relevant forskning på masking: Hull et al. (2017), Pearson & Rose (2021).
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 20: fordypning/epistemic-trust.md

**Files:**
- Modify: `docs/fordypning/epistemic-trust.md`

**Kilde:** Fonagy, Luyten et al. (2015, 2019), AMBIT-rammeverket

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Epistemic trust
description: Epistemic trust (tillitsbasert læring) og AMBIT — teoretisk rammeverk for å forstå relasjonsarbeid med deltakere som har lav tillit til hjelpeapparatet.
sidebar_label: Epistemic trust
sidebar_position: 3
tags: [fordypning]
---

# Epistemic trust

:::info[Fordypning]
Denne siden gir teoretisk dybde til relasjonsarbeidet. Den er særlig
relevant for erfarne jobbkonsulenter som arbeider med deltakere med
langvarig mistillit til hjelpeapparatet.
:::

## Hva er epistemic trust?

*Epistemic trust* (epistemic = knyttet til kunnskap) betegner
**viljen til å ta inn og lære av informasjon som kommer fra en annen person**.

Fonagy, Luyten og kolleger (2015, 2019) definerer det slik: epistemic tillit
er tilliten til at en annen persons kommunikasjon er genuin, relevant og
gjelder for en selv.

Uten epistemic tillit er det svært vanskelig å nyttiggjøre seg bistand —
uansett hvor god hjelpen er i teorien.

## Epistemic tillit og mistillit

| Epistemic tillit | Epistemic mistillit |
|---|---|
| «Denne personen vil meg vel og kjenner min situasjon» | «Denne personen forstår meg ikke, eller er ute etter noe» |
| Åpen for ny informasjon og perspektiver | Avvisende, defensiv, «vet bedre selv» |
| Kan endre seg gjennom relasjon | Vanskelig å nå gjennom vanlige teknikker |
| Grunnlag for læring og utvikling | Blokkerer for læring og utvikling |

**Epistemic hypervigilans** er det ytterste: en konstant beredskap for å
bli lurt eller sviktet, som gjør det nesten umulig å ta imot hjelp.

## Relevans for AFT-målgruppen

Mange deltakere i AFT har hatt gjentatte, negative møter med hjelpeapparatet
over år. De har lært — rasjonelt og erfaringsbasert — at hjelpere ikke
alltid holder det de lover, ikke alltid forstår situasjonen, og noen ganger
gjør ting verre.

Resultatet er **lært epistemic mistillit**: en innebygd, automatisk motstand
mot bistand. Dette er ikke patologi — det er en adaptiv respons på faktiske
erfaringer.

Konsekvensen: tradisjonelle hjelpeteknikker virker dårlig. Råd som «prøv
dette», kartleggingssamtaler og planarbeid treffer ikke — fordi informasjonen
filtreres ut før den tas inn.

## Hva bygger epistemic tillit?

Fonagy et al. peker på tre elementer som aktiverer epistemic tillit:

1. **Contingency** (responsivitet) — hjelperen reagerer på det jeg faktisk
   gjør og sier, ikke på et forventet mønster
2. **Marked mirroring** — hjelperen speiler mine følelser og opplevelser på
   en måte som viser at de er forstått — men fra et litt distansert, trygt sted
3. **Mentalisering** — hjelperen viser genuint at de forsøker å forstå
   hva som foregår *inne i meg*, ikke bare hva jeg gjør

Fellesnevneren: **du møter meg som den du er, ikke som rollen din**.

:::tip[Praktisk tips]
Epistemic tillit bygges ikke gjennom metoder — den bygges gjennom relasjon.
Mer tid, mer konsistens, mer genuin interesse. Teknikker er bieffekt av
god relasjon, ikke omvendt.
:::

## AMBIT

**AMBIT** (Adaptive Mentalization-Based Integrative Treatment) er et
praksisrammeverk utviklet ved Anna Freud Centre (UK) for å hjelpe
hjelpere i arbeid med unge og voksne med komplekse behov og lav tillit.

AMBIT organiserer arbeidet i fire dimensjoner:

| Dimensjon | Fokus |
|---|---|
| **Working with the young person / client** | Mentaliseringsbasert relasjon med klienten |
| **Working with the team** | Støtte og samarbeid internt i hjelperteamet |
| **Working with networks** | Koordinering med andre aktører rundt klienten |
| **Working on learning** | Refleksjon og faglig utvikling |

AMBIT er ikke en behandlingsmetode — det er et rammeverk for å organisere
hjelpeinnsatsen slik at de grunnleggende relasjonelle betingelsene for
epistemic tillit er til stede.

## Mentalisering

Mentalisering er **evnen til å forstå atferd som uttrykk for indre tilstander**
— hos seg selv og andre.

Eksempel: En deltaker som ikke møter opp, viser «manglende motivasjon» kun
dersom vi ikke mentaliser. Mentaliser vi, spør vi: *Hva er det som gjør det
vanskelig for hen å møte opp?* — og svaret er sjelden lathet.

God mentalisering i jobbkonsulentarbeidet:
- Undres fremfor å konkludere
- Søker forståelse av atferd *innenfra*, ikke bare *utenfra*
- Tåler usikkerhet om hva som egentlig foregår
- Er åpen for at jobbkonsulentens egne reaksjoner påvirker situasjonen

## Kobling til MI

MI og epistemic trust bygger på de samme grunnleggende prinsippene:
- Partnerskap og aksept i MI → responsivitet og marked mirroring i epistemic trust
- Nysgjerrighet i MI → mentalisering
- Rullende med motstand i MI → respekt for epistemic mistillit

MI er, fra et epistemic trust-perspektiv, en evidensbasert måte å bygge
epistemic tillit på.

## Referanser

Fonagy, P., Luyten, P., Allison, E., & Campbell, C. (2019). *Mentalizing,
epistemic trust and the phenomenology of psychotherapy*. Psychopathology.
AMBIT: www.annafreud.org/ambit
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 21: fordypning/sosialt-arbeid.md

**Files:**
- Modify: `docs/fordypning/sosialt-arbeid.md`

**Kilde:** Levin (2021), sosialarbeider-faglitteratur

- [ ] **Steg 1: Skriv filen**

```mdx
---
title: Fagtradisjonen sosialt arbeid
description: Person-i-situasjon, empowerment og sosialt arbeid som faglig tradisjon — grunnlaget for jobbkonsulentarbeidets menneskesyn og praksis.
sidebar_label: Sosialt arbeid
sidebar_position: 4
tags: [fordypning]
---

# Fagtradisjonen sosialt arbeid

:::info[Fordypning]
Denne siden gir faglig-teoretisk dybde til jobbkonsulentarbeidets menneskesyn.
Den er særlig relevant for jobbkonsulenter med sosialfaglig bakgrunn, men gir
nyttig perspektiv for alle.
:::

Jobbkonsulentarbeid er forankret i sosialt arbeid som faglig tradisjon.
Å forstå dette grunnlaget hjelper deg å sette arbeidet inn i en faglig ramme —
og å begrunne praksis overfor kolleger, brukere og samarbeidspartnere.

## Hva er sosialt arbeid?

Sosialt arbeid er verken medisin (som behandler sykdom) eller pedagogikk
(som underviser). Det er en selvstendig fagdisiplin med eget menneskesyn,
etikk og kunnskapsgrunnlag.

Internasjonalt defineres sosialt arbeid (IFSW, 2014) som:

> *En praksis-basert profesjon og akademisk disiplin som fremmer sosial
> endring og utvikling, sosial sammenheng, og myndiggjøring og frigjøring
> av mennesker. Prinsipper for sosial rettferdighet, menneskerettigheter,
> kollektivt ansvar og respekt for mangfold er sentrale i sosialt arbeid.*

## Person-i-situasjon

*Person-i-situasjon* er det grunnleggende forståelsesperspektivet i sosialt
arbeid (Levin, 2021). Det betyr at vi aldri kan forstå en person uten å
forstå konteksten de befinner seg i.

**Implikasjoner for AFT:**
- En deltaker som «ikke vil jobbe» forstås ikke uten å se på situasjonen —
  hva er de hjemmeforhold, økonomi, helsesituasjon, tidligere erfaringer?
- Problemet er aldri bare individets — det er alltid relasjonelt og strukturelt
- Løsningen må adressere situasjonen, ikke bare individet

:::warning[Vær oppmerksom]
Person-i-situasjon er ikke et alibi for hjelpeesløshet. Det er et krav
om en bredere forståelse — som gjør intervensjonene mer treffsikre.
:::

## Empowerment

Empowerment — eller *myndiggjøring* — er et sentralt begrep i sosialt arbeid.
Det handler om å *styrke deltakers kapasitet til å ta kontroll over eget liv*.

Tre nivåer av empowerment:

| Nivå | Hva det innebærer |
|---|---|
| **Individuelt** | Deltaker opplever økt mestring og selvbestemmelse |
| **Relasjonelt** | Maktforholdet mellom hjelper og deltaker utjevnes |
| **Strukturelt** | Deltaker deltar i samfunnet som likeverdig borger |

**Empowerment i jobbkonsulentarbeidet:**
- Deltaker definerer egne mål — vi hjelper dem å nå dem
- Vi gjør *ikke* ting *for* deltaker som de kan gjøre selv
- Vi støtter deltakers stemme inn mot Nav og arbeidsgiver
- Vi anerkjenner at noen barrierer er strukturelle, ikke individuelle

## Asymmetri og maktforhold

Relasjonen mellom jobbkonsulent og deltaker er *ikke* symmetrisk. Jobbkonsulenten
har makt — til å påvirke planen, rapportere til Nav, til å anbefale avslutning.

Å anerkjenne denne asymmetrien er en forutsetning for etisk praksis:
- Vær åpen om din rolle og makt overfor deltaker
- Unngå å ta beslutninger *om* deltaker uten deltaker
- Bruk makten aktivt til å tale deltakers sak — ikke til å disiplinere

## Brukerperspektivet

Sosialt arbeid er forankret i et *brukerperspektiv* — deltaker er en aktiv
aktør, ikke en passiv mottaker av tjenester.

I AFT betyr det:
- Deltaker er ekspert på eget liv og egne behov
- Planen er et *felles* dokument — ikke noe jobbkonsulent fyller ut og
  presenterer for signering
- Tilbakemeldinger fra deltaker om hva som fungerer og ikke, er faglig
  informasjon — ikke klager

## Sosialfaglig refleksjon som faglig verktøy

Sosialt arbeid har en sterk tradisjon for *refleksjon* — å bruke egne
reaksjoner og erfaringer som faglig informasjon.

Spørsmål til refleksjon:
- Hva gjør denne deltakeren med meg? Hva er mine reaksjoner?
- Hva sier mine reaksjoner om situasjonen — og om meg?
- Tar jeg for gitt noe om denne personen basert på bakgrunnen deres?
- Hva ville jeg gjort annerledes dersom jeg forstod situasjonen bedre?

Kollegaveiledning og fagmøter er arenaene for denne refleksjonen.
De er ikke «hyggelig samtale» — de er faglig praksis.

## Referanser

Levin, I. (2021). *Hva er sosialt arbeid?* Oslo: Universitetsforlaget.
IFSW (2014). Global definition of social work.
```

- [ ] **Steg 2: Bygg og verifiser**

```powershell
pnpm build 2>&1 | Select-String "error" -CaseSensitive:$false
```

---

## Task 22: Final bygg-sjekk

- [ ] **Steg 1: Full bygg av hele prosjektet**

```powershell
pnpm build 2>&1 | Tee-Object -Variable out; $out | Select-String -Pattern "success|error|broken|pages" -CaseSensitive:$false
```

Forventet: vellykket bygg. Ingen feil. Alle 35+ sider generert.

---

## Selvgjennomgang

### Spec coverage

| Krav fra CLAUDE.md IA | Task |
|---|---|
| `metodikk/styrkebasert.md` | Task 1 |
| `metodikk/karriereveiledning-metode.md` | Task 2 |
| `metodikk/gap-modellen.md` | Task 3 |
| `metodikk/loft.md` | Task 4 |
| `samarbeid/nav-samarbeid.md` | Task 6 |
| `samarbeid/arbeidsgiversamarbeid.md` | Task 7 |
| `samarbeid/andre-aktorer.md` | Task 8 |
| `verktoy/karriereverktoy.md` | Task 9 |
| `verktoy/livshjulet.md` | Task 10 |
| `verktoy/observasjon.md` | Task 11 |
| `verktoy/grunnleggende-ferdigheter.md` | Task 12 |
| `verktoy/dokumentasjonsmaler.md` | Task 13 |
| `regelverk/kravspesifikasjonen.md` | Task 15 |
| `regelverk/varighet-og-deltakelse.md` | Task 16 |
| `regelverk/personvern.md` | Task 17 |
| `fordypning/psykisk-helse.md` | Task 18 |
| `fordypning/autistisk-utbrenthet.md` | Task 19 |
| `fordypning/epistemic-trust.md` | Task 20 |
| `fordypning/sosialt-arbeid.md` | Task 21 |

Alle 19 stubs dekket.

### Viktige hensyn for executor

- **SE = struktur, ikke metodikk.** Metodikk-seksjonen er bakgrunnskunnskap —
  ikke en parallell struktur ved siden av tiltaksløpet.
- **MI = grunnholdning.** motiverende-intervju.md er allerede skrevet. Ikke gjenta
  alt — referer til det.
- **Praksisrettet tone.** Fordypningssidene kan være mer teoretiske, men bør
  alltid koble teorien til jobbkonsulentarbeidet konkret.
- **Norsk bokmål.** LØFT skrives med Ø. GAP-modellen beholder engelske
  bokstaver siden det er et akronym/egennavn.
- **Lenker** — bruk relative stier som vist i Fase 1-planen. Sjekk at lenker
  til Fase 1-sider er korrekte (de eksisterer allerede).
