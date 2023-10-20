const fetchBreedDescription = require('./breedFetcher').fetchBreedDescription;

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, desc) => {
  
  // Edge case: Handle request failed
  if (error) {
    console.log('Error fetch details: ', error);
  } else if (desc === null) {
    console.log("The breed is not found.");
  } else {
    console.log(desc);
  }
});