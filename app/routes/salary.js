var Employee = require('../models/employee');
var Salary = require('../models/salary');

module.exports = function(router) {

    router.get('/employee/:id/salary', function(request, response){
                
                Salary.findById(request.params.id).populate("Manager", "name").exec(function(err, foundEmployee){
                if(err) {
                    res.json({ message : "this employee doesn't exist"});
                } else {
                    res.json({employee: foundEmployee});
                }
            })
        });

    return router;
}