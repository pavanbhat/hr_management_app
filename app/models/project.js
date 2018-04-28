var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectSchema = new schema({
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String
    }
});