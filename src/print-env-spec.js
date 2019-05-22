'use strict'

/* eslint-env mocha */
const printEnv = require('.')
const clone = x => JSON.parse(JSON.stringify(x))
const snapshot = require('snap-shot-it')
const execa = require('execa')
const join = require('path').join

describe('@bahmutov/print-env', () => {
  let env

  beforeEach(() => {
    env = clone(process.env)
    process.env.FOOXFF = 'foo'
    process.env.FOOXFE = 'bar'
    process.env.FOOXFA = 'baz'
  })

  afterEach(() => {
    process.env = env
  })

  it('returns only prefixed env vars', () => {
    snapshot(printEnv('FOOX'))
  })

  describe('bin command', () => {
    const bin = join(__dirname, '..', 'bin', 'print-env.js')
    it('prints sorted variables', () => {
      return execa('node', [bin, 'FOOX'], { env: process.env })
        .then(result => result.stdout)
        .then(snapshot)
    })
  })

  describe('bin has-env command', () => {
    const bin = join(__dirname, '..', 'bin', 'has-env.js')
    it('prints present sorted variables', () => {
      return execa('node', [bin, 'FOOX'], { env: process.env })
        .then(result => result.stdout)
        .then(snapshot)
    })
  })
})
