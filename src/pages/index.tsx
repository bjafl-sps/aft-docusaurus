import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Home(): ReactNode {
  return (
    <Layout
      title="AFT Håndbok"
      description="Intern faglig håndbok for jobbkonsulenter hos Sandnes Pro-Service"
    >
      <main className={styles.page}>
        <div className={styles.hero}>
          <span className={styles.beta}>BETA</span>
          <h1 className={styles.title}>AFT Håndbok</h1>
          <p className={styles.lead}>
            Faglig referanseverk for jobbkonsulenter hos Sandnes Pro-Service —
            metodikk, arbeidsgang og faglig grunnlag for Arbeidsforberedende
            trening.
          </p>
          <Link className="button button--primary button--lg" to="/docs/intro">
            Åpne håndboken →
          </Link>
        </div>

        <div className={styles.notice}>
          <strong>Betaversjon · mai 2026</strong>
          {" — "}Innholdet er under utarbeidelse.
        </div>
      </main>
    </Layout>
  );
}
