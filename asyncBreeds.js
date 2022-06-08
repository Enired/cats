const fs = require('fs');
const breedDetailsFromFile = function(breed) {
  let someotherdata = fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    if (!error) {
      console.log('breedDetailsFromFile: Calling readFile...');
      console.log(`${breed} Cat Data`);
      console.log(`Description: ${data} \n`);
    }
  });
};

breedDetailsFromFile('Bombay');
breedDetailsFromFile('Balinese')
