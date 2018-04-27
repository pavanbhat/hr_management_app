var mongoose = require('mongoose');
var schema = mongoose.Schema;

var employeeSchema = new schema({
    employeeId: {},
    username: {},
    password: {},
    firstName: {},
    middleName: {},
    lastName: {},
    email: {},
    gender: {},
    dateOfBirth: {},
    phoneNumber: {},
    addressId: {},
    roleId: {}
})