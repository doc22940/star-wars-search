'use strict';

const EXPRESS = require('express');
const PARSER = require('body-parser');

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;
const request = require('request');

APP.use(PARSER.json());
APP.use(PARSER.urlencoded({ extended: true }));
APP.use(EXPRESS.static('./public'));

const API_URL = (`http://swapi.co/api/people/`)


let query = 'luke';

let options = { 
  method: 'GET',
  url: API_URL,
  qs: { 
    search: `${query}`
  },
};


request(options, (error, response, body) => {
  if (error) 
    throw new Error(error);
  else {
    let characterResult = JSON.parse(body);
    let characterResultName = JSON.parse(body).results[0].name
    let characterResultGender = JSON.parse(body).results[0].gender
    let characterResultHairColor = JSON.parse(body).results[0].hair_color
    let characterResultEyeColor = JSON.parse(body).results[0].eye_color
  }
});




// APP.get('*', (request, response) => {
//   response.sendFile('index.html', {root: './public'})
// });

// APP.listen(PORT, () => {
//   console.log(`listening on port ${PORT}`)
// });