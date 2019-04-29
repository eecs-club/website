module.exports = {
  siteMetadata: {
    title: `Lowell EECS`,
    description: `Lowell's EECS Club, unifying electrical engineering with computer science. Meetings every Friday in room 332.`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-jsx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lowell EECS`,
        short_name: `Lowell EECS`,
        start_url: `/`,
        background_color: `#07121F`,
        theme_color: `#7DD0FF`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      }
    },
    // {
    //   resolve: `gatsby-plugin-web-font-loader`,
    //   options: {
    //     custom: {
    //       families: [
    //         `Gotham:n1,i1,n2,i2,n3,i3,n4,i4,n5,i5,n7,i7,n8,i9`,
    //         `Inter:n1,i1,n2,i2,n3,i3,n4,i4,n5,i5,n6,i6,n7,i7,n8,i8,n9,i9`
    //       ],
    //       urls: [`/src/fonts/fonts.css`]
    //     },
    //   }
    // }
  ]
}
