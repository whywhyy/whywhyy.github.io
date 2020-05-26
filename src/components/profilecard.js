import React from "react"

import ButtonAppBar from "./header"
import { useStaticQuery,graphql, Link } from "gatsby"
import Img from "gatsby-image"

import { css } from "@emotion/core"
import {Helmet} from "react-helmet";

import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';  

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import { rhythm } from "../utils/typography"


export default function ProfileCard() {

  const data = useStaticQuery(graphql`
  query {
    allFile(filter: {relativeDirectory: {eq: "built_with"}, extension: {eq: "png"}}){
      nodes {
        childImageSharp{
          fixed(width: 24, height: 24) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    file(relativePath: {eq: "my_image.jpg"}) {
        childImageSharp {
          fluid {
            srcWebp
            tracedSVG
          }
        }
      }
    site {
        siteMetadata {
          pro_title
          pro_subheader
          github_url
          acmicpc_url
          linkedin_url
        }
      }
  }
  `)

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,      
    },
    avatar:{
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    card:{
      transition: "color .2s",
      '&:hover': {
        color:"#D81159",
      },
    },
    built_with:{
      color:"#555555",
      fontWeight: 100,
      letterSpacing: ".3em",
      textAlign: "center",
      fontSize: ".85em",
      width: "100%",
      marginTop:50,
    },
    icons:{
      marginRight:10,
    },
  }));
  const classes = useStyles();
 
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
      <Card xs={12} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="profile" 
                className={classes.avatar} 
                alt="profile" 
                src={data.file.childImageSharp.fluid.srcWebp} 
                />
              }
              titleTypographyProps={{variant:'subtitle1'}}
              title={data.site.siteMetadata.pro_title}
              subheader = {data.site.siteMetadata.pro_subheader}
            />

             <CardContent>
              <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank" href={data.site.siteMetadata.github_url}>
                    < GitHubIcon className={classes.card}  fontSize="large"/>
                  </a>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank" href={data.site.siteMetadata.linkedin_url}>
                    <LinkedInIcon  className={classes.card} style={{fontSize: '48px'}}/>
                  </a>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank" href={data.site.siteMetadata.acmicpc_url}>
                    <CodeIcon  className={classes.card} style={{fontSize: '48px'}}/>
                  </a>
                  </Grid>
                </Grid>

              </Grid>

              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
             
              <Typography gutterBottom paragraph className={classes.built_with}>
                built with:
              </Typography>
              </Grid>
              <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="flex-start"
              >
                
                  {data.allFile.nodes.map(image => (
                    <Grid items>
                    <Img key={image.id} 
                    fixed={image.childImageSharp.fixed}
                    className={classes.icons}
                    />
                    </Grid>
                  ))}
                  
              </Grid>
              
              
                            
            </CardContent>
        </Card>
            
  )
}
