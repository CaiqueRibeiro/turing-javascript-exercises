module.exports = function twoSumLessThanK(A, K) {
  if(A.length < 1 || A.length > 100) {
    throw new Error("Length of array must be between 1 and 100");
  }

  const invalidValue = A.some(value => value < 1 || value > 1000);

  if(invalidValue) {
    throw new Error("Values must be between 1 and 1000");    
  }

  if(K < 1 || K > 20005) {
    throw new Error("K must be between 1 and 20005");
  }

  let result = -1;

  for(let i = 0; i < A.length; i++) {
    let sum = 0;
    for(let j = i+1; j < A.length; j++) {
      sum = A[i] + A[j]
      result =  sum > result && sum < K ? sum : result 
    }
  }

  return result;
}
