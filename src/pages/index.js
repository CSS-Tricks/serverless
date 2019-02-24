import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";

import Layout from "../components/layout";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query HomePageQuery {
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
          <Layout>
            <SEO
              title="The Power of Serverless for Front-End Developers"
              keywords={[`serverless`, `cloud`, `cloud functions`]}
            />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: content.html }}
            />
          </Layout>
        </>
      );
    }}
  />
);
