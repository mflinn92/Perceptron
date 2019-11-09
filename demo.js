const Perceptron = require('./perceptron.js');

/*
Example: My favorite Movies. 
Associate a detail about a movie that can be answered yes or no
with each postion in an array. 

Ie: The Godfather

Directed by Coppola  Al Pacino,  Drama,  Robert Deniro, Comedy, Spielberg   Label
[       1,                   1,       1,        1,          0,       0    ]     1



*/
const trainingMovieData = [
  [1, 1, 1, 1, 0, 0], // The Godfather
  [0, 0, 1, 0, 1, 0], //Sharknado
  [0, 0, 1, 0, 0, 1], // jaws
  [0, 0, 0, 0, 1, 0], //Big Lebowski
  [0, 0, 1, 0, 0, 1], // War of the Worlds
  [0, 0, 1, 0, 0, 1], //jurassic park
  [0, 1, 1, 0, 0, 1], //Scarface 
  [0, 0, 1, 0, 1, 0], //The Room
  [0, 0, 1, 1, 0, 1], //Taxi Driver
]

const trainingLabels = [1, 0, 1, 1, 0, 1, 1, 0, 1];

const model = new Perceptron(6);

model.bulkTrain(trainingMovieData, trainingLabels);

const newMovie = [0, 0, 0, 1, 0, 0];
console.log('Final weights: ', model.getWeights());
console.log('Final Bias: ', model.getBias());
console.log(model.predict(newMovie) ? 'You will like this Movie' : 'You will not like this Movie');