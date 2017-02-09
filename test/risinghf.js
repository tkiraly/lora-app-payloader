var expect = require('chai').expect
var converter = require('../src/risinghf')

describe('RisingHF', function () {
  describe('RHF1S001', function () {
    var payload = '016c689d30009029c8'
    var expected = {
      Header: 1,
      Temperature: 24.82582763671875,
      Humidity: 70.66015625,
      Period: 96,
      RSSI: -36,
      SNR: 10.25,
      Battery: 3.5
    }
    it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
      expect(converter.RHF1S001(payload)).to.deep.eq(expected)
    })
  })
})
