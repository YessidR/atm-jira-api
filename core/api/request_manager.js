require('module-alias/register')

const logger = require('@logger').logger
const superagent = require('superagent')
const env = require('@envManager')

/**
 * Performs an HTTP Request
 * @param {string} httpMethod HTTP verb - GET, POST, PUT, PATCH, DELETE, or others
 * @param {string} endpoint Resource to send the request for example "/endpoint"
 * @param {string} username Bearer username
 * @param {string} token Bearer token
 * @returns Response object
 */
async function send (httpMethod, endPoint) {
  logger.debug(`Sending ${httpMethod} request to ${endPoint}`)
  const user = new env.Env()
  const response = await superagent(httpMethod, `${user.api_url}${endPoint}`)
    .auth(user.username, user.token)
  return response
}

module.exports = { send }
