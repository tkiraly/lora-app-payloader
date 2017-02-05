var expect = require('chai').expect;
var converter = require("./../ascoel")

describe('Ascoel', function () {
  describe('CO868LR', function () {
    var payloadCO868LR = 'e4a432704160684e4202b5'
    it(`should return 100 BatteryLevel with payload ${payloadCO868LR}`, function () {
      expect(converter.CO868LR(payloadCO868LR).BatteryLevel).to.eq(100);
    });

    it(`should return 1 BatteryType with payload ${payloadCO868LR}`, function () {
      expect(converter.CO868LR(payloadCO868LR).BatteryLevel).to.eq(100);
    });

    it(`should return 15.01236343383789 TValue with payload ${payloadCO868LR}`, function () {
      expect(converter.CO868LR(payloadCO868LR).TValue).to.eq(15.01236343383789);
    });

    it(`should return 51.6019287109375 RHValue with payload ${payloadCO868LR}`, function () {
      expect(converter.CO868LR(payloadCO868LR).RHValue).to.eq(51.6019287109375);
    });

    it(`should return 693 CO2Value with payload ${payloadCO868LR}`, function () {
      expect(converter.CO868LR(payloadCO868LR).CO2Value).to.eq(693);
    });
  });


  describe('IR868LR', function () {
    var payloadIR868LR = 'e40008ac'
    it(`should return 100 BatteryLevel with payload ${payloadIR868LR}`, function () {
      expect(converter.IR868LR(payloadIR868LR).BatteryLevel).to.equal(100);
    });

    it(`should return 1 BatteryType with payload ${payloadIR868LR}`, function () {
      expect(converter.IR868LR(payloadIR868LR).BatteryType).to.eq(1);
    });

    it(`should return 0 BatteryAlarm with payload ${payloadIR868LR}`, function () {
      expect(converter.IR868LR(payloadIR868LR).BatteryAlarm).to.eq(0);
    });

    it(`should return 0 IntrusionAlarm with payload ${payloadIR868LR}`, function () {
      expect(converter.IR868LR(payloadIR868LR).IntrusionAlarm).to.eq(0);
    });

    it(`should return 8 OpCnt with payload ${payloadIR868LR}`, function () {
      expect(converter.IR868LR(payloadIR868LR).OpCnt).to.eq(8);
    });
  });
});


