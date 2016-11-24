#!/usr/bin/env node

'use strict'

const BinBuild = require('bin-build')
const path = require('path')
const tempfile = require('tempfile')

const JQ_INFO = {
  name: 'jq',
  url: 'https://github.com/stedolan/jq/releases/download/',
  version: 'jq-1.5'
}

const build = new BinBuild()
  .src(JQ_INFO.url + '/' + JQ_INFO.version + '/' + JQ_INFO.version + '.tar.gz')
  .cmd('./configure --disable-maintainer-mode --bindir=' + path.join(__dirname, '../bin') + ' --libdir=' + tempfile())
  .cmd('make')
  .cmd('make install')

build.run((err) => {
  if (err) {
    console.log('err', err)
  }
  console.log('jq built successfully')
})
