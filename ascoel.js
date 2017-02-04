var Parser = require('binary-parser').Parser;

module.exports = {
    CO868LR: function (payload) {
        if (payload) {
            var decoded = new Parser()
                .endianess('big')
                .bit1('BatteryType')
                .bit7('BatteryLevel')
                .floatle('TValue')
                .floatle('RHValue')
                .uint16('CO2Value');
            var buf = new Buffer(payload, 'hex');
            return decoded.parse(buf);
        }
        else return null;
    }
}