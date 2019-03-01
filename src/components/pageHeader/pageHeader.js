import React from "react";
import { Link, withPrefix } from "gatsby";

import styles from "./pageHeader.module.scss";

const PageHeader = props => {
  return (
    <header className={styles.root}>
      <div className={styles.logoArea}>
        <Link to="/">
          <img
            className={styles.logo}
            src={withPrefix(`/logo/css-tricks.svg`)}
            alt="CSS-Tricks Presents"
          />
        </Link>
        <div>
          The Power of <strong>Serverless</strong>
          <br /> for Front-End Developers
        </div>
      </div>

      <h1>{props.title}</h1>
      <div className={styles.subtitleArea}>{props.children}</div>
    </header>
  );
};

export default PageHeader;
