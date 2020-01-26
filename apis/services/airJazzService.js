const axios = require('axios');
require('dotenv').config();
exports.getAirJazz = async() => {
    const url =process.env.API_URL+'/air-jazz/flights?key='+process.env.AIR_KEY;
    try {
      const resultat = [];
      console.log(process.env.AIR_JAZZ_KEY);
       const flights = await axios.get(url);
       
       if(flights.status === 200){
         flights.data.forEach(flight => {
            resultat.push({
             'provider': 'AIR_JAZZ',
             'price': flight.price,
             'departure_time': flight.dtime,
             'arrival_time': flight.atime  
            });      
         });   
      }
       return resultat;

    } catch (error) {
       console.log({'error in get air jazz': error ,
                    'status': 500});
    }

}