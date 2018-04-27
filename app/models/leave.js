var mongoose = require('mongoose');
var schema = mongoose.Schema;

var leaveSchema = new schema({
    employeeId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    leaveId: {
        type: String,
        lowercase: true,
        required: true,
        unique: true
    },
    leaveReason: {},
    leaveFrom: {},
    leaveTo: {},
    leaveStatus: {}
});