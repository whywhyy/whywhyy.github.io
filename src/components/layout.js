import React from "react"

import ButtonAppBar from "./header"
import ProfileCard from "./profilecard"
import Footer from "./footer"

import { useStaticQuery,graphql} from "gatsby"
import { css } from "@emotion/core"

import { makeStyles } from '@material-ui/core/styles';

import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';


import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query {
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
        }
      }
      allMarkdownRemark {
        totalCount
      }
    }
    `
  )
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,     
      transition: "transform .2s",
      marginRight:10,
      '&:hover': {
        borderRadius: "2%",
        transform: "scale(1.05)",
      },
    },
    root_R: {
      flexGrow: 1,
      transition: "transform .2s",
      marginLeft:10,
      '&:hover': {
        borderRadius: "2%",
        transform: "scale(1.05)",
      },     
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing(1),
    },
    grid:{
      marginTop: 15,
    },
    avatar:{
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
  const classes = useStyles();


  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div>
    <div
      css={css`
        margin: 0 auto;
        max-width: 1300px;
        min-height: 100vh;
        padding-top: ${rhythm(1.5)};
      `}
    >
      <ButtonAppBar/>


      <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Hidden mdDown>
          <Grid item lg={3} className={classes.grid}>
          <Card className={classes.root}>
            <ProfileCard/>
           </Card>
          </Grid>
        </Hidden>
        


        {children}
        
        <Hidden mdDown>
          <Grid item lg={3} className={classes.grid}>
            <Card className={classes.root_R}>
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
            </Card>
          </Grid>
        </Hidden>
      </ThemeProvider>
      </div>
      
    </div>
    <Footer/>
    </div>
  )
}
