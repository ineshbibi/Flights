const User = require('../../Models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
exports.createUser = async({email , password})=>{
    try {
        const hashed = await bcrypt.hashSync(password,saltRounds)
         const user = new User ({email,password: hashed});
         const userToAdd =  await user.save();
         return userToAdd;
    } catch(error) {
        console.log(error);
    }
};


exports.findUser = async(user)=>{
    try {
        const userToFind = await User.findOne({email: user.email});
        console.log(userToFind);
        if(!userToFind){
            return null;
        }
        if(bcrypt.compareSync(user.password, userToFind.password)){
            return userToFind;
        }
        else return null;
    } catch(error) {
        console.log(error);
    }
};