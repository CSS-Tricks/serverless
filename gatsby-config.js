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
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ]
};
