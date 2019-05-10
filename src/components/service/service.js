import React from "react";

import styles from "../../pages/page.module.scss";

import SEO from "../seo";
import Card from "../card/card";
import PageHeader from "../pageHeader/pageHeader";
import Footer from "../footer/footer";

export default props => {
  const { pageTitle, pageHeader, pageSubHeader, intro, services } = props;
  return (
    <>
      <SEO title={pageTitle} />
      <PageHeader title={pageHeader}>
        <h2>{pageSubHeader}</h2>
        <p>{intro}</p>
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

      <Footer />
    </>
  );
};
