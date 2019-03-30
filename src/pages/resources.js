import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "./page.module.scss";

import SEO from "../components/seo";
import Card from "../components/card/card";
import PageHeader from "../components/pageHeader/pageHeader";

export default () => (
  <StaticQuery
    query={graphql`
      query ResourcesQuery {
        allFile(filter: { absolutePath: { regex: "/resources/" } }) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  title
                  url
                  author
                }
                html
              }
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO title="Resources" />
        <PageHeader title="Resources">
          <h2>Resources</h2>
          <p>Serverless resources.</p>
        </PageHeader>
        <main className={styles.grid}>
          {data.allFile.edges.map(({ node }, i) => {
            const { title, url } = node.childMarkdownRemark.frontmatter;
            return (
              <Card
                title={title}
                key={title}
                html={node.childMarkdownRemark.html}
                url={url}
              />
            );
          })}
        </main>
      </>
    )}
  />
);
