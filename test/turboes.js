var expect = require('chai').expect;
var converter = require("../src/turboes")

describe('Turboes', function () {
  describe('TBS200', function () {
    describe('uplink status', function () {
      var payloadTBS200 = 'ab005a80ae'
      it(`should return 0 Status with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ab");
      });
    });
    describe('uplink parameters', function () {
      var payloadTBS200 = 'ac005a80ae'
      it(`should return 0 Status with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ac");
      });
    });
    describe('downlink command', function () {
      var payloadTBS200 = 'ad005a80ae'
      it(`should return 0 Status with payload ${payloadTBS200}`, function () {
        expect(converter.TBS200(payloadTBS200).FrameType).to.eq("ad");
      });
    });
  });
});


