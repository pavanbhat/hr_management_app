var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var router = express.Router();
const config = require('./app/config/database');
var employeeRoutes = require('./app/routes/employee')(router);

// Middleware routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use('/api/employee', employeeRoutes);

// Database connection
mongoose.connect(config.database, function(err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to the database!');
    }
});

app.get('/', function(req, res) {
    res.send("Connected");
});

// Listens to the port on which the server is running
app.listen(port, function() {
    console.log('Successfully running server on port: ' + port);
});