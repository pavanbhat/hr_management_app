var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectSchema = new schema({
    projectId: {
        type: String,
        ref: "Employee",
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String
    }
});

module.exports = mongoose.model('Project', projectSchema);