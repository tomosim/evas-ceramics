require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'salo',
    description: 'Eva Salo',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `g70hbvs0rd3p`,
        accessToken: `AHKZW8OxjMUu16y09_kfJ7nFtHLhJ_daz7jTPbLUkn4`,
        // host: process.env.CONTENTFUL_HOST
      },
    },
  ],
}
