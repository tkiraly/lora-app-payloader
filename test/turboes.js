var expect = require('chai').expect;
var converter = require("../src/turboes")

describe('Turboes', function () {
  describe('TBS200', function () {
    describe('uplink status', function () {
      var payloadTBS200 = 'ab005a80ae'
      it(`should return ab FrameType with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ab");
      });
      it(`should return 0 FrameCount with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameCount).to.eq(0);
      });
      it(`should return 0 Status with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Status).to.eq(0);
      });
      it(`should return 0 ParkFlag with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).ParkFlag).to.eq(0);
      });
      it(`should return 90 BatteryLevel with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).BatteryLevel).to.eq(90);
      });
      it(`should return 128 Reserved with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Reserved).to.eq(128);
      });
      it(`should return ae FrameEnd with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameEnd).to.eq("ae");
      });
    });
    describe('uplink parameters', function () {
      var payloadTBS200 = 'ac005a80ae'
      it(`should return 0 FrameType with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ac");
      });
      it(`should return 0 HWVersion with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).HWVersion).to.eq(0);
      });
      it(`should return 0 SWVersion with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).SWVersion).to.eq(0);
      });
      it(`should return 0 Unused with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Unused).to.eq(0);
      });
      it(`should return 1 WM with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).WM).to.eq(1);
      });
      it(`should return 3 HeartbeatInterval with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).HeartbeatInterval).to.eq(3);
      });
      it(`should return 2 Sensitivity with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Sensitivity).to.eq(2);
      });
      it(`should return 128 Reserved with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Reserved).to.eq(128);
      });
      it(`should return ae FrameEnd with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameEnd).to.eq("ae");
      });
    });
    describe('downlink command', function () {
      var payloadTBS200 = 'ad005a80ae'
      it(`should return 0 Status with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ad");
      });
      it(`should return 0 Reset with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Reset).to.eq(0);
      });
      it(`should return 0 Unused with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Unused).to.eq(0);
      });
      it(`should return 0 ParaInqStatus with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).ParaInq).to.eq(0);
      });
      it(`should return 0 Upgrade with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Upgrade).to.eq(0);
      });
      it(`should return 0 SetHBI with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).SetHBI).to.eq(0);
      });
      it(`should return 0 SetSens with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).SetSens).to.eq(0);
      });
      it(`should return 0 Calib with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Calib).to.eq(0);
      });
      it(`should return 0 SetWM with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).SetWM).to.eq(0);
      });
      it(`should return 0 CalibMode with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).CalibMode).to.eq(0);
      });
      it(`should return 1 WM with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).WM).to.eq(1);
      });
      it(`should return 3 Sensitivity with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Sensitivity).to.eq(3);
      });
      it(`should return 2 HeartbeatInterval with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).HeartbeatInterval).to.eq(2);
      });
      it(`should return 128 Reserved with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).Reserved).to.eq(128);
      });
      it(`should return ae FrameEnd with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameEnd).to.eq("ae");
      });
    });
  });
});
