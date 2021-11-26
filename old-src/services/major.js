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
      render={(data) => (
        <ServicePage
          pageTitle="Services | Cloud Providers"
          pageHeader="Services"
          pageSubHeader="The Cloud Providers"
          intro="The services that have the actual infrastructure that all this Serverless stuff is built upon."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
