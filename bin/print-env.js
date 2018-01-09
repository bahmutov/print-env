#!/usr/bin/env node

const prefix = process.argv[2]
if (!prefix) {
  console.error('usage: print-env PREFIX')
  console.error(
    'finds and prints all environment variables that start with PREFIX'
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
    console.log('%s=%s', key, variables[key])
  })
