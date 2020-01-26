const axios = require('axios');
exports.getAirBean = async() => {
    const url ='https://my.api.mockaroo.com/air-beam/flights?key=dd764f40';
    try {
       const flightResults = [];
       const flights = await axios.get(url);
       if(flights.status !== 501 ){
        const resultat = flights.data.split("\n");
        resultat.shift();
        resultat.forEach(el => {
            if(el !== ''){
           const flightItems = el.split(',');
            flightResults.push({
                "provider": "AIR_BEAN",
                "price": parseFloat(flightItems[1]),
                "departure_time": flightItems[2],
                "arrival_time": flightItems[3]  
 
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