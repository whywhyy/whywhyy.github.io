import React from "react"

import ButtonAppBar from "./header"

import { css } from "@emotion/core"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';

import { rhythm } from "../utils/typography"

export default function Layout({ children }) {
    
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
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
  }));
  const classes = useStyles();

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1300px;
        padding-top: ${rhythm(1.5)};
      `}
    >
      <ButtonAppBar/>


      <div className={classes.container}>
        <Hidden mdDown>
          <Grid item lg={3} className={classes.grid}>
            <Paper className={classes.paper}>3Up_mdDown_L</Paper>
            <Paper className={classes.paper}>3Up_mdDown_LLLLLLLLLLLLLLLLLLLLLLL</Paper>
            <Paper className={classes.paper}>3Up_mdDown_L</Paper>
          </Grid>
        </Hidden>
        
        <Hidden lgUp>
          <Grid item xs={1}/>
        </Hidden>


        {children}
        <Hidden lgUp>
          <Grid item xs={1}/>
        </Hidden>
        
        <Hidden mdDown>
          <Grid item lg={3} className={classes.grid}>
            <Paper className={classes.paper}>3333333333</Paper>
          </Grid>
        </Hidden>
      </div>

    </div>
  )
}