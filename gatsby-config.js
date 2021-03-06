require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `content/assets/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID, // Google Analytics / GA
        ],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typegen`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `生存戦略しましょうか`,
    author: `yutanakano`,
    description: `全人類同時接続数No.1!バトルロイヤルゲームを生き残れ!`,
    siteUrl: `https://yutanakano.jp`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/yutanakano_jp`,
      },
      {
        name: `github`,
        url: `https://github.com/yutanakano`,
      },
    ],
  },
}
