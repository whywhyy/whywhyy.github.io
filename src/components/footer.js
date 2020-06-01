import React from 'react';
import { css } from "@emotion/core"

import { useStaticQuery, Link, graphql } from "gatsby"

const Footer = () => {
  const buildTime = useStaticQuery(query).site.buildTimeZone

  return (
    <footer
    css={css`
    flex-shrink: 0;
    margin-top:calc(0%);
    text-align: center;
  `} >
    <div     
    css={css`
    font-size: .7rem
    `}
    >
      <Link to="/">
        <span>Last updated {buildTime}</span>
      </Link>
    </div>
  </footer>
  )
}


export default Footer;

const query = graphql`
  query  {
    site {
      buildTimeZone
    }
  }
  `