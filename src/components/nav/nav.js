import React from "react";
import { Link } from "gatsby";

import styles from "./nav.module.scss";

const Nav = location => {
  const loc = location.location;

  let subpage = "nothing";
  if (loc.pathname.includes("/services/")) subpage = "services";
  if (loc.pathname.includes("/resources/")) subpage = "resources";
  if (loc.pathname.includes("/ideas/")) subpage = "ideas";

  return (
    <nav className={styles.root} data-active={subpage}>
      <ul>
        <li
          data-services
          data-active={loc.pathname.includes("/services/") ? "true" : ""}
        >
          <Link to="/services/major">Services</Link>
          <div data-subnav>
            <Link to="/services/major" className={styles.button}>
              Major Providers
            </Link>{" "}
            <Link to="/services/functions" className={styles.button}>
              Cloud Functions
            </Link>{" "}
            <Link to="/services/auth" className={styles.button}>
              Auth
            </Link>{" "}
            <Link to="/services/forms" className={styles.button}>
              Forms
            </Link>{" "}
            <Link to="/services/notifications" className={styles.button}>
              Notifications
            </Link>{" "}
            <Link to="/services/ssgs" className={styles.button}>
              Static Site Generators
            </Link>{" "}
            <Link to="/services/cmss" className={styles.button}>
              CMSs
            </Link>{" "}
            <Link to="/services/hosting" className={styles.button}>
              Hosting
            </Link>{" "}
            <Link to="/services/media" className={styles.button}>
              Media
            </Link>{" "}
            <Link to="/services/ecommerce" className={styles.button}>
              Ecommerce
            </Link>{" "}
            <Link to="/services/payments" className={styles.button}>
              Payments
            </Link>{" "}
            <Link to="/services/monitoring" className={styles.button}>
              Monitoring
            </Link>{" "}
            <Link to="/services/realtime" className={styles.button}>
              Realtime
            </Link>{" "}
            <Link to="/services/data" className={styles.button}>
              Data Storage
            </Link>
          </div>
        </li>
        <li
          data-active={loc.pathname.includes("/resources/") ? "true" : ""}
          data-resources
        >
          <Link to="/resources/">Resources</Link>
        </li>
        <li
          data-active={loc.pathname.includes("/ideas/") ? "true" : ""}
          data-ideas
        >
          <Link to="/ideas/">Ideas</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
