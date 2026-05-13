import React from 'react';
import styles from './SEFiveSteps.module.css';

export interface SEFiveStepsProps {
  compact?: boolean;
}

const STEPS = [
  {
    nr: 1,
    fase: 'Fase 1',
    seTrinn: 'Innledende kontakt og samarbeidsavtale',
    beskrivelse:
      'Bygge relasjon, forklare SE, avklare mål og bistandsbehov. Inngå samarbeidsavtale.',
  },
  {
    nr: 2,
    fase: 'Fase 2',
    seTrinn: 'Yrkeskartlegging og karriereplanlegging',
    beskrivelse:
      'Utarbeide yrkesprofil basert på interesser, styrker, kompetanse og karrieremål.',
  },
  {
    nr: 3,
    fase: 'Fase 3',
    seTrinn: 'Finne en passende jobb',
    beskrivelse:
      'Aktiv jobbsøking, jobbmatch og utvikling av jobbmuligheter hos arbeidsgivere.',
  },
  {
    nr: 4,
    fase: 'Fase 4',
    seTrinn: 'Samarbeid med arbeidsgivere',
    beskrivelse:
      'Jobbanalyse, forhandling, tilrettelegging og informasjonsplikt overfor arbeidsgiver.',
  },
  {
    nr: 5,
    fase: 'Fase 5',
    seTrinn: 'Opplæring og trening på arbeidsplassen',
    beskrivelse:
      'Tett bistand i reell jobb — gradvis overføring til naturlig bistand og fading.',
  },
] as const;

export default function SEFiveSteps({ compact = false }: SEFiveStepsProps): React.ReactElement {
  return (
    <figure
      className={styles.figure}
      aria-label="EUSEs femtrinnsmodell for Supported Employment"
    >
      <div className={styles.steps}>
        {STEPS.map((step, i) => (
          <React.Fragment key={step.nr}>
            <div className={styles.step}>
              <div className={styles.badge} aria-hidden="true">
                {step.nr}
              </div>
              <div className={styles.content}>
                <span className={styles.phaseLabel}>{step.fase}</span>
                <p className={styles.title}>{step.seTrinn}</p>
                {!compact && <p className={styles.desc}>{step.beskrivelse}</p>}
              </div>
            </div>
            {i < STEPS.length - 1 && (
              <div className={styles.connector} aria-hidden="true">
                ›
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className={styles.foundation}>
        <span>MI · Styrkebasert tilnærming · Deltakers selvbestemmelse</span>
        <span className={styles.foundationLabel}>Gjennomgående grunnlag</span>
      </div>
      <figcaption className={styles.caption}>
        Kilde: EUSE (2010). Stegene er ikke strengt sekvensielle — fasene
        overlapper og vektingen forskyves etter deltakers progresjon.
      </figcaption>
    </figure>
  );
}
