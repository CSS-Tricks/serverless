import React from "react";
import { Link, withPrefix } from "gatsby";

import styles from "./index.module.scss";

import SEO from "../components/seo";

export default ({ children }) => {
  return (
    <>
      <SEO
        title="The Power of Serverless for Front-End Developers"
        keywords={[`serverless`, `cloud`, `cloud functions`]}
      />
      <div className={styles.homepageWrap}>
        <header className={styles.presentedBy}>
          <img
            className={styles.logo}
            src={withPrefix(`/logo/css-tricks.svg`)}
            alt="CSS-Tricks Presents"
          />
        </header>
        <div class={styles.titleArea}>
          <h1 class={styles.homepageTitle}>
            The Power of <strong>Serverless</strong> for Front-End Developers
          </h1>
        </div>

        <footer className={styles.homeFooter}>
          What is Serverless? <Link to="/about/">Find out →</Link>
        </footer>
      </div>
    </>
  );
};
