import React from 'react';

import { useStaticQuery, Link, graphql } from "gatsby"

import { css } from "@emotion/core"

import { rhythm } from "../utils/typography"

// material - core
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

// material - icons
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
      margin: '32px'
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: 'white',
    },
    title: {
      flexGrow: 1,
      color: 'white',
    },
  }));
  
  const classes = useStyles();
  const activateStyles = {
    color: "white", 
  }
  return (
    <div className={classes.root}>
            <Link to={`/`}>
        <h3
          css={css`
            margin-bottom: ${rhythm(2)};
            display: inline-block;
            font-style: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>


      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <HomeIcon />
          </IconButton>
          
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          <Link to={`/tags/`} activeStyle={activateStyles}>
            <Button color="inherit"><LocalOfferIcon fontSize="small"/>Tags</Button>
          </Link>

          <Link to={`/about/`} activeStyle={activateStyles}>
            <Button color="inherit"><EmojiPeopleIcon />About</Button>
          </Link>

          <Link to={`/contact/`} activeStyle={activateStyles}>
            <Button color="inherit"><ContactsIcon/>Contact</Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  );
}