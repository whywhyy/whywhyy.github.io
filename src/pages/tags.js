import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"


import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

export default function TagsPage ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    }
  }
}){
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      flex: '1 0 auto',
      margin: theme.spacing(1),
      '&:hover': {
        backgroundColor: '#d3d3d3',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#c0c0c0',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  }));
  const classes = useStyles();


    return (    
      <Layout>
      <Helmet title={title} />
        <Grid item xs={12} lg={6}>
          


          {group.map(tag => (
              <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                <Paper className={classes.paper} elevation={2}>
                {tag.fieldValue} ({tag.totalCount})
                </Paper>
              </Link>
          ))}


        </Grid>
    </Layout>
    )
  }


TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000, filter: {frontmatter: {publish: {eq: true}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`