import React from "react";
import { StaticQuery, graphql } from "gatsby";

import styles from "./about.module.scss";

import SEO from "../components/seo";
import PageHeader from "../components/pageHeader/pageHeader";
import Footer from "../components/footer/footer";

export default ({ children }) => (
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
          <PageHeader />
          <div
            className={styles.root}
            dangerouslySetInnerHTML={{ __html: content.html }}
          />

          <Footer noWhatIs="true" />
        </>
      );
    }}
  />
);
