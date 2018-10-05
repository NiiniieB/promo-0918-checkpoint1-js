/*
* Given a number N return the index value of the Fibonacci sequence.
* Ex: fibo(6)  // return 13;
* Ex: fibo(10) // return 89;
*/

function fibonacci(num) {
  let fibonacciSeq = [0, 1];
  for (let i = 0; i < num; i++) {
      fibonacciSeq.push((fibonacciSeq[fibonacciSeq.length - 1] + fibonacciSeq[fibonacciSeq.length - 2]))
  }
  return fibonacciSeq[fibonacciSeq.length - 1];

}
console.log(fibonacci(6));