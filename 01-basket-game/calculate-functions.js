function receiveX(v, scores) {
  scores.push(v)
  return scores;
}

function receivePlus(v, scores) {
  const numberOne = scores[scores.length -1];
  const numberTwo = scores[scores.length - 2];

  const newScore = parseInt(numberOne) + parseInt(numberTwo);
  scores.push(newScore)
  return scores;
}

function receiveD(v, scores) {
  const newScore = scores[scores.length-1] * 2
  scores.push(newScore);
  return scores;
}

function receiveC(v, scores) {
  scores.pop();
  return scores;
}

module.exports = {
  receiveX,
  receivePlus,
  receiveD,
  receiveC
}