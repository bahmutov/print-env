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

```sh
$ print-env
Usage: print-env [options] <PREFIX>...

Finds and prints the names and values of all environment variables present that start with any of the PREFIXes

Options:
  -e, --exists  Print only variable names
  -h, --help    display help for command
```

Call the tool with 1 or more prefixes, for example to show all vars beginning with TRAVIS or NODE:

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

You can also check if sensitive variables are present using the `-e|--exists` command with the desired prefixes, in which case only the names of environment variables are printed:

```sh
$ print-env -e GH
Found environment variables that start with GH:
GH_API_KEY
GH_INSTALLATION_ID
...
```

### exit code

If there are no variables starting with the given prefix, the tool with exit with code 1

```sh
$ print-env -e FOO
No environment variables found that start with FOO

$ echo $?
1
```

### npx

You can run this tool without installing it permanently using `npx` command

```sh
$ npx @bahmutov/print-env --exists USER
npx: installed 1 in 0.737s
Found environment variables that start with USER:
USER

$ npx @bahmutov/print-env USER
npx: installed 1 in 1.975s
Found environment variables that start with USER:
USER=gleb
```

## Publishing new version

New versions are automatically published to NPM from CI using [semantic-release](https://github.com/semantic-release/semantic-release) tool. In order for new version to be published, there should be commits since the last published version that have the subject with [semantic convention](https://github.com/semantic-release/semantic-release#commit-message-format).

```text
fix: stop graphite breaking when too much pressure applied | patch release
feat: explain the feature | minor release
```

When making pull request, edit the _title of the squashed commit_ - this is what semantic release will look at to decide if a new version should be published or not. If you forget, no big deal, just push an empty commit with desired release subject

```text
git commit --allow-empty -m "feat: new exciting feature"
git push
```

## About

### Author

Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

- [@bahmutov](https://twitter.com/bahmutov)
- [glebbahmutov.com](https://glebbahmutov.com)
- [blog](https://glebbahmutov.com/blog)

### Collaborators

- Juleo Amosah [@Teomik129](https://github.com/Teomik129)

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
[ci-image]: https://github.com/bahmutov/print-env/workflows/ci/badge.svg?branch=master
[ci-url]: https://github.com/bahmutov/print-env/actions
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
[renovate-badge]: https://img.shields.io/badge/renovate-app-blue.svg
[renovate-app]: https://renovateapp.com/
