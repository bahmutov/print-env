exports['@bahmutov/print-env returns only prefixed env vars 1'] = {
  "FOOXFA": "baz",
  "FOOXFE": "bar",
  "FOOXFF": "foo"
}

exports['@bahmutov/print-env supports multiple prefixes 1'] = {
  "BARXFA": "enim",
  "BARXFE": "facere",
  "BARXFF": "blanditiis",
  "FOOXFA": "baz",
  "FOOXFE": "bar",
  "FOOXFF": "foo"
}

exports['@bahmutov/print-env cli print-env displays usage on 0 args 1'] = `
Usage: print-env [options] <PREFIX>...

Finds and prints the names and values of all environment variables present that start with any of the PREFIXes 

Options:
  -e, --exists  Print only variable names
  -h, --help    display help for command
`

exports['@bahmutov/print-env cli print-env prints sorted variables with values 1'] = `
Found environment variables:
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli print-env prints sorted variables without values when passed -e|--exists flag 1'] = `
Found environment variables:
FOOXFA
FOOXFE
FOOXFF
`

exports['@bahmutov/print-env cli print-env supports multiple prefixes 1'] = `
Found environment variables:
BARXFA=enim
BARXFE=facere
BARXFF=blanditiis
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli print-env displays a message when no env variables are found 1'] = `
No environment variables found
`

exports['found at least FOO*'] = {
  "FOOXFF": "foo",
  "FOOXFE": "bar",
  "FOOXFA": "baz"
}
