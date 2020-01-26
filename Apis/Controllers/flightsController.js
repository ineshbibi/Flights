const { getAirJazz } = require('../Services/airJazzService');
const { getAirMoon } = require('../Services/airMoonService');
const { getAirBean } = require('../Services/airBeanService');
const { findUserByMail , UpdateRate } = require('../Services/userService');

/*
*
*Main function , it will list the first 50 flights in the right order for the user authenticated and his rate limit
* is under 30
*
*/
exports.list = async (req, res, next) =>{
    const result = [];
       try {
       const user = await findUserByMail(req.user);
       const { rate } = user;
    if ( rate < 30) {
        UpdateRate(user);
        const dataJazz = await getAirJazz();
        const dataMoon = await getAirMoon();
        const dataBean = await getAirBean();
           if(dataJazz !== []){
                dataJazz.forEach(data=>{
                    result.push(data);
                });
            }
            else {
                next();
            }
            if(dataMoon !== []){
                dataMoon.forEach(data=>{
                    result.push(data);
                });
            }
            else {
                next();
            }
            if(dataBean !== []){
                dataBean.forEach(data=>{
                    result.push(data);
                });
            }
            else {
                next();
            }
                result.sort(function (a, b) {
                    return a.price - b.price;
                  });
                const flights = result.slice(0,50);
            res.status(200).json(flights);
        }
        else {
            res.status(202).json({'status': true ,'message': 'rate limit achieved'});
        }
    } catch (error) {
        next(error)
    }
 
}