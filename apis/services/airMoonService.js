const axios = require('axios');
require('dotenv').config();
exports.getAirMoon = async() => {
    const url =process.env.API_URL+'/air-moon/flights?key='+process.env.AIR_KEY;
    try {
    const resultat = [];
       const flights = await axios.get(url);
       if(flights.status ===200){
        flights.data.forEach(flight => {
           resultat.push({
            'provider': 'AIR_MOON',
            'price': flight.price,
            'departure_time': flight.departure_time,
            'arrival_time': flight.arrival_time  
           });      
        });   
     }
      return resultat;

    } catch (error) {
       console.log({'error in get air bean': error ,
                    'status': 500});
    }

}