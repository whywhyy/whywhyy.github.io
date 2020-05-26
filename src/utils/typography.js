import Typography from "typography"
import kirkhamTheme from "typography-theme-kirkham"

kirkhamTheme.overrideThemeStyles = () => ({
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

const typography = new Typography(kirkhamTheme)

  
export default typography
export const rhythm = typography.rhythm