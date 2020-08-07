const path = require("path")

require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
})

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
    `gatsby-plugin-layout`,
    `gatsby-transformer-json`,
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
        i18n: path.join(__dirname, "src/i18n"),
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.mongodb.net`,
        dbName: process.env.DB_NAME,
        collection: `companies`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}.mongodb.net`,
        dbName: process.env.DB_NAME,
        collection: `globals`,
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
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-styled-components`,
  ],
}
