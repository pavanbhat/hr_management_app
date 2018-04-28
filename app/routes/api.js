 var Employee = require('../models/employee');

 module.exports = function(router) {
     router.post('/employees', function(request, response) {
         var employee = new Employee();
         employee.username = request.body.username;
         employee.password = request.body.password;
         employee.email = request.body.email;
         if (employee.username === null || employee.username === '' || employee.password === null || employee.password === '' || employee.email === null || employee.email === '') {
             response.send("Please ensure correct username, password and email are provided!");
         } else {
             employee.save(function(err) {
                 if (err) {
                     response.send("username or email fields already exits!");
                 } else {
                     response.send("Employee Created!");
                 }
             })
         }

     });
     return router;
 }