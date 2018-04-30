const config = require('./app/config/database');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8080;
var router = express.Router();
var cors = require('cors');
var employeeRoutes = require('./app/routes/employee')(router);
var employeeRoleRoutes = require('./app/routes/role')(router);
var employeeProjectRoutes = require('./app/routes/project')(router);
var employeeSalaryRoutes = require('./app/routes/salary')(router);
var employeeTimesheetRoutes = require('./app/routes/timesheet')(router);
var employeeDepartmentRoutes = require('./app/routes/department')(router);
var employeeLeaveRoutes = require('./app/routes/leave')(router);
var employeeAppraisalRoutes = require('./app/routes/appraisal')(router);
var employeeAddressRoutes = require('./app/routes/address')(router);


// Middleware routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors())
app.use('/api/employee', employeeRoutes);
app.use('/api/employee/:id/role', employeeRoleRoutes);
app.use('/api/employee/project', employeeProjectRoutes);
app.use('/api/employee/salary', employeeSalaryRoutes);
app.use('/api/employee/timesheet', employeeTimesheetRoutes);
app.use('/api/employee/department', employeeDepartmentRoutes);
app.use('/api/employee/leave', employeeLeaveRoutes);
app.use('/api/employee/appraisal', employeeAppraisalRoutes);
app.use('/api/employee/:id/address', employeeAddressRoutes);

// Database connection
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to the database!');
    }
});

app.get('*', function (req, res) {
    res.send("Connected to the Server!");
});

// Listens to the port on which the server is running
app.listen(port, function () {
    console.log('Successfully running server on port: ' + port);
});