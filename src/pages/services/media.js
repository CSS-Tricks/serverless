import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query mediaQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/media/" } }) {
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
        pageTitle="Services | Media Hosting"
        pageHeader="Services"
        pageSubHeader="Media Hosting"
        intro="Hosting and otherwise handling your media like images and video."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
