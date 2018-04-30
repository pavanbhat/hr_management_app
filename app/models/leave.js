var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var leaveSchema = new schema({
    leaveId: {
        type: String,
        unique: true
    },
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
        default: Date.now
    },
    leaveTo: {
        type: Date
    },
    leaveStatus: {
        type: Boolean,
        required: true
    }
});

leaveSchema.pre('save', function(next) {
    this.leaveId = uid();
    next();
});

module.exports = mongoose.model('Leave', leaveSchema);