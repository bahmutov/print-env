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
  console.error(chalk.red(`No environment variables found that start with ${prefixes.join(' ')}`))
  process.exit(1)
}

const found = []; const notFound = []

prefixes.forEach(p => (keys.some(k => k.startsWith(p)) ? found : notFound).push(p))

console.info(chalk.green.bold(`Found environment variables that start with ${found.join(' ')}:`))
keys.forEach(key => {
  const output = `${key}${program.exists ? '' : `=${variables[key]}`}`
  console.info(output)
})
if (notFound.length) {
  console.info(chalk.yellow(`No environment variables found that start with ${notFound.join(' ')}`))
}
