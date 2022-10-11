const winston = require('winston')
const { createLogger, format } = require('winston')
const { combine, timestamp, label, printf } = format

const myFormat = printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`
})

const logger = createLogger({
  level: 'debug',
  format: combine(
    label({ label: 'test logger' }),
    timestamp(),
    format.prettyPrint(),
    format.colorize(),
    myFormat
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'combined.log' })
  ]
})

module.exports = { logger }
