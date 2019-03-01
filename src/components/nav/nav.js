import { Link } from "gatsby";
import React from "react";

import styles from "./nav.module.scss";

const Nav = ({ siteTitle }) => (
  <nav className={styles.root}>
    <ul>
      <li>
        <Link to="/services/">Services</Link>
        <Link to="services/auth">Auth</Link>
        <Link to="services/cmss">CMSs</Link>
        <Link to="services/notifications">Notifications</Link>
        <Link to="services/ssgs">Static Site Generators</Link>
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
