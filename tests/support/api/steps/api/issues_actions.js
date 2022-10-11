/* eslint-disable n/handle-callback-err */
require('module-alias/register')
const { Given, When } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const superagent = require('superagent')
const config = require('@config')
const env = require('@env')[config.env]

Given('An issue previously created', function () {
  logger.info('Checking for issue...')
})

When('the user send a {string} to {string}', async function (httpMethod, endPoint) {
  const url = env.api_url
  const username = env.users.user.username
  const token = env.users.user.token
  console.log('url:', url)
  console.log('endPoint: ', endPoint)
  console.log('username: ', username)
  console.log('token: ', token)
  logger.info('sending request...')
  const res = await superagent.get(`${url}${endPoint}`).auth(username, token)
  this.actualStatusCode = res.statusCode
})
