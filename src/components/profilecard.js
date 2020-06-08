import React from "react"
import PropTypes from "prop-types"


import { useStaticQuery,graphql} from "gatsby"


import { makeStyles } from '@material-ui/core/styles';


import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';


import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import CodeIcon from '@material-ui/icons/Code';
import MailOutlineIcon from '@material-ui/icons/MailOutline';




const ProfileCard = ({ title, subheader }) => {
  const { file,  site } = useStaticQuery(query)

  const {srcWebp } = file.childImageSharp.fluid
  const {pro_title, pro_subheader, github_url, acmicpc_url, linkedin_url}  = site.siteMetadata
  const profile = {
    title: title || pro_title,
    subheader: subheader || pro_subheader,
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,   
    },
    avatar:{
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    card:{
      transition: "color .2s",
      color:"#1C2833",
      '&:hover': {
        color:"#D81159",
      },
    },
  }));
  const classes = useStyles();


  return (
      <Card xs={12} className={classes.root}>
            <CardHeader
              avatar={
                <Avatar aria-label="profile" 
                className={classes.avatar} 
                alt="profile" 
                src={srcWebp} 
                />
              }
              titleTypographyProps={{variant:'subtitle1'}}
              title={profile.title}
              subheader = {profile.subheader}
            />

             <CardContent>
              <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
              >

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank" rel="noreferrer" href={github_url}>
                    < GitHubIcon className={classes.card}  fontSize="large"/>
                  </a>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank" rel="noreferrer" href={linkedin_url}>
                    <LinkedInIcon  className={classes.card} style={{fontSize: '48px'}}/>
                  </a>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank"  rel="noreferrer" href={acmicpc_url}>
                    <CodeIcon  className={classes.card} style={{fontSize: '48px'}}/>
                  </a>
                  </Grid>
                </Grid>

                <Grid item>
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  > 
                  <a target="_blank"  rel="noreferrer" href="mailto:kangsan5240@naver.com">
                    <MailOutlineIcon  className={classes.card} style={{fontSize: '48px'}}/>
                  </a>
                  </Grid>
                </Grid>

              </Grid>


                            
                            
            </CardContent>
        </Card>
            
  )
}

export default ProfileCard

ProfileCard.propTypes = {
  title : PropTypes.string,
  subheader : PropTypes.string
}

ProfileCard.defaultProps = {
  title : null,
  subheader : null,
}

const query = graphql`
query {
  file(relativePath: {eq: "my_image.jpg"}) {
      childImageSharp {
        fluid {
          srcWebp
          tracedSVG
        }
      }
    }
  site {
      siteMetadata {
        pro_title
        pro_subheader
        github_url
        acmicpc_url
        linkedin_url
      }
    }
}
`