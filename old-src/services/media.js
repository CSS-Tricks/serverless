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
        query mediaQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/media/" } }
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
          pageTitle="Services | Media Hosting"
          pageHeader="Services"
          pageSubHeader="Media Hosting"
          intro="Hosting and otherwise handling your media like images and video."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
