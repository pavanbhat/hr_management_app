var mongoose = require('mongoose');
var schema = mongoose.Schema;

var projectSchema = new schema({
    projectId: {
        type: String
    },
    projectName: {},
    projectDescription: {}
});