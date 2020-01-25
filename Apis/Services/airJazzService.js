const axios = require('axios');
exports.getAirJazz = async() => {
    const url ='https://my.api.mockaroo.com/air-jazz/flights?key=dd764f40';
    try {
      const resultat = [];
       const flights = await axios.get(url);
       if(flights.status !== 501){
         flights.data.forEach(flight => {
            resultat.push({
             "provider": "AIR_JAZZ",
             "price": flight.price,
             "departure_time": flight.dtime,
             "arrival_time": flight.atime  
            });      
         });   
      }
       return resultat;

    } catch (error) {
       console.log({'error in get air jazz': error ,
                    'status': 500});
    }

}