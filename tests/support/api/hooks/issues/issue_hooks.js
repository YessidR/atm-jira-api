require('module-alias/register')

const logger = require('@logger').logger
const { BeforeAll, After, AfterStep } = require('@cucumber/cucumber')
const { api } = require('@reqManager')

BeforeAll(function () {
  console.log('Setting up...')
})

AfterStep('@captureIssue', function ({ pickleStep }) {
  if (pickleStep.text === 'the user sends a "POST" to create a Bug to "/rest/api/2/issue/"') {
    this.issueId = this.actualBody.id
    this.issueKey = this.actualBody.key
    this.issueSelf = this.actualBody.self
  }
})

After('@deleteIssues', async function () {
  logger.info('Deleting issue...')
  await api.delete('DELETE', this.endPoint, this.actualBody.id)
  logger.info(`Issue ${this.actualBody.id} successfully deleted....`)
})
