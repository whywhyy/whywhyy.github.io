import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import ProfileCard from "../components/profilecard"
import ButtonAppBar from "../components/header"

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import SEO from "../components/seo"

import { rhythm } from "../utils/typography"

export default function About() {
  const useStyles = makeStyles((theme) => ({
    root:{
      flexGlow:1,
    },
    grid:{
      flexGlow:1,
      marginTop: 30,
      margin: 10,
      maxWidth: 650,
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
    <SEO title={'About'}/>
    <ButtonAppBar/>
    <Grid       
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
    <Grid item xs={12} lg={6} className={classes.grid}>
        <ProfileCard 
          title={'..?'} 
          subheader={`Javascript is coming.`}
        />
      </Grid>
    </Grid>
    </div>
  )
}