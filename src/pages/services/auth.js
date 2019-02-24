import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import ServicesNav from "../../pages/services/nav";
import Card from "../../components/card/card";

import styles from "../page.module.scss";

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
              }
              html
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <ServicesNav />
        <main className={styles.grid}>
          {data.allMarkdownRemark.edges.map(({ node }, i) => (
            <Card
              title={node.frontmatter.title}
              key={node.frontmatter.title}
              html={node.html}
            />
          ))}
        </main>
      </Layout>
    )}
  />
);
