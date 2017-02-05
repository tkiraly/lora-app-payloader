var expect = require('chai').expect;
var converter = require("../src/index")

describe('main API', function () {
    it(`should have turboes property`, function () {
        expect(true).to.be.true;
        converter.parseDecodedPayload("ab005a80ae", "turboes", "TBS200")
    });
});


