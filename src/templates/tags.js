import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"
import SEO from "../components/seo"

// Utilities
import kebabCase from "lodash/kebabCase"
import Typography from '@material-ui/core/Typography';
import Img from "gatsby-image"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
// Components
import { Link, graphql } from "gatsby"


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    margin: 10,
    marginTop: 15,
    maxWidth: 650, 
  },
  card_header:{
    marginBottom:-15,
  },
  cardmedia:{
    borderRadius: "2%",
    objectFit: "cover",
  },
  card_array:{
    marginTop:10,
    '&:hover': {
      color:"#696969",
      backgroundColor:"#CEE7F7",
    },
  },
  all_tags:{
    padding:".3rem .8rem",
    alignItems: "center",
    color:"white",
    backgroundColor:"black",
    fontWeight: "300",
    borderRadius:".3rem",
    transition: "background-color .3s", 
  },   
  tags:{
    marginTop:10,
    marginRight:10,
    padding:".1rem .3rem",
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
      backgroundColor:"	#FFFFFF",
    },
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
  text_tag:{
    display:"flex",
    alignItems: "center",
    justifyContent: "left",
    flexFlow: "row wrap",
    fontSize: ".7rem",
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
  thumbnail_img:{
    borderRadius: "3%",
    alignItems: "center",
  },
}));

const Tags = ({ pageContext, data }) => {
  const classes = useStyles();
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  
  return (
      <Layout>
        <SEO 
          title={`${tag} tag`}
        />
        <Grid item xs={12} lg={6}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          <Card className={classes.card}>
            <Typography gutterBottom paragraph variant="body2" component="p">
            <CardHeader
              subheaderTypographyProps={{variant:'subtitle2'}}
              subheader = {<Link to="/tags" className={classes.all_tags}>View all tags</Link>}
              titleTypographyProps={{variant:'subtitle1',gutterBottom:'true' }}
              title={tagHeader}
              className={classes.card_header}
            />
          {edges.map(({ node }) => {
            const { url_path, title, date, description, tags } = node.frontmatter
            return (
              
                <Link 
                  to={url_path}
                >
                <CardActionArea className={classes.card_array}>
                  <CardContent >
                    <Typography className={classes.textbody} variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography  className={classes.text_date} variant="body2" component="p">
                      {date}
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
                    <Typography gutterBottom paragraph className={classes.text_tag} variant="body2" component="p">
                      {node.frontmatter.tags.map((tag) => (
                        <Grid item >
                          <Link 
                            to={`/tags/${kebabCase(tag)}/`}
                            className={classes.tags} 
                          >
                              {tag}
                          </Link>
                        </Grid>
                      ))}
                    </Typography>
                  </Grid>
                </CardContent>
              </CardActionArea>
  


                </Link>
             
            )
          })}
              </Typography>
          </Card>
          </Grid>
        </Grid>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              url_path: PropTypes.string.isRequired,
              description: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string),
            }),
            fields: PropTypes.shape({
              readingTime : PropTypes.shape({
                text : PropTypes.string.isRequired,
              }),
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] }, publish: {eq: true} } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            url_path
            description
            tags
            date
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