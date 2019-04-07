import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query dataQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/\/data\//" } }) {
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
        pageTitle="Services | Data Storage"
        pageHeader="Services"
        pageSubHeader="Data Storage"
        intro="Just because you've gone JAMstack doesn't mean you can't get data from a database or otherwise store and retrieve data."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
