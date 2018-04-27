var mongoose = require('mongoose');
var schema = mongoose.Schema;

var departmentSchema = new schema({
    departmentId: {},
    departmentName: {},
    departmentDescription: {}
});