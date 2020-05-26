import React from "react"
import { graphql } from "gatsby"
import { css } from "@emotion/core"
import ProfileCard from "../components/profilecard"
import ButtonAppBar from "../components/header"

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';

import { rhythm } from "../utils/typography"

export default function About({ data }) {
  const useStyles = makeStyles((theme) => ({
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
    <Grid item xs={12} lg={6}>
      <Grid       
        container
        direction="column"
        justify="center"
        alignItems="center" 
      >
        <Grid item xs={12} lg={12}>
              <ProfileCard />
          </Grid>
      </Grid>
    </Grid>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`