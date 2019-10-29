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
        query MajorQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/major/" } }
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
          pageTitle="Services | Major Services"
          pageHeader="Services"
          pageSubHeader="The Major Providers"
          intro="The biggest names in serverless, providing wide swaths of
    functionality."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
