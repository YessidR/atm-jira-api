require('module-alias/register')

const { Given, When } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const env = require('@envManager')
const { api } = require('@reqManager')
const { unflatten } = require('flat')

// Create new issue
Given('the user sets the request body with:', function (dataTable) {
  this.body = unflatten(dataTable.rowsHash(), this)
})

When('the user sends a {string} to create a Bug to {string}', async function (httpMethod, endPoint) {
  logger.debug('Creating a new Issue...')
  const res = await api.post(httpMethod, endPoint, this.body)
  logger.info('Issue successfully created...')
  this.user = new env.Env()
  this.endPoint = endPoint
  this.actualBody = res.body
  this.actualStatusCode = res.statusCode
})

When('the user sends {string} to {string} to retrieve previous issue', async function (httpMethod, endPoint) {
  logger.debug(`Verifying issue ${this.issueId}...`)
  const res = await api.get(httpMethod, endPoint, this.issueId)
  this.actualStatusCode = res.statusCode
})
