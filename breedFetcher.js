const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search';

const fetchBreedDescription = function(breedName, callback) {
  // Search for a Breed by using part of it’s name as the ‘q’ query parameter
  let apiQuery = `${api}?q=${breedName.toString()}`;

  request(apiQuery, (error, response, body) => {
    const data = JSON.parse(body);
    
    if (!(response.statusCode >= 200 || response.statusCode < 300)) {
      return `Status Code: ${response.statusCode}`;
    }

    let description = null;
    if (data && typeof data[0] !== "undefined") {
      description = data[0].description;
    }

    callback(error, description);  // if the breed exists, breed description will be written to the terminal

  });
};

module.exports = { fetchBreedDescription };

// Test
// node breedFetcher.js Chartreux