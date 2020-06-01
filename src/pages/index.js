import React from "react"
import { graphql, Link } from "gatsby"


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



import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Home({ data }) {
  const useStyles = makeStyles({
    root: {
      margin: 10,
      marginTop: 15,
      maxWidth: 650,
      transform: "scale(1)",
      transition: "transform .2s",
      borderRadius: "2%",
      '&:hover': {
        borderRadius: "2%",
        transform: "scale(1.05)",
      },        
    },
    cardmedia:{

      borderRadius: "2%",
      objectFit: "cover",
      
    },
    cardcontent:{

    },
    textbody:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
    },
    text_date:{
      display:"flex",
      alignItems: "center",
      justifyContent: "left",
      flexFlow: "row wrap",
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
    <Layout>
      <SEO 
        titleTemplate={`Whywhyy`}
      />

      <Grid item xs={12} lg={6}>
      <Grid       
        container
        direction="column"
        justify="center"
        alignItems="center" 
      >
        <Grid item xs={12} lg={12}>
        {data.allMarkdownRemark.edges.map(({ node }) => (   
          <Link to={node.frontmatter.url_path} >
            <ThemeProvider theme={theme}>
            <Card className={classes.root} >
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

                <Typography gutterBottom paragraph className={classes.text_date} variant="body2" component="p">
                  {node.frontmatter.date}
                <Typography gutterBottom paragraph className={classes.text_readtime} variant="body2" component="p">
                    {",  "}{node.fields.readingTime.text}
                  </Typography>
                </Typography>
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                >
                  <Typography gutterBottom paragraph className={classes.textbody} variant="body2" component="p">
                    {node.frontmatter.tags.map((tag) => (
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
        </Grid>
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
            date(formatString: "MMMM DD,YYYY")
            url_path
            description
            tags
            thumbnailImage {
              id
              childImageSharp {
                fixed(width: 650, height: 350, fit: FILL, webpQuality: 100) {
                  srcWebp
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
    }
  }
`