import React from 'react';

import { useStaticQuery, Link, graphql } from "gatsby"

// material - core
import { makeStyles } from '@material-ui/core/styles';

export default function ButtonAppBar() {
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '32px',
    },
    menuButton: {
      color: 'white',
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
    link_button: {
      textTransform: 'none',
      color: '#A9A9A9',
    },
    button: {
      textTransform: 'none',
    },
    mbutton: {
      textTransform: 'none',
      background: 'red',
      margin: "10px",
      color: "white",
    },
  }));
  
  const classes = useStyles();
  const activateStyles = {
    color: "white", 
  }
  return (
    <div className={classes.root}>

    </div>
  );
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
        siteLocale
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