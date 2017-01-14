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
        }
        else return null;
    }
}

function parseuplinkstatusframe(payload) {
    var obj = {};
    obj.FrameType = payload.substr(0, 2);
    obj.FrameCount = payload.substr(2, 1);
    obj.Status = payload.substr(3, 1);

    let byte2 = parseInt(payload.substr(4, 2), 16);
    obj.ParkFlag = (byte2 & 0x80) >> 7;
    obj.BatteryLevel = byte2 & 0x7f;
    obj.Reserved = payload.substr(6, 2);
    obj.FrameEnd = payload.substr(8, 2);
    return obj;
}

function parseuplinkparametersframe(payload) {
    var obj = {};
    obj.FrameType = payload.substr(0, 2);

    let byte1 = parseInt(payload.substr(2, 2), 16);
    obj.HWVersion = byte1 & 0xe0;
    obj.SWVersion = byte1 & 0x1f;

    let byte2 = parseInt(payload.substr(4, 2), 16);
    obj.WM = byte2 & 0x40;
    obj.HeartbeatInterval = byte2 & 0x1c;
    obj.Sensitivity = byte2 & 0x07;

    obj.Reserved = payload.substr(6, 2);
    obj.FrameEnd = payload.substr(8, 2);
    return obj;
}

function parsedownlinkcommandframe(payload) {
    var obj = {};
    obj.FrameType = payload.substr(0, 2);

    let byte1 = parseInt(payload.substr(2, 2), 16);
    obj.Reset = byte1 & 0x80;
    obj.ParaInq = byte1 & 0x20;
    obj.Upgrade = byte1 & 0x10;
    obj.SetHBI = byte1 & 0x08;
    obj.SetSens = byte1 & 0x04;
    obj.Calib = byte1 & 0x02;
    obj.SetWM = byte1 & 0x01;

    let byte2 = parseInt(payload.substr(4, 2), 16);
    obj.CalibMode = byte2 & 0x80;
    obj.WM = byte2 & 0x40;
    obj.Sensitivity = byte2 & 0x38;
    obj.HeartbeatInterval = byte2 & 0x07;

    obj.Reserved = payload.substr(6, 2);
    obj.FrameEnd = payload.substr(8, 2);
    return obj;
}