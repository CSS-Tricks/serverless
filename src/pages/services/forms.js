import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => (
  <StaticQuery
    query={graphql`
      query formsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/forms/" } }) {
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
        pageTitle="Services | Forms"
        pageHeader="Services"
        pageSubHeader="Forms"
        intro="Forms need a server to do much useful, like store the data, send notifications, and integrate with other services. You could do those things with a cloud function, but these services help you do as little work as possible. "
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
