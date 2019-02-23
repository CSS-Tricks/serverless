import { Link } from "gatsby";
import React from "react";

import styles from "./nav.module.scss";

const Nav = ({ siteTitle }) => (
  <nav className={styles.root}>
    <ul>
      <li>
        <Link to="/services/">Services</Link>
      </li>
      <li>
        <Link to="/resources/">Resources</Link>
      </li>
      <li>
        <Link to="/ideas/">Ideas</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
