/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My Gatsby Site", 
    description: "A simple site built with Gatsby",
    author: "Mudasir"
  },
  plugins: [ 
    { 
    resolve: "gatsby-source-filesystem", 
    options: { 
    name: "posts", 
    path: `${__dirname}/src/posts/`, 
    }, 
    }, 
    "gatsby-transformer-remark",

    "gatsby-plugin-react-helmet" 
    ],
    pathPrefix: "/Gatsby",
}
