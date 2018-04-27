var mongoose = require('mongoose');
var schema = mongoose.Schema;

var roleSchema = new schema({
    roleId: {},
    roleName: {},
    roleDescription: {}
})