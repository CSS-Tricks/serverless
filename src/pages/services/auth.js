import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => (
  <StaticQuery
    query={graphql`
      query authQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/auth/" } },
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
        pageTitle="Services | Auth"
        pageHeader="Services"
        pageSubHeader="Auth"
        intro="Services that help you build authentication services (logging in and out with permissions)."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
