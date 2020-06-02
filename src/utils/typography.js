import Typography from "typography"
import altonTheme from 'typography-theme-alton'

altonTheme.overrideThemeStyles = () => ({
    'a': {
      color: "black",
      textShadow: "none",
      "text-decoration": "none",
    },
    'a:-webkit-any-link': {
        "text-decoration": "none",
    },
    'a:hover': {
        color: 'white',
    },
  })

const typography = new Typography(altonTheme)

  
export default typography
export const rhythm = typography.rhythm