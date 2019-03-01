import React from "react";

import styles from "./pageHeader.module.scss";

const PageHeader = props => {
  return (
    <header className={styles.root}>
      <h1>{props.title}</h1>
    </header>
  );
};

export default PageHeader;
