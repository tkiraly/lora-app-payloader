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
    },
    TBS100: function (payload) {
        if (payload) {
            switch (payload.substr(0, 2)) {
                case "a1":
                    return parsea1(payload);
                case "a2":
                    return parsea2(payload);
                case "a3":
                    return parsea3(payload);
                case "a4":
                    return parsea4(payload);
                case "a5":
                    return parsea5(payload);
                default:
                    return null;
            }
        } else return null;
    }
}

function parsea12(payload, frametype) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit4('FrameCount')
        .bit1('FireAlarm')
        .bit1('FaultAlarm')
        .bit1('LBAlarm')
        .bit1('TempAlarm')
        .uint8('Temperature')
        .uint8('Reserved')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: frametype,
        FrameEnd: payload.substr(8, 2)
    });
}

function parsea1(payload) {
    return parsea12(payload, "a1")
}

function parsea2(payload) {
    return parsea12(payload, "a2")
}

function parsea3(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .uint8('MoteType')
        .uint8('Model')
        .bit4('HWVersion')
        .bit4('SWVersion')
        .bit4('HeartbeatInterval')
        .bit4('TempDetectInterval')
        .uint8('AlarmInterval')
        .uint8('TempThrL')
        .uint8('TempThrH')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "a3",
        FrameEnd: payload.substr(16, 2)
    });
}

function parsea4(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit4('SilentTime')
        .bit1('StopFireAlarm')
        .bit1('StopFaultAlarm')
        .bit1('StopLBAlarm')
        .bit1('StopTempAlarm')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "a4",
        FrameEnd: payload.substr(4, 2)
    });
}

function parsea5(payload) {
    var decoded = new Parser()
        .endianess('big')
        .skip(1)
        .bit3('Unused')
        .bit1('SetHBI')
        .bit1('SetTDI')
        .bit1('SetTT')
        .bit1('Restore')
        .bit1('Reset')
        .bit4('TempDetectInterval')
        .bit4('HeartbeatInterval')
        .uint8('TempThrL')
        .uint8('TempThrH')
        .uint8('AlarmInterval')
    var buf = new Buffer(payload, 'hex');
    return Object.assign(decoded.parse(buf), {
        FrameType: "a5",
        FrameEnd: payload.substr(12, 2)
    });
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