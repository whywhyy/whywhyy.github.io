module.exports = {
  siteMetadata: {
    pro_title: `"-_-"`,
    pro_subheader: `탐색하고 적용하는 개발자`,
    github_url:`https://github.com/whywhyy`,
    acmicpc_url:`https://www.acmicpc.net/user/whywhy`,
    linkedin_url:`https://www.linkedin.com/in/kangsan-kim-035399154/`,
    title: `Whywhyy`,
    titleTemplate: `%s | Whywhyy`,
    description: "Whywhyy 개발 블로그",
    url: "https://whywhyy.github.io", // No trailing slash allowed!
    siteUrl: `https://whywhyy.github.io`,
    image: "/images/my_image.jpg", // Path to your image you placed in the 'static' folder
    siteLanguage : "ko",
    siteLocale : "ko_KR",
    creator : "Kangsan Kim",
  },
  plugins: [
    `gatsby-plugin-next-seo`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {  
        policy: [{ userAgent: '*', allow: '/' }],
      } 
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              maxHeight: 720,
              tracedSVG: { color: "#3498DB"}
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-reading-time`,
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Asia/Seoul',
        format: 'YYYY.MM.DD',
      },
    },
    {
      resolve: "gatsby-plugin-page-progress",
      options: {
        includePaths: ["/projects", { regex: "^/blog" }],
        excludePaths: [],
        height: 6,
        prependToBody: false,
        color: `#FF0000`,
      },
    },
  ],
}