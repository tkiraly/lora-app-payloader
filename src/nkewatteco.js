var Parser = require('binary-parser').Parser

module.exports = {
  THR: function (payload) {
    if (payload) {
      var obj = {}
      var decoded = new Parser()
                .endianess('big')
                .uint8('Flag')
                .uint8('CommandID')
                .uint16('ClusterID')
      var buf = new Buffer(payload, 'hex')
      obj = decoded.parse(buf)
      switch (obj.ClusterID) {
        case 1026: // Temperature Measurement
          switch (obj.CommandID) {
            case 10: // report attributes
              var decoded1 = new Parser()
                                .endianess('big')
                                .uint16('AttributeID')// no status byte
                                .uint8('AttributeType')
                                .uint16('Temperature')
              var buf1 = new Buffer(payload.substr(8, payload.length - 8), 'hex')
              Object.assign(obj, decoded1.parse(buf1))
              obj.Temperature = obj.Temperature / 100
              return obj
            default:
              throw new Error('unknown CommandID: ' + buf.CommandID)
          }
        default:
          throw new Error('unknown CommandID: ' + buf.ClusterID)
      }
    } else return null
  }
}
