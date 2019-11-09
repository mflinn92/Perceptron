
class Perceptron {
  constructor(inputSize) {
    this.weights = []; // determines slope of classifying line
    this.learningRate = 0.1;
    this.bias = 0; // determines vertical position of classifying line
    // initialize weights to be random.
    for (let i = 0; i < inputSize; i++) {
      this.weights.push(Math.random());
    }
  }

  predict(inputVector) {
    if (inputVector.length !== this.weights.length) {
      return null;
    }
    let score = 0;
    for (let i = 0; i < inputVector.length; i++) {
      score += inputVector[i] * this.weights[i];
    }
    score += this.bias;
    return (score > 0) ? 1 : 0;
  }

  train(inputVector, label) {
    console.log(this.weights);
    if (inputVector.length !== this.weights.length) {
      return null;
    }
    // attempt to predict the result of input
    const guess = this.predict(inputVector);
    //check if guess matches the correct answer provided as label.
    if(guess !== label) {
      this.updateWeights(inputVector, label, guess);
    }
  }
  updateWeights(inputVector, label, predicition) {
    for (let i = 0; i < this.weights.length; i++) {
      // If mistake was made adjust slope of classifier slightly so that it more accurately answers the question
      this.weights[i] += this.learningRate * (label - predicition) * inputVector[i]; 
    }
    // label - prediction determines the direction the classifier needs to move in order to be more accurate.
    this.bias += this.learningRate * (label - predicition); 
  }
  
  getWeights() {
    return this.weights;
  }

  getBias() {
    return this.bias;
  }
}