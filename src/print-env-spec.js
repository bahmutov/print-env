'use strict'

/* eslint-env mocha */
const printEnv = require('.')
const clone = x => JSON.parse(JSON.stringify(x))
const snapshot = require('snap-shot-it')

describe('@bahmutov/print-env', () => {
  let env

  beforeEach(() => {
    env = clone(process.env)
  })

  afterEach(() => {
    process.env = env
  })

  it('returns only prefixed env vars', () => {
    process.env.FOOXFF = 'foo'
    process.env.FOOXFE = 'bar'
    process.env.FOOXFA = 'baz'
    snapshot(printEnv('FOOX'))
  })
})
