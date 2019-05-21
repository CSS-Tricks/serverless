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
        query hostingQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/hosting/" } }
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
          pageTitle="Services | Hosting"
          pageHeader="Services"
          pageSubHeader="Hosting"
          intro="Hosting that fits in with the Serverless world."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
