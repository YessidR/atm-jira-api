require('module-alias/register')

const env = require('@envManager')

console.log('Starting this project....')
console.log('Variables JS')
console.log(env)
console.log('Fin vbles JS')
this.user = new env.Env()
console.log(this.user.username)
