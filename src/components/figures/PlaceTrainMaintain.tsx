import React from 'react';
import styles from './PlaceTrainMaintain.module.css';

export default function PlaceTrainMaintain(): React.ReactElement {
  return (
    <figure
      className={styles.figure}
      aria-label="Sammenligning mellom tradisjonell train-then-place og SE place-train-maintain"
    >
      <div className={styles.comparison}>
        {/* Tradisjonell tilnærming */}
        <div className={styles.row}>
          <div className={styles.rowLabel}>
            <span className={`${styles.badge} ${styles.badgeTraditional}`}>
              Tradisjonell
            </span>
            <span className={styles.tagline}>train–then–place</span>
          </div>
          <div className={styles.track}>
            <div className={`${styles.block} ${styles.blockLong} ${styles.blockPrep}`}>
              <span className={styles.blockTitle}>Forberedelse og opplæring</span>
              <span className={styles.blockSub}>måneder / år i skjermet kontekst</span>
            </div>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <div className={`${styles.block} ${styles.blockShort} ${styles.blockUncertain}`}>
              <span className={styles.blockTitle}>Plassering?</span>
              <span className={styles.blockSub}>usikker overgang</span>
            </div>
          </div>
        </div>

        {/* SE: place–train–maintain */}
        <div className={styles.row}>
          <div className={styles.rowLabel}>
            <span className={`${styles.badge} ${styles.badgeSE}`}>SE</span>
            <span className={styles.tagline}>place–train–maintain</span>
          </div>
          <div className={styles.track}>
            <div className={`${styles.block} ${styles.blockShort} ${styles.blockProfile}`}>
              <span className={styles.blockTitle}>Kartlegging</span>
              <span className={styles.blockSub}>rask og ressursorientert</span>
            </div>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <div className={`${styles.block} ${styles.blockShort} ${styles.blockPlace}`}>
              <span className={styles.blockTitle}>Plassering</span>
              <span className={styles.blockSub}>ordinær virksomhet</span>
            </div>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <div className={`${styles.block} ${styles.blockMedium} ${styles.blockTrain}`}>
              <span className={styles.blockTitle}>Opplæring i reell kontekst</span>
              <span className={styles.blockSub}>tett oppfølging på arbeidsplassen</span>
            </div>
            <div className={styles.arrow} aria-hidden="true">→</div>
            <div className={`${styles.block} ${styles.blockMedium} ${styles.blockMaintain}`}>
              <span className={styles.blockTitle}>Gradvis fading</span>
              <span className={styles.blockSub}>naturlig bistand overtar</span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className={styles.caption}>
        SE snur den tradisjonelle logikken: plassering skjer tidlig, og opplæring foregår
        i reell arbeidskontekst — ikke som forberedelse i skjermede omgivelser.
      </figcaption>
    </figure>
  );
}
