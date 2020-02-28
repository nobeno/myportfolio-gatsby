module.exports = {
  siteMetadata: {
    title: "Nobe's Portfolio Site",
    author: "Nobe",
    description: "This is my portfolio site."
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "ID"
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "bucketname",
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
