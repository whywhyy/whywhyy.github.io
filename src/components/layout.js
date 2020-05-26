import React from "react"

import ButtonAppBar from "./header"
import ProfileCard from "./profilecard"

import { useStaticQuery,graphql, Link } from "gatsby"
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
      '&:hover': {
        borderRadius: "2%",
        transform: "scale(1.05)",
      },     
    },
    root_R: {
      flexGrow: 1,
      transition: "transform .2s",
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
 
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let hour = newDate.getHours()
  let minute = newDate.getMinutes()

  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1300px;
        padding-top: ${rhythm(1.5)};
      `}
    >
      <ButtonAppBar/>

    <Helmet>
      <meta name="theme-color" content="#3498DB"/>
    </Helmet>
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
  )
}
