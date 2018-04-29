var Employee = require('../models/employee');
var Role = require('../models/role');

module.exports = function(router) {

    router.get('/', function(request, response) {
        Role.find({}, function(err, foundRoles) {
            if (err) {
                response.json({
                    message: 'There are no roles that could be found: ' + err
                });
            } else {
                response.json(
                    foundRoles
                );
            }
        });
    });
    
    return router;
}