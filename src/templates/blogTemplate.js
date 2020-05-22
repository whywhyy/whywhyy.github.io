import React from "react"
import Layout from "../components/layout"

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

// Components
import { graphql,Link } from "gatsby"


export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  const useStyles = makeStyles({
    root: {
      margin: 15,
      marginTop: 25,
      maxWidth: 650,
    },
    cardmedia:{
      margin: "0 10% 0 10",
      borderRadius: "2%",
      objectFit: "cover",
      transform: "scale(0.95)",
    },
    cardcontent:{
      marginTop: "-5%",
    },
    textbody:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
      padding: "0.5em",
      border: "none",
    },
    tags:{
      display:"flex",
      alignItems: "center",
      justifyContent: "right",
      padding: "0.5em",
      color:"#1f4068",
      '&:hover': {
        color: 'red',
      },
    },
  });
  const classes = useStyles();
  
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Layout>

      <Grid item xs={12} md={10} lg={6} >
            <ThemeProvider theme={theme}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.textbody} variant="h4" component="h2">
                  {frontmatter.title}
                </Typography> 
                <Typography  className={classes.textbody} variant="body2" component="p">
                  <EventNoteIcon  fontSize="small" />{frontmatter.date}
                  {frontmatter.tags.map((tag) => (
                    <Link to={`/tags/${kebabCase(tag)}/`}>
                      <a className={classes.tags}>
                        <LocalOfferIcon fontSize="small"/>
                        {tag}{" "}
                      </a>
                    </Link>
                  ))}
                </Typography>
              </CardContent>
              <CardMedia
                className={classes.cardmedia}
                component="img"
                alt="이미지를 불러오지 못했습니다..ㅠㅠ"
                height="400"
                image={frontmatter.thumbnailImage.childImageSharp.fluid.srcWebp} 
                title={frontmatter.title}
              />
              <CardContent 
              className={classes.cardcontent}
              >
              <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: html }}
              />
              </CardContent>
            </Card>
          </ThemeProvider>
      </Grid>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($url_path: String!) {
    markdownRemark(frontmatter: { url_path: { eq: $url_path } }) {
      html
      frontmatter {
        date(formatString: "YYYY-MM-DD")
        url_path
        title
        tags
        thumbnailImage {
          childImageSharp {
            fluid {
              srcWebp
            }
          }
        }
      }
    }
  }
`