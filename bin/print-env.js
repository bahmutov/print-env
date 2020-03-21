#!/usr/bin/env node

const prefixes = process.argv.slice(2)
if (!prefixes.length) {
  console.error('usage: print-env [PREFIX]...')
  console.error(
    'finds and prints names of all environment variables present that start with any of the PREFIXes'
  )
  console.error('e.g. print-env FOO BAR => FOO_BAR=... BAR_BAZ=...')
  process.exit(-1)
}

const getVars = require('..')
const variables = getVars(prefixes)
// an object
Object.keys(variables)
  .sort()
  .forEach(key => {
    console.log('%s=%s', key, variables[key])
  })
