// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'La Budzonnerie',
  host: 'localhost',
  port: process.env.CONSUMER_UI_PORT || 4000,
  plugins: [{
    use: '@gridsome/source-graphql',
    options: {
      url: 'http://localhost:8080/v1/graphql',
      fieldName: 'hasura',
      headers: {
        // Authorization: `Bearer ${process.env.AUTH_TOKEN}`,
      }
    }
  }]
}
