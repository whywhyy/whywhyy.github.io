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
import ContactsIcon from '@material-ui/icons/Contacts';

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
          <Link to={`/`} activeStyle={activateStyles}>
            <Button color="inherit" className={classes.button}>
              <HomeIcon fontSize="small"/>Home
            </Button>
          </Link>

          <Link to={`/tags/`} activeStyle={activateStyles}>
            <Button color="inherit" className={classes.button}>
              <LocalOfferIcon fontSize="small"/>Tags
            </Button>
          </Link>

          <Link to={`/about/`} activeStyle={activateStyles}>
            <Button color="inherit" className={classes.button}>
              <EmojiPeopleIcon />About
            </Button>
          </Link>

          <Link to={`/contact/`} activeStyle={activateStyles}>
            <Button color="inherit" className={classes.button}>
              <ContactsIcon/>Contact
            </Button>
          </Link>
        </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}