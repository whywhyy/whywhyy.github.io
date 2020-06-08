import React from 'react';
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';

import { useStaticQuery, Link, graphql } from "gatsby"

import Typography from '@material-ui/core/Typography';

const Footer = () => {
  const { allFile, site } = useStaticQuery(query)
  const { nodes } = allFile
  const buildTime = site.buildTimeZone

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,      
    },
    icons:{
      marginRight:10,
    },
    built_with:{
      color:"#555555",
      fontWeight: 100,
      letterSpacing: ".3em",
      textAlign: "center",
      fontSize: ".85em",
      width: "100%",
      marginTop:"1rem",
    },
  }));
  
  const classes = useStyles();

  return (
    <footer
    css={css`
    flex-shrink: 0;
    margin-top:calc(0%);
    text-align: center;
  `} >
    <div>

      <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
             
              <Typography className={classes.built_with}>
                built with:
              </Typography>
      </Grid>
      <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
              >
          {nodes.map(image => (
                    <Grid items key={image.id}>
                    <Img 
                    fixed={image.childImageSharp.fixed}
                    className={classes.icons}
                    />
                    </Grid>
                  ))}
        </Grid>
        
        <Link to="/">
        <span     
          css={css`
          font-size: .7rem`}
        >
          Last updated {buildTime}</span>
      </Link>

    </div>
  </footer>
  )
}


export default Footer;

const query = graphql`
  query  {
    allFile(filter: {relativeDirectory: {eq: "built_with"}, extension: {eq: "png"}}){
      nodes {
        childImageSharp{
          fixed(width: 24, height: 24, fit: OUTSIDE) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    site {
      buildTimeZone
    }
  }
  `