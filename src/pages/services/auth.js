import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "../page.module.scss";

import SEO from "../../components/seo";
import Card from "../../components/card/card";
import PageHeader from "../../components/pageHeader/pageHeader";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query AuthQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/auth/" } }) {
          edges {
            node {
              frontmatter {
                title
                path
                url
                logo
                tags
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Auth" />
        <PageHeader title="Services">
          <h2>Auth</h2>
          <p>Helping with the issue of user accounts and logging in and out.</p>
        </PageHeader>
        <main className={styles.grid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => {
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
    )}
  />
);
