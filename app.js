require('dotenv').config()
const config = require('../atm-jira-api/config')
const env = require('../atm-jira-api/env')[config.env]

console.log('Starting this project....')
console.log('Variables JS')
console.log(env)
