import React from "react"

import ButtonAppBar from "../components/header"

import SEO from "../components/seo"
// Utilities
import kebabCase from "lodash/kebabCase"

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';


import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"

import Grid from '@material-ui/core/Grid';

// Components
import { graphql,Link } from "gatsby"

import "./blogTemplate.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { mdx } = data // data.mdx holds your post data
  const { frontmatter, body, fields } = mdx
  
  const useStyles = makeStyles({
    root: {

      maxWidth: 800,
    },
    cardmedia:{
      margin: "0 10% 0 10",
      borderRadius: "2%",
      objectFit: "cover",
      transform: "scale(0.95)",
      marginBottom: "3rem",
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
    text_date:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
      padding: "0.5em",
      color:"#808080",
    },
    text_readtime:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
      color:"#808080",
    },
    tags:{
      marginTop:10,
      marginRight:10,
      padding:".2rem .5rem",
      display:"flex",
      alignItems: "center",
      justifyContent: "right",
      color:"#696969",
      fontWeight: "300",
      backgroundColor:"#D3D3D3",
      borderRadius:".2rem",
      transition: "background-color .3s", 
      '&:hover': {
        color:"#696969",
        backgroundColor:"#CEE7F7",
      },
    },
  });
  const classes = useStyles();
  
  let theme = createMuiTheme();
  theme = responsiveFontSizes(theme);

  return (
      <div
      css={css`
        margin: 0 auto;
        max-width: 1300px;
        padding-top: ${rhythm(1.5)};
      `}
      >
      <SEO 
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.thumbnailImage.childImageSharp.fluid.src}
        article
        tags = {frontmatter.tags}
      />
      <ButtonAppBar/>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start" 
          xs={12} lg={12} 
          >
            <ThemeProvider theme={theme}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.textbody} variant="h5" component="h1">
                  {frontmatter.title}
                </Typography>

                <Typography  className={classes.text_date} variant="body2" component="p">
                   {frontmatter.date}
                    <Typography gutterBottom paragraph className={classes.text_readtime} variant="body2" component="p">
                        {",  "}{fields.readingTime.text}
                    </Typography>
                </Typography>

                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography gutterBottom paragraph className={classes.textbody} variant="body2" component="p">
                    {frontmatter.tags.map((tag) => (
                      <Grid item >
                        <Link 
                          to={`/tags/${kebabCase(tag)}/`}
                          className={classes.tags}
                        >
                          {tag}{" "}
                        </Link>
                      </Grid>
                    ))}
                  </Typography>
                </Grid>



                
              </CardContent>
              { frontmatter.thumbnailImageUse ?
                <CardMedia
                  className={classes.cardmedia}
                  component="img"
                  alt="이미지를 불러오지 못했습니다..ㅠㅠ"
                  height="400"
                  image={frontmatter.thumbnailImage.childImageSharp.fluid.srcWebp} 
                  title={frontmatter.title}
                />
                : null
              }
              <CardContent 
              className={classes.cardcontent}
              >


                <MDXRenderer className="blog-post-content" >{ body }</MDXRenderer>


              </CardContent>
            </Card>
          </ThemeProvider>
      </Grid>
      </div>
  )
}


export const pageQuery = graphql`
  query($url_path: String!) {
    mdx(frontmatter: { url_path: { eq: $url_path } }) {
      body
      frontmatter {
        date(formatString: "MMMM DD,YYYY")
        url_path
        title
        tags
        description
        thumbnailImageUse
        thumbnailImage {
          childImageSharp {
            fluid {
              srcWebp
              src
            }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`