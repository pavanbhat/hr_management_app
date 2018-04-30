var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var roleSchema = new schema({
    roleId: {
        type: String,
        unique: true
    },
    roleName: {
        type: String,
        required: true
    },
    roleDescription: {
        type: String
    }
});

roleSchema.pre('save', function(next) {
    this.roleId = uid();
    next();
});

module.exports = mongoose.model('Role', roleSchema);