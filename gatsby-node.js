const path = require("path");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageTemplate = path.resolve(`src/templates/page.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: pageTemplate,
        context: {} // additional data can be passed via context
      });
    });
  });
};
