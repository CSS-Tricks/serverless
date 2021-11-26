import React, { useEffect } from "react";
import { Link, withPrefix } from "gatsby";

import styles from "./index.module.scss";

import SEO from "../components/seo";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("homepage");
    document.body.classList.add("menu-open");
  });
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
        <div className={styles.titleArea}>
          <h1 className={styles.homepageTitle}>
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

export default Index;
