import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const ServicesPage = props => {
  const servicesList = props.data.allMarkdownRemark;
  return (
    <>
      <Layout>
        <SEO title="Services" />
        {servicesList.edges.map(({ node }, i) => (
          <div className="card">
            <h1>{node.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
      </Layout>
    </>
  );
};

export default ServicesPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/auth/" } }) {
      edges {
        node {
          frontmatter {
            title
            date
            path
          }
          html
        }
      }
    }
  }
`;
