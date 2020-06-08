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
    url: "http://whywhyy.me", // No trailing slash allowed!
    siteUrl: `http://whywhyy.me`,
    image: "/images/my_image.jpg", // Path to your image you placed in the 'static' folder
    siteLanguage : "ko",
    siteLocale : "ko_KR",
    creator : "Kangsan Kim",
  },
  plugins: [
    `gatsby-plugin-next-seo`,
    `gatsby-plugin-sitemap`,
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              maxHeight: 720,
              tracedSVG: { color: "#3498DB"}
            },
          },
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `250`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h2`, `h3`],
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,// should be placed after `gatsby-remark-autolink-headers`
            options: {
              aliases:{sh: "bash", js:"javascript", py:"python"},
            }
          },
        ],
      },
    },
    'gatsby-remark-reading-time',
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
        format: 'YYYY-MM-DD, h:mm:ss a'
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