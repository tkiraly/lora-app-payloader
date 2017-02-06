var expect = require('chai').expect;
var converter = require("../src/ascoel")

describe('Ascoel', function () {
  describe('CO868LR', function () {
    describe('port 9', function () {
      var payload = 'e4a432704160684e4202b5'
      it(`should return 100 BatteryLevel with payload ${payload}`, function () {
        expect(converter.CO868LR(payload).BatteryLevel).to.eq(100);
      });

      it(`should return 1 BatteryType with payload ${payload}`, function () {
        expect(converter.CO868LR(payload).BatteryLevel).to.eq(100);
      });

      it(`should return 15.01236343383789 TValue with payload ${payload}`, function () {
        expect(converter.CO868LR(payload).TValue).to.eq(15.01236343383789);
      });

      it(`should return 51.6019287109375 RHValue with payload ${payload}`, function () {
        expect(converter.CO868LR(payload).RHValue).to.eq(51.6019287109375);
      });

      it(`should return 693 CO2Value with payload ${payload}`, function () {
        expect(converter.CO868LR(payload).CO2Value).to.eq(693);
      });
    });
    describe('port 7', function () {
      var payload = '302e352c332e342e312c42'
      it(`should return 0.5 FW with payload ${payload}`, function () {
        expect(converter.CO868LR(payload, 7).FW).to.eq('0.5');
      });
      it(`should return 3.4.1 lorawanClient with payload ${payload}`, function () {
        expect(converter.CO868LR(payload, 7).lorawanClient).to.eq('3.4.1');
      });
      it(`should return B HW with payload ${payload}`, function () {
        expect(converter.CO868LR(payload, 7).HW).to.eq('B');
      });
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
    describe('port 9', function () {
      var payload = 'e40008ac'
      it(`should return 100 BatteryLevel with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).BatteryLevel).to.equal(100);
      });

      it(`should return 1 BatteryType with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).BatteryType).to.eq(1);
      });

      it(`should return 0 BatteryAlarm with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).BatteryAlarm).to.eq(0);
      });

      it(`should return 0 TamperAlarm with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).TamperAlarm).to.eq(0);
      });

      it(`should return 0 IntrusionAlarm with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).IntrusionAlarm).to.eq(0);
      });

      it(`should return 8 OpCnt on port 9 with payload ${payload}`, function () {
        expect(converter.IR868LR(payload).OpCnt).to.eq(8);
      });
    });
    describe('port 20', function () {
      var payload = '0108af'
      it(`should return 0 BatteryAlarm on port 20 with payload ${payload}`, function () {
        expect(converter.IR868LR(payload, 20).BatteryAlarm).to.eq(0);
      });
      it(`should return 0 TamperAlarm on port 20 with payload ${payload}`, function () {
        expect(converter.IR868LR(payload, 20).TamperAlarm).to.eq(0);
      });
      it(`should return 1 IntrusionAlarm on port 20 with payload ${payload}`, function () {
        expect(converter.IR868LR(payload, 20).IntrusionAlarm).to.eq(1);
      });
      it(`should return 2223 OpCnt on port 20 with payload ${payload}`, function () {
        expect(converter.IR868LR(payload, 20).OpCnt).to.eq(2223);
      });
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


