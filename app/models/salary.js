var mongoose = require('mongoose');
var schema = mongoose.Schema;

var salarySchema = new schema({
    employeeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Employee"
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