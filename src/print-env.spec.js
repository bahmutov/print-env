'use strict'

/* eslint-env mocha */
const printEnv = require('.')
const clone = x => JSON.parse(JSON.stringify(x))
const snapshot = require('snap-shot-it')
const execa = require('execa')
const { join } = require('path')

describe('@bahmutov/print-env', () => {
  let env

  beforeEach(() => {
    env = clone(process.env)
    Object.assign(process.env, {
      FOOXFF: 'foo',
      FOOXFE: 'bar',
      FOOXFA: 'baz',
      BARXFF: 'blanditiis',
      BARXFE: 'facere',
      BARXFA: 'enim'
    })
  })

  afterEach(() => {
    process.env = env
  })

  it('returns only prefixed env vars', () => {
    snapshot(printEnv(['FOOX']))
  })

  it('supports multiple prefixes', () => {
    snapshot(printEnv(['FOO', 'BAR']))
  })

  describe('bin print-env command', () => {
    const bin = join(__dirname, '..', 'bin', 'print-env.js')
    it('prints sorted variables', async () => {
      const { stdout } = await execa('node', [bin, 'FOOX'], {
        env: process.env
      })
      snapshot(stdout)
    })
    it('supports multiple prefixes', async () => {
      const { stdout } = await execa('node', [bin, 'FOOX', 'BARX'], {
        env: process.env
      })
      snapshot(stdout)
    })
  })

  describe('bin has-env command', () => {
    const bin = join(__dirname, '..', 'bin', 'has-env.js')
    it('prints present sorted variables', async () => {
      const { stdout } = await execa('node', [bin, 'FOOX'], {
        env: process.env
      })
      snapshot(stdout)
    })
    it('supports multiple prefixes', async () => {
      const { stdout } = await execa('node', [bin, 'FOOX', 'BARX'], {
        env: process.env
      })
      snapshot(stdout)
    })
    it('displays a message when no env variables are found', async () => {
      try {
        await execa('node', [bin, 'BAZX'], {
          env: process.env
        })
      } catch ({ stderr }) {
        snapshot(stderr.trim())
      }
    })
  })
})
