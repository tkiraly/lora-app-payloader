var expect = require('chai').expect;
var converter = require("../src/ascoel")

describe('Ascoel', function () {
  describe('CO868LR', function () {
    describe('port 9', function () {
      var payload = 'e4a432704160684e4202b5'
      var expected = {
        BatteryType: 1,
        BatteryLevel: 100,
        TValue: 15.01236343383789,
        RHValue: 51.6019287109375,
        CO2Value: 693
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.CO868LR(payload)).to.deep.eq(expected)
      });
    });
    describe('port 7', function () {
      var payload = '302e352c332e342e312c42'
      var expected = {
        FW: "0.5",
        lorawanClient: "3.4.1",
        HW: "B",
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.CO868LR(payload, 7)).to.deep.eq(expected)
      });
    });
  });

  describe('TH868LR', function () {
    var payload = 'e4292e7b41002d1c42'
    var expected = {
      BatteryLevel: 100,
      BatteryType: 1,
      TValue: 15.698769569396973,
      RHValue: 39.0439453125
    }
    it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
      expect(converter.TH868LR(payload)).to.deep.eq(expected)
    });
  });

  describe('IR868LR', function () {
    describe('port 9', function () {
      var payload = 'e40008ac'
      var expected = {
        BatteryLevel: 100,
        BatteryType: 1,
        Reserved: 0,
        BatteryAlarm: 0,
        TamperAlarm: 0,
        IntrusionAlarm: 0,
        OpCnt: 8
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.IR868LR(payload)).to.deep.eq(expected)
      });
    });
    describe('port 20', function () {
      var payload = '0108af'
      var expected = {
        Reserved: 0,
        BatteryAlarm: 0,
        TamperAlarm: 0,
        IntrusionAlarm: 1,
        OpCnt: 2223
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.IR868LR(payload, 20)).to.deep.eq(expected)
      });
    });
  });

  describe('CM868LR', function () {
      var payload = 'e4030016'
      var expected = {
        BatteryLevel: 100,
        BatteryType: 1,
        ExternalInputStatus: 0,
        BatteryAlarm: 0,
        Reserved: 0,
        TamperAlarm: 1,
        ReedAlarm: 1,
        OpCnt: 22
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.CM868LR(payload)).to.deep.eq(expected)
      });
  });
  describe('CM868LRTH', function () {
      var payload = 'e40192deaf4170f02942'
      var expected = {
        BatteryLevel: 100,
        BatteryType: 1,
        ExternalInputStatus: 0,
        RHValue: 42.48480224609375,
        TValue: 21.98367691040039,
        BatteryAlarm: 0,
        Reserved: 0,
        TamperAlarm: 0,
        ReedAlarm: 1
      }
      it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
        expect(converter.CM868LRTH(payload)).to.deep.eq(expected)
      });
  });
});


