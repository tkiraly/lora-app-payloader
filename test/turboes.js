var expect = require('chai').expect;
var converter = require("../src/turboes")

describe('Turboes', function () {
  describe('TBS200', function () {
    describe('uplink status', function () {
      var payload = 'ab005a80ae'
      var expected = {
        FrameType: "ab",
        FrameCount: 0,
        Status: 0,
        ParkFlag: 0,
        BatteryLevel: 90,
        Reserved: 128,
        FrameEnd: "ae",
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.TBS200(payload)).to.deep.eq(expected)
      });
    });
    describe('uplink parameters', function () {
      var payload = 'ac005a80ae'
      var expected = {
        FrameType: "ac",
        HWVersion: 0,
        SWVersion: 0,
        WM: 1,
        HeartbeatInterval: 3,
        Reserved: 128,
        Unused: 0,
        Sensitivity: 2,
        FrameEnd: "ae",
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.TBS200(payload)).to.deep.eq(expected)
      });
    });
    describe('downlink command', function () {
      var payload = 'ad005a80ae'
      var expected = {
        FrameType: "ad",
        Reset: 0,
        Unused: 0,
        ParaInq: 0,
        Upgrade: 0,
        SetHBI: 0,
        SetSens: 0,
        Sensitivity: 3,
        Calib: 0,
        CalibMode: 0,
        SetWM: 0,
        WM: 1,
        HeartbeatInterval: 2,
        Reserved: 128,
        FrameEnd: "ae"
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.TBS200(payload)).to.deep.eq(expected)
      });
    });

    describe('TBS100', function () {
      describe('uplink status a1', function () {
        var payload = 'a1005a80e1'
        var expected = {
          FrameType: "a1",
          FaultAlarm: 0,
          Reserved: 128,
          FrameEnd: "e1",
          FrameCount: 0,
          FireAlarm: 0,
          LBAlarm: 0,
          TempAlarm: 0,
          Temperature: 90,
        }
        it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
          expect(converter.TBS100(payload)).to.deep.eq(expected)
        });
      });
      describe('uplink status a2', function () {
        var payload = 'a2005a80e1'
        var expected = {
          FrameType: "a2",
          FaultAlarm: 0,
          Reserved: 128,
          FrameEnd: "e1",
          FrameCount: 0,
          FireAlarm: 0,
          LBAlarm: 0,
          TempAlarm: 0,
          Temperature: 90,
        }
        it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
          expect(converter.TBS100(payload)).to.deep.eq(expected)
        });
      });
      describe('uplink parameters', function () {
        var payload = 'a31c010042010a32e1'
        var expected = {
          FrameType: "a3",
          MoteType: 28,
          HWVersion: 0,
          SWVersion: 0,
          FrameEnd: "e1",
          HeartbeatInterval: 4,
          AlarmInterval: 1,
          TempThrL: 10,
          TempThrH: 50,
          TempDetectInterval: 2,
          Model: 1,
        }
        it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
          expect(converter.TBS100(payload)).to.deep.eq(expected)
        });
      });
      describe('downlink control', function () {
        var payload = 'a450e1'
        var expected = {
          FrameType: "a4",
          SilentTime: 5,
          StopFaultAlarm: 0,
          StopFireAlarm: 0,
          FrameEnd: "e1",
          StopLBAlarm: 0,
          StopTempAlarm: 0,
        }
        it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
          expect(converter.TBS100(payload)).to.deep.eq(expected)
        });
      });
      describe('downlink parameters', function () {
        var payload = 'a500230a3206e1'
        var expected = {
          FrameType: "a5",
          TempThrH: 50,
          TempThrL: 10,
          AlarmInterval: 6,
          FrameEnd: "e1",
          TempDetectInterval: 2,
          HeartbeatInterval: 3,
          Reset: 0,
          Restore: 0,
          SetHBI: 0,
          SetTDI: 0,
          SetTT: 0,
          Unused: 0,
        }
        it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
          expect(converter.TBS100(payload)).to.deep.eq(expected)
        });
      });
    });
  });
});
