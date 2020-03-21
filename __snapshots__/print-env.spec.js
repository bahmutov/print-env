exports['@bahmutov/print-env returns only prefixed env vars 1'] = {
  "FOOXFA": "baz",
  "FOOXFE": "bar",
  "FOOXFF": "foo"
}

exports['@bahmutov/print-env supports multiple prefixes 1'] = {
  "FOOXFF": "foo",
  "FOOXFE": "bar",
  "FOOXFA": "baz",
  "BARXFF": "blanditiis",
  "BARXFE": "facere",
  "BARXFA": "enim"
}

exports['@bahmutov/print-env cli has-env displays a message when no env variables are found 1'] = `
No environment variables found
`

exports['@bahmutov/print-env cli print-env prints sorted variables 1'] = `
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli print-env supports multiple prefixes 1'] = `
BARXFA=enim
BARXFE=facere
BARXFF=blanditiis
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env cli has-env prints present sorted variables 1'] = `
Found environment variables:
FOOXFA
FOOXFE
FOOXFF
`

exports['@bahmutov/print-env cli has-env supports multiple prefixes 1'] = `
Found environment variables:
BARXFA
BARXFE
BARXFF
FOOXFA
FOOXFE
FOOXFF
`
