require('module-alias/register')

const { Then } = require('@cucumber/cucumber')
const logger = require('@logger').logger
const { expect } = require('chai')
const { parseDataTable } = require('@parser')

Then('the status code should be {int}', async function (expectedStatusCode) {
  logger.debug('Verifying status code...')
  expect(this.actualStatusCode).to.equal(expectedStatusCode, `The status code is not ${expectedStatusCode}`)
  logger.info(`The status code is ${expectedStatusCode}`)
})

Then('the response body should be:', function (dataTable) {
  logger.debug('Verifying if th response body matches to the actual body...')
  const expectedResult = parseDataTable(dataTable.rowsHash(), this)
  expect(expectedResult).to.deep.equal(this.actualBody, 'The actual body does not match the expected body')
  logger.info('The response body matches to actual body')
})
