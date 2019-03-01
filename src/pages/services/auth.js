import React from "react";
import { StaticQuery, graphql } from "gatsby";

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
      <main className={styles.grid}>
        {data.allMarkdownRemark.edges.map(({ node }, i) => {
          console.log(node);
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
    )}
  />
);
