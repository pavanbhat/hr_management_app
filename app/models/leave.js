var mongoose = require('mongoose');
var schema = mongoose.Schema;

var leaveSchema = new schema({
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    leaveReason: {
        type: String,
        required: true
    },
    leaveFrom: {
        type: Date,
        default: Data.now
    },
    leaveTo: {
        type: Date
    },
    leaveStatus: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Leave', leaveSchema);