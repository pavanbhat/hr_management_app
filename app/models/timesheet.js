var mongoose = require('mongoose');
var schema = mongoose.Schema;

var timesheetShema = new schema({
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
        required
    }
});

module.exports = mongoose.model('Timesheet', timesheetShema);