import chai, { expect } from 'chai'
import chaiAsPromised from 'chai-as-promised'
chai.use(chaiAsPromised)
import path from 'path'

import { run } from '../src/jq'
import { optionDefaults } from '../src/options'

const PATH_FIXTURES = path.join(__dirname, 'fixtures')
const PATH_JSON_FIXTURE = path.join(PATH_FIXTURES, '1.json')

const FIXTURE_JSON = require(PATH_JSON_FIXTURE)
const FIXTURE_JSON_STRING = JSON.stringify(FIXTURE_JSON)
const FIXTURE_JSON_PRETTY = JSON.stringify(FIXTURE_JSON, null, 2)

const OPTION_DEFAULTS = {
  input: 'file',
  output: 'pretty'
}

describe('options', () => {
  describe('defaults', () => {
    it('should be as expected', () => {
      return expect(optionDefaults).to.deep.equal(OPTION_DEFAULTS)
    })
  })

  describe('input: file', () => {
    it('should accept a file path as input', () => {
      return expect(
        run('.', PATH_JSON_FIXTURE, {
          input: 'file'
        })
      ).to.eventually.be.fulfilled
    })
  })

  describe('input: json', () => {
    it('should accept a json object as input', () => {
      return expect(
        run('.', FIXTURE_JSON, {
          input: 'json'
        })
      ).to.eventually.be.fulfilled
    })
  })

  describe('input: string', () => {
    it('should accept a json string as input', () => {
      return expect(
        run('.', FIXTURE_JSON_STRING, {
          input: 'string'
        })
      ).to.eventually.be.fulfilled
    })
  })

  describe('output: json', () => {
    it('should return a minified json string', () => {
      return expect(
        run('.', PATH_JSON_FIXTURE, {
          output: 'json'
        })
      ).to.eventually.become(FIXTURE_JSON)
    })
  })

  describe('output: string', () => {
    it('should return a minified json string', () => {
      return expect(
        run('.', PATH_JSON_FIXTURE, {
          output: 'string'
        })
      ).to.eventually.become(FIXTURE_JSON_STRING)
    })
  })

  describe('output: pretty', () => {
    it('should return a prettified json string', () => {
      return expect(
        run('.', PATH_JSON_FIXTURE, {
          output: 'pretty'
        })
      ).to.eventually.become(FIXTURE_JSON_PRETTY)
    })
  })
})
