module.exports = {
  parseDecodedPayload: function (payload, manufacturer, devicename) {
    var manufacturerobj = require('./' + manufacturer)
    return manufacturerobj[devicename](payload)
  }
}
