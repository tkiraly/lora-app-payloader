var Parser = require('binary-parser').Parser;

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
                        .uint16('CO2Value');
                    var buf = new Buffer(payload, 'hex');
                    return decoded.parse(buf);
                }
                return null;
            default:
                throw new Error("unknown LoRa port number: " + port);
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
                        .uint8('OpCnt');
                    var buf = new Buffer(payload, 'hex');
                    return decoded.parse(buf);
                }
                return null;
            default:
                throw new Error("unknown LoRa port number: " + port);
        }

    }
}