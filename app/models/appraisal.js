var mongoose = require('mongoose');
var schema = mongoose.Schema;

var appraisalSchema = new schema({
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

module.exports = mongoose.model('Appraisal', appraisalSchema);