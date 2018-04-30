var Employee = require('../models/employee');
var Address = require('../models/address');
var Department = require('../models/department');
var Leave = require('../models/leave');
var Project = require('../models/project');
var Role = require('../models/role');
var Salary = require('../models/salary');
var Timesheet = require('../models/timesheet');
var Appraisal = require('../models/appraisal');

module.exports = function (router) {

    //Employee POST: Adds Employee information to the database.
    router.post('/employee', function (request, response) {
        var employee = new Employee();
        employee.username = request.body.username;
        employee.firstName = request.body.firstName;
        employee.middleName = request.body.middleName;
        employee.lastName = request.body.lastName;
        employee.email = request.body.email;
        employee.gender = request.body.gender;
        employee.dateOfBirth = request.body.dateOfBirth;
        employee.phoneNumber = request.body.phoneNumber;
        employee.roleId = request.body.roleId;

        var inputCheck = {
            username: true,
            email: true,
            firstName: true,
            gender: true,
            phoneNumber: true,
        }
        if (employee.username === null || employee.username === '') {
            inputCheck['username'] = false;
        }
        if (employee.firstName === null || employee.firstName === '') {
            inputCheck['firstName'] = false;
        }
        if (employee.email === null || employee.email === '') {
            inputCheck['email'] = false;
        }
        if (employee.gender === null || employee.gender === '') {
            inputCheck['gender'] = false;
        }
        if (employee.phoneNumber === null || employee.phoneNumber === '') {
            inputCheck['phoneNumber'] = true;
        }

        if (inputCheck['username'] && inputCheck['email'] && inputCheck['firstName'] && inputCheck['gender'] && inputCheck['phoneNumber']) {
            employee.save(function (err) {
                if (err) {
                    response.send("Employee already exits!" + err);
                } else {
                    Employee.find({email: employee.email}, function (err, foundEmployeeWithEmail) {
                        if (err) {
                            response.json({
                                message: 'This employee does not have any details that could be found: ' + err
                            });
                        } else {
                            response.json(
                                foundEmployeeWithEmail
                            );
                        }
                    });
                }
            });
        } else {
            let error = '';
            for (var requiredField in inputCheck) {
                if (inputCheck[requiredField] === false) {
                    error += requiredField + ',';
                }
            }
            error = error.substring(0, error.length - 1);
            response.send('Error: Please ensure correct ' + error + ' are provided!');
        }

    });

    // Employee GET: Gets all employee information from the database
    router.get('/employee', function (request, response) {
        Employee.find({}, function (err, foundEmployees) {
            if (err) {
                response.json({
                    message: 'There are no employees that could be found: ' + err
                });
            } else {
                response.json(
                    foundEmployees
                );
            }
        });
    });

    // Employee GET: Gets information of a particular employee from the database.
    router.get('/employee/:id', function (request, response) {
        let employee = new Employee();
        Employee.find({employeeId: request.params.id}, function (err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have any details that could be found: ' + err
                });
            } else {
                var address = new Address();
                Address.find({employeeId: foundAddress.employeeId}, function (err, foundAddress) {
                    if (err) {
                        response.json({
                            message: 'This employee does not have an address that could be found: ' + err
                        });
                    } else {
                        this.address = foundAddress;
                    }
                });
                this.employee = foundEmployee;
                response.json({
                    "employee": this.employee,
                    "address": this.address
                });
            }
        });
    });

    // Address POST: Posts address of a particular employee in to the database
    router.post('/employee/:id/address', function(request, response) {
        var address = new Address();
        address.employeeId = request.body.employeeId;
        address.street = request.body.street;
        address.city = request.body.city;
        address.state = request.body.state;
        address.country = request.body.country;
        address.zip = request.body.zip;
        
        address.save(function(err) {
            if (err) {
                response.send("Error populating address!" + err);
            } else {
                response.json(address);
            }
        });
    });

    // Address GET: Gets the address of a particular employee from the database.
    router.get('/employee/:id/address', function(request, response) {
        Address.find({employeeId: request.params.id} , function(err, foundAddress) {
            if (err) {
                response.json({
                    message: 'This employee does not have an address that could be found: ' + err
                });
            } else {
                response.json(
                    foundAddress
                );
            }
        });
    });

    // Role POST: Posts role of a particular employee in to the database
    router.post('/employee/:id/role', function(request, response) {
        var role = new Role();
        role.roleId = request.body.roleId;
        role.roleName = request.body.roleName;
        role.roleDescription = request.body.roleDescription;

        role.save(function(err) {
            if (err) {
                response.send("Error populating role!" + err);
            } else {
                response.json(role);
            }
        });
    });

    // Role GET: Gets the role of a particular employee from the database.
    router.get('/employee/:id/role', function(request, response) {
        Role.find({employeeId: request.params.id} , function(err, foundRole) {
            if (err) {
                response.json({
                    message: 'This employee does not have a role that could be found: ' + err
                });
            } else {
                response.json(
                    foundRole
                );
            }
        });
    });


    return router;
}