import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query NotificationsQuery {
        allMarkdownRemark(
          filter: { fileAbsolutePath: { regex: "/notifications/" } }
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
        pageTitle="Services | Notifications"
        pageHeader="Services"
        pageSubHeader="Notifications"
        intro="The users need to know! Email, SMS, Push, etc."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
