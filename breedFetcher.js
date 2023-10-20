const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search';
const arg = process.argv.slice(2).toString();

// Search for a Breed by using part of it’s name as the ‘q’ query parameter
let apiQuery = `${api}?q=${arg}`;

request(apiQuery, (error, response, body) => {
  const data = JSON.parse(body);

  // Edge case: Handle request failed
  if (error) {
    return `🚨 Error: ${error}`;
  }
  // If status code is not a 200 type
  if (!(response.statusCode >= 200 || response.statusCode < 300)) {
    console.log("Status Code: ", response.statusCode);
  }
  
  try {
    console.log(data[0].description); // if the breed exists, breed description will be written to the terminal
  } catch (error) {
    console.log("There was an error: ", error.message);  // if the breed does not exist (undefined)
  }

});

// Test
// node breedFetcher.js Chartreux