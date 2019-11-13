const Perceptron = require('./perceptron.js');

// Training data: points on x-y grid. 
// All points with x >= 1 and y >= 1 are yes, all others are no

const trainingData = [
    [1, 1],
    [-1, -1],
    [3, 2],
    [0,0],
    [-1, 1],
    [-1,5]
];

const labels = [1, 0, 1, 0, 0, 1];

const model = new Perceptron(2);
model.bulkTrain(trainingData, labels);
console.log('Final weights: ', model.getWeights());
console.log('Final bias: ', model.getBias());
console.log(model.predict([2, 7]) ? 'Yes': 'No');
console.log(model.predict([-1, 1]) ? 'Yes' : 'No');
console.log(model.predict([-3, 10]) ? 'Yes' : 'No');