var mongoose = require('mongoose');
var schema = mongoose.Schema;

var appraisalSchema = new schema({
    appraisalId: {},
    employeeId: {},
    managerId: {},
    communicationPoints: {},
    teamPoints: {},
    clientPoints: {},
    totalScore: {}
});