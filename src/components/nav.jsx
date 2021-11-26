import React from "react";
import styles from "./nav.module.scss";

const Nav = () => {
  // const loc = location.location;
  const loc = "fart";

  let subpage = "nothing";
  // if (loc.pathname.includes("/services/")) subpage = "services";
  // if (loc.pathname.includes("/resources/")) subpage = "resources";
  // if (loc.pathname.includes("/ideas/")) subpage = "ideas";

  return (
    <nav className={styles.root} data-active={subpage}>
      <ul>
        <li
          data-services
          // data-active={loc.pathname.includes("/services/") ? "true" : ""}
        >
          <a href="/services/major">Services</a>
          <div data-subnav>
            <a href="/services/major" className={styles.button}>
              Cloud Providers
            </a>{" "}
            <a href="/services/functions" className={styles.button}>
              Functions
            </a>{" "}
            <a href="/services/cicd" className={styles.button}>
              CI / CD
            </a>{" "}
            <a href="/services/auth" className={styles.button}>
              Auth
            </a>{" "}
            <a href="/services/forms" className={styles.button}>
              Forms
            </a>{" "}
            <a href="/services/notifications" className={styles.button}>
              Notifications
            </a>{" "}
            <a href="/services/ssgs" className={styles.button}>
              Static Site Generators
            </a>{" "}
            <a href="/services/cmss" className={styles.button}>
              CMSs
            </a>{" "}
            <a href="/services/hosting" className={styles.button}>
              Hosting
            </a>{" "}
            <a href="/services/media" className={styles.button}>
              Media
            </a>{" "}
            <a href="/services/ecommerce" className={styles.button}>
              Ecommerce
            </a>{" "}
            <a href="/services/payments" className={styles.button}>
              Payments
            </a>{" "}
            <a href="/services/monitoring" className={styles.button}>
              Monitoring
            </a>{" "}
            <a href="/services/realtime" className={styles.button}>
              Realtime
            </a>{" "}
            <a href="/services/data" className={styles.button}>
              Data Storage
            </a>
            <a href="/services/search" className={styles.button}>
              Search
            </a>
          </div>
        </li>
        <li
          // data-active={loc.pathname.includes("/resources/") ? "true" : ""}
          data-resources
        >
          <a href="/resources/">Resources</a>
        </li>
        <li
          // data-active={loc.pathname.includes("/ideas/") ? "true" : ""}
          data-ideas
        >
          <a href="/ideas/">Ideas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
