var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var addressSchema = new schema({
    addressId: {
        type: String,
        unique: true
    },
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    zip: {
        type: Number
    }
});

addressSchema.pre('save', function(next) {
    this.addressId = uid();
    next();
});

module.exports = mongoose.model('Address', addressSchema);