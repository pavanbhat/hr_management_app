var mongoose = require('mongoose');
var schema = mongoose.Schema;

var timesheetShema = new schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"
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