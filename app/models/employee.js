var mongoose = require('mongoose');
var schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var employeeSchema = new schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        unique: true,
        trim: true
    },
    gender: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    },
    phoneNumber: {
        type: Number
    },
    addressId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Address"
    },
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
    }
});

employeeSchema.pre('save', function(next) {
    bcrypt.hash(this.password, null, null, function(err, hash) {
        if (err) {
            return next(err);
        }
        this.password = hash;
        next();
    });
});

module.exports = mongoose.model('Employee', employeeSchema);