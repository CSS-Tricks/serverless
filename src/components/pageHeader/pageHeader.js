import React from "react";
import { Link, withPrefix } from "gatsby";

import styles from "./pageHeader.module.scss";

const PageHeader = props => {
  return (
    <header className={`${styles.root} ${props.className}`}>
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

        <button
          className={styles.menuButton}
          onClick={() => {
            window.scrollTo(0, 0);
            document.body.classList.toggle("menu-open");
          }}
        >
          <span className="screen-reader-text">Toggle Menu</span>
          <img src="/img/menu-button.svg" alt="" className={styles.toggleImg} />
        </button>
      </div>

      <div className={styles.h1wrap} data-title={props.title}>
        {props.title && <h1>{props.title}</h1>}
      </div>

      <div className={styles.subtitleArea} data-title={props.title}>
        {props.children}
      </div>
    </header>
  );
};

export default PageHeader;
