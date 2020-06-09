import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

// Utilities
import kebabCase from "lodash/kebabCase"

// Components

import { Link, graphql } from "gatsby"

export default function TagsPage ({
  data: {
    allMdx: { group },
    site: {
      siteMetadata: { title },
    }
  }
}){
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      marginTop: -25,
      maxWidth: 650,
      transform: "scale(1)",
      transition: "transform .2s",
      borderRadius: "3%",
      '&:hover': {
        borderRadius: "3%",
        transform: "scale(1.05)",
      },        
    },
    card_header:{
      marginBottom:-15,
    },    
    tags:{
      marginLeft:10,
      marginTop:10,
      padding:".2rem .5rem",
      display:"flex",
      alignItems: "center",
      justifyContent: "right",
      color:"#696969",
      fontWeight: "300",
      backgroundColor:"#D3D3D3",
      borderRadius:".8rem",
      transition: "background-color .3s", 
      '&:hover': {
        color:"#696969",
        backgroundColor:"#CEE7F7",
      },
    },
    tag_num:{
      backgroundColor:"#D9DDDC",
      borderRadius:"50%",
      height: "1.0rem",
      width: "1.0rem",
      textAlign: "center",
      verticalAlign: "middle",
      fontSize:".7rem",
      marginRight:"0.3rem",
    },
    grid:{
      marginTop:10,
    },
  }));
  const classes = useStyles();


    return (    
      <Layout>
        <SEO 
          title={`Tags`}
        />
        <Grid item xs={12} lg={6}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Card className={classes.card} >
            <Typography gutterBottom paragraph variant="body2" component="p">
            <CardHeader
              subheaderTypographyProps={{variant:'subtitle2'}}
              subheader = {`Tags`}
              className={classes.card_header}
            />
              <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                className={classes.grid}
              >
                {group.map(tag => (
                    <Link 
                      to={`/tags/${kebabCase(tag.fieldValue)}/`}
                      className={classes.tags}
                    >
                    <sapn className={classes.tag_num}> {tag.totalCount}</sapn> 
                    {tag.fieldValue}
                    </Link>
                ))}
              </Grid>
              </Typography>
          </Card>
          </Grid>
        </Grid>
    </Layout>
    )
  }


TagsPage.propTypes = {
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
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
    allMdx(limit: 2000, filter: {frontmatter: {publish: {eq: true}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`