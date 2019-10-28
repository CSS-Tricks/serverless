const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, trailingSlash: false })
        const parts = slug.split('/')
        createNodeField({
            node,
            name: 'collection',
            value: parts[1],
        })
        createNodeField({
            node,
            name: 'slug',
            value: parts[2],
        })
    }
}