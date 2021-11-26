import React, { useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "./about.module.scss";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Footer from "../components/footer/footer";

export default () => {
  useEffect(() => {
    document.body.classList.remove("homepage");
    document.body.classList.remove("menu-open");
  });
  return (
    <StaticQuery
      query={graphql`
        query AboutPageQuery {
          allMarkdownRemark(
            limit: 10
            filter: { frontmatter: { title: { eq: "Homepage" } } }
          ) {
            edges {
              node {
                frontmatter {
                  title
                }
                html
              }
            }
          }
        }
      `}
      render={data => {
        const content = data.allMarkdownRemark.edges[0].node;
        return (
          <>
            <SEO
              title="What is Serverless?"
              keywords={[`serverless`, `cloud`, `cloud functions`]}
            />
            <div className={styles.root}>
              <PageHeader>
                <h1 className={styles.title}>What is serverless?</h1>
              </PageHeader>
              <div
                className={styles.textColumn}
                dangerouslySetInnerHTML={{ __html: content.html }}
              />
            </div>
            <Footer noWhatIs="true" />
          </>
        );
      }}
    />
  );
};
