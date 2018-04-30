var mongoose = require('mongoose');
var schema = mongoose.Schema;
var uid = require('uniqid');

var salarySchema = new schema({
    salaryId: {
        type: String,
        unique: true
    },
    employeeId: {
        type: String,
        ref: "Employee",
        required: true
    },
    workingDays: {
        type: Number
    },
    basicSalary: {
        type: Number,
        required: true
    },
    hra: {
        type: Number
    },
    mediclaim: {
        type: Number
    },
    dearnessAllowance: {
        type: Number
    },
    travelAllowance: {
        type: Number
    },
    reimbursements: {
        type: Number
    },
    providentFund: {
        type: Number
    },
    totalDeductions: {
        type: Number
    },
    tax: {
        type: Number,
        required: true
    },
    other: {
        type: Number
    },
    totalSalary: {
        type: Number,
        required: true
    }
});

salarySchema.pre('save', function(next) {
    this.salaryId = uid();
    next();
});

module.exports = mongoose.model('Salary', salarySchema);