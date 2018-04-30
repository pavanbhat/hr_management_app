var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var roleSchema = new schema({
    roleId: {
        type: String,
    },
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
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
    switch (this.roleName){
        case 'admin':
            this.roleId = 1;
            break;
        case 'hr':
            this.roleId = 2;
            break;
        default:
            this.roleId = 3;
            break;
    } 
    next();
});

module.exports = mongoose.model('Role', roleSchema);