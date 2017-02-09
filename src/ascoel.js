var Parser = require('binary-parser').Parser

module.exports = {
  CO868LR: function (payload, port = 9) {
    switch (port) {
      case 9:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit1('BatteryType')
                        .bit7('BatteryLevel')
                        .floatle('TValue')
                        .floatle('RHValue')
                        .uint16('CO2Value')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        break
      case 7:
        if (payload) {
          var text = parseport7(payload)
          var obj = {
            FW: text.substr(0, 3),
            lorawanClient: text.substr(4, 5),
            HW: text.substr(10, 1)
          }
          return obj
        }
        return null
      default:
        throw new Error('unknown LoRa port number: ' + port)
    }
  },
  TH868LR: function (payload, port = 9) {
    switch (port) {
      case 9:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit1('BatteryType')
                        .bit7('BatteryLevel')
                        .floatle('TValue')
                        .floatle('RHValue')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        return null
      default:
        throw new Error('unknown LoRa port number: ' + port)
    }
  },
  IR868LR: function (payload, port = 9) {
    switch (port) {
      case 9:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit1('BatteryType')
                        .bit7('BatteryLevel')
                        .bit5('Reserved')
                        .bit1('BatteryAlarm')
                        .bit1('TamperAlarm')
                        .bit1('IntrusionAlarm')
                        .uint8('OpCnt')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        break
      case 20:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit5('Reserved')
                        .bit1('BatteryAlarm')
                        .bit1('TamperAlarm')
                        .bit1('IntrusionAlarm')
                        .uint16('OpCnt')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        return null
      default:
        throw new Error('unknown LoRa port number: ' + port)
    }
  },
  CM868LR: function (payload, port = 9) {
    switch (port) {
      case 9:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit1('BatteryType')
                        .bit7('BatteryLevel')
                        .bit3('Reserved')
                        .bit2('ExternalInputStatus')
                        .bit1('BatteryAlarm')
                        .bit1('TamperAlarm')
                        .bit1('ReedAlarm')
                        .uint16('OpCnt')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        return null
      default:
        throw new Error('unknown LoRa port number: ' + port)
    }
  },
  CM868LRTH: function (payload, port = 9) {
    switch (port) {
      case 9:
        if (payload) {
          var decoded = new Parser()
                        .endianess('big')
                        .bit1('BatteryType')
                        .bit7('BatteryLevel')
                        .bit3('Reserved')
                        .bit2('ExternalInputStatus')
                        .bit1('BatteryAlarm')
                        .bit1('TamperAlarm')
                        .bit1('ReedAlarm')
                        .floatle('TValue')
                        .floatle('RHValue')
          var buf = new Buffer(payload, 'hex')
          return decoded.parse(buf)
        }
        return null
      default:
        throw new Error('unknown LoRa port number: ' + port)
    }
  }
}

function parseport7 (payload) {
  var text = ''
  for (var index = 0; index < payload.length; index += 2) {
    var c = payload[index]
    var n = payload[index + 1]
    text += String.fromCharCode(parseInt(c.concat(n), 16))
  }

  return text
}
