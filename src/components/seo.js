import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, titleTemplate, creator, description, image, article, tags }) => {
  const { pathname } = useLocation()
  const { site, file } = useStaticQuery(query)

  const {
    defaultTitle,
    defaultTitleTemplate,
    defaultDescription,
    siteUrl,
    siteLanguage,
    defaultCreator,
  } = site.siteMetadata
  const {defaultImage} = file.childImageSharp.fixed
  const seo = {
    title: title || defaultTitle,
    titleTemplate: titleTemplate || defaultTitleTemplate,
    creator : creator || defaultCreator,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    siteLanguage : siteLanguage,
    tags : tags
  }
  return (
    <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
      <html lang={seo.siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {seo.url && <meta property="og:url" content={seo.url} />}

      {(article ? true : null) && <meta property="og:type" content="article" />}
      
      {seo.tags && seo.tags.map((tag) => (<meta property="article:tag" content={tag} />))}



      {(article ? null : true) && <meta property="og:type" content="blog" />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (<meta property="og:description" content={seo.description} />)}
      {seo.image && <meta property="og:image" content={seo.image} />}
      <meta name="twitter:card" content="summary" />
      {seo.url && <meta property="twitter:url" content={seo.url} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.creator &&  <meta name="twitter:creator" content={seo.creator} />}
      {seo.description && (<meta name="twitter:description" content={seo.description} />)}
      {seo.image && <meta name="twitter:image" content={seo.image} />}


      <meta name="theme-color" content="#000000"/>
    </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  titleTemplate: PropTypes.string,
  creator : PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
  siteLanguage : PropTypes.string,
  tags : PropTypes.arrayOf(PropTypes.string)
}

SEO.defaultProps = {
  title: null,
  titleTemplate: null,
  creator : null,
  description: null,
  image: null,
  article: false,
  siteLanguage: null,
  tags : null,
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
        defaultCreator :creator
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