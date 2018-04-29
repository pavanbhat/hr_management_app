var Employee = require('../models/employee');
var Department = require('../models/department');

module.exports = function(router) {

    router.get('/', function(request, response) {
        Employee.find({}, function(err, foundDepartments) {
            if (err) {
                response.json({
                    message: 'There are no departments that could be found: ' + err
                });
            } else {
                response.json(
                    foundDepartments
                );
            }
        });
    });

    return router;
}