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
        query SsgsQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/ssgs/" } }
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
          pageTitle="Services | Static Site Generators"
          pageHeader="Services"
          pageSubHeader="Static Site Generators"
          intro="Rather than having a database in production, these tools build the
        site into flat files."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
