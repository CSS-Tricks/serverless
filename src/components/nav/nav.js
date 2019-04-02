import React from "react";
import { Link } from "gatsby";

import styles from "./nav.module.scss";

const Nav = location => {
  const loc = location.location;
  return (
    <nav className={styles.root}>
      <ul>
        <li data-active={loc.pathname.includes("/services/") ? "true" : ""}>
          <Link to="/services/major">Services</Link>
        </li>
        <li data-active={loc.pathname.includes("/resources/") ? "true" : ""}>
          <Link to="/resources/">Resources</Link>
        </li>
        <li data-active={loc.pathname.includes("/ideas/") ? "true" : ""}>
          <Link to="/ideas/">Ideas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
