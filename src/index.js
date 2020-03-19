'use strict'

/**
 * Get the environment variables starting with any of the given prefixes
 * @param {string[]} prefixes
 * @example getVars(["FOO", "BAR"])
 * @returns {Object.<string, string>}
 */
const getVars = prefixes =>
  Object.keys(process.env).reduce(
    (result, key) =>
      prefixes.some(p => key.startsWith(p))
        ? Object.assign(result, { [key]: process.env[key] })
        : result,
    {}
  )

module.exports = getVars
