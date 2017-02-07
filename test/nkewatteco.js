var expect = require('chai').expect;
var converter = require("../src/nkewatteco")

describe('nkewatteco', function () {
  describe('THr', function () {
      var payloadTHr = '110a04020000290997'
      it(`should return 17 Status with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).Flag).to.eq(17);
      });
      it(`should return 10 CommandID with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).CommandID).to.eq(10);
      });
      it(`should return 1026 ClusterID with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).ClusterID).to.eq(1026);
      });
      it(`should return 0 AttributeID with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).AttributeID).to.eq(0);
      });
      it(`should return 41 AttributeType with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).AttributeType).to.eq(41);
      });
      it(`should return 24.55 Temperature with payload ${payloadTHr}`, function () {
        expect(converter.THr(payloadTHr).Temperature).to.eq(24.55);
      });
      it(`should return null with payload null`, function () {
        expect(converter.THr(null)).to.eq(null);
      });
    });
});


