var expect = require('chai').expect;
var converter = require("../src/nkewatteco")

describe('nkewatteco', function () {
  describe('THr', function () {
    var payload = '110a04020000290997'
    var expected = {
      Flag: 17,
      CommandID: 10,
      ClusterID: 1026,
      AttributeID: 0,
      AttributeType: 41,
      Temperature: 24.55,
    }
    it(`should return ${JSON.stringify(expected)} with payload ${payload}`, function () {
      expect(converter.THR(payload)).to.deep.eq(expected)
    });
  });
});
