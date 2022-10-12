/* eslint-disable prefer-regex-literals */
/**
 * Data Parser
 */

/**
 * Replaces a text or fragment of text between () with a key from an object
 * @param {*} text Text to be parsed
 * @param {*} keys Set of keys where to look for replace value
 * @returns Parsed text
 */
function replaceKey (text, keys) {
  const pattern = RegExp(/\((.*)\)/)
  const value = text.match(pattern)
  if (value) return text.replace(value[0], keys[value[1]])
  else return text
}

/**
   * Transforms a string value into undefined|boolean|null|number
   * @param {string} value Value to parse
   * @returns the parsed value
   */
function parseValue (value) {
  if (value === 'undefined') {
    return undefined
  } else if (value === 'true') {
    return true
  } else if (value === 'false') {
    return false
  } else if (value === 'null') {
    return null
  }
  return value
}

/**
   * Parses and replace values of an object
   * @param {*} dataTable Data table object
   * @param {*} keys Set of keys where to look for replace value
   * @returns parsed object
   */
function parseDataTable (dataTable, keys) {
  for (const [k, v] of Object.entries(dataTable)) {
    dataTable[k] = parseValue(replaceKey(v, keys))
  }
  return dataTable
}

module.exports = { replaceKey, parseDataTable, parseValue }
