var Address = require('../models/address');

module.exports = function(router) {
    router.post('/employee/:id/address', function(request, response) {
        var address = new Address();
        address.employeeId = request.body.employeeId;
        address.street = request.body.street;
        address.city = request.body.city;
        address.state = request.body.state;
        address.country = request.body.country;
        address.zip = request.body.zip;

        // if (address != null) {
            address.save(function(err) {
                if (err) {
                    response.send("Error populating address!" + err);
                } else {
                    response.json(this.address);
                }
            });
        /*} else {
            response.send('Error: Please ensure address object is not none!');
        }*/

    });

    // Get
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


    return router;
}