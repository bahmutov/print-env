'use strict'

/* eslint-env mocha */
const printEnv = require('.')
const snapshot = require('snap-shot-it')
const execa = require('execa')
const { join } = require('path')

describe('@bahmutov/print-env', () => {
  before(() => {
    Object.assign(process.env, {
      FOOXFF: 'foo',
      FOOXFE: 'bar',
      FOOXFA: 'baz',
      BARXFF: 'blanditiis',
      BARXFE: 'facere',
      BARXFA: 'enim'
    })
  })

  it('returns only prefixed env vars', () => {
    snapshot(printEnv(['FOOX']))
  })

  it('supports multiple prefixes', () => {
    snapshot(printEnv(['FOO', 'BAR']))
  })

  describe('cli', () => {
    const getBin = b => join(__dirname, '..', 'bin', b)
    describe('print-env', () => {
      const bin = getBin('print-env.js')
      it('displays usage on 0 args', async () => {
        const { stdout } = await execa('node', [bin])
        snapshot(stdout)
      })
      it('prints sorted variables with values', async () => {
        const { stdout } = await execa('node', [bin, 'FOOX'])
        snapshot(stdout)
      })
      it('prints sorted variables without values when passed -e|--exists flag', async () => {
        const { stdout } = await execa('node', [bin, '-e', 'FOOX'])
        snapshot(stdout)
      })
      it('supports multiple prefixes', async () => {
        const { stdout } = await execa('node', [bin, 'FOOX', 'BARX'])
        snapshot(stdout)
      })
      it('displays a message when no env variables are found', async () => {
        try {
          await execa('node', [bin, 'BAZX'])
        } catch ({ stderr }) {
          snapshot(stderr.trim())
        }
      })
    })
  })
})
