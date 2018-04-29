var Employee = require('../models/employee');
var Project = require('../models/project');

module.exports = function(router) {

    router.get('/', function(request, response) {
        Employee.find({}, function(err, foundProjects) {
            if (err) {
                response.json({
                    message: 'There are no projects that could be found: ' + err
                });
            } else {
                response.json(
                    foundProjects
                );
            }
        });
    });

    return router;
}