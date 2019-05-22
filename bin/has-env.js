#!/usr/bin/env node

const prefix = process.argv[2]
if (!prefix) {
  console.error('usage: has-env PREFIX')
  console.error(
    'finds and prints names of all environment variables present that start with PREFIX'
  )
  console.error('like PREFIX_FOO=... PREFIX_BAR=...')
  process.exit(-1)
}

const getVars = require('..')
const variables = getVars(prefix)
// an object
Object.keys(variables)
  .sort()
  .forEach(key => {
    console.log('%s is present: %s', key, Boolean(variables[key]))
  })
