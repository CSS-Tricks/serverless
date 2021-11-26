import React, { useEffect } from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default () => {
  useEffect(() => {
    document.body.classList.remove("homepage");
  });
  return (
    <StaticQuery
      query={graphql`
        query NotificationsQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/notifications/" } }
            sort: { fields: frontmatter___title }
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
                fields {
                  collection
                  slug
                }
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
};
