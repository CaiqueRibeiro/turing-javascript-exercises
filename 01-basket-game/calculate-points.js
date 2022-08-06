const {receiveX, receivePlus, receiveD, receiveC} = require('./calculate-functions');


module.exports = function calPoints(ops) {
  let sum = 0;
  let scores = [];

  ops.forEach(operation => {
      if(!isNaN(operation)) {
          receiveX(operation, scores)
      } else if(operation === 'C') {
          return receiveC(operation, scores)
      } else if(operation === 'D') {
          return receiveD(operation, scores)
      } else if(operation === '+') {
          return receivePlus(operation, scores)
      }
  })

  console.log("SCORES", scores);
  sum = scores.reduce((accumulator, curr) => Number(accumulator) + Number(curr))
  return sum
}