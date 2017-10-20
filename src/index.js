'use strict'

function getVars (prefix) {
  const vars = {}
  Object.keys(process.env).forEach(key => {
    if (key.startsWith(prefix)) {
      vars[key] = process.env[key]
    }
  })
  return vars
}

module.exports = getVars
