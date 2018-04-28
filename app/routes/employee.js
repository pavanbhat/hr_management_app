 var Employee = require('../models/employee');

 module.exports = function(router) {
     router.post('/', function(request, response) {
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
             employee.save(function(err) {
                 if (err) {
                     response.send("Employee already exits!" + err);
                 } else {
                     response.send("Employee Created!");
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

     return router;
 }