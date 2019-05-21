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
        query realtimeQuery {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/realtime/" } }
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
          pageTitle="Services | Realtime"
          pageHeader="Services"
          pageSubHeader="Realtime"
          intro="These services help you with realtime connections between clients and between server and client."
          services={data.allMarkdownRemark.edges}
        />
      )}
    />
  );
};
