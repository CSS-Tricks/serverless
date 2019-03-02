import React from "react";
import SEO from "../components/seo";
import { Link, withPrefix } from "gatsby";

import styles from "./page.module.scss";

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

        <footer class={styles.homeFooter}>
          <h3>What is Serverless?</h3> Somebody else's computers.{" "}
          <Link to="/about/">Find out more.</Link>
        </footer>
      </div>
    </>
  );
};
