import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, titleTemplate, description, image, article }) => {
  const { pathname } = useLocation()
  const { site, file } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    siteUrl,
    siteLanguage,
  } = site.siteMetadata
  const {defaultImage} = file.childImageSharp.fixed
  const seo = {
    title: title || defaultTitle,
    titleTemplate: titleTemplate || defaultTitleTemplate,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    siteLanguage : siteLanguage,
  }
//<link rel="canonical" href={url} />
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang={seo.siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}

      {seo.title && <meta property="og:title" content={seo.title} />}

      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}

      {seo.image && <meta property="og:image" content={seo.image} />}
        
      <meta name="theme-color" content="#000000"/>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  description: null,
  image: null,
  article: false,
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultTitleTemplate:titleTemplate
        defaultDescription: description
        siteUrl: url
        siteLanguage
      }
    }
    file(relativePath: {eq: "my_image.jpg"}) {
        childImageSharp {
          fixed {
            defaultImage: src
          }
        }
      }
  }
`