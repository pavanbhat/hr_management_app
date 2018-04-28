var mongoose = require('mongoose');
var schema = mongoose.Schema;

var appraisalSchema = new schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
    },
    managerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
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