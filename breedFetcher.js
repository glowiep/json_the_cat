const request = require('request');
const api = 'https://api.thecatapi.com/v1/breeds/search'
const arg = process.argv.slice(2).toString()

// Search for a Breed by using part of it’s name as the ‘q’ query parameter
let apiQuery = `${api}?q=${arg}`

request(apiQuery, (error, response, body) => {
  // Edge case: Handle request failed
  if (error) {
    return `🚨 Error: ${error}`;
  }
  // If status code is not a 200 type
  if (!(response.statusCode >= 200 || response.statusCode < 300)) {
    console.log("Status Code: ", response.statusCode);
  }
  
  // Output data to terminal
  const data = JSON.parse(body);
  console.log(data[0].description)
});

// Test 
// node breedFetcher.js Chartreux