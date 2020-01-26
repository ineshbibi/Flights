const User = require('../../models/user');
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

exports.findUserByMail = async (email) => {
    try {
        const user = await User.findOne({email}) ;
        if(!user){
            return null;
        }
        return user;
    }
    catch (error) {
        console.log(error);
    }
}

// increment rate by one
exports.UpdateRate = async (user) => {
    try {
    user.rate ++;
    const userToUpdate = await user.save();
    return userToUpdate;
    }
    catch (error) {
        console.log(error);
    }
}