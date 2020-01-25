const User = require('../../Models/user');
const bcrypt = require('bcrypt-nodejs');
exports.createUser = async(user)=>{
    try {
        const userToAdd = new User(user);
        await userToAdd.save();
        return userToAdd;
    } catch(error) {
        console.log(error);
    }
};


exports.findUser = async(user)=>{
    try {
        const userToFind = await User.findOne({
            email: user.email, 
            password: user.password
        }) ;
        return userToFind;
    } catch(error) {
        console.log(error);
    }
};