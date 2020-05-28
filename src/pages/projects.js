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
    },
  }));
  const classes = useStyles();

  return (
    <Layout>
      <SEO title={`Projects`}/>
      <Grid item lg={6}>
            <Paper className={classes.paper}>
            <h1>I'd love to talk! Email me at the address below</h1>
            <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
            </Paper>
      </Grid>


    </Layout>
  )
}