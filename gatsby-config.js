module.exports = {
  siteMetadata: {
    title: `The Power of Serverless`,
    description: `The Power of Serverless for Front-End Developers`,
    author: `@css`
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: "markdown-pages"
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ]
};
