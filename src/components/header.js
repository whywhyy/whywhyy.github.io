import React from 'react';

import { useStaticQuery, Link, graphql } from "gatsby"

import { css } from "@emotion/core"

// material - core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Hidden from '@material-ui/core/Hidden';

  import Grid from '@material-ui/core/Grid';

// material - icons
import FormatQuoteIcon from '@material-ui/icons/FormatQuote';
import HomeIcon from '@material-ui/icons/Home'; 
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import DescriptionIcon from '@material-ui/icons/Description';

export default function ButtonAppBar() {

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
      <AppBar position="fixed" style={{ background: '#040404' }}>
          <Toolbar>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <Hidden mdDown>
              <Typography variant="h6" className={classes.title}>
                <Link to={`/`} >
                  <Button color="inherit" className={classes.mbutton}>
                    <FormatQuoteIcon color="white" />
                  </Button>
                  <sapn
                    css={css`
                    color: white;
                  `}
                  >
                  {data.site.siteMetadata.title}</sapn>
                </Link>
              </Typography>
            </Hidden>

          <Typography variant="subtitle2">
            <Link to={`/`} activeStyle={activateStyles} className={classes.link_button}>
              <Button color="inherit" className={classes.button}>
                <HomeIcon fontSize="small"/>
                <Hidden xsDown>Home</Hidden>
              </Button>
            </Link>

            <Link to={`/tags/`} activeStyle={activateStyles} className={classes.link_button}>
              <Button color="inherit" className={classes.button}>
                <LocalOfferIcon fontSize="small"/>
                <Hidden xsDown>Tags</Hidden>
              </Button>
            </Link>
            
            <Hidden lgUp>
              <Link to={`/about/`} activeStyle={activateStyles} className={classes.link_button}>
                <Button color="inherit" className={classes.button}>
                  <EmojiPeopleIcon />
                  <Hidden xsDown>About</Hidden>
                </Button>
              </Link>
            </Hidden>

            <Link to={`/projects/`} activeStyle={activateStyles} className={classes.link_button}>
              <Button color="inherit" className={classes.button}>
                <DescriptionIcon/>
                <Hidden xsDown>Projects</Hidden>
              </Button>
            </Link>
          </Typography> 
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}