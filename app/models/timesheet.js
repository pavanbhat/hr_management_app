var mongoose = require('mongoose');
var schema = mongoose.Schema;

var timesheetShema = new schema({
    employeeId: {},
    projectId: {},
    date: {},
    numberOfHours: {}
});