var assert = require('assert');
var converter = require("./../ascoel")
var payload = 'e4a432704160684e4202b5'

describe('Ascoel', function() {
  describe('CO868LR', function() {

    it(`should return 100 BatteryLevel with payload ${payload}`, function() {
      assert.equal(100, converter.CO868LR(payload).BatteryLevel);
    });

    it(`should return 1 BatteryType with payload ${payload}`, function() {
      assert.equal(1, converter.CO868LR(payload).BatteryType);
    });

    it(`should return 15.01236343383789 TValue with payload ${payload}`, function() {
      assert.equal(15.01236343383789, converter.CO868LR(payload).TValue);
    });

    it(`should return 51.6019287109375 RHValue with payload ${payload}`, function() {
      assert.equal(51.6019287109375, converter.CO868LR(payload).RHValue);
    });

    it(`should return 693 CO2Value with payload ${payload}`, function() {
      assert.equal(693, converter.CO868LR(payload).CO2Value);
    });
  });
});
