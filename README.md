# @bahmutov/print-env

> Prints all environment variables that start with given string

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Install and use

Requires [Node](https://nodejs.org/en/) version 6 or above.

Usually on your CI, you can just install this CLI tool globally

```sh
npm install @bahmutov/print-env
```

Then call the tool with prefix, for example to show all Travis vars

```sh
$ print-env TRAVIS
TRAVIS_BRANCH=master
TRAVIS_SUDO=false
TRAVIS_NODE_VERSION=8
TRAVIS_PRE_CHEF_BOOTSTRAP_TIME=2017-08-29T02:16:18
...
```

Variables are sorted alphabetically.

### has-env

You can also check if sensitive variables are present using `has-env PREFIX` syntax. In that case the values are not printed, only "present: true"

```sh
$ print-env GH
GH_API_KEY is present: true
GH_INSTALLATION_ID is present: true
...
```

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/print-env/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/@bahmutov/print-env.svg?downloads=true
[npm-url]: https://npmjs.org/package/@bahmutov/print-env
[ci-image]: https://travis-ci.org/bahmutov/print-env.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/print-env
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
