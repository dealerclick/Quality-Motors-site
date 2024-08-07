require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

/**
 * Gatsby configuration file.
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `newport-motors-demo`,
    siteUrl: `https://websites.dealerclick.com`,
    author: `DealerClick`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      // configure the `gatsby-plugin-dealernetwork` plugin
      resolve: `@dealerclick/gatsby-plugin-dealernetwork`,
      options: {
        // The URL of the Dealer Network API
        inventoryApiUrl: process.env.GATSBY_INVENTORY_API_URL,
      },
    },
    // Enable gatsby-plugin-recaptcha for reCAPTCHA support
    `gatsby-plugin-recaptcha`,
    // Enable the `gatsby-plugin-image` for optimized image handling
    `gatsby-plugin-image`,
    // Enable the `gatsby-plugin-react-helmet` for managing the document head in React components with React Helmet
    `gatsby-plugin-react-helmet`,
    // Styled component refresh helper
    `gatsby-plugin-styled-components`,
    // Babel styled
    `babel-plugin-styled-components`,
    // Theme UI
    "gatsby-plugin-theme-ui",
    // Enable the `gatsby-transformer-sharp` plugin for processing images with the Sharp library
    `gatsby-transformer-sharp`,
    // Enable the `gatsby-plugin-sharp` plugin for providing additional image processing functions
    `gatsby-plugin-sharp`,
    {
      // Configure the `gatsby-plugin-manifest` for generating the Web App Manifest, which controls the appearance of your PWA
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Newport Motors`,
        short_name: `Motors`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/assets/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
}
