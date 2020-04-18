'use strict'

/* eslint-env mocha */
const getVars = require('.')
const snapshot = require('snap-shot-it')
const execa = require('execa')
const { resolve } = require('path')
const { strictEqual } = require('assert')

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

  it('has valid behavior for function', () => {
    snapshot(getVars, [['FOOX']], [['FOO', 'BAR']], [['NONONO', 'FOO']])
  })

  describe('cli', () => {
    describe('print-env', () => {
      const bin = resolve('bin', 'print-env.js')

      const succesTestCases = [
        ['displays usage when no arguments given', []],
        ['prints sorted variables with values', ['FOOX']],
        ['prints sorted variables without values when passed -e|--exists flag', ['-e', 'FOOX']],
        ['supports multiple prefixes', ['FOOX', 'BARX']],
        ['exits successfully if at least one variable is found', ['NOTFOUND', 'FOO']]
      ]

      const failTestCases = [
        ['exits with 1 when no env variables are found', ['BAZX']],
        ['exits with 1 when no env variables exist', ['--exists', 'BAZX']]
      ]

      succesTestCases.forEach(([successCase, args]) =>
        it(successCase, async () => {
          const { stdout, exitCode } = await execa(bin, args)
          strictEqual(exitCode, 0, 'Expected successful exit')
          snapshot(stdout)
        })
      )

      failTestCases.forEach(([failCase, args]) => it(failCase, async () => {
        try {
          await execa(bin, args)
        } catch ({ stderr, exitCode }) {
          strictEqual(exitCode, 1, 'Expected exit code to be 1')
          snapshot(stderr)
        }
      }))
    })
  })
})
