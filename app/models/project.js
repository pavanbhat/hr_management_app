var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var projectSchema = new schema({
    projectId: {
        type: String,
        unique: true
    },
    projectName: {
        type: String,
        required: true
    },
    projectDescription: {
        type: String
    }
});

projectSchema.pre('save', function(next) {
    this.projectId = uid();
    next();
});

module.exports = mongoose.model('Project', projectSchema);