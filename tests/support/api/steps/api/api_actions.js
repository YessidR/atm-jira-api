require('module-alias/register')

const { Given, When } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const env = require('@envManager')
const { send } = require('@reqManager')

Given('An issue previously created', function () {
  logger.info('Checking for issue...')
})

When('the user send a {string} to {string}', async function (httpMethod, endPoint) {
  this.user = new env.Env()
  logger.info('sending request...')
  const res = await send(httpMethod, endPoint)
  this.actualStatusCode = res.statusCode
})
