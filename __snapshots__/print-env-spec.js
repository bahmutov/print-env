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
