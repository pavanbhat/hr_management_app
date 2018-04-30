var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var app = express();
var port = process.env.PORT || 8080;
var cors = require('cors');
var path = require('path');
const config = require('./app/config/database');
var appRoutes = require('./app/routes/api')(express.Router());


// Middleware routes
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/client'));
app.use('/api', appRoutes);

// Database connection
mongoose.connect(config.database, function (err) {
    if (err) {
        console.log('Not connected to the database: ' + err);
    } else {
        console.log('Successfully connected to the database!');
    }
});

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/client/src/app/index.html'));
});

// Listens to the port on which the server is running
app.listen(port, function () {
    console.log('Successfully running server on port: ' + port);
});