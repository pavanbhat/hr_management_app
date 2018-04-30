var Employee = require('../models/employee');
var Address = require('../models/address');

module.exports = function (router) {
    router.post('/', function (request, response) {
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
            console.log(String(employee));
            employee.save(function (err) {
                if (err) {
                    console.log(err);
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

    router.get('/', function (request, response) {
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

    // Get
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

    return router;
}