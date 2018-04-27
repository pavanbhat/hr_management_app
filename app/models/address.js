var mongoose = require('mongoose');
var schema = mongoose.Schema;

var addressSchema = new schema({
    address: {},
    city: {},
    state: {},
    country: {},
    zip: {}
});