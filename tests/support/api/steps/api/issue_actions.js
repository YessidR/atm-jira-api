require('module-alias/register')

const { Given, When } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const env = require('@envManager')
const { send } = require('@reqManager')
const { unflatten } = require('flat')

Given('the user sets the request body with:', function (dataTable) {
  this.body = unflatten(dataTable.rowsHash(), this)
})

When('the user sends a {string} to create a Bug to {string}', async function (httpMethod, endPoint) {
  logger.info(httpMethod)
  logger.info(endPoint)
})
