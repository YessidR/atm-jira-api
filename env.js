require('dotenv').config()

module.exports = {
  dev: {},
  test: {
    api_url: `https://${process.env.PROJECTNAME}.atlassian.net`,
    users: {
      user: {
        username: process.env.USER,
        password: process.env.PASSWORD,
        name: process.env.NAME,
        key: process.env.KEY,
        token: process.env.TOKEN
      },
      invalid_user: {
        username: 'invalid@fakemail.com',
        password: ''
      }
    }
  },
  staging: {},
  uat: {}
}
