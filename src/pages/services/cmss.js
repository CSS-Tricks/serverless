import React from "react";
import { StaticQuery, graphql } from "gatsby";

import ServicePage from "../../components/service/service";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query cmsQuery {
        allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/cmss/" } }) {
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
        pageTitle="Services | CMSs"
        pageHeader="Services"
        pageSubHeader="Content Management Systems"
        intro="Gotta manage that content."
        services={data.allMarkdownRemark.edges}
      />
    )}
  />
);
