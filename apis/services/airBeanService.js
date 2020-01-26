const axios = require('axios');
require('dotenv').config();
exports.getAirBean = async() => {
    const url =process.env.API_URL+'/air-beam/flights?key='+process.env.AIR_KEY;
    try {
       const flightResults = [];
       const flights = await axios.get(url);
       if(flights.status !== 501 ){
        const resultat = flights.data.split('\n');
        resultat.shift();
        resultat.forEach(el => {
            if(el !== ''){
           const flightItems = el.split(',');
            flightResults.push({
                'provider': 'AIR_BEAN',
                'price': parseFloat(flightItems[1]),
                'departure_time': flightItems[2],
                'arrival_time': flightItems[3]  
 
               })
            }
        });
       }

       return flightResults;

    } catch (error) {
       console.log({'error in get air bean': error ,
                    'status': 500});
    }

}