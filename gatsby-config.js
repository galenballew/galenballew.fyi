require(`dotenv`).config({
  path: `.env`,
})

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

module.exports = {
  pathPrefix: "/galenballew.fyi",
  siteMetadata: {
    siteTitle: 'Galen Ballew',
    siteTitleAlt: `galenballew.fyi`,
    // Can be used for e.g. JSONLD
    siteHeadline: `A personal blog about machine learning and art.`,
    // Will be used to generate absolute URLs for og:image etc.
    siteUrl: `https://galenballew.fyi`,
    // Used for SEO
    siteDescription: `A personal blog by Galen Ballew covering topics like AI, machine learning, deep learning, GANs, creative coding, generative artwork, Unity, simulations, and more.`,
    // Will be set on the <html /> tag
    siteLanguage: `en`,
    // Used for og:image and must be placed inside the `static` folder
    siteImage: `/banner.jpg`,
    // Twitter Handle
    author: `@galenballew`,
    // Links displayed in the header on the right side   

  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Blog`,
            slug: `/blog`,
          },        
          {
            title: `About`,
            slug: `/about`,
          }
        ],
        externalLinks: [
          {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/galenballew/`,
          },
          {
            name: `GitHub`,
            url: `https://github.com/galenballew`,
          }
        ],
        formatString: 'MM/DD/YYYY',
        showLineNumbers: true,
        showCopyButton: true,
        feed: true,
        feedTitle: 'galenballew.fyi'
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Galen Ballew - A personal blog about machine learning and art.`,
        short_name: `galenballew.fyi`,
        description: `A personal blog by Galen Ballew covering topics like AI, machine learning, deep learning, GANs, creative coding, generative artwork, Unity, simulations, and more.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
