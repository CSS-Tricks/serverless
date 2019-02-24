import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Layout from "../../components/layout";
import ServicesNav from "../../pages/services/nav";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query cmsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cmss/" } }) {
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
        {data.allMarkdownRemark.edges.map(({ node }, i) => (
          <div className="card" key={node.frontmatter.title}>
            <h1>{node.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    )}
  />
);
