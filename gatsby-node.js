const path = require(`path`)
const _ = require("lodash")
const express = require(`express`)

// Enable development support for serving HTML from `./static` folder
exports.onCreateDevServer = ({ app }) => {
  app.use(express.static(`public`))
}

const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
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
    postsRemark: allMdx(sort: {
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
    tagsGroup: allMdx(limit: 2000) {
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

  /*
  // naver-site-verification
  const siteTemplate = path.resolve("src/templates/site-verification.js")
  createPage({
    path: `/navere553e0afa4b2754ae524e9175e8cb63a.html`,
    component: siteTemplate,
    context: {
      tag: `naver-site-verification: navere553e0afa4b2754ae524e9175e8cb63a`
    },
  })
   */
}