exports['@bahmutov/print-env has valid behavior for function getVars 1'] = {
  "name": "getVars",
  "behavior": [
    {
      "given": [
        [
          "FOOX"
        ]
      ],
      "expect": {
        "FOOXFA": "baz",
        "FOOXFE": "bar",
        "FOOXFF": "foo"
      }
    },
    {
      "given": [
        [
          "FOO",
          "BAR"
        ]
      ],
      "expect": {
        "BARXFA": "enim",
        "BARXFE": "facere",
        "BARXFF": "blanditiis",
        "FOOXFA": "baz",
        "FOOXFE": "bar",
        "FOOXFF": "foo"
      }
    },
    {
      "given": [
        [
          "NONONO",
          "FOO"
        ]
      ],
      "expect": {
        "FOOXFA": "baz",
        "FOOXFE": "bar",
        "FOOXFF": "foo"
      }
    }
  ]
}

exports['@bahmutov/print-env cli print-env displays usage when no arguments given 1'] = `
Usage: print-env [options] <PREFIX>...

Finds and prints the names and values of all environment variables present that start with any of the PREFIXes 

Options:
  -e, --exists  Print only variable names
  -h, --help    display help for command
`

exports['@bahmutov/print-env cli print-env prints sorted variables with values 1'] = `
Found environment variables that start with FOOX:
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli print-env prints sorted variables without values when passed -e|--exists flag 1'] = `
Found environment variables that start with FOOX:
FOOXFA
FOOXFE
FOOXFF
`

exports['@bahmutov/print-env cli print-env supports multiple prefixes 1'] = `
Found environment variables that start with FOOX BARX:
BARXFA=enim
BARXFE=facere
BARXFF=blanditiis
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli print-env exits successfully if at least one variable is found 1'] = `
Found environment variables that start with FOO:
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
No environment variables found that start with NOTFOUND
`

exports['@bahmutov/print-env cli print-env exits with 1 when no env variables are found 1'] = `
No environment variables found that start with BAZX
`

exports['@bahmutov/print-env cli print-env exits with 1 when no env variables exist 1'] = `
No environment variables found that start with BAZX
`
