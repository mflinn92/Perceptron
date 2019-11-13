const Perceptron = require('./perceptron.js');

/*
Example: My favorite Movies. 
Associate a detail about a movie that can be answered yes or no
with each postion in an array. 

Ie: The Godfather

Famous Director  Famous Score   A-list Actor    Comedy   Animals   Sci-fi
[       1,           1,            1,           0,          0,       0    ]     1



*/
const trainingMovieData = [
  [1, 1, 1, 0, 0, 0], // The Godfather
  [0, 0, 0, 1, 1, 1], //Sharknado
  [1, 1, 1, 0, 1, 0], // jaws
  [1, 0, 1, 1, 0, 0], //Big Lebowski
  [1, 0, 1, 0, 0, 1], // War of the Worlds
  [1, 1, 0, 0, 1, 1], //jurassic park
  [1, 0, 1, 0, 0, 0], //Scarface 
  [1, 0, 0, 1, 0, 0], //The Room
  [1, 0, 1, 0, 0, 0], //Taxi Driver
  [1, 1, 1, 0, 0, 0], //Lord of the Rings
  [0, 0, 0, 1, 1, 0], //Airbud
  [1, 1, 0, 0, 0, 1], //2001 Space Odyssey
  [0, 1, 1, 1, 0, 0], //Grease
  [1, 0, 1, 1, 0, 0], //Spiderman3
  [0, 0, 1, 1, 1, 0], //Land Before Time
  [0, 0, 1, 1, 0, 0], //Night at the museum
  [1, 1, 1, 1, 0, 1], //Star Wars Phantom Menace
]

const trainingLabels = [1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0];

const model = new Perceptron(6);

model.bulkTrain(trainingMovieData, trainingLabels);

const newMovie = [1, 1, 0, 1, 0, 0]; 
console.log('Final weights: ', model.getWeights());
console.log('Final Bias: ', model.getBias());
console.log(model.predict(newMovie) ? 'You will like this Movie' : 'You will not like this Movie');