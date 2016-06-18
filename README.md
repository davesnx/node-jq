# node-jq

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/) [![npm release](https://img.shields.io/npm/v/node-jq.svg)](https://www.npmjs.com/package/node-jq)  [![Travis Build](https://img.shields.io/travis/sanack/node-jq/master.svg)](https://travis-ci.org/sanack/node-jq) [![Coverage Status](https://coveralls.io/repos/github/sanack/node-jq/badge.svg?branch=master)](https://coveralls.io/github/sanack/node-jq?branch=master) [![npm downloads](https://img.shields.io/npm/dm/node-jq.svg)](https://www.npmjs.com/package/node-jq) [![Gitter](https://badges.gitter.im/davesnx/node-jq.svg)](https://gitter.im/davesnx/node-jq?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

[`jq`](https://stedolan.github.io/jq/) is a lightweight and flexible
    command-line JSON processor.

> Work in progress...

## Installation

Need to have [`jq`](https://stedolan.github.io/jq/download/) installed.

```bash
npm install node-jq --save
```

## Usage

```javascript
import { run } from 'node-jq'
// or
const run = require('node-jq').run

const filter = '. | map(select(.foo > 10))'
const jsonPath = path.join(__dirname, 'path', 'to', 'json')

run(filter, jsonPath)
  .then((output) => {
    // something with the output
  })
  .catch((err) => {
    // something with the error
  })
```

## License

MIT
