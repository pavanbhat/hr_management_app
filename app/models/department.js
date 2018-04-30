var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var departmentSchema = new schema({
    departmentId: {
        type: String,
        unique: true
    },
    departmentName: {
        type: String,
        required: true,
        unique: true
    },
    departmentDescription: {
        type: String
    }
});

departmentSchema.pre('save', function(next) {
    this.departmentId = uid();
    next();
});

module.exports = mongoose.model('Department', departmentSchema);