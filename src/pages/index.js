import React from "react"
import { graphql, Link } from "gatsby"
import { Helmet } from "react-helmet"

// Utilities
import kebabCase from "lodash/kebabCase"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';

import EventNoteIcon from '@material-ui/icons/EventNote';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';


import Layout from "../components/layout"

export default function Home({ data }) {
  const useStyles = makeStyles({
    root: {
      margin: 10,
      marginTop: 15,
      maxWidth: 650,
    },
    cardmedia:{
      margin: "0 10% 0 10",
      borderRadius: "2%",
      objectFit: "cover",
    },
    cardcontent:{
      marginTop: "-5%",
    },
    textbody:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
    },
    tags:{
      display:"flex",
      alignItems: "center",
      justifyContent: "right",
      color:"#1f4068",
      '&:hover': {
        color: '#6886c5',
      },
    },
  });
  const classes = useStyles();
  
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Layout>
      <Helmet title={data.site.siteMetadata.title} />
      <Grid item xs={12} md={10} lg={6} >
        {data.allMarkdownRemark.edges.map(({ node }) => (    
          <Link to={node.frontmatter.url_path} >
            <ThemeProvider theme={theme}>
            <Card className={classes.root}>
              <CardActionArea>  
                <CardMedia
                  className={classes.cardmedia}
                  component="img"
                  alt="이미지를 불러오지 못했습니다..ㅠㅠ"
                  height="280"
                  image={node.frontmatter.thumbnailImage.childImageSharp.fixed.srcWebp} 
                  title={node.frontmatter.title}
                />
              <CardContent 
              className={classes.cardcontent}
              >
                <Typography className={classes.textbody} variant="h5" component="h2">
                {node.frontmatter.title}
                </Typography>

                <Typography gutterBottom paragraph className={classes.textbody} variant="body2" component="p">
                 <EventNoteIcon  fontSize="small" />{node.frontmatter.date}{"  "}
                {node.frontmatter.tags.map((tag) => (
                  <Link to={`/tags/${kebabCase(tag)}/`}>
                    <a className={classes.tags}>
                      <LocalOfferIcon fontSize="small"/>
                      {tag}{" "}
                    </a>
                  </Link>
                ))}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                {node.frontmatter.description}
                </Typography>
              </CardContent>
             </CardActionArea>
            </Card>
            </ThemeProvider>
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