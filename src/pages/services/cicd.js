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
        query cicdQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//cicd//" } }
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
          pageTitle="Services | Continuous Integration / Continuous Deployment (CI / CD)"
          pageHeader="Services"
          pageSubHeader="CI / CD"
          intro="Services that help us run our build processes and deploy code based on Git happenings."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
