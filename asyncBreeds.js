const fs = require('fs');
const breedDetailsFromFile = function(breed, cb) {
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      cb(breed,data);
      // console.log('breedDetailsFromFile: Calling readFile...');
      // console.log(`${breed} Cat Data`);
      // console.log(`Description: ${data} \n`);
    }
  });
};
const printCatBreedDesc = (breed) => {console.log(`The cat is a ${breed}.`)}
const printCatDataDesc = (data) => {console.log(`Cat Description: ${data} \n`)}

const printAllDataOnCat = (breed,data) => {
  printCatBreedDesc(breed);
  printCatDataDesc(data)
}

breedDetailsFromFile('Bombay', printAllDataOnCat);
breedDetailsFromFile('Balinese', printAllDataOnCat)
