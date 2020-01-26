const axios = require('axios');
exports.getAirMoon = async() => {
    const url ='https://my.api.mockaroo.com/air-moon/flights?key=dd764f40';
    try {
    const resultat = [];
       const flights = await axios.get(url);
       if(flights.status !== 501){
        flights.data.forEach(flight => {
           resultat.push({
            "provider": "AIR_MOON",
            "price": flight.price,
            "departure_time": flight.departure_time,
            "arrival_time": flight.arrival_time  
           });      
        });   
     }
      return resultat;

    } catch (error) {
       console.log({'error in get air bean': error ,
                    'status': 500});
    }

}