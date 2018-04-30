const config = require('./app/config/database');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8080;
var cors = require('cors');
var cors = require('cors');
/*var employeeRouter = express.Router();
var roleRouter = express.Router();
var projectRouter = express.Router();
var salaryRouter = express.Router();
var timesheetRouter = express.Router();
var departmentRouter = express.Router();
var leaveRouter = express.Router();
var appraisalRouter = express.Router();
var addressRouter = express.Router();*/
var appRoutes = require('./app/routes/api')(express.Router());
/*var employeeRoutes = require('./app/routes/employee')(employeeRouter);
var employeeRoleRoutes = require('./app/routes/role')(roleRouter);
var employeeProjectRoutes = require('./app/routes/project')(projectRouter);
var employeeSalaryRoutes = require('./app/routes/salary')(salaryRouter);
var employeeTimesheetRoutes = require('./app/routes/timesheet')(timesheetRouter);
var employeeDepartmentRoutes = require('./app/routes/department')(departmentRouter);
var employeeLeaveRoutes = require('./app/routes/leave')(leaveRouter);
var employeeAppraisalRoutes = require('./app/routes/appraisal')(appraisalRouter);
var employeeAddressRoutes = require('./app/routes/address')(addressRouter);*/


// Middleware routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api', appRoutes)
/*app.use('/api/employee', employeeRoutes);
app.use('/api/employee/:id/role', employeeRoleRoutes);
app.use('/api/employee/:id/project', employeeProjectRoutes);
app.use('/api/employee/:id/salary', employeeSalaryRoutes);
app.use('/api/employee/:id/timesheet', employeeTimesheetRoutes);
app.use('/api/employee/:id/department', employeeDepartmentRoutes);
app.use('/api/employee/:id/leave', employeeLeaveRoutes);
app.use('/api/employee/:id/appraisal', employeeAppraisalRoutes);
app.use('/api/employee/:id/address', employeeAddressRoutes);*/

// Database connection
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to the database!');
    }
});

// app.get('*', function (req, res) {
//     res.send("Connected to the Server!");
// });

// Listens to the port on which the server is running
app.listen(port, function () {
    console.log('Successfully running server on port: ' + port);
});