import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "../page.module.scss";

import SEO from "../../components/seo";
import Card from "../../components/card/card";
import PageHeader from "../../components/pageHeader/pageHeader";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query MonitoringQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/monitoring/" } }
        ) {
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
        <SEO title="Monitoring" />
        <PageHeader title="Services">
          <h2>Monitoring</h2>
          <p>
            Hello, Server? Are you still there and doing what you should be
            doing?
          </p>
        </PageHeader>
        <main className={styles.grid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <Card
              logo={node.frontmatter.logo}
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              html={node.html}
              url={node.frontmatter.url}
            />
          ))}
        </main>
      </>
    )}
  />
);
