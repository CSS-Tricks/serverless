import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => (
  <StaticQuery
    query={graphql`
      query realtimeQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/realtime/" } }
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
      <ServicePage
        pageTitle="Services | Realtime"
        pageHeader="Services"
        pageSubHeader="Realtime"
        intro="These services help you with realtime connections between clients and between server and client."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
