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
        query MonitoringQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/monitoring/" } }
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
              }
            }
          }
        }
      `}
      render={data => (
        <ServicePage
          pageTitle="Services | Monitoring"
          pageHeader="Services"
          pageSubHeader="Monitoring"
          intro="Hello, Service? Are you still there and doing what you should be
      doing?"
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
