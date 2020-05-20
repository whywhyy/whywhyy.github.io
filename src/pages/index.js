import React from "react"
import { graphql, Link } from "gatsby"

import { css } from "@emotion/core"

//utils 
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          Amazing Pandas Eating Things
        </h1>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Link to={node.frontmatter.url_path} >
          <div key={node.id}>
            <h3
              css={css`
                margin-bottom: ${rhythm(1 / 4)};
                display: inline-block;
              `}
            >
              {node.frontmatter.title}{" "}
              <span
                css={css`
                display: inline-block;
                color: #bbb;
                `}
              >
                — {node.frontmatter.date}
              </span>
            </h3>
            <p 
              css={css`
              display: inline-block;
              color: #787878;
              `}>
              {node.excerpt}
            </p>
          </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}, limit: 1000,
                        filter: {frontmatter: {publish: {eq: true}}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            url_path
          }
          excerpt
        }
      }
    }
  }
`