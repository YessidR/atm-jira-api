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

class Api {
  async get (httpMethod, endPoint, id) {
    logger.debug(`Sending ${httpMethod} request to ${endPoint}...`)
    const user = new env.Env()
    const response = await superagent(httpMethod, `${user.api_url}${endPoint}${id}`)
      .auth(user.username, user.token)
    return response
  } // get method

  async post (httpMethod, endPoint, body) {
    logger.debug(`Sending ${httpMethod} request to ${endPoint}...`)
    const user = new env.Env()
    const response = await superagent(httpMethod, `${user.api_url}${endPoint}`)
      .auth(user.username, user.token)
      .send(body)
    return response
  } // post method

  async delete (httpMethod, endPoint, id) {
    logger.debug(`Sending ${httpMethod} request to ${endPoint}...`)
    const user = new env.Env()
    const response = await superagent(httpMethod, `${user.api_url}${endPoint}${id}`)
      .auth(user.username, user.token)
    return response
  } // delete method
}

const api = new Api()
module.exports = { api }
