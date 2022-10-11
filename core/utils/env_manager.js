/**
 * Configuration Manager
 */
const config = require('@config')
const envr = require('@env')[config.env]

class Env {
  constructor () {
    this.api_url = envr.api_url
    this.username = envr.users.user.username
    this.password = envr.users.user.password
    this.name = envr.users.user.name
    this.key = envr.users.user.key
    this.token = envr.users.user.token
  } // constructor()
}

const env = Object.freeze(new Env())
module.exports = { env, Env }
