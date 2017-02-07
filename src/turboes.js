var Parser = require('binary-parser').Parser;

module.exports = {
    TBS200: function (payload) {
        if (payload) {
            switch (payload.substr(0, 2)) {
                case "ab":
                    return parseuplinkstatusframe(payload);
                case "ac":
                    return parseuplinkparametersframe(payload);
                case "ad":
                    return parsedownlinkcommandframe(payload);
                default:
                    return null;
            }
        } else return null;
    }
}

function parseuplinkstatusframe(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit4('FrameCount')
        .bit4('Status')
        .bit1('ParkFlag')
        .bit7('BatteryLevel')
        .uint8('Reserved')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "ab",
        FrameEnd: payload.substr(8, 2)
    });
}

function parseuplinkparametersframe(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit3('HWVersion')
        .bit5('SWVersion')
        .bit1('Unused')
        .bit1('WM')
        .bit3('HeartbeatInterval')
        .bit3('Sensitivity')
        .uint8('Reserved')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "ac",
        FrameEnd: payload.substr(8, 2)
    });
}

function parsedownlinkcommandframe(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit1('Reset')
        .bit1('Unused')
        .bit1('ParaInq')
        .bit1('Upgrade')
        .bit1('SetHBI')
        .bit1('SetSens')
        .bit1('Calib')
        .bit1('SetWM')
        .bit1('CalibMode')
        .bit1('WM')
        .bit3('Sensitivity')
        .bit3('HeartbeatInterval')
        .uint8('Reserved')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "ad",
        FrameEnd: payload.substr(8, 2)
    });
}