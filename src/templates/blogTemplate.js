import React from "react"
import Layout from "../components/layout"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { graphql,Link } from "gatsby"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
          <ul>  
          {frontmatter.tags.map(tag => (
              <Link
              to = {`/tags/${kebabCase(tag)}/`}>
              <li>{tag}</li>
              </Link>
            ))}
          </ul>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

      </div>
    </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($url_path: String!) {
    markdownRemark(frontmatter: { url_path: { eq: $url_path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        url_path
        title
        tags
      }
    }
  }
`