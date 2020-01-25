const { getAirJazz } = require('../Services/airJazzService');
const { getAirMoon } = require('../Services/airMoonService');
const { getAirBean } = require('../Services/airBeanService');
exports.list = async (req, res, next) =>{
    const result = [];
       try {
        console.log(req.user);
        
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
    } catch (error) {
        res.send(error)
    }
 
}