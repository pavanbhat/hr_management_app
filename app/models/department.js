var mongoose = require('mongoose');
var schema = mongoose.Schema;

var departmentSchema = new schema({
    departmentName: {
        type: String,
        required: true,
        unique: true
    },
    departmentDescription: {
        type: String
    }
});