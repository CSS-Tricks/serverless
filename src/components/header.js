import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";

import styles from "./header.module.scss";

const Header = ({ siteTitle }) => (
  <header className={styles.root}>
    <Link to="/">
      <h1 className={styles.siteTitle}>
        <span>The Power of</span>
        <strong>Serverless</strong>
        <span>for Front-End Developers</span>
      </h1>
    </Link>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
