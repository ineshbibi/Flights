const { createUser , findUser} = require('../services/userService');
const jwt = require('jsonwebtoken');

//Create a user
exports.create = async (req, res, next) => {
try {
    
    const user = await createUser(req.body);
    res.status(200);
    res.json(user)

}
catch (error) {
    next(error);
}

}

//Login + get your token
exports.login = async (req, res, next) => {
    try {
        const user = await findUser(req.body);
        if(user === null){
            res.status(404);
            res.json({
                'message': 'user is not found'
            });
        }
        else {
           const token = jwt.sign({email: user.email},'s3cr3t',{expiresIn:3600});
           res.status(200).json({success: true, token: token}); 
        }


    }
    catch (error) {
        next(error);
    }
}


