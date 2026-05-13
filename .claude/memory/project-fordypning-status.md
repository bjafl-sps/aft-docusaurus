---
name: project-fordypning-status
description: Fordypning-seksjonen er ferdig skrevet men skjult — plan for publisering og hva som må gjenopprettes
metadata:
  type: project
---

Fordypning-innholdet er ferdig skrevet men ikke klart til publisering. Bjarte skjulte katalogen med `_`-prefix (2026-05-13).

**Why:** Innholdet er ikke ferdig gjennomgått og ikke klart for teamet å lese ennå.

**How to apply:** Ikke referer til fordypning-sider som om de er tilgjengelige. Alle kryss-referanser er erstattet med "(kommer)"-plassholdere. Når fordypning skal publiseres, følg sjekklisten under.

## Nåværende tilstand

- Katalogen heter `docs/_fordypning/` — ekskludert fra autogenerering
- Innhold (ferdig skrevet): `psykisk-helse.md`, `autistisk-utbrenthet.md`, `epistemic-trust.md`, `sosialt-arbeid.md`
- `docs/_fordypning/index.md` finnes (og er ferdig)

## Plassholdere som må gjenopprettes ved publisering

1. **`docs/metodikk/supported-employment.md`** — linke til `../fordypning/psykisk-helse`
   - Søk etter "(kommer)" i filen — det er én setning som erstatter en lenke til psykisk-helse

2. **`docs/verktoy/karriereverktoy.md`** — linke til `../fordypning/autistisk-utbrenthet`
   - Søk etter "(kommer)" i filen — det er én setning om autistisk utbrenthet

3. **`docusaurus.config.ts`** — footer-lenke til fordypning
   - En lenke til `fordypning/psykisk-helse` (eller fordypning/index) mangler i footer

## Sjekkliste for publisering

- [ ] Gi nytt navn: `docs/_fordypning/` → `docs/fordypning/`
- [ ] Gjenopprett lenker i `supported-employment.md` og `karriereverktoy.md`
- [ ] Legg til footer-lenke i `docusaurus.config.ts`
- [ ] Kjør `pnpm build` og verifiser ingen broken links
- [ ] Koordiner med Siri om innholdet er klart
