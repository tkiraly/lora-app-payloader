var assert = require('assert');
var converter = require("./../ascoel")

describe('Ascoel', function () {
  describe('CO868LR', function () {
    var payloadCO868LR = 'e4a432704160684e4202b5'
    it(`should return 100 BatteryLevel with payload ${payloadCO868LR}`, function () {
      assert.equal(100, converter.CO868LR(payloadCO868LR).BatteryLevel);
    });

    it(`should return 1 BatteryType with payload ${payloadCO868LR}`, function () {
      assert.equal(1, converter.CO868LR(payloadCO868LR).BatteryType);
    });

    it(`should return 15.01236343383789 TValue with payload ${payloadCO868LR}`, function () {
      assert.equal(15.01236343383789, converter.CO868LR(payloadCO868LR).TValue);
    });

    it(`should return 51.6019287109375 RHValue with payload ${payloadCO868LR}`, function () {
      assert.equal(51.6019287109375, converter.CO868LR(payloadCO868LR).RHValue);
    });

    it(`should return 693 CO2Value with payload ${payloadCO868LR}`, function () {
      assert.equal(693, converter.CO868LR(payloadCO868LR).CO2Value);
    });
  });


  describe('IR868LR', function () {
    var payloadIR868LR = 'e40008ac'
    it(`should return 100 BatteryLevel with payload ${payloadIR868LR}`, function () {
      assert.equal(100, converter.IR868LR(payloadIR868LR).BatteryLevel);
    });

    it(`should return 1 BatteryType with payload ${payloadIR868LR}`, function () {
      assert.equal(1, converter.IR868LR(payloadIR868LR).BatteryType);
    });

    it(`should return 0 BatteryAlarm with payload ${payloadIR868LR}`, function () {
      assert.equal(0, converter.IR868LR(payloadIR868LR).BatteryAlarm);
    });

    it(`should return 0 IntrusionAlarm with payload ${payloadIR868LR}`, function () {
      assert.equal(0, converter.IR868LR(payloadIR868LR).IntrusionAlarm);
    });

    it(`should return 8 OpCnt with payload ${payloadIR868LR}`, function () {
      assert.equal(8, converter.IR868LR(payloadIR868LR).OpCnt);
    });
  });
});


