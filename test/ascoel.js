import { expect } from 'chai'
import converter from "../src/ascoel"

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

  describe('TH868LR', function () {
    var payloadTH868LR = 'e4292e7b41002d1c42'
    it(`should return 100 BatteryLevel with payload ${payloadTH868LR}`, function () {
      expect(converter.TH868LR(payloadTH868LR).BatteryLevel).to.eq(100);
    });

    it(`should return 1 BatteryType with payload ${payloadTH868LR}`, function () {
      expect(converter.TH868LR(payloadTH868LR).BatteryLevel).to.eq(100);
    });

    it(`should return 15.698769569396973 TValue with payload ${payloadTH868LR}`, function () {
      expect(converter.TH868LR(payloadTH868LR).TValue).to.eq(15.698769569396973);
    });

    it(`should return 39.0439453125 RHValue with payload ${payloadTH868LR}`, function () {
      expect(converter.TH868LR(payloadTH868LR).RHValue).to.eq(39.0439453125);
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

  describe('CM868LR', function () {
    var payloadCM868LR = 'e4030016'
    it(`should return 100 BatteryLevel with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).BatteryLevel).to.equal(100);
    });

    it(`should return 1 BatteryType with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).BatteryType).to.eq(1);
    });

    it(`should return 0 ExternalInputStatus with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).ExternalInputStatus).to.eq(0);
    });

    it(`should return 0 BatteryAlarm with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).BatteryAlarm).to.eq(0);
    });

    it(`should return 0 TamperAlarm with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).TamperAlarm).to.eq(1);
    });

    it(`should return 0 ReedAlarm with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).ReedAlarm).to.eq(1);
    });

    it(`should return 8 OpCnt with payload ${payloadCM868LR}`, function () {
      expect(converter.CM868LR(payloadCM868LR).OpCnt).to.eq(22);
    });
  });
  describe('CM868LRTH', function () {
    var payloadCM868LRTH = 'e40192deaf4170f02942'
    it(`should return 100 BatteryLevel with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).BatteryLevel).to.equal(100);
    });

    it(`should return 1 BatteryType with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).BatteryType).to.eq(1);
    });

    it(`should return 0 ExternalInputStatus with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).ExternalInputStatus).to.eq(0);
    });

    it(`should return 0 BatteryAlarm with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).BatteryAlarm).to.eq(0);
    });

    it(`should return 0 TamperAlarm with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).TamperAlarm).to.eq(0);
    });

    it(`should return 0 ReedAlarm with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).ReedAlarm).to.eq(1);
    });

    it(`should return 21.98367691040039 TValue with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).TValue).to.eq(21.98367691040039);
    });

    it(`should return 42.48480224609375 RHValue with payload ${payloadCM868LRTH}`, function () {
      expect(converter.CM868LRTH(payloadCM868LRTH).RHValue).to.eq(42.48480224609375);
    });
  });
});


