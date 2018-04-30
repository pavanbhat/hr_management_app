var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var timesheetShema = new schema({
    timesheetId: {
        type: String,
        unique: true
    },
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    projectId: {
        type: String,
        ref: "Project",
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    numberOfHours: {
        type: Number,
        required : true
    }
});

timesheetShema.pre('save', function(next) {
    this.timesheetId = uid();
    next();
});

module.exports = mongoose.model('Timesheet', timesheetShema);