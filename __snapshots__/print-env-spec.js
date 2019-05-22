exports['@bahmutov/print-env bin command prints sorted variables 1'] = `
FOOXFA=baz
FOOXFE=bar
FOOXFF=foo
`

exports['@bahmutov/print-env returns only prefixed env vars 1'] = {
  "FOOXFF": "foo",
  "FOOXFE": "bar",
  "FOOXFA": "baz"
}

exports['@bahmutov/print-env bin has-env command prints present sorted variables 1'] = `
FOOXFA is present: true
FOOXFE is present: true
FOOXFF is present: true
`
