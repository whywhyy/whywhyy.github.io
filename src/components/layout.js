import React from "react"
import { css } from "@emotion/core"
import { useStaticQuery, Link, graphql } from "gatsby"

import { rhythm } from "../utils/typography"
export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
        padding: ${rhythm(2)};
        padding-top: ${rhythm(1.5)};
      `}
    >
      <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link
        to={`/contact/`}
        css={css`
          float: right;
          margin-right: 10px;
        `}
      >
        Contact
      </Link>
      <Link
        to={`/about/`}
        css={css`
          float: right;
          margin-right: 10px;
        `}
      >
        About
      </Link>
      <Link
        to={`/tags/`}
        css={css`
          float: right;
          margin-right: 10px;
        `}
      >
        Tags
      </Link>

      {children}
    </div>
  )
}