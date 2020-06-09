import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import Grid from '@material-ui/core/Grid';

export default function Projects() {
  
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
      marginTop: -25,
    },
  }));
  const classes = useStyles();

  return (
    <Layout>
      <SEO title={`Projects`}/>
      <Grid item lg={6}>
            <Paper className={classes.paper}>
              <h1>
              <span role="img" aria-label="Folded Hands">👷</span>
              공사중입니다!..
              </h1>
            <p>
      </p>
            </Paper>
      </Grid>


    </Layout>
  )
}