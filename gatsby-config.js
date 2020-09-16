module.exports = {
  siteMetadata: {
    title: 'Dotta & Cunha',
    description: 'Real Estate Investments',
    author: 'Dotta & Cunha'
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Dotta & Cunha',
        short_name: `D&C`,
        start_url: `/`,
        icon: 'src/images/favicon.png'
      }
    }
  ]
}
