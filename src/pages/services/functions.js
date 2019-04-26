import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query functionsQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/\/functions\//" } },
          sort: {fields: frontmatter___title}) {
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
      <ServicePage
        pageTitle="Services | Functions"
        pageHeader="Services"
        pageSubHeader="Functions"
        intro="The beating heart of Serverless! Run those functions in the cloud."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
