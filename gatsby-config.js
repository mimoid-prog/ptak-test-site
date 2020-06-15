const path = require("path")

module.exports = {
  siteMetadata: {
    title: `Testowa strona`,
    description: `Testowa strona dla Ptak Warsaw Expo`,
    author: `Mateusz Szkop`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:4000",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        layouts: path.join(__dirname, "src/layouts"),
        styles: path.join(__dirname, "src/styles"),
        utils: path.join(__dirname, "src/utils"),
        fonts: path.join(__dirname, "src/fonts"),
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/languages`,
        languages: [`pl`, `en`],
        defaultLanguage: `pl`,
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-react-svg",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
