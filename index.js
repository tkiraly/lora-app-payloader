module.exports = {
    parseDecodedPayload: function (payload, manufacturer, devicename) {
        var manufacturer = require('./' + manufacturer);
        return manufacturer[devicename](payload);
    }
}