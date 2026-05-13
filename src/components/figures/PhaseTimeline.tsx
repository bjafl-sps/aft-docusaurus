import React from 'react';
import styles from './PhaseTimeline.module.css';

export interface PhaseTimelineProps {
  showMilestone?: boolean;
}

// Scale: 12 months = TIMELINE_WIDTH px. Each phase: [startMonth, endMonth]
const LEFT_MARGIN = 72;
const TIMELINE_WIDTH = 660;
const SVG_WIDTH = LEFT_MARGIN + TIMELINE_WIDTH + 16;
const HEADER_H = 28;
const BAR_H = 22;
const ROW_GAP = 8;
const TOTAL_MONTHS = 12;

function mX(month: number): number {
  return LEFT_MARGIN + (month / TOTAL_MONTHS) * TIMELINE_WIDTH;
}

const PHASES = [
  {
    label: 'Fase 1',
    desc: 'Innledende kontakt',
    start: 0,
    end: 1,
    color: '#5b9cf6',
    textColor: '#fff',
  },
  {
    label: 'Fase 2',
    desc: 'Yrkeskartlegging',
    start: 0.25,
    end: 3.5,
    color: '#3d88ed',
    textColor: '#fff',
  },
  {
    label: 'Fase 2.5',
    desc: 'Intern arena (valgfri)',
    start: 1,
    end: 3,
    color: '#e8b84d',
    textColor: '#fff',
    optional: true,
  },
  {
    label: 'Fase 3',
    desc: 'Finne jobb',
    start: 2,
    end: 6,
    color: '#2878e8',
    textColor: '#fff',
  },
  {
    label: 'Fase 4',
    desc: 'Arbeidsgiversamarbeid',
    start: 3,
    end: 9,
    color: '#1a68e0',
    textColor: '#fff',
  },
  {
    label: 'Fase 5',
    desc: 'Opplæring og oppfølging',
    start: 4,
    end: 12,
    color: '#1055cc',
    textColor: '#fff',
  },
] as const;

const MONTH_LABELS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function PhaseTimeline({
  showMilestone = true,
}: PhaseTimelineProps): React.ReactElement {
  const svgHeight =
    HEADER_H + PHASES.length * (BAR_H + ROW_GAP) + (showMilestone ? 20 : 8);

  return (
    <figure
      className={styles.figure}
      aria-label="Tiltaksforløpets faser fordelt over 12 måneder"
    >
      <div className={styles.svgWrapper}>
        <svg
          viewBox={`0 0 ${SVG_WIDTH} ${svgHeight}`}
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Gantt-diagram over tiltaksforløpets faser 0–12 måneder"
        >
          {/* Month grid lines and labels */}
          {MONTH_LABELS.map((m) => {
            const x = mX(m);
            const showLabel = m === 0 || m % 2 === 0;
            return (
              <g key={m}>
                <line
                  x1={x}
                  y1={HEADER_H - 4}
                  x2={x}
                  y2={svgHeight - (showMilestone ? 18 : 4)}
                  stroke="var(--ifm-color-emphasis-200)"
                  strokeWidth="1"
                />
                {showLabel && (
                  <text
                    x={x}
                    y={HEADER_H - 8}
                    textAnchor="middle"
                    fontSize="10"
                    fill="var(--ifm-color-emphasis-600)"
                  >
                    {m === 0 ? 'Start' : `Mnd ${m}`}
                  </text>
                )}
              </g>
            );
          })}

          {/* Phase bars */}
          {PHASES.map((phase, i) => {
            const y = HEADER_H + i * (BAR_H + ROW_GAP);
            const x1 = mX(phase.start);
            const barW = mX(phase.end) - x1;
            const isOpt = 'optional' in phase && phase.optional;

            return (
              <g key={phase.label}>
                {/* Row label */}
                <text
                  x={LEFT_MARGIN - 6}
                  y={y + BAR_H / 2 + 4}
                  textAnchor="end"
                  fontSize="10"
                  fontWeight="600"
                  fill="var(--ifm-font-color-base)"
                >
                  {phase.label}
                </text>

                {/* Background track */}
                <rect
                  x={LEFT_MARGIN}
                  y={y}
                  width={TIMELINE_WIDTH}
                  height={BAR_H}
                  rx="3"
                  fill="var(--ifm-color-emphasis-100)"
                />

                {/* Phase bar */}
                <rect
                  x={x1}
                  y={y}
                  width={barW}
                  height={BAR_H}
                  rx="3"
                  fill={phase.color}
                  fillOpacity={isOpt ? 0.6 : 1}
                  strokeDasharray={isOpt ? '5 3' : undefined}
                  stroke={phase.color}
                  strokeWidth={isOpt ? 1.5 : 0}
                />

                {/* Label inside bar (only if wide enough) */}
                {barW > 55 && (
                  <text
                    x={x1 + barW / 2}
                    y={y + BAR_H / 2 + 4}
                    textAnchor="middle"
                    fontSize="9.5"
                    fill={phase.textColor}
                    fontWeight="500"
                  >
                    {phase.desc}
                  </text>
                )}
              </g>
            );
          })}

          {/* 3-month milestone */}
          {showMilestone && (
            <g>
              <line
                x1={mX(3)}
                y1={HEADER_H - 4}
                x2={mX(3)}
                y2={svgHeight - 16}
                stroke="var(--ifm-color-warning-dark)"
                strokeWidth="1.5"
                strokeDasharray="5 3"
              />
              <text
                x={mX(3)}
                y={svgHeight - 4}
                textAnchor="middle"
                fontSize="9.5"
                fill="var(--ifm-color-warning-dark)"
                fontWeight="700"
              >
                ↑ 3-mnd frist
              </text>
            </g>
          )}
        </svg>
      </div>
      <figcaption className={styles.caption}>
        Typisk forløp — varigheten tilpasses den enkelte deltaker. Fase 2.5 (intern arena) er
        valgfri og krever faglig begrunnelse. Ekstern arbeidspraksis skal være forsøkt innen
        tre måneder (stiplet markering).
      </figcaption>
    </figure>
  );
}
