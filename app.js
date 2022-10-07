require('dotenv').config()
require('module-alias/register')

const config = require('@config')
const env = require('../atm-jira-api/env')[config.env]

console.log('Starting this project....')
console.log('Variables JS')
console.log(env)
