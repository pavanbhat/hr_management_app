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

    //Employee PUT: Edits the Employee information in the database.
    router.put('/employee/:id', function (request, response) {
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
        Employee.update(Employee.find({employeeId: request.params.id}), request.body, {new:true}, function(err, updatedEmployee){
            if (err){
                response.send(err);
            }
            else{
                response.json({
                    updatedEmployee
                });
            }
        });
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
        var employee = new Employee();
        var address = new Address();
        Employee.find({employeeId: request.params.id}, function (err, foundEmployeeWithId) {
            if (err) {
                response.json({
                    message: 'This employee does not have any details that could be found: ' + err
                });
            } else {
                Address.findOne({employeeId: request.params.id}, 'addressId employeeId street city state country zip', function (err, addressWithId) {
                    if (err) {
                        response.json({
                            message: 'This employee does not have an address that could be found: ' + err
                        });
                    } else {
                        console.log(address);
                        address = addressWithId[0];
                    }
                });
                employee = foundEmployeeWithId[0];
                response.json({
                    "employee": employee,
                    "address": address
                });
            }
        });
    });

    // Employee DELETE: Deletes information of a particular employee from the database.
    router.delete('/employee/:id',  function (request, response) {
        Employee.remove({employeeId:request.params.id}, function (err, deletedEmployee) {
            if (err) {
                response.send('This employee does not have an address that could be found: ' + err);
            }
            response.json(
                deletedEmployee
            );
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
    router.post('/hr/roles', function(request, response) {
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
        Employee.find({employeeId: request.params.id} , function(err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have a role that could be found: ' + err
                });
            } else {
                Role.find({roleId: foundEmployee.roleId}, function (err, foundRole) {
                       if(err){
                           response.json({
                               message: 'This role doesn\'t exist!: ' + err
                           });
                       }else{
                           response.json(
                               foundRole
                           );
                       }
                });
            }
        });
    });

    // Role GET: Gets all roles from the database.
    router.get('/hr/roles', function(request, response) {
        Role.find({}, function (err, foundRoles) {
            if(err){
                response.json({
                    message: 'This role doesn\'t exist!: ' + err
                });
            }else{
                response.json(
                    foundRoles
                );
            }
        });
    });

    // Department POST: Posts department of a particular employee in to the database
    router.post('/hr/departments', function(request, response) {
        var department = new Department();
        department.departmentId = request.body.departmentId;
        department.departmentName = request.body.departmentName;
        department.departmentDescription = request.body.departmentDescription;

        department.save(function(err) {
            if (err) {
                response.send("Error populating department!" + err);
            } else {
                response.json(department);
            }
        });
    });

    // Department GET: Gets the department of a particular employee from the database.
    router.get('/employee/:id/department', function(request, response) {
        Employee.find({employeeId: request.params.id} , function(err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have a department that could be found: ' + err
                });
            } else {
                Department.find({departmentId: foundEmployee.departmentId}, function (err, foundDepartment) {
                    if(err){
                        response.json({
                            message: 'This department doesn\'t exist!: ' + err
                        });
                    }else{
                        response.json(
                            foundDepartment
                        );
                    }
                });
            }
        });
    });

    // Department GET: Gets all departments from the database.
    router.get('/hr/departments', function(request, response) {
        Department.find({}, function (err, foundDepartments) {
            if(err){
                response.json({
                    message: 'Departments don\'t exist!: ' + err
                });
            }else{
                response.json(
                    foundDepartments
                );
            }
        });
    });

    // Project POST: Posts project of a particular employee in to the database
    router.post('/hr/projects', function(request, response) {
        var project = new Project();
        project.projectId = request.body.projectId;
        project.projectName = request.body.projectName;
        project.projectDescription = request.body.projectDescription;

        project.save(function(err) {
            if (err) {
                response.send("Error populating project!" + err);
            } else {
                response.json(project);
            }
        });
    });

    // Project GET: Gets the project of a particular employee from the database.
    router.get('/employee/:id/project', function(request, response) {
        Employee.find({employeeId: request.params.id} , function(err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have a project that could be found: ' + err
                });
            } else {
                Project.find({projectId: foundEmployee.projectId}, function (err, foundProject) {
                    if(err){
                        response.json({
                            message: 'This project doesn\'t exist!: ' + err
                        });
                    }else{
                        response.json(
                            foundProject
                        );
                    }
                });
            }
        });
    });

    // Project GET: Gets all projects from the database.
    router.get('/hr/projects', function(request, response) {
        Project.find({}, function (err, foundProjects) {
            if(err){
                response.json({
                    message: 'Projects don\'t exist!: ' + err
                });
            }else{
                response.json(
                    foundProjects
                );
            }
        });
    });

    // Appraisal POST: Posts appraisal of a particular employee in to the database
    router.post('/employee/:id/appraisal', function(request, response) {
        var appraisal = new Appraisal();
        appraisal.appraisalId = request.body.appraisalId;
        appraisal.employeeId = request.body.employeeId;
        appraisal.managerId = request.body.managerId;
        appraisal.communicationPoints = request.body.communicationPoints;
        appraisal.teamPoints = request.body.teamPoints;
        appraisal.clientPoints = request.body.clientPoints;
        appraisal.totalScore = request.body.totalScore;

        appraisal.save(function(err) {
            if (err) {
                response.send("Error populating appraisal!" + err);
            } else {
                response.json(appraisal);
            }
        });
    });

    // Appraisal GET: Gets the appraisal of a particular employee from the database.
    router.get('/employee/:id/appraisal', function(request, response) {
        Employee.find({employeeId: request.params.id} , function(err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have an appraisal that could be found: ' + err
                });
            } else {
                Project.find({appraisalId: foundEmployee.appraisalId}, function (err, foundAppraisal) {
                    if(err){
                        response.json({
                            message: 'This appraisal doesn\'t exist!: ' + err
                        });
                    }else{
                        response.json(
                            foundAppraisal
                        );
                    }
                });
            }
        });
    });

    // Leave POST: Posts leave of a particular employee in to the database
    router.post('/employee/:id/leave', function(request, response) {
        var leave = new Leave();
        leave.leaveId = request.body.leaveId;
        leave.employeeId = request.body.employeeId;
        leave.leaveReason = request.body.leaveReason;
        leave.leaveFrom = request.body.leaveFrom;
        leave.leaveTo = request.body.leaveTo;
        leave.leaveStatus = request.body.leaveStatus;

        leave.save(function(err) {
            if (err) {
                response.send("Error populating leave!" + err);
            } else {
                response.json(leave);
            }
        });
    });

    // Leave GET: Gets the leave of a particular employee from the database.
    router.get('/employee/:id/leave', function(request, response) {
        Employee.find({employeeId: request.params.id} , function(err, foundEmployee) {
            if (err) {
                response.json({
                    message: 'This employee does not have a leave that could be found: ' + err
                });
            } else {
                Project.find({leaveId: foundEmployee.leaveId}, function (err, foundLeave) {
                    if(err){
                        response.json({
                            message: 'This leave doesn\'t exist!: ' + err
                        });
                    }else{
                        response.json(
                            foundLeave
                        );
                    }
                });
            }
        });
    });

    // Salary POST: Posts salary of a particular employee in to the database
    router.post('/employee/:id/salary', function(request, response) {
        var salary = new Salary();
        salary.salaryId = request.body.salaryId;
        salary.employeeId = request.body.employeeId;
        salary.workingDays = request.body.workingDays;
        salary.basicSalary = request.body.basicSalary;
        salary.hra = request.body.hra;
        salary.mediclaim = request.body.mediclaim;
        salary.dearnessAllowance = request.body.dearnessAllowance;
        salary.travelAllowance = request.body.travelAllowance;
        salary.reimbursements = request.body.reimbursements;
        salary.providentFund = request.body.providentFund;
        salary.totalDeductions = request.body.totalDeductions;
        salary.tax = request.body.tax;
        salary.other = request.body.other;
        salary.totalSalary = request.body.totalSalary;

        salary.save(function(err) {
            if (err) {
                response.send("Error populating salary!" + err);
            } else {
                response.json({
                    salary
                });
            }
        });
    });

    // Salary GET: Gets the salary of a particular employee from the database.
    router.get('/employee/:id/salary', function(request, response) {
        Salary.find({employeeId: request.params.id}, function (err, foundSalary) {
            if(err){
                response.json({
                    message: 'This salary doesn\'t exist!: ' + err
                });
            }else{
                response.json(
                    foundSalary
                );
            }
        });
    });

    // Timesheet POST: Posts timesheet of a particular employee in to the database
    router.post('/employee/:id/timesheet', function(request, response) {
        var timesheet = new Timesheet();
        timesheet.timesheetId = request.body.timesheetId;
        timesheet.employeeId = request.body.employeeId;
        timesheet.projectId = request.body.projectId;
        timesheet.date = request.body.date;
        timesheet.numberOfHours = request.body.numberOfHours;

        timesheet.save(function(err) {
            if (err) {
                response.send("Error populating timesheet!" + err);
            } else {
                response.json(timesheet);
            }
        });
    });

    // Timesheet GET: Gets the timesheet of a particular employee from the database.
    router.get('/employee/:id/timesheet', function(request, response) {
            Timesheet.find({employeeId: request.params.id}, function (err, foundTimesheet) {
                if(err){
                    response.json({
                        message: 'This timesheet doesn\'t exist!: ' + err
                    });
                }else{
                    response.json(
                        foundTimesheet
                    );
                }
            });
    });

    return router;
}