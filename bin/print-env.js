#!/usr/bin/env node
const { program } = require('commander')
const chalk = require('chalk')

program.description(
  'Finds and prints the names and values of all environment variables present that start with any of the PREFIXes '
)
program.usage('[options] <PREFIX>...')
program.option('-e, --exists', 'Print only variable names')
program.parse(process.argv)

const prefixes = program.args

if (!prefixes.length) {
  console.error(program.help())
  process.exit(-1)
}

const getVars = require('..')
const variables = getVars(prefixes)
const keys = Object.keys(variables).sort()

if (!keys.length) {
  console.error(chalk.red('No environment variables found'))
  process.exit(1)
}

console.info(chalk.green.bold('Found environment variables:'))
keys.forEach(key => {
  const output = `${key}${program.exists ? '' : `=${variables[key]}`}`
  console.info(output)
})
