/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
    let previewNumber = 0;
    let theNumber = 1;
  for (let i = 0; i < num ; i++) {
      result = previewNumber + theNumber;
      previewNumber = theNumber;
      theNumber  = result;
  }
  return result
}

console.log(fibonacci(6));
console.log(fibonacci(10));