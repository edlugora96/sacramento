require("dotenv").config()
module.exports = {
  siteMetadata: {
    title: `3439Sacramento`,
    description: `3439 Sacramento St, Unit #401 - A spectacular 3 bedroom, 2 bath condominium in Presidio Heights, 1942 square feet, 2 car parking, storage and elevator..`,
    siteUrl: process.env.SITE_URL,
    author: `@edlugora`,
    googleMapKey: process.env.GOOGLE_MAPS_STATIC_API_KEY,
    googleRecaptchaKey: process.env.GOOGLE_RECAPTCHA_KEY,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/gallery`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-recaptcha`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `KirkAndPeggy`,
        short_name: `3439Sacramento`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
