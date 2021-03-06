# Flights

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Flights it's an API that allows user to display flights information that supplies aggregated flight searches results across multiple providers (skyscanner clone).

 
    -Air-Jazz
    -Air-Moon
    -Air-Beam


### Tech

* [node.js] 
* [express]
* [mongodb]

### Installation
Install the dependencies and devDependencies and start the server.

```sh
$ cd Flights
$ Install dependencies: npm install
$ Set environment variables: cp .env.example .env
$ nodemon Flights / npm start
```

### Api

* Register: POST - http://localhost:3000/api/register 
* Login: POST - http://localhost:3000/api/login 
* Flights: GET http://localhost:3000/api/flights
            {header : Bearer <token> }
 
 
License
----

MIT


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>
   [mongoDb]: <https://www.mongodb.com/fr>
