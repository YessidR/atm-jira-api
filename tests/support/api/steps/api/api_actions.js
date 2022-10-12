require('module-alias/register')

const { Given, When } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const env = require('@envManager')
const { api } = require('@reqManager')

Given('An issue previously created', function () {
  logger.info('Checking for issue...')
})

When('the user send a {string} to {string}', async function (httpMethod, endPoint) {
  const id = 'AUT-1'
  this.user = new env.Env()
  logger.info('sending request...')
  const res = await api.get(httpMethod, endPoint, id)
  this.actualStatusCode = res.statusCode
})
