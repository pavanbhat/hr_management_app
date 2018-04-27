var mongoose = require('mongoose');
var schema = mongoose.Schema;

var salarySchema = new schema({
    salaryId: {},
    employeeId: {},
    workingDays: {},
    basicSalary: {},
    hra: {},
    mediclaim: {},
    dearnessAllowance: {},
    travelAllowance: {},
    reimbursements: {},
    providentFund: {},
    totalDeductions: {},
    tax: {},
    other: {},
    totalSalary: {}
});