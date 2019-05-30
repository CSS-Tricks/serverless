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
        query commerceQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//ecommerce//" } }
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
          pageTitle="Services | Ecommerce"
          pageHeader="Services"
          pageSubHeader="Ecommerce"
          intro="Don't just serve static data, sell it!"
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
