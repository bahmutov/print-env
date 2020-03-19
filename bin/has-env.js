#!/usr/bin/env node

const prefixes = process.argv.slice(2)
if (!prefixes.length) {
  console.error('usage: has-env [PREFIX]...')
  console.error(
    'finds and prints names of all environment variables present that start with any of the PREFIXes'
  )
  console.error('e.g. has-env FOO BAR => FOO_BAR BAR_BAZ')
  process.exit(-1)
}

const getVars = require('..')
const keys = Object.keys(getVars(prefixes)).sort()

if (!keys.length) {
  console.error('No environment variables found')
  process.exit(1)
}

console.info('Found environment variables:')
keys.forEach(key => {
  console.info(key)
})
