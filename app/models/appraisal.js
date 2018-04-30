var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var appraisalSchema = new schema({
    appraisalId: {
        type: String,
        unique: true
    },
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    managerId: {
        type: String,
        ref: "Employee",
        required: true
    },
    communicationPoints: {
        type: Number
    },
    teamPoints: {
        type: Number
    },
    clientPoints: {
        type: Number
    },
    totalScore: {
        type: Number,
        required: true
    }
});

appraisalSchema.pre('save', function(next) {
    this.appraisalId = uid();
    next();
});

module.exports = mongoose.model('Appraisal', appraisalSchema);