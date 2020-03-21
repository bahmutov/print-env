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
      it('prints sorted variables', async () => {
        const { stdout } = await execa('node', [bin, 'FOOX'])
        snapshot(stdout)
      })
      it('supports multiple prefixes', async () => {
        const { stdout } = await execa('node', [bin, 'FOOX', 'BARX'])
        snapshot(stdout)
      })
    })

    describe('has-env', () => {
      const bin = getBin('has-env.js')
      it('prints present sorted variables', async () => {
        const { stdout } = await execa('node', [bin, 'FOOX'])
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
