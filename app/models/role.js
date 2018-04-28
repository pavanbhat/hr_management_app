var mongoose = require('mongoose');
var schema = mongoose.Schema;

var roleSchema = new schema({
    roleName: {
        type: String,
        required: true
    },
    roleDescription: {
        type: String
    }
});