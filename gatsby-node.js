const path = require(`path`)
const _ = require("lodash")

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const markdown_file_path = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `markdown_file_path`,
      value: markdown_file_path,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`)
  const tagTemplate = path.resolve("src/templates/tags.js")
  const result = await graphql(`
  {
    postsRemark: allMarkdownRemark(sort: {
      order: DESC, fields: [frontmatter___date]}, 
      limit: 1000, 
      filter: {frontmatter: {publish: {eq: true}}}) 
      {
      edges {
        node {
          frontmatter {
            url_path
            tags
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create post detail pages
  const posts = result.data.postsRemark.edges
  result.data.postsRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.url_path,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        url_path: node.frontmatter.url_path,
      },
    })
  })

  // Extract tag data from query
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach(tag => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })

}