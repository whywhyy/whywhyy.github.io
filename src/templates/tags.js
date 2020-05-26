import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/layout"

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

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

const Tags = ({ pageContext, data }) => {
  const classes = useStyles();
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  
  return (
      <Layout>
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
              subheader = {tagHeader}
              className={classes.card_header}
            />
                <Grid
                  container
                  direction="row"
                  justify="flex-start"
                  alignItems="flex-start"
                  className={classes.grid}
                  
                >
                  {edges.map(({ node }) => {
                    const { url_path } = node.frontmatter
                    const { title } = node.frontmatter
                    return (
                      <Link 
                        to={url_path}
                        className={classes.tags}
                      >
                      {title}
                      </Link>
                    )
                  })}
                <Link to="/tags">All tags</Link>
                </Grid>
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
          }
        }
      }
    }
  }
`