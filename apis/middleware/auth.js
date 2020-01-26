const jwt = require('jsonwebtoken');
module.exports.authenticate = function (req, res, next){
   const headerExists = req.headers.authorization;
   if(headerExists) {
       const token = req.headers.authorization.split(' ')[1];
       jwt.verify(token, 's3cr3t', function(err, decoded){
           if(err){
               res.status(401).json('Unauthorized');
           }
           else {
               req.user = decoded.email;
               next();
           }
       });
   }
   else {
       res.status(403).json('No token provided');
   }
}