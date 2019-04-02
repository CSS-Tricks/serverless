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
          <Link to="/services/major">Major Providers</Link>
          <Link to="services/auth">Auth</Link>
          <Link to="services/cmss">CMSs</Link>
          <Link to="services/notifications">Notifications</Link>
          <Link to="services/ssgs">Static Site Generators</Link>
          <Link to="services/hosting">Hosting</Link>
          <Link to="services/media">Media</Link>
          <Link to="services/monitoring">Monitoring</Link>
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
