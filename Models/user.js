var mongoose = require('mongoose');

var userScheme = new mongoose.Schema({
    email: {
        type: String, require: true, trim: true, unique: true,
    },
    password: {
        type: String , require: true, trim: true, minlength: 6
    },
    rate: {
        type: Number, default: 0,
    }
    
    
});

module.exports = mongoose.model('User', userScheme);