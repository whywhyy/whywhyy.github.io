import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

import { css } from "@emotion/core"

import Hidden from '@material-ui/core/Hidden';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
//utils 
import { rhythm } from "../utils/typography"

import Layout from "../components/layout"

export default function Home({ data }) {
  const useStyles = makeStyles({
    root: {
      margin: 10,
      marginTop: 15,
    },
  });
  const classes = useStyles();
  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />
      <Grid item xs={10} lg={6}>
        {data.allMarkdownRemark.edges.map(({ node }) => (    
          <Link to={node.frontmatter.url_path} >
            <Card className={classes.root}>
              <CardActionArea>  
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="230"
                  image= {node.frontmatter.thumbnailImage.childImageSharp.fixed.srcWebp} 
                  title={node.frontmatter.title}
                />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {node.frontmatter.title}
                </Typography>

                <Typography gutterBottom variant="h6" component="h3">
                <EventNoteIcon/>{node.frontmatter.date}{" "}
                {node.frontmatter.tags.map(tag => <a><LocalOfferIcon/>({tag})</a>
                )}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {node.frontmatter.description}
                </Typography>
              </CardContent>
             </CardActionArea>
            </Card>
          </Link> 
        ))}
      </Grid>
  </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark (sort: {order: DESC, fields: frontmatter___date}, limit: 1000,
                        filter: {frontmatter: {publish: {eq: true}}}){
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            url_path
            description
            tags
            thumbnailImage {
              childImageSharp {
                fixed {
                  srcWebp
                }
              }
            }
          }
        }
      }
    }
  }
`