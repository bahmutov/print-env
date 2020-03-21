# @bahmutov/print-env [![renovate-app badge][renovate-badge]][renovate-app]

> Prints all environment variables that start with given string(s)

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Installation and usage

Requires [Node](https://nodejs.org/en/) version 6 or above.

Usually on your CI, you can just install this CLI tool globally

```sh
npm install -g @bahmutov/print-env
```

Then call the tool with 1 or more prefixes, for example to show all vars beginning with TRAVIS or NODE

```sh
$ print-env TRAVIS NODE
NODE_ENV=development
TRAVIS_BRANCH=master
TRAVIS_SUDO=false
TRAVIS_NODE_VERSION=8
TRAVIS_PRE_CHEF_BOOTSTRAP_TIME=2017-08-29T02:16:18
...
```

Variables are sorted alphabetically.

### has-env

You can also check if sensitive variables are present using the `has-env` command with the desired prefixes, in which case only the names of environment variables are printed

```sh
$ has-env GH
Found environment variables:
GH_API_KEY
GH_INSTALLATION_ID
...
```

### npx

You can run this tool without installing it permanently using `npx` command

```sh
$ npx -p @bahmutov/print-env has-env USER
npx: installed 1 in 0.737s
Found environment variables:
USER

$ npx -p @bahmutov/print-env print-env USER
npx: installed 1 in 1.975s
USER=gleb
```

The CLI argument `-p` is an alias to `--package` and tells `npx` which package to install, followed by the command alias (`has-env` or `print-env`) and its arguments.

## About

### Author
Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

### License
[MIT](LICENSE) - do anything with the code, but don't blame me if it does not work.

### Support
If you find any problems with this module, [email][email-link] / [tweet][tweet-link] /
[open issue][issue-link] on Github

[email-link]: mailto:gleb.bahmutov@gmail.com
[tweet-link]: https://twitter.com/intent/tweet?text=%40bahmutov
[issue-link]: https://github.com/bahmutov/print-env/issues
[email-link]: mailto:gleb.bahmutov@gmail.com
[npm-icon]: https://nodei.co/npm/@bahmutov/print-env.svg?downloads=true
[npm-url]: https://npmjs.org/package/@bahmutov/print-env
[ci-image]: https://travis-ci.org/bahmutov/print-env.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/print-env
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/