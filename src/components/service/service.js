import React from "react";
import { Link } from "gatsby";

import styles from "../../pages/page.module.scss";

import SEO from "../seo";
import Card from "../card/card";
import PageHeader from "../pageHeader/pageHeader";

export default props => {
  const { pageTitle, pageHeader, pageSubHeader, intro, services } = props;
  return (
    <>
      <SEO title={pageTitle} />
      <PageHeader title={pageHeader}>
        <h2>{pageSubHeader}</h2>
        <p>{intro}</p>
        <div data-subnav>
          <Link to="/services/major" className={styles.button}>
            Major Providers
          </Link>{" "}
          <Link to="services/functions" className={styles.button}>
            Cloud Functions
          </Link>{" "}
          <Link to="services/auth" className={styles.button}>
            Auth
          </Link>{" "}
          <Link to="services/forms" className={styles.button}>
            Forms
          </Link>{" "}
          <Link to="services/notifications" className={styles.button}>
            Notifications
          </Link>{" "}
          <Link to="services/ssgs" className={styles.button}>
            Static Site Generators
          </Link>{" "}
          <Link to="services/cmss" className={styles.button}>
            CMSs
          </Link>{" "}
          <Link to="services/hosting" className={styles.button}>
            Hosting
          </Link>{" "}
          <Link to="services/media" className={styles.button}>
            Media
          </Link>{" "}
          <Link to="services/payments" className={styles.button}>
            Payments
          </Link>{" "}
          <Link to="services/monitoring" className={styles.button}>
            Monitoring
          </Link>{" "}
          <Link to="services/realtime" className={styles.button}>
            Realtime
          </Link>{" "}
          <Link to="services/data" className={styles.button}>
            Data Storage
          </Link>
        </div>
      </PageHeader>
      <main className={styles.grid}>
        {services.map(({ node }, i) => {
          return (
            <Card
              logo={node.frontmatter.logo}
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              html={node.html}
              url={node.frontmatter.url}
            />
          );
        })}
      </main>
    </>
  );
};
