var mongoose = require('mongoose');

var userScheme = new mongoose.Schema({
    email: {
        type: String, require: true, trim: true,
    },
    password: {
        type: String , require: true, trim: true, minlength: 6
    },
    
});

module.exports = mongoose.model('User', userScheme);