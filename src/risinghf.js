var Parser = require('binary-parser').Parser

module.exports = {
  RHF1S001: function (payload) {
    if (payload) {
      return parse(payload)
    } else return null
  }
}

function parse (payload) {
  var decoded = new Parser()
        .endianess('little')
        .uint8('Header')
        .uint16('Temperature')
        .uint8('Humidity')
        .uint16('Period')
        .uint8('RSSI')
        .int8('SNR')
        .uint8('Battery')
  var buf = new Buffer(payload, 'hex')
  var obj = decoded.parse(buf)
  obj.Temperature = 175.72 * obj.Temperature / Math.pow(2, 16) - 46.85
  obj.Humidity = 125 * obj.Humidity / Math.pow(2, 8) - 6
  obj.Period = obj.Period * 2
  obj.RSSI = obj.RSSI === 0xff ? 0 : -180 + obj.RSSI
  obj.SNR = obj.SNR / 4
  obj.Battery = (obj.Battery + 150) * 0.01
  return obj
}
