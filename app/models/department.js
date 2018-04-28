var mongoose = require('mongoose');
var schema = mongoose.Schema;

var departmentSchema = new schema({
    departmentId: {
        type: String,
        ref: "Employee",
        required: true
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

module.exports = mongoose.model('Department', departmentSchema);